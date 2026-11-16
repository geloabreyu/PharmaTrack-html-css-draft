function delOrder(){
    document.getElementById("delOrder").classList.toggle("hideContent");
    document.getElementById("delOrder").classList.toggle("confirmPrompt");
}

function salesHistoryShow(){
    document.getElementById("content1").classList.toggle("content");
    document.getElementById("content1").classList.toggle("hideContent");

    document.getElementById("content2").classList.toggle("hideContent");
    document.getElementById("content2").classList.toggle("content");
}