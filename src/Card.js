class Card {
  constructor(text) {
    this._element = document.querySelector('#Card').content.cloneNode(true)
    this._element.querySelector('.view-mode').textContent = text
  }

  setEditMode() {
    this._element.querySelector('.view-mode').classList.add('hide')
    this._element.querySelector('.edit-mode').classList.remove('hide')
    this._element.querySelector('.edit-mode input').focus()
    this._element.querySelector('.edit-mode input').onkeyup = e => {
      if (e.keyCode === 13) {
        this.setViewMode()
      }
    }

    this._element.querySelector('.edit-mode input').onblur = e => {
      if (e.target.value === '') {
        this.destroy()
      }
      else {
        this.setViewMode()
      }
    }
  }

  setViewMode() {
    this._element.querySelector('.edit-mode').classList.add('hide')
    this._element.querySelector('.view-mode').classList.remove('hide')
    this._element.querySelector('.view-mode').textContent = this._element.querySelector('.edit-mode input').value
  }

  destroy() {
    this._element.remove()
  }

  render(target) {
    target.append(this._element)
    this._element = target.children[target.children.length - 1]
  }
}

export default Card