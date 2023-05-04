
function load() {
    document.querySelectorAll("li").forEach(function(item){
    item.addEventListener('click', function(){
        console.log(item.innerText.toLowerCase().replace(" ",""));
        window.location.href = "./" + item.innerText.toLowerCase().replace(" ","") + ".html";
    });
});
}

function back() {
    window.location.href = "./index.html";
}