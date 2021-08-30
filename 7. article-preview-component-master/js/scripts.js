window.onload = () => {

    document.getElementsByClassName("card__share-icon")[0].addEventListener("click", () => {
        let hiddenBlock = document.getElementsByClassName("card__hidden-block");

        if (hiddenBlock[0].style.display == "none") {
            hiddenBlock[0].style.display = "block";
        } else {
            hiddenBlock[0].style.display = "none";
        }
    });
    
};

