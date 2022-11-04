//capturar evento de submit do formulario

const form = document.querySelector('#formulario')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    //retorna o elemento que acionou o evento usando target
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')
    
    //pega o valor digitado nos input
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //condiçoes para validar valor do peso e altura
    //se peso nao for valido 
    if(!peso){
        seTResultado('Peso invalido!', false)
        return // para sair do if
    }

    //se altuar nao for valida
    if(!altura){
        seTResultado('Altura invalida', false)
        return
    }
    
    //caclcula IMC
    const imc = getImc(peso, altura)
    const nivelImc = getClassificacao(imc);
    
    const msg = `Seu IMC é ${imc}, ${nivelImc}`;

    seTResultado(msg, true);
});

//função que calcula IMC
function getImc(peso, altura) {
    const imc = (peso / (altura * altura));
    return imc.toFixed();
}

//funçao que que classifica IMC
function getClassificacao(imc){
    const nivel = ['Abaixo do peso', 'Normal', 'Sobrepeso', 'Obesidade', 'Obesidade grave']
    
    if(imc < 18.5){
        return nivel[0];
    }
    
    if(imc >= 18.5 && imc <= 24.8){
        return nivel[1];
    }

    if(imc >= 25.0 && imc <= 29.9){
        return nivel[2];
    }

    if(imc >= 30.0 && imc <= 39.9){
        return nivel[2];
    }

    if(imc >= 40.0){
        return nivel[3];
    }
}

//função que cria um paragrafo
function criaParagrafo() {
    const p = document.createElement('p'); //cria um elemento html
    return p;
}

//função que mostra o resultado
function seTResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = '';

    const p = criaParagrafo()

    //muda cor do paragrafo 
    if(isValid){
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('erro')
    }

    p.innerHTML = msg; //coloca mensagem
    resultado.appendChild(p) //amexa o ulyimo filho
}