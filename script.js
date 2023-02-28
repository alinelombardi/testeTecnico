const dadosJson = './dados.json'

function porcentagem() {
  var sp = 67836.43
  var rj = 36678.66
  var mg = 29229.88
  var es = 27165.48
  var outros = 19849.53
  var resposta = document.getElementById('resposta')

  var percentual = 100
  var soma = sp + rj + mg + es + outros

  sp = (sp * percentual) / soma
  rj = (rj * percentual) / soma
  mg = (mg * percentual) / soma
  es = (es * percentual) / soma
  outros = (outros * percentual) / soma

  var retorno =
    'Porcentagem estado São Paulo: ' +
    sp.toFixed(1) +
    ' %<br>' +
    'Porcentagem estado Rio de Janeiro: ' +
    rj.toFixed(1) +
    ' %<br>' +
    'Porcentagem estado Minas Gerais: ' +
    mg.toFixed(1) +
    ' %<br>' +
    'Porcentagem estado Espirito Santo: ' +
    es.toFixed(1) +
    ' %<br>' +
    'Porcentagem outros estados: ' +
    outros.toFixed(1) +
    ' %'

  resposta.innerHTML = retorno
}

function fibonacci() {
  t1 = 1
  t2 = 0
  t3 = 0
  n = 21
  let lista = ''
  var listaFibonacci = document.getElementById('listaFibonacci')
  var mensagem = document.getElementById('mensagem')

  while (true) {
    if (t3 > n) {
      break
    } else {
      lista += `${t3} `
      t3 = t2 + t1
      t1 = t2
      t2 = t3
    }
  }
  achei = lista.indexOf(n)

  if (achei > -1) {
    texto = 'Pertence a sequencia'
  } else {
    texto = 'Não pertence a sequencia'
  }

  listaFibonacci.innerHTML = lista
  mensagem.innerHTML = texto
}

function inverter() {
  var texto = document.getElementById('frase').value
  var invertido = document.getElementById('invertido')
  var result = '',
    length = texto.length
  while (length--) {
    result += texto[length]
  }

  invertido.innerHTML = result
}

function valores() {
  var maiorValor
  var posicaoMaior
  const lista = Object.values(dadosJson).sort((a, b) => a.valor - b.valor)
  posicaoMaior = lista.length - 1
  maiorValor = lista[posicaoMaior].valor
  return maiorValor
}

function mostrarResultado() {
  let resultadoDaFuncao = valores()
  document.getElementById('maiorValor').innerHTML = resultadoDaFuncao
}

function calcularMedia(array) {
  let soma = 0
  for (let i = 0; i < array.length; i++) {
    soma += array[i]
  }
  const media = soma / array.length
  return media
}
