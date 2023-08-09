function filterItem(event){
    let buttonClicked = event.target;
    document.querySelector(".active").classList.remove("active");
    buttonClicked.classList.add("active");
    let buttonDataName = buttonClicked.dataset.name;

    let cardData = document.querySelectorAll(".row .card");
    for(let i = 0; i < cardData.length; i++){
        const addClass = cardData[i].parentElement;
        addClass.classList.remove("hide");
        if(cardData[i].dataset.name !== buttonDataName && buttonDataName !== "all"){
            addClass.classList.add("hide");
        }
    }
}

let Preview = document.querySelector(".preview-image");
let Shadow = document.querySelector(".shadow");

function closePreview(){
    Preview.classList.remove("show");
    Shadow.classList.remove("show");
}

function filterImage(event){
    let preview = event.target;
    let sourceImage = preview.src;
    let attributeImage = preview.alt;
    let previewImage = document.querySelector(".image-box img");
    previewImage.src =sourceImage;
    let previewTitle = document.querySelector(".title p");
    previewTitle.innerHTML = attributeImage;
    Preview.classList.add("show");
    Shadow.classList.add("show");
}