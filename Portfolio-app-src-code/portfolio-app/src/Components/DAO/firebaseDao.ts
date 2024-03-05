import { collection, getDocs } from "firebase/firestore";
import db from "../../../firebaseconfig";
export default class FirebaseDao {
  protected dataBase = db;
  constructor() {}

  public async getDocsFrom(collectionName: string) {
    try {
      const dbCollection = collection(this.dataBase, collectionName);
      const result = await getDocs(dbCollection);
      return result;
    } catch (e) {
      throw new Error(`Error getting docs from ${collectionName}: ${e}`);
    }
  }
}
