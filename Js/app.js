const toastbtn = document.querySelector('.toast-btn');
const toast = document.querySelector('#toast');

toastbtn.addEventListener("click",()=>{
    toast.className = "show";
    setTimeout(()=>{
        toast.className = toast.className.replace("show","");
    },3000);
});