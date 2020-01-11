import React, { useState, useEffect } from "react"
import Realm from "realm"
import { storage } from "./shared"

export const RealmContext = React.createContext<Realm | undefined>(undefined)

export default ({ children }) => {
  const [realm, setRealm] = useState<Realm | undefined>(undefined)

  useEffect(() => {
    const openRealm = async () => {
      await Realm.open(storage.config).then(realmInstance => {
        setRealm(realmInstance)
      })
    }
    openRealm()
      .then()
      .catch(() => {
        console.warn("Could not open realm")
      })
  }, [])

  return <RealmContext.Provider value={realm}>{children}</RealmContext.Provider>
}
