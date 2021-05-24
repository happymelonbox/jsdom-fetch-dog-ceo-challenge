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
    for(i=0;i<array.length;i++){
        let each = array[i]
        console.log(each)
        let img = dogImages.appendChild(document.createElement('img'))
        Object.assign(img,{
            src: `${array[i]}`,
            height: 200,
            width: 300
        })
    }

}

console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function(){
    fetchDog()
})
