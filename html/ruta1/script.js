#!/usr/bin/env node

const uno = () => {
   agragarValor('1')
}

const dos = () => {
   agragarValor('2')
}
const tres = () => {
   agragarValor('3')
}

const cuatro = () => {
   agragarValor('4')
}

const cinco = () => {
   agragarValor('5')
}

const seis = () => {
   agragarValor('6')
}

const siete = () => {
   agragarValor('7')
}

const ocho = () => {
   agragarValor('8')
}

const nueve = () => {
   agragarValor('9')
}

const cero = () => {
   agragarValor('0')
}
const sumar = () => {
   agragarValor(' + ')
}

const restar = () => {
   agragarValor(' - ')
}

const multiplicar = () => {
   agragarValor(' * ')
}

const dividir = () => {
   agragarValor(' / ')
}

const agragarValor = (valor) => {
   document.getElementById('pantalla').innerHTML += valor
}

const borrar = () => {
   document.getElementById('pantalla').innerHTML = ""
}

const igual = () => {
   let pantalla = document.getElementById('pantalla').innerHTML
   try {
      let resultado = eval(pantalla)
      document.getElementById('pantalla').innerHTML = resultado
   } catch {
      document.getElementById('pantalla').innerHTML = "Error De Operacion"
   }
}