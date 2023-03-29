import LocomotiveScroll from "locomotive-scroll";

const scrollContainer = scrollSettings.container;

document.addEventListener("DOMContentLoaded", () => {
   
     const scroll = new LocomotiveScroll({
        el: document.querySelector(scrollContainer),
        smooth: true,
        reloadOnContextChange: true,
        smartphone: { 
            smooth: true,
            gestureDirection: 'vertical',
            direction: 'vertical'
        },
        tablet: {
            smooth: true,
            gestureDirection: 'vertical',
            direction: 'vertical'

        }
    });

});

