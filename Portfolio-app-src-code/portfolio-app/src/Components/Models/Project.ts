export default class Project {
  public id: string;
  public title: string;
  public description: string;
  public imageUrl: string;
  public role: string;
  public purpose: string;
  public date: string;
  public stack: Array<string> = [];
  constructor(
    id: string,
    title: string,
    description: string,
    imageUrl: string,
    role: string,
    purpose: string,
    date: string,
    stack: Array<string>
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.role = role;
    this.purpose = purpose;
    this.date = date;
    this.stack = stack;
  }
}
