document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
    for(const image of images){
        console.log(image)
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(responce => responce.json())
        .then(data => {
            
            image.src = data.message
            image.width = 100;
            image.height = 100;
        })
    }
})