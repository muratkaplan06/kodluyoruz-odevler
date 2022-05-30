var items = [
    "3 Litre Su İç",
    "Ödevleri Yap",
    "En Az 3 Saat Kodlama Yap",
    "Yemek Yap",
    "50 Sayfa Kitap Oku",
];
const todolistDom = document.querySelector("#list");
items.forEach(function(item) {
    createItem(item);
});

todolistDom.addEventListener("click", function(item) {
    if ((item.target.tagName = "li")) {
        item.target.classList.toggle("checked");
    }
});
document.querySelector("#liveToastBtn").onclick = function() {
    var item = document.querySelector("#task").value;
    if (item === " ") {
        alert("Listeye bos ekleme yapamazsın");
        return;
    }
    createItem(item);
    alert("listeye eklendi");
};

function createItem(item) {
    let liDom = document.createElement("li");
    liDom.innerHTML = `${item}`;
    todolistDom.append(liDom);
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    liDom.appendChild(span);

    span.onclick = function() {
        var li = this.parentElement;
        li.style.display = "none";
    };
}