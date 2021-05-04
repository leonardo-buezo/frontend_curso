var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";

var juegoConSwitch = (user, cpu) => {
    let situacion;
    if(user != cpu) {
        if(user == op1 && cpu == op3) {
            situacion = "A";
        } else if(user == op2 && cpu == op1) {
            situacion = "B";
        } else if(user == op3 && cpu == op2) {
            situacion = "C"
        } else {
            situacion = "D";
        }
    }
    switch (situacion) {
        case "A":
            console.log("Ganaste con " + op1 + "!");
            break;
        case "B":
            console.log("Ganaste con " + op2 + "!");
            break;
        case "C":
            console.log("Ganaste con " + op3 + "!");
            break;
        case "D":
            console.log("Ganó la CPU :\(");
            break;
        default:
            console.log("Empate.");
    }
}

var resultado = function(user, cpu) {
    if(user != cpu) {
        if(user == op1 && cpu == op3) {
            console.log("Ganaste con " + op1 + "!");
        } else if(user == op2 && cpu == op1) {
            console.log("Ganaste con " + op2 + "!");
        } else if(user == op3 && cpu == op2) {
            console.log("Ganaste con " + op3 + "!");
        } else {
            console.log("Ganó la CPU :\(");
        }
    } else if(user === cpu) {
        console.log("Empate.");
    }
}

var todoSwitch = (user, cpu) => {
    if(user != cpu) {
        switch (user) {
            case op1:
                switch (cpu) {
                    case op3:
                        console.log("Ganaste con " + op1 + "!");
                        break;
                    case op2:
                        console.log("Ganó la CPU con " + op2 + " :\(");
                        break;
                }
                break;
            case op2:
                switch (cpu) {
                    case op1:
                        console.log("Ganaste con " + op2 + "!");
                        break;
                    case op3:
                        console.log("Ganó la CPU con " + op3 + " :\(");
                        break;
                }
                break;
            case op3:
                switch (cpu) {
                    case op2:
                        console.log("Ganaste con " + op3 + "!");
                        break;
                    case op1:
                        console.log("Ganó la CPU con " + op1 + " :\(");
                        break;
                }
                break;
        }
    } else if(user === cpu) {
        console.log("Empate.");
    }
}
