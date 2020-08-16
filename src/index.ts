import {BancoAdapter} from './models/BancoAdapter.js';
const formUsuario = document.getElementById('form-usuario') as HTMLFormElement;
const textResult = document.getElementById('text-result') as HTMLElement;

if(formUsuario){
  formUsuario.addEventListener('submit',consultarPrestamo);
}

function consultarPrestamo(event:any){
  event.preventDefault();
  const data = new FormData(formUsuario);
  const nombre = data.get('nombre') as string;
  const dni = data.get('dni') as string;
  const sueldo = data.get('sueldo') as string;
  const sueldoEvaluar = parseFloat(sueldo);
  const prestamos = data.get('prestamo') as string;
  const trabajo = data.get('trabajo') as string;

  const banco = new BancoAdapter("PRESTAMO",trabajo,sueldoEvaluar,prestamos);
  const respuestaPrestamo = banco.recibePrestamos()
  console.log(respuestaPrestamo);
  if(respuestaPrestamo){
    textResult.style.display = "block";
    textResult.classList.add('text-success');
    textResult.innerHTML = "PRESTAMO APROBADO";
    formUsuario.reset();
    setTimeout(() => {
      textResult.style.display = "none";
    }, 1500);
  }else{
    textResult.style.display = "block";
    textResult.classList.add('text-danger');
    textResult.innerHTML = "PRESTAMO RECHAZADO";
    formUsuario.reset();
    setTimeout(() => {
      textResult.style.display = "none";
    }, 1500);

  }
}