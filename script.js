// function onResize(x) {
//     let headerElement = window.document.getElementsByClassName("hero-block__header")[0];
//     console.log(headerElement);
//     if (x.matches) {
//         headerElement.className = "hero-block__header display-none"
//     } else {
//         headerElement.className = "hero-block__header"
//     }
// }

// var x = window.matchMedia('(max-width: 1130px)')
// onResize(x);
// x.addListener(onResize);

function onClick() {
    let headerElement = window.document.getElementsByClassName("hero-block__header")[0];
    headerElement.className === "hero-block__header display-none"
    ? headerElement.className = "hero-block__header display-block"
    : headerElement.className = "hero-block__header display-none"
}