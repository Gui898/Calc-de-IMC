function calcBut(){  
    let altura = Number(document.getElementById('altura').value);
    let peso = Number(document.getElementById('peso').value); 
    let resultado = calcImc(altura, peso);
    return tela('p', `Seu IMC é ${resultado.toFixed(2)}`);
}

function calcImc(altura, peso) {
    if(altura === 0 || peso === 0){
        alert("Nenhum dado pode ser nulo");
        return tela('p', 'Nulo');
    }
    let calculo = peso / (altura * altura);
    return calculo;
}

function tela(tag, texto) {
    let screen = document.querySelector(tag);
    screen.innerHTML = texto;
}

function refazer(){
    calcImc(altura.value = "", peso.value = "");
    tela('p', 'Resultado');
}





