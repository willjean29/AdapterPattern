export class BancoExterno {
    constructor(operacion, trabajo, sueldo, prestamo) {
        this.operacion = operacion;
        this.trabajo = trabajo;
        this.sueldo = sueldo;
        this.prestamo = prestamo;
    }
    tieneTrabajo() {
        return this.trabajo === 'si' ? true : false;
    }
    sueldoOptimo() {
        return this.sueldo > 1500 ? true : false;
    }
    libreDeuedas() {
        return true;
    }
    prestamos() {
        return this.prestamo === "si" ? true : false;
    }
    aptoParaPrestamo() {
        if (this.tieneTrabajo() && this.sueldoOptimo() && this.prestamos() && this.libreDeuedas()) {
            return "Aprobado";
        }
        return "Denegado";
    }
}
