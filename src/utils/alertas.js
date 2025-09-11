import Swal from "sweetalert2";

export function alertaGeneral(titulo, mensaje, icono) {
  Swal.fire({
    title: titulo,
    text: mensaje,
    icon: icono,
  });
}

export function alertaConfirmacion(titulo, icono, redireccion, ruta) {
  let timerInterval;
  Swal.fire({
    title: titulo,
    html: "Será redireccionado en <b></b> milisegundos.",
    timer: 2000,
    timerProgressBar: true,
    icon: icono,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      redireccion(ruta)
    }
  })
}
