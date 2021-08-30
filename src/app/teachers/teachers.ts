import person from '../Person';
import Class from '../Class';

class teachers extends person{
  constructor(
    id: string,
    name: string,
    age: number,
    city:string,
    image:string,
    
    
    public subject: string[],
    public classArr: Class[],
    public vetek: number,
    public hoursWork: number,
    public saleryForHour:number 
  )
  {
    super(id, name, age, city, image)
  }
}
export default teachers;