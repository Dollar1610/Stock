var carousel = document.getElementById('carousel');
var slides = document.querySelectorAll('#carousel > div');
var active0 = 0;
var active1 = 1;
var active2 = 2;
len = slides.length;
var prev = document.getElementById('prev');
var next = document.getElementById('next');
prev.onclick = function() {
  if (active0 === 0) {
    slides[0].style.left = "auto",
    slides[0].style.right = "auto",
    slides[1].style.left = "auto", 
    slides[1].style.right = "auto",
    slides[2].style.left = "auto", 
    slides[2].style.right = "auto",
    slides[1].style.order = "1",
    slides[2].style.order = "2",
    slides[0].style.order = "3",
    slides[1].style.zIndex = "1",
    slides[2].style.zIndex = "2",
    slides[0].style.zIndex = "1",
    active0 = 2,
    active1 = 0,
    active2 = 1,
    slides[1].style.height = "70%",
    slides[2].style.height = "82.5%",
    slides[0].style.height = "70%",
    slides[1].style.left = "100px",
    slides[2].style.right="auto",
    slides[0].style.right = "100px";
    return;
  };
  if (active1 === 0) {
    slides[0].style.left = "auto",
    slides[0].style.right = "auto",
    slides[1].style.left = "auto", 
    slides[1].style.right = "auto",
    slides[2].style.left = "auto", 
    slides[2].style.right = "auto",
    slides[2].style.order = "1",
    slides[0].style.order = "2",
    slides[1].style.order = "3",
    slides[2].style.zIndex = "1",
    slides[0].style.zIndex = "2",
    slides[1].style.zIndex = "1",
    active0 = 1,
    active1 = 2,
    active2 = 0,
    slides[2].style.height = "70%",
    slides[0].style.height = "82.5%",
    slides[1].style.height = "70%",
    slides[2].style.left = "100px",
    slides[0].style.right = "auto",
    slides[1].style.right="100px";
    return;
  };
  if (active2 === 0) {
   slides[0].style.left = "auto",
   slides[0].style.right = "auto",
   slides[1].style.left = "auto", 
   slides[1].style.right = "auto",
   slides[2].style.left = "auto", 
   slides[2].style.right = "auto",
   slides[0].style.order = "1",
   slides[1].style.order = "2",
   slides[2].style.order = "3",
   slides[0].style.zIndex = "1",
   slides[1].style.zIndex = "2",
   slides[2].style.zIndex = "1",
   active0 = 0,
   active1 = 1,
   active2 = 2,
   slides[0].style.height = "70%",
   slides[1].style.height = "82.5%",
   slides[2].style.height = "70%";
   slides[0].style.left = "100px",
   slides[1].style.right = "auto",
   slides[2].style.right="100px";
   return;
  };
};
next.onclick = function() {
  if (active2 === len-1) {
    slides[0].style.left = "auto",
    slides[0].style.right = "auto",
    slides[1].style.left = "auto", 
    slides[1].style.right = "auto",
    slides[2].style.left = "auto", 
    slides[2].style.right = "auto",
    slides[2].style.order = "1",
    slides[0].style.order = "2",
    slides[1].style.order = "3",
    slides[2].style.zIndex = "1",
    slides[0].style.zIndex = "2",
    slides[1].style.zIndex = "1",
    active0 = len-2,
    active1 = len-1,
    active2 = 0,
    slides[2].style.height = "70%",
    slides[0].style.height = "82.5%",
    slides[1].style.height = "70%",
    slides[2].style.left = "100px",
    slides[0].style.right="auto",
    slides[1].style.right = "100px";
    return;
  };
  if (active1 === len-1) {
    slides[0].style.left = "auto",
    slides[0].style.right = "auto",
    slides[1].style.left = "auto", 
    slides[1].style.right = "auto",
    slides[2].style.left = "auto", 
    slides[2].style.right = "auto",
    slides[1].style.order = "1",
    slides[2].style.order = "2",
    slides[0].style.order = "3",
    slides[1].style.zIndex = "1",
    slides[2].style.zIndex = "2",
    slides[0].style.zIndex = "1",
    active0 = len-1,
    active1 = 0,
    active2 = 1,
    slides[1].style.height = "70%",
    slides[2].style.height = "82.5%",
    slides[0].style.height = "70%",
    slides[1].style.left = "100px",
    slides[2].style.right="auto",
    slides[0].style.right = "100px";
    return;
  };
  if (active0 === len-1) {
    slides[0].style.left = "auto",
    slides[0].style.right = "auto",
    slides[1].style.left = "auto", 
    slides[1].style.right = "auto",
    slides[2].style.left = "auto", 
    slides[2].style.right = "auto",
    slides[0].style.order = "1",
    slides[1].style.order = "2",
    slides[2].style.order = "3",
    slides[0].style.zIndex = "1",
    slides[1].style.zIndex = "2",
    slides[2].style.zIndex = "1",
    active0 = 0,
    active1 = 1,
    active2 = 2,
    slides[0].style.height = "70%",
    slides[1].style.height = "82.5%",
    slides[2].style.height = "70%",
    slides[0].style.left = "100px",
    slides[1].style.right="auto",
    slides[2].style.right = "100px";
    return;
  };
};