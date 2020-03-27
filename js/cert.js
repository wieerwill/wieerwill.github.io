//Certification show
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage1");

function modalImg() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

// When the user clicks on <span> (x), close the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
};