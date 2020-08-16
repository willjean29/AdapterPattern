import {AdapteBancoExterno} from '../interfaces/AdapteBancoExterno.js';
export class BancoExterno implements AdapteBancoExterno {
  public operacion: string;
  public trabajo: string;
  public prestamo: string;
  public sueldo: Number;
  constructor (operacion: string,trabajo:string, sueldo: number, prestamo: string) {
    this.operacion = operacion;
    this.trabajo = trabajo;
    this.sueldo = sueldo;
    this.prestamo = prestamo;
  }
  tieneTrabajo(){
    return this.trabajo === 'si' ? true : false; 
  }
  sueldoOptimo(){
    return this.sueldo > 1500 ? true : false;
  }
  libreDeuedas(){
    return true;
  }
  prestamos(){
    return this.prestamo === "si" ? true : false
  }
  aptoParaPrestamo(){
    if(this.tieneTrabajo() && this.sueldoOptimo() && this.prestamos() && this.libreDeuedas()){
      return "Aprobado";
    }
    return "Denegado";
  }
}