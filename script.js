
var main_div = document.querySelector(".main");
var topbar_div = document.querySelector(".topbar");
var button1 = document.querySelector(".button1");
var table1 = document.querySelector(".table1");

function notify_anim(status, text) {
    button1.disabled = true;
    if(status == "error") {
        var element = document.createElement("div");
        element.style.backgroundColor = "rgb(173, 0, 0)";
        element.style.color = "white";
        element.setAttribute("class", "anim");

        element.innerHTML = `
            <div>Error</div>
            <div>${text}</div>
        `

        main_div.insertBefore(element, topbar_div);
    }

    if(status == "success") {
        var element = document.createElement("div");
        element.style.backgroundColor = "rgb(7, 211, 7)";
        element.setAttribute("class", "anim");

        element.innerHTML = `
            <div>Sucess</div>
            <div>${text}</div>
        `

        main_div.insertBefore(element, topbar_div);
    }

    var animationPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 4500);
    });

    animationPromise.then(() => {
        element.remove(); 
        button1.disabled = false;
    });
}

function addCell(tekst, table_row) {
    var row = document.createElement("td");
    row.textContent = tekst;
    table_row.append(row);

    return table_row
}

function removeelem() {
    this.remove();
}

button1.addEventListener("click", () => {
    var inputs = document.querySelectorAll(".input_dane")
    if (!button1.disabled) {
        var inputarr = [...inputs];
        var input_checked = inputarr.some(input => !input.value);
        
        if (!input_checked) {
            notify_anim("success", "Dodano!");

            var table_row = document.createElement("tr");

            addCell(`${inputarr[0].value} ${inputarr[1].value}`, table_row);
            addCell(`${inputarr[2].value}`, table_row);
            addCell(`${inputarr[3].value}`, table_row);
            addCell(`${inputarr[4].value}`, table_row);
            addCell(`${inputarr[5].value}`, table_row);


            var spalanie = (inputarr[7].value / inputarr[6].value) * 100;  
            if(isNaN(spalanie)) {
                spalanie = "-";
                addCell(`-`, table_row);
                alert("PUSTE POSLEK");
            }
            else {
                addCell(`${Math.round(spalanie)}L`, table_row);
            }
             
            table1.append(table_row);
            table_row.addEventListener("click", removeelem);
        }
        else {
            inputs.forEach(input => {
                if(!input.value) {
                    notify_anim("error", `Puste pole ${input.getAttribute("placeholder")}`)
                }
            });
        }

        
    }
})


var input_dane = document.querySelectorAll("input_dane");
