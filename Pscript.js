document.addEventListener('DOMContentLoaded', function () {

    var navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error("Target section with ID '" + targetId + "' not found.");
            }
        });
        var prevScrollPos = window.pageYOffset;

        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {

            document.getElementById("myHeader").style.top = "0";
        } else {

            document.getElementById("myHeader").style.top = "-100px";
        }

        prevScrollPos = currentScrollPos;
        }
    });

    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    function updateCursorPos(e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
    }

    window.addEventListener("mousemove", updateCursorPos);
    window.scrollTo(0, 0);
    
        
});
    
function toggleSkillTab(skillId) {
    var skillInfo = document.getElementById(skillId + '-info');

    if (!skillInfo) {
        console.error("Element with ID '" + skillId + "-info' not found.");
        return;
    }

    skillInfo.style.display = (skillInfo.style.display === 'none' || skillInfo.style.display === '')
        ? 'block'
        : 'none';

    console.log("Updated display style for " + skillId + ": " + window.getComputedStyle(skillInfo).display);
}
function toggleAboutMeTab(tabId) {
    var tabContent = document.getElementById(tabId + '-info');

    if (!tabContent) {
        console.error("Element with ID '" + tabId + "-info' not found.");
        return;
    }


    tabContent.style.display = (tabContent.style.display === 'none' || tabContent.style.display === '')
        ? 'block'
        : 'none';


    console.log("Updated display style for " + tabId + ": " + window.getComputedStyle(tabContent).display);
}

var aboutMeTabs = document.querySelectorAll('.info-tab');
aboutMeTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
        var tabId = this.getAttribute('data-tab-id');
        toggleAboutMeTab(tabId);
    });
});
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted!');
});
