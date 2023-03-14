const carousel = document.querySelector(".carousel");

//To slide ONLY if we clicked the mouse down btn and move the cursor
let isDragStart = false;

const dragStart = () => {
    isDragStart = true;
//    BY default the 'isDragging' is false and it will only be true when/if the mouse btn is clicked
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault(); //This prevents its default behaviour, the images cannot be dragged/moved now.
    carousel.scrollLeft = e.pageX;
}

//const dragging = (e) => {
////    console.log(e.pageX);
//
//    carousel.scrollLeft = e.pageX;
////    The function above aids scrolling when you move the mouse pointer across certain pixels along the X axis
////    The pageX returns the horizontal coordinate of the mouse pointer
//    
//}

const dragStop = () => {
    isDragStart = false;
}

carousel.addEventListener("mousemove", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
