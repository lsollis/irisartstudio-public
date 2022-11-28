console.log("Hello World!");

// enable tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// email copy function
const copyButton = document.getElementById('email');

copyButton.addEventListener('click', (event) => {
    // getting the text content that we want to copy
    const content = document.getElementById('email').innerText;
    // loading the content into our clipboard
    navigator.clipboard.writeText(content);
})

/*
// allow circle to follow mouse around the page
document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let circle = document.getElementById('circle');
    let left = e.pageX;
    let top = e.pageY;
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
});

// functions to hide and show the circle when user enters or leaves the page
document.addEventListener('mouseenter', (event) => {
    console.log("Mouse entered!");
    let circle = document.getElementById('circle');
    circle.className = "";
});

document.addEventListener('mouseleave', (event) => {
    console.log("Mouse left!");
    let circle = document.getElementById('circle');
    circle.className = "hide";
});

*/