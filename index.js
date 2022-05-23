/** Json **

Json siginifica JavaScript Object Notation que traduzido fica algo como notação de objeto JavaScript.

Explicndo de um modo simples Json é basicamente uma forma de converter um objeto em texto e contrario tambem, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda linguagem de programação.

Para trabalhar com Json no JavaScript usamos dois métodos;

Json.parse() -> converte texto no padrao Json em objetos
Json.stringify() -> converte objetos em texto padrao JSON
*/

//objeto CARRO
/*
const carro = {
    marca : ' fiat ',
    modelo :' Uno ',
    ano : 2018,
    motor: ['1.0','1.4','1.6']
}
//covertendo para texto
let texto = JSON.stringify(carro);
//exibindo
document.getElementById('area').innerHTML = texto;

//convertendo para objeto
let obj = JSON.parse(texto);
console.log(obj.modelo);

//pegamos um valor desde objeto
console.log(obj.motor[2]);
*/



//site viacep
/*
const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/85802000/json/');
ajax.send();

ajax.onload = function(){
    document.getElementById('area').innerHTML= this.responseText;
    let obj = JSON.parse(this.responseText);
    alert(obj.ddd);
}
*/

function buscarCep(){
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function(){
       // document.getElementById('texto').innerHTML = this.responseText;
        //transformou texto em objeto
        let obj = JSON.parse(this.responseText);
        //pegou valores desejados
        let logradouro = obj.logradouro;
        let  cidade = obj.localidade;
        let estado = obj.uf;
        document.getElementById('texto').innerHTML = 'Logradouro: ' + logradouro + '<br> Cidade: ' + cidade+ '<br> Estado:' + estado;
}

}

