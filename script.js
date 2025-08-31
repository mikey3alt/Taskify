document.querySelectorAll('td').forEach(td => {
  td.setAttribute('draggable', 'true')

  td.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.innerHTML)
    e.target.classList.add('dragging')
  })

  td.addEventListener('dragover', e => {
    e.preventDefault()
  })

  td.addEventListener('drop', e => {
    e.preventDefault()
    const draggedData = e.dataTransfer.getData('text/plain')
    const temp = e.target.innerHTML
    e.target.innerHTML = draggedData
    document.querySelector('.dragging').innerHTML = temp
    document.querySelector('.dragging').classList.remove('dragging')
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const toggleElements = document.querySelectorAll('.expand-text')

  toggleElements.forEach(element => {
    element.addEventListener('click', () => {
      element.classList.toggle('expanded')
    })
  })
})
