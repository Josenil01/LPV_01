var el = document.getElementById('btn_opencode');
el.addEventListener('click', function () {
  let code = Ardublockly.generateArduino();
  // let text = Ardublockly.generateXml();
  // let text = Ardublockly.replaceBLocksfromXml();
  if (Ardublockly.isWorkspaceEmpty()) {
    swal.fire('Muita calma nessa hora!', 'Você precisa colocar blocos na tela para ver o código', 'warning');
  } else {
    swal.fire({ title: 'Seu código', html: '<pre style="text-align:left;">' + code + '</pre>' });
  }
});

var elVideo = document.getElementById('btn_openvideo');
elVideo.addEventListener('click', function () {
  
  var desafio = {
    titulo:'Exemplo de Titulo',
    video: 'https://www.youtube.com/embed/5JxN3ELqo9I',
    tempo:'',
    nivel:'',
    icone:'',
    descricao: 'Lorem ipsum dolor sit amet'
  }
 
  let iframeVideo = '';
  let finalHTMLConfig = '';

  iframeVideo += '<iframe '; //iniciando iframe
  iframeVideo += 'src="' + desafio.video + '" '; //colocando url do vídeo
  iframeVideo += ' width="70%" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen'; //setando propriedades
  iframeVideo += '></iframe>'; //encerrando iframe

  
  finalHTMLConfig += '<div id="DesafioPlayer">';
  finalHTMLConfig += iframeVideo;
  finalHTMLConfig += '<p>'+ desafio.descricao +'</p>';
  finalHTMLConfig += '</div>';

  swal.fire({
    title: 'Desafio: '+ desafio.titulo,
    html: finalHTMLConfig,
    width:'70%',

  });

});

var elClearBlocks = document.getElementById('btn_clearblocks');
elClearBlocks.addEventListener('click', function () {
  swal.fire({
    title: 'Muita calma nessa hora!',
    text: 'Você realmente quer deletar todos os blocos da tela?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim, quero remover os blocos',
    cancelButtonText: 'Não, mudei de ideia'
  }).then((result) => {
    if (Ardublockly.isWorkspaceEmpty()) {
      swal.fire('Calma!', 'Vamos programar algo primeiro!', 'warning');
      return;
    }
    if (result.value == true) {
      Ardublockly.workspace.clear();
      swal.fire('Feito!', 'Todos os blocos foram removidos!', 'success');
    } else {
      swal.fire({ title: 'Tudo bem! Vamos continuar', icon: 'success' });
    }
  });
});
