import Class from "../Class";
import teacher from "./teachers";


var t1:teacher=new teacher("123456","ross",70,"jerusalem","https://i.pinimg.com/564x/97/91/5a/97915a239263535e8a9c54b0e747f1b8.jpg",["Self-defense","Self-control","economy"],[new Class("1","regular class",12,"1"),],20,40,100,);
var t2:teacher=new teacher("234561","strom",30,"tl-aviv","https://i.pinimg.com/564x/9a/1b/08/9a1b0872beb8264cee277098c307ebda.jpg",["Weather","karate","flay"],[new Class("2","war class",13,"1"),],3,32,70,);
var t3:teacher=new teacher("345612","wolverine ",32,"rechovot","https://i.pinimg.com/564x/5c/87/95/5c8795142ad76088a3a7c54bf04b9dab.jpg",["fight","tactic","Concentration"],[new Class("3","silent class",18,"1"),],7,28,30,);
var t4:teacher=new teacher("456123","gambit",28,"bat-yam","https://i.pinimg.com/564x/b3/31/28/b3312817232c994cdb201ccd1f90d55d.jpg",["poker","card","Cheating"],[new Class("4","game class",20,"1"),],5,22,45,);
var t5:teacher=new teacher("561234","colossus",22,"ber-sheva","https://i.pinimg.com/564x/12/5c/73/125c73749212d47eeca986941ffe6d70.jpg",["Endurance","kong-fu","sport"],[new Class("5","In the field",17,"1"),],10,15,55,);
var t6:teacher=new teacher("612345","beast",45,"Afula","https://i.pinimg.com/564x/99/d4/e0/99d4e000696baf72d922a8857008828a.jpg",["math","Physics","psychology"],[new Class("6","math class ",13,"1"),],17,12,72,);


export const teachers = [t1,t2,t3,t4,t5,t6];