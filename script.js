const carousel = document.querySelector(".carousel"),
//to enable the arrow icons
arrowIcons = document.querySelectorAll(".wrapper i");
firstImg = carousel.querySelectorAll("img")[0];

//To slide ONLY if we clicked the mouse down btn and move the cursor

//adding prevPageX and prevScrollLeft to make the images scroll with the mouse like a slider
let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 15; //Getting first img width & adding 14 margin left value

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
//        console.log(icon); 
        //Adding a click event whenn you click the icons
        if (icon.id == "left") {
            carousel.scrollLeft -= firstImgWidth;
        } else {
            carousel.scrollLeft += firstImgWidth;
        }
        //If Icon is clicked left, reduce the width value from the carousel scroll left else add to it
    })
    
});

const dragStart = (e) => {
    isDragStart = true;
//    BY default the 'isDragging' is false and it will only be true when/if the mouse btn is clicked
//    updating global variales value on mouse down event 
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault(); //This prevents its default behaviour, the images cannot be dragged/moved now.
    carousel.scrollLeft = e.pageX;
    
    carousel.classList.add("dragging");
    
//    scrolling images/carousel to left according to the mouse pointer
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
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
    carousel.classList.remove("dragging");
}
//The images will not move when the mouse button isnt pressed

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
