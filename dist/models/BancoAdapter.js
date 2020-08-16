import { BancoExterno } from './BancoExterno.js';
export class BancoAdapter {
    constructor(operacion, trabajo, sueldo, prestamo) {
        this.operacion = operacion;
        this.trabajo = trabajo;
        this.sueldo = sueldo;
        this.prestamo = prestamo;
        this.banco = new BancoExterno(operacion, trabajo, sueldo, prestamo);
    }
    verificarTrabajo() {
        return this.banco.tieneTrabajo();
    }
    VerificarSueldo() {
        return this.banco.sueldoOptimo();
    }
    verificarDeudas() {
        return this.banco.libreDeuedas();
    }
    tienePrestamos() {
        return this.banco.prestamos();
    }
    recibePrestamos() {
        let resp = this.banco.aptoParaPrestamo();
        if (resp === "Aprobado") {
            return true;
        }
        else {
            return false;
        }
    }
}
