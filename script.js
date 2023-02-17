window.onload = function(){
// Função responsável por gerar o número aleatório

        const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let randomIndex = Math.floor(Math.random() * numeros.length);
        num_random = numeros[randomIndex];

    };

function enviar(){
// Função responsável por trocar a mensagem a cada novo input do usuário
    valor = document.getElementById("text_input").value;
    if(valor < 1 || valor > 10) {
        document.getElementById("mensagem").innerHTML =  'SOMENTE NÚMEROS DE 1 à 10, POR FAVOR!'
    } else if(valor < num_random) {
        document.getElementById("mensagem").innerHTML = `É UM NÚMERO MAIOR QUE ${valor}`
    } else if(valor > num_random) {
        document.getElementById("mensagem").innerHTML = `É UM NÚMERO MENOR QUE ${valor}`
    } else if (valor == num_random){
        document.getElementById("icone_i").src=trocaIcone();
        document.getElementById('confirmar').style.display = 'none';
        document.getElementById('text_input').style.display = 'none';
        document.getElementById("mensagem").innerHTML = '<center>PARABÉNS, VOCÊ ACERTOU! <br><br> O número aleatório era:</center>';
    } else {
        document.getElementById("mensagem").innerHTML = 'SOMENTE NÚMEROS, POR FAVOR!'
    }
};


function trocaIcone(){
// Função responsável por fornecer o caminho da imagema a ser colocada no site.
    if (valor == 1){
        return 'https://cdn-icons-png.flaticon.com/512/61/61496.png'
    } else if (valor == 2) {
        return 'https://cdn-icons-png.flaticon.com/512/3841/3841714.png'
      }else if (valor == 3) {
        return 'https://cdn-icons-png.flaticon.com/512/3841/3841715.png'
      }else if (valor == 4) {
        return 'https://cdn-icons-png.flaticon.com/512/3841/3841729.png'
      }else if (valor == 5) {
        return 'https://cdn-icons-png.flaticon.com/512/3841/3841730.png'
      }else if (valor == 6) {
        return 'https://cdn-icons-png.flaticon.com/512/3841/3841731.png'
      }else if (valor == 7) {
        return 'https://cdn-icons-png.flaticon.com/512/3841/3841747.png'
      }else if (valor == 8) {
        return 'https://cdn-icons-png.flaticon.com/512/3841/3841748.png'
      }else if (valor == 9) {
        return 'https://cdn-icons-png.flaticon.com/512/3841/3841749.png'
      }else if (valor == 10) {
        return 'https://cdn-icons-png.flaticon.com/512/6912/6912962.png'
      }
};
