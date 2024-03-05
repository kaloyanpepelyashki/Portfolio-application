export default class Project {
  public title: string;
  public description: string;
  public role: string;
  public purpose: string;
  public date: string;
  public stack: Array<string> = [];
  constructor(
    title: string,
    description: string,
    role: string,
    purpose: string,
    date: string,
    stack: Array<string>
  ) {
    this.title = title;
    this.description = description;
    this.role = role;
    this.purpose = purpose;
    this.date = date;
    this.stack = stack;
  }
}
