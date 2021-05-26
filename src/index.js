
//Dog images at top of screen
function fetchDog(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(`${imgUrl}`)
    .then(response => response.json())
    .then(json =>
        dawgs(json))
}

function dawgs(dogs){
    let array = dogs.message
    let dogImages = document.getElementById('dog-image-container')
    array.filter(i => {each = i
        let img = dogImages.appendChild(document.createElement('img'))
        Object.assign(img,{
            src: `${each}`,
            height: 200,
            width: 300
        })})
}
//Breed List

function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response => response.json())
    .then(json =>
        breedsah(json))
}

function breedsah(breeds){
    let dogBreeds = breeds.message
    Object.keys(dogBreeds).filter(dog => {
        let dogBreedList = document.getElementById('dog-breeds')
        let listItem = dogBreedList.appendChild(document.createElement('li'))
        listItem.innerHTML = dog
        listItem.onclick = function dogClick(){
            listItem.style.color = 'red'
        }
    })
}

function fetchBreedsForDropdown(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response => response.json())
    .then(json =>
        dropDownBreeds(json))
}

function dropDownBreeds(breeds){
    let dogBreeds = breeds.message
    let startsWithA = Object.keys(dogBreeds).filter(dog => dog[0] === 'A' || dog[0] === 'a')
    let startsWithB = Object.keys(dogBreeds).filter(dog => dog[0] === 'B' || dog[0] === 'b')
    let startsWithC = Object.keys(dogBreeds).filter(dog => dog[0] === 'C' || dog[0] === 'c')
    let startsWithD = Object.keys(dogBreeds).filter(dog => dog[0] === 'D' || dog[0] === 'd')
    let dropDown = document.getElementById('breed-dropdown')
    //Event listener for dropdown change
    dropDown.addEventListener('change', function(){
        document.getElementById('dog-breeds').style.display = 'none'
        let newList = document.createElement('ul')
        document.body.appendChild(newList)
        function addNewListItems(array){
            array.filter(dog => {
                let listItem = newList.appendChild(document.createElement('li'))
                listItem.innerHTML = dog
            })
        }
        if (dropDown.value === 'a' || dropDown.value === 'A'){
            addNewListItems(startsWithA)
            newList.setAttribute('class', 'a')
        } else if (dropDown.value === 'b' || dropDown.value === 'B'){
            addNewListItems(startsWithB)
            newList.setAttribute('class', 'b')
        } else if (dropDown.value === 'c' || dropDown.value === 'C'){
            addNewListItems(startsWithC)
            newList.setAttribute('class', 'c')
        } else if (dropDown.value === 'D' || dropDown.value === 'D'){
            addNewListItems(startsWithD)
            newList.setAttribute('class', 'd')
        }
    })
}

console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function(){
    fetchDog()
    fetchBreeds()
    fetchBreedsForDropdown()
})
