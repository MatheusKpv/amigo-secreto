let lista = [];
let amigosIncluidos = document.getElementById('lista-amigos');
document.getElementById('nome-amigo').setAttribute('autocomplete', 'off');

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    if (nomeAmigo == '') {
        alert('por favor, insira um nome');
    } else {
        if (lista.indexOf(nomeAmigo) > -1) {
        alert('este nome já existe, insira outro ou seja mais específico');
        } else {
            lista.push(nomeAmigo);            
        }
        chamalista();
    }
}

function sortear() {
    if (lista.length < 3) {
        alert ('nomes insuficientes para sortear')
    } else {
        embaralha(lista);
        let resultadoSorteio = document.getElementById('lista-sorteio');
        for (i=0; i < lista.length; i++) {
            if (i == lista.length - 1) {
                resultadoSorteio.innerHTML = resultadoSorteio.innerHTML + lista[i] + ' --> ' + lista[0];
            } else {
                resultadoSorteio.innerHTML = resultadoSorteio.innerHTML + lista[i] + ' --> ' + lista[i+1] + '<br>';
            }
        }
        document.getElementsByClassName('button')[0].setAttribute('disabled', true);
        document.getElementsByClassName('button')[1].setAttribute('disabled', true);
        alert(`os botões 'adicionar' e 'sortear' foram desativados. Para realizar um novo sorteio, favor clicar em reiniciar`);
    }
}

function reiniciar() {
    lista = [];
    chamalista();
    document.getElementsByClassName('button')[0].removeAttribute('disabled');
    document.getElementsByClassName('button')[1].removeAttribute('disabled');
}

function embaralha(listaTemp) {

    for (let indice = listaTemp.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        [listaTemp[indice - 1], listaTemp[indiceAleatorio]] = 
            [listaTemp[indiceAleatorio], listaTemp[indice - 1]];
    }
}

function chamalista() {
    document.getElementById('lista-amigos').innerHTML = lista;
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}