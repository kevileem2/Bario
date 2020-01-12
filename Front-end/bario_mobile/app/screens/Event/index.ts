import { withStorage } from "../../utils/dataUtils"
import Event from "./Event"

const storageParams = [{ object: "Event" }]

export default withStorage(storageParams)(Event)
