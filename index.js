/*Manipular datas em JavaScript*/

//comando base para pegar a data
let data = new Date();
console.log(data);

// pegar o ano atual com 4 digitos
let ano = data.getFullYear();
console.log(ano);

// pegar o mes atual de 0 ate 11
let mes = data.getMonth();
//console.log(mes);

//mostrar o mes no formato escrito
const mesesDoAno=["Janeiro","Fevereiro", "Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

//pegar dia do mes 1 até 31
let diaMes = data.getDate();
console.log(diaMes);

//mostrar o dia da semana 0 - 6
let diaSemana = data.getDay();
//console.log(diaSemana);
const diasDaSemana = ['domingo','segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];
let diaEscrito = diasDaSemana[data.getDay()];
console.log(diaEscrito);

//pegar a hora 0 - 23hs
let hora = data.getHours();
console.log(hora);

//pegar os minutos 0 - 59min
let minutos = data.getMinutes();
console.log(minutos);

//pegar os segundos 0 - 59min
let segundos = data.getSeconds();
console.log(segundos);

//pegar os milisegundos 0 - 999mil
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

//pegar data padrao brasileiro
let dataBr = data.toLocaleString('pt-BR');
console.log(dataBr);

//mostra só a data
let dataBrr = data.toLocaleDateString('pt-BR',{dateStyle: 'short'});
console.log(dataBrr);

//mostra só a hora
let dataBrrr = data.toLocaleString('pt-BR',{timeStyle: 'short'});
console.log(dataBrrr);

//pegar os valores separados manualmente
d = new Date();
diaMes = d.getDate();
mes = d.getMonth();
ano = d.getFullYear();

function addZero(x){return x < 10 ? '0' + x : '' + x;};

let dataPadBR = addZero(diaMes) + '/' + addZero(mes) + '/' + ano;
console.log(dataPadBR);

//comparar data maior ou menor ex: vencimentos
let hoje = new Date();
let vencimento = new Date(2023, 0, 15);

if(hoje > vencimento){
    console.log('Sua conta está vencida');
}else{
    console.log('Ainda não venceu tudo certo!')
}

//diferenca entre duas datas
let dataInicial = new Date();
let dataFinal = new Date(2022,11,31);

//PRECISA POR GETTIME PRA CALCULO
let diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

let diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 *1000));

console.log(diferencaDias + ' dias para acabar o ano');
