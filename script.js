
var main_div = document.querySelector(".main");
var topbar_div = document.querySelector(".topbar");
var button1 = document.querySelector(".button1");

function notify_anim(status, text) {
    if(status == "error") {
       var element = document.createElement("div");

       element.setAttribute("class", "anim");

       element.innerHTML = `
            <div>Error</div>
            <div>${text}</div>
       `

       main_div.insertBefore(element, topbar_div);
    }

    if(status == "success") {

    }

    return
}


button1.addEventListener("click", () => {
    notify_anim("error", "Puste pole marka");
})


var input_dane = document.querySelectorAll("input_dane");
