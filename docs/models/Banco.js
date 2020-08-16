export class Banco {
    constructor(operacion, trabajo, sueldo, prestamo) {
        this.operacion = operacion;
        this.trabajo = trabajo;
        this.sueldo = sueldo;
        this.prestamo = prestamo;
    }
    verificarTrabajo() {
        return this.trabajo === 'si' ? true : false;
    }
    VerificarSueldo() {
        return this.sueldo > 1500 ? true : false;
    }
    verificarDeudas() {
        return true;
    }
    tienePrestamos() {
        return this.prestamo === "si" ? true : false;
    }
    recibePrestamos() {
        if (this.verificarTrabajo() && this.VerificarSueldo() && this.verificarDeudas() && this.tienePrestamos()) {
            return true;
        }
        return false;
    }
}
