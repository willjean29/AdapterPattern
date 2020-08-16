export interface AdapteBancoExterno{
  tieneTrabajo: () => boolean,
  sueldoOptimo: () => boolean,
  libreDeuedas: () => boolean,
  prestamos: () => boolean,
  aptoParaPrestamo: () => string,
}