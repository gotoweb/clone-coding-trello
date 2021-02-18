class Droppable {
  render(options = {}) {
    const {
      dropElement = this._element,
      appendElement = this._element,
      appendMode = 'append',
      onEnter = () => { },
      onDrop = () => { },
      onLeave = () => { },
    } = options

    const handleMouseMove = (e) => {
      if (!window._isDragging) {
        return;
      }

      const els = document.elementsFromPoint(e.clientX, e.clientY)
      if (!els.some(el => el === dropElement)) {
        dropElement.classList.remove('droppable')
        onLeave(e)
      }
      else {
        dropElement.classList.add('droppable')
        onEnter(e)
      }
    }

    const handleMouseUp = e => {
      dropElement.classList.remove('droppable')
      onDrop(e)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)


  }
}

export default Droppable