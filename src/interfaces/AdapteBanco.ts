export interface AdapteBanco{
  verificarTrabajo: () => boolean,
  VerificarSueldo: () => boolean,
  verificarDeudas: () => boolean,
  tienePrestamos: () => boolean,
  recibePrestamos: () => boolean,
}