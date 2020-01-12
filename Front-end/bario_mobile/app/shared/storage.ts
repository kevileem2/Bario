import Realm, { Results } from "realm"

/* tslint:disable:max-classes-per-file */
export class Action {
  public static schema: Realm.ObjectSchema = {
    name: "Action",
    primaryKey: "guid",
    properties: {
      guid: "string",
      data: "string?"
    }
  }

  public guid: string
  public data: string | undefined
}

export class Event {
  public static schema: Realm.ObjectSchema = {
    name: "Event",
    primaryKey: "guid",
    properties: {
      guid: "string",
      name: "string?",
      location: "string?",
      description: "string?"
    }
  }

  public guid: string
  public name: string | undefined
  public location: string | undefined
  public description: string | undefined
}

const config = {
  schema: [Action, Event],
  schemaVersion: 1,
  migration: (oldRealm: Realm, newRealm: Realm) => {}
}

const performMigrations = () => {
  const schemas = [config]

  let nextSchemaIndex = Realm.schemaVersion(Realm.defaultPath)

  if (nextSchemaIndex !== -1 && nextSchemaIndex !== schemas.length - 1) {
    while (nextSchemaIndex < schemas.length) {
      const migratedRealm = new Realm(schemas[nextSchemaIndex])
      migratedRealm.close()
      nextSchemaIndex += 1
    }
  }
}

const writeTransaction = async (
  writeAction: (realm: Realm) => void,
  realm?: Realm
) => {
  if (realm) {
    try {
      realm.write(() => {
        writeAction(realm)
      })
    } catch (err) {
      console.log("Realm Error: ", err)
    }
  } else {
    await Realm.open(config).then(realmInstance => {
      try {
        realmInstance.write(() => {
          writeAction(realmInstance)
        })
      } catch (err) {
        console.log("Realm Error: ", err)
      }
    })
  }
}

export default {
  writeTransaction,
  config,
  performMigrations
}
