import Person from "../Person";
import Class from "../Class";
import profession from "./profession";

class pupil extends Person {

    constructor(
        id: string,
        fullName: string,
        age: number,
        city: string,
        image: string,
      public Class: Class,
      public professionarr:profession[]
                

    ) {
        super(id, fullName, age, city, image)
    }
    public avg(): number {
        var count: number = 0;        
            for (const prof of this.professionarr) {
                count += prof.grade;
            }        
        return count/this.professionarr.length;
    }

}

export default pupil