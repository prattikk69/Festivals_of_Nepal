const loading = document.getElementById("load");

window.addEventListener("load", () => {
    if (loading) {
        loading.style.display = "none"; // hide loader after page loads
    }
});

const logo = document.getElementById("logo");
logo.addEventListener("click",()=>{
    window.location.href = "index.html";
})

// select the dropdown menu
const contentList = document.querySelector('.content'); 

// select all toggle buttons
const contentToggles = document.querySelectorAll('.contentlist-toggle a');

contentToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        contentList.classList.toggle('show');
    });
});
contentList.addEventListener('click',()=>{
    contentList.classList.toggle('show')
})


   // Get the button
    const backToTopBtn = document.getElementById("backToTop");

    // Show button when scrolling down 100px
    window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
    };

    // Scroll to top when button is clicked
    backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    });