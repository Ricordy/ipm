
function load() {
    document.querySelectorAll("li").forEach(function(item){
    item.addEventListener('click', function(){
        window.location.href = "./" + item.innerText.toLowerCase() + ".html";
    });
});
}

function back() {
    window.location.href = "./index.html";
}