//Certification show
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage1");

function myModalShowImg(picture) {
    modal.style.display = "block";
    modalImg.src = picture.getElementsByClassName("cert-img")[0].src;
}

// When the user clicks on <span> (x) or the picture, close the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
};

var picture = document.getElementsByClassName("modal-content")[0];
picture.onclick = function () {
    modal.style.display = "none";
};