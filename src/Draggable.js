class Draggable {
  render(options = {}) {
    const {
      dragElement = this._element
    } = options

    dragElement.addEventListener('mousedown', (e) => {
      const clone = dragElement.cloneNode(true)
      const { offsetX, offsetY } = e
      clone.classList.add('dragging')
      dragElement.classList.add('translucent')
      clone.style.transform = `translate(${e.clientX - offsetX}px, ${e.clientY - offsetY}px) rotate(5deg)`
      document.body.append(clone)

      window._isDragging = true
      window._dragElement = dragElement;

      const handleMouseMove = (e2) => {
        clone.style.transform = `translate(${e2.clientX - offsetX}px, ${e2.clientY - offsetY}px) rotate(5deg)`
      }

      const handleMouseUp = () => {
        window._isDragging = false
        window._dragElement = null
        clone.remove()
        dragElement.classList.remove('translucent')
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }

      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    })
  }

}

export default Draggable