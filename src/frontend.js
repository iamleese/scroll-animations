import LocomotiveScroll from "locomotive-scroll";

document.addEventListener("DOMContentLoaded", () => {

    const scroll = new LocomotiveScroll({
        el: document.querySelector('.wp-site-blocks'),
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