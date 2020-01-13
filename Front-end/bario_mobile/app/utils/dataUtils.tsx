import React, { useContext, useState, useEffect } from "react"
import Realm from "realm"
import { forEach, camelCase, reduce, upperFirst } from "lodash"
import storage, { Action } from "../shared/storage"
import { RealmContext } from "../RealmProvider"

export const generateStaticSchema = (data, schemaName) => {
  let output: string = ""

  output += `export const ${schemaName}Schema = {\nname: '${schemaName}',\nproperties: {`
  forEach(data, (value, key) => {
    output += `${camelCase(key)}: '${typeof value}',\n`
  })

  output += "}}"
  console.log(output)
}

export const remapToRealmFormat = data =>
  reduce(
    data,
    (accumulator, value, key) => {
      const realmKey = camelCase(key)
      const oldRealmKey = `old${upperFirst(realmKey)}`
      return {
        ...accumulator,
        [realmKey]: value,
        [oldRealmKey]: value
      }
    },
    {}
  )

const changeKeyToDBFormat = key => upperFirst(key.replace("Guid", "GUID"))

export const remapToDBFormat = data =>
  reduce(
    data,
    (accumulator, value, key) => {
      return key.includes("old")
        ? accumulator
        : { ...accumulator, [changeKeyToDBFormat(key)]: value }
    },
    {}
  )

const applyCRLF = (key: string, value: any) => {
  if (
    (key.includes("remark") || key.includes("Remark")) &&
    typeof value === "string"
  ) {
    return value.replace(/\n/gm, "\n\r")
  }
  return value
}

const isEligibleForPackage = (
  key: string,
  oldKey: string,
  item: any,
  value: any
): boolean => {
  return (
    !key.includes("old") && item[oldKey] !== undefined && item[oldKey] !== value
  )
}

const mappableClasses = ["Action"]

export const deleteLocalData = async (realm?: Realm) => {
  await storage.writeTransaction(realmInstance => {
    const deletableClasses = [...mappableClasses]
    deletableClasses.forEach(item => {
      realmInstance.delete(realmInstance.objects(item))
    })
  }, realm)
}

interface WithStorageParams {
  object: string
  query?: string
  name?: string
  array?: boolean
}

export interface WithStorageInjectedProps {
  realm: Realm
  fetchData: () => Promise<void>
}

export const withStorage = (params: WithStorageParams[]) => (
  Component: any
) => (props: any) => {
  const context = useContext(RealmContext)
  const [storageObjects, setStorageObjects] = useState({})

  useEffect(() => {
    const fetch = async () => {
      await fetchData()
    }
    fetch()
  }, [])

  const fetchData = async () => {
    const realm = context
    if (realm) {
      const storageObject = reduce(
        params,
        (accumulator, param) => {
          const filteredObject = query =>
            typeof query === "string"
              ? ((realm as unknown) as Realm)
                  .objects(param.object)
                  .filtered(query)
              : ((realm as unknown) as Realm)
                  .objects(param.object)
                  .filter(query)

          const fetchedObjects: any = param.query
            ? filteredObject(param.query)
            : ((realm as unknown) as Realm).objects(param.object)
          return {
            ...accumulator,
            [param.name ? param.name : camelCase(param.object)]: fetchedObjects
          }
        },
        {}
      )
      setStorageObjects({ ...storageObjects, ...storageObject })
    } else {
      await Realm.open(storage.config).then(realmInstance => {
        const storageObject = reduce(
          params,
          (accumulator, param) => {
            const filteredObject = query =>
              typeof query === "string"
                ? realmInstance.objects(param.object).filtered(query)
                : realmInstance.objects(param.object).filter(query)

            const fetchedObjects: any = param.query
              ? filteredObject(param.query)
              : realmInstance.objects(param.object)

            return {
              ...accumulator,
              [param.name
                ? param.name
                : camelCase(param.object)]: fetchedObjects
            }
          },
          {}
        )
        setStorageObjects({ ...storageObjects, ...storageObject })
      })
    }
  }

  return (
    <Component
      realm={context}
      fetchData={fetchData}
      {...storageObjects}
      {...props}
    />
  )
}
