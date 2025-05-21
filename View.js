var Box = document.getElementById("Box");
var Btnlist = document.getElementById("Btnlist");
var List = document.getElementById("List");
let Titles = [];
let Dates = [];

chrome.storage.sync.get(null, function (items) {
    Object.entries(items).forEach(([key, value]) => {
        Titles.push(key);
        Dates.push(value.Dates);
    });
    for (let i = 0; i <= Titles.length; i ++){
        if (Titles[i] != null){
            let date = Dates[i];
            let title = Titles[i];
            var b = document.createElement("button");
            b.setAttribute("id", title);
            b.addEventListener("click", () => view(title, date));
            b.textContent = title;
            Btnlist.appendChild(b);
        }
    }
});

function view(title, date){
    for (var i = 0; i <= date.length; i ++){
        if (date[i] != null){
            List.innerHTML += date[i];
        }
    }
    Box.style.display = "block";
    Box.addEventListener("click", off);
}

function off(){
    Box.style.display = "none";
    List.innerHTML = "";
}






