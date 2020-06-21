var el = document.getElementById('btn_opencode');
el.addEventListener('click', function () {
  let text = Ardublockly.generateArduino();
  // let text = Ardublockly.generateXml();
  // let text = Ardublockly.replaceBLocksfromXml();
  if (typeof text == 'undefined') {
    swal.fire('Muita calma nessa hora!', 'Você precisa colocar blocos na tela para ver o código', 'warning');
  } else {
    swal.fire('Seu código', text);
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

var elClearBlocks = document.getElementById('btn_clearblocks');
elClearBlocks.addEventListener('click', function () {
  swal.fire({
    title: 'Muita calma nessa hora!',
    text: 'Você realmente quer deletar todos os blocos da tela?',
      icon: 'warning',
      showCancelButton:true,  
      confirmButtonText: 'Sim, quero remover os blocos',
      cancelButtonText: 'Não, mudei de ideia'
  }).then((result) => {
    if(Ardublockly.isWorkspaceEmpty()){
      swal.fire('Calma!', 'Vamos programar algo primeiro!', 'warning');
      return;
    }
    if (result.value == true) {
      Ardublockly.workspace.clear();
      swal.fire('Feito!', 'Todos os blocos foram removidos!', 'success');
    }else{
      swal.fire({title: 'Tudo bem! Vamos continuar', icon: 'success'});
    }
  });
});
