$("#pro").hover(
	function(){
  $("#pro1").css("display", "none");
  $("#pro2").css("display", "block");
  }, function(){
  $("#pro1").css("display", "block");
  $("#pro2").css("display", "none");
});

$("#full").hover(
	function(){
  $("#full1").css("display", "none");
  $("#full2").css("display", "block");
  }, function(){
  $("#full1").css("display", "block");
  $("#full2").css("display", "none");
});

$("#cad").hover(
	function(){
  $("#cad1").css("display", "none");
  $("#cad2").css("display", "block");
  }, function(){
  $("#cad1").css("display", "block");
  $("#cad2").css("display", "none");
});


//Certification show
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage1");
//var img = document.getElementById("img1");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

function modalImg() {
    modal.style.display = "block";
    modalImg.src = this.src;
}
// When the user clicks on <span> (x), close the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
