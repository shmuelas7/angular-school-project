export class Class{
  constructor(
    public id: string,
    public className: string,
   // public educator: Teacher,
    public childrenNum: number,
    public addressInSchool: string
  ) { }
  public toString(): string {
    return `ID: ${this.id},
    Name: ${this.className},
    Number of students: ${this.childrenNum},
    Location: ${this.addressInSchool}`
  };

}


export default Class;