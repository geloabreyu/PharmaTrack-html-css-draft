function confirmPrompt(){
    document.querySelectorAll("#logoutConfirm").forEach(element => {element.classList.toggle("hideContent")});
    document.querySelectorAll("#logoutConfirm").forEach(element => {element.classList.toggle("confirmPrompt")});
}