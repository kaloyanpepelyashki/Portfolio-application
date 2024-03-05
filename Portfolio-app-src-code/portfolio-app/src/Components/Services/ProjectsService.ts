import FirebaseDao from "../DAO/firebaseDao";

export default class ProjectsService {
  protected dao: FirebaseDao;
  constructor() {
    this.dao = new FirebaseDao();
  }

  public async getAllProjects() {
    try {
      const recipes = await this.dao.getDocsFrom("/Projects");

      if (recipes != null) {
        return recipes;
      }
      return [];
    } catch (e) {
      console.log(`Error getting docks: ${e}`);
    }
  }
}
