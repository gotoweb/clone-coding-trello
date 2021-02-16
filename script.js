import Board from './src/Board.js'

const container = document.querySelector('#container')
console.log(container)

let b1 = new Board('Default board')
b1.addCard('hello')
b1.render(container)
b1.addCard('world')


let b2 = new Board('new board')
b2.addCard('code')
b2.addCard('states')
b2.render(container)

document.querySelector('#add-board').onclick = () => {
  let b = new Board('new board')
  b.render(container)
}