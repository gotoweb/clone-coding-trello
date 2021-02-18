import Card from './Card.js'
import Droppable from './Droppable.js'

class Board extends Droppable {

  constructor(name) {
    super()
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

    const slot = this._element.querySelector('.slot')
    let shadow;

    super.render({
      dropElement: this._element,
      appendElement: slot,
      onEnter: e => {
        let cards = document.elementsFromPoint(e.clientX, e.clientY)
        cards = cards.filter(el => el.classList.contains('card') && !el.classList.contains('dragging') && !el.classList.contains('shadow'))
        const card = cards[0]
        if (card) {
          if (shadow) {
            shadow.remove()
            shadow = null
          }
          shadow = document.createElement('div')
          shadow.classList.add('card')
          shadow.classList.add('shadow')
          console.log(card.innerText)
          slot.insertBefore(shadow, card.nextSibling)
        }
      },
      onDrop: e => {
        if (shadow) {
          slot.insertBefore(window._dragElement, shadow.nextSibling)
          shadow.remove()
          shadow = null
        }
      },
      onLeave: e => {
        if (shadow) {
          shadow.remove()
          shadow = null
        }
      }
    })
  }
}

export default Board