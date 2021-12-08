const panels = document.querySelectorAll('.panel')
const nextPhoto = document.querySelector('.nextPhoto')
const lastPhoto = document.querySelector('.lastPhoto')
const clearSelection = document.querySelector('.clearSelection')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

nextPhoto.addEventListener('click', () => {
    selectNextPhoto()
})

lastPhoto.addEventListener('click', () => {
    selectLastPhoto()
})

clearSelection.addEventListener('click', () => {
    removeActiveClasses()
})

function selectLastPhoto() {
    var currentlySelected = getSelectedPhotoIndex()

    if(currentlySelected > 0 && currentlySelected <= 4) {
        removeActiveClasses()
        panels[currentlySelected - 1].classList.add('active')
    } else {
        removeActiveClasses()
        panels[4].classList.add('active')
    }
}

function selectNextPhoto() {
    var currentlySelected = getSelectedPhotoIndex()
    
    if(currentlySelected >= 0 && currentlySelected < 4) {
        removeActiveClasses()
        panels[currentlySelected + 1].classList.add('active')
    } else {
        removeActiveClasses()
        panels[0].classList.add('active')
    }
}

function getSelectedPhotoIndex() {
    for(var i = 0; i < panels.length; i++) {
        if(panels[i].classList.contains('active')) {
            return i;
        }
    }
}