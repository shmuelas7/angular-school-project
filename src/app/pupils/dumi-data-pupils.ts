import Class from "../Class"
import profession from "./profession"
import pupil from "./pupils"

var p1: pupil = new pupil("234567", "skip", 26, "jerusalem", "https://i.pinimg.com/564x/c0/ae/a0/c0aea08cf3fab877c1e35616849c5440.jpg", new Class("1", "regular class",12, "1"), [new profession("Self-defense", 100), new profession("Self-control", 90), new profession("economy", 80)])
var p2: pupil = new pupil("345672", "robin", 15, "tl-aviv", "https://i.pinimg.com/564x/91/b4/09/91b409ff09a23380074cce744e4845cf.jpg", new Class("2", "war class", 15, "1"), [new profession("Weather", 30), new profession("karate", 20), new profession("flay", 50)])
var p3: pupil = new pupil("456723", "pegasuss", 17, "be'er-sheva", "https://i.pinimg.com/564x/a9/0d/79/a90d7912d8d37884a7ec8e17ef5f7365.jpg", new Class("3", "silent class", 40, "1"), [new profession("Cheating", 70), new profession("Concentration", 12), new profession("Physics", 55)])
var p4: pupil = new pupil("567234", "titan", 29, "modiyen", "https://i.pinimg.com/564x/32/b3/82/32b3822c8a6109383da5fafa77c555ac.jpg", new Class("4", "game class", 40, "1"), [new profession("card", 100), new profession("fight", 90), new profession("tactic", 80)])
var p5: pupil = new pupil("672345", "piter", 18, "ashdod", "https://i.pinimg.com/564x/f2/fa/70/f2fa70d37c3c732159fa94ff9bbd0232.jpg", new Class("5", "In the field", 40, "1"), [new profession("card", 100), new profession("psychology", 90), new profession("Physics", 80)])
var p6: pupil = new pupil("723456", "Dossiers", 22, "ariel", "https://i.pinimg.com/564x/1b/ad/d5/1badd53e8463e8fb86a97c8250be5303.jpg", new Class("6", "math class", 40, "1"), [new profession("card",32), new profession("psychology", 50), new profession("Physics", 28)])
var p7: pupil = new pupil("345678", "ston", 16, "beit-shemesh", "https://i.pinimg.com/564x/f9/41/97/f941978378e139a388c6f05e47edbff6.jpg", new Class("7", "game class", 40, "1"), [new profession("card", 100), new profession("psychology", 90), new profession("Physics", 80)])
var p8: pupil = new pupil("456783", "Cyclop", 20, "ashkelon", "https://i.pinimg.com/236x/a8/11/98/a81198a33a9a6f5302db078b3189fa61.jpg", new Class("8", "silent class", 40, "1"), [new profession("psychology", 100), new profession("psychology", 90), new profession("Physics", 80)])

export const pupils = [p1,p2,p3,p4,p5,p6,p7,p8];