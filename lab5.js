function opennew (newsId) {
    let elem = document.getElementById(newsId);
    elem.classList.add("showed");
    elem.onclick = () => {
        elem.classList.remove("showed");
    }
}