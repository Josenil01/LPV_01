var el = document.getElementById('btn_opencode');
el.addEventListener('click', function () {
  let text = Ardublockly.generateArduino();
  if (typeof text == 'undefined') {
    swal('Muita calma nessa hora!', 'Você precisa colocar blocos na tela para ver o código', 'warning');
  } else {
    swal('Seu código', text);
  }
});
// working here ===================================================
// var elVideo = document.getElementById('btn_openvideo');
// elVideo.addEventListener('click', function () {
//   let text = document.getElementsByClassName('translatable_arduinoSourceCode').innerHTML;
//   if (typeof text == 'undefined') {
//     swal('Muita calma nessa hora!', 'Você precisa colocar blocos na tela para ver o código', 'warning');
//   } else {
//     swal('Seu código', text);
//   }
// });
