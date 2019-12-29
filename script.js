function onClick() {
    let headerElement = window.document.getElementsByClassName("hero-block__header")[0];
    headerElement.style.display === "block"
    ? headerElement.style.display = "none"
    : headerElement.style.display = "block";
}