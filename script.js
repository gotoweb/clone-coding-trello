import Board from './src/Board.js'

const container = document.querySelector('#container')

let b1 = new Board('Default board')
b1.addCard('hello')
b1.render(container)
b1.addCard('world')
b1.addCard('javascript')
b1.addCard('react')
b1.addCard('dom')
b1.addCard('mysql')
b1.addCard('aws')
b1.addCard('client & server')


let b2 = new Board('new board')
b2.addCard('code')
b2.addCard('states')
b2.render(container)

document.querySelector('#add-board').onclick = () => {
  let b = new Board('new board')
  b.render(container)
}
