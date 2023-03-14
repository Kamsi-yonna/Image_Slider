const carousel = document.querySelector(".carousel");

const dragging = (e) => {
//    console.log(e.pageX);
//    pageX returns the horizontal coordinate of the mouse pointer
//    ScrollLeft returns the elements content to the number of pixel it has scrolled horizontally, x - horizontal   
    carousel.scrollLeft = e.pageX;
//    The function above aide scrolling when you move the mouse pointer across certain pixels along the X axis
    
}

carousel.addEventListener("mousemove", dragging);
