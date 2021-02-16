import Card from './Card.js'

class Board {

  constructor(name) {
    this._element = document.importNode(document.querySelector('#Board').content, true)
    this.name = name

    this._element.querySelector('.title').textContent = name
    this._element.querySelector('button').onclick = () => {
      const card = this.addCard()
      card.setEditMode()

    }
  }

  addCard(text) {
    const card = new Card(text)
    const slot = this._element.querySelector('.slot')
    card.render(slot)
    return card
  }

  render(target) {
    target.append(this._element)
    this._element = target.children[target.children.length - 1]


  }

}

export default Board