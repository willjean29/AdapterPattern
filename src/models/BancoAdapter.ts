import {AdapteBanco} from '../interfaces/AdapteBanco.js';
import {BancoExterno} from './BancoExterno.js';
export class BancoAdapter implements AdapteBanco{
  public banco:BancoExterno;
  public operacion: string;
  public trabajo: string;
  public prestamo: string;
  public sueldo: Number;
  constructor (operacion: string,trabajo:string, sueldo: number, prestamo: string) {
    this.operacion = operacion;
    this.trabajo = trabajo;
    this.sueldo = sueldo;
    this.prestamo = prestamo;
    this.banco = new BancoExterno(operacion,trabajo,sueldo,prestamo);
  }
  verificarTrabajo(){
    return this.banco.tieneTrabajo();
  }
  VerificarSueldo(){
    return this.banco.sueldoOptimo();
  }
  verificarDeudas(){
    return this.banco.libreDeuedas();
  }
  tienePrestamos(){
    return this.banco.prestamos();
  }
  recibePrestamos(){
    let resp:string = this.banco.aptoParaPrestamo();
    if(resp === "Aprobado"){
      return true;
    }else{
      return false;
    }
  }

}