const toastbtn = document.querySelector('.toast-btn');
const toast = document.querySelector('#toast');

function showToast(){
    toast.className = "show";
    setTimeout(()=>{
        toast.className = toast.className.replace("show","");
    },3000);
}
toastbtn.addEventListener("click",showToast);
