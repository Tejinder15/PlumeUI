const navSlide = () => {
    const burger = document.querySelector(".hamburger");
    const nav = document.querySelector(".components-list");
    let isActive = false;
    burger.addEventListener("click", ()=>{
        nav.classList.toggle("components-active");
        isActive = !isActive;
        burger.classList.toggle('toggle');
    });

}
navSlide();