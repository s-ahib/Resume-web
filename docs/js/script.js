// File: js/script.js

// function toggleCollapse() {
//     var content = document.getElementById("content");
//     if (content.style.display === "none") {
//         content.style.display = "block";
//     } else {
//         content.style.display = "none";
//     }
// }

function toggleCollapse(selector) {
    var contents = document.querySelectorAll(selector);
    contents.forEach(function(content) {
        if (content.style.display === 'none' || content.style.display === "" ) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
}



// document.addEventListener('DOMContentLoaded', function() {
//     var contents = document.querySelectorAll('.content');
//     var collapsible = document.querySelector('.collapsible');

//     if (collapsible) {
//         collapsible.addEventListener('click', function() {
//             contents.forEach(function(content) {
//                 if (content.style.display === 'none') {
//                     content.style.display = 'block';
//                 } else {
//                     content.style.display = 'none';
//                 }
//             });
//         });
//     }
// });


function addHighlight(event) {
    const container = event.currentTarget;
    const highlight = container.querySelector('.highlight');
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    highlight.style.left = `${x - 50}px`;
    highlight.style.top = `${y - 50}px`;

    container.classList.add('clicked');

    setTimeout(() => {
        container.classList.remove('clicked');
    }, 300); // Match the transition duration
}