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
    console.log(array)
    array.forEach(i => {each = i
        console.log(each)
        let img = dogImages.appendChild(document.createElement('img'))
        Object.assign(img,{
            src: `${each}`,
            height: 200,
            width: 300
        })})
}

function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response => response.json())
    .then(json =>
        breedsah(json))
}

function breedsah(breeds){
    let dogBreeds = breeds.message
    Object.keys(dogBreeds).forEach(dog => {
        console.log(dog)
    })
}



console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function(){
    fetchDog()
    fetchBreeds()
})
