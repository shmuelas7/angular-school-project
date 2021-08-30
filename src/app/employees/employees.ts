import person from '../Person';

class employees extends person{
  constructor(
    id: string,
    name: string,
    age: number,
    city:string,
    image: string,
    public work: string,
    public monthPayment: number,
    public hourPayment:number
  )
  {
    super(id, name, age, city, image)
  }
  public price(): number {
    var count: number = this.monthPayment * this.hourPayment;  
    return count;
}
}
export default employees;