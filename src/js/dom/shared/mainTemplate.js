/* Main template */

const createMainTemplate = () => {
    const leftContainer = document.createElement('div')
    const rightContainer = document.createElement('div')
    leftContainer.classList.add('container_left')
    leftContainer.setAttribute('id', 'container-left')
    rightContainer.classList.add('container_right')
    rightContainer.setAttribute('id', 'container-right')
    return document.getElementById('single-recipe').append(leftContainer, rightContainer)
}
createMainTemplate()

