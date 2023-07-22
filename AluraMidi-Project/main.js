function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    // Se o elemento existir(não for nulo) e a tagName dele for áudio
    /* 
       Invés de comparar elemento com null (elemento === null, basta eu mencionar elemento, pois ja se entende que 
       estou verificando sua existência)
     */
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }else {  
        'Elemento não encontrado ou seletor inválido';
    }

};

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento){

       if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
       }
       console.log(evento.code)
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}