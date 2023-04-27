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


    scroll.on('call', (func,event,obj) => {
        
        if( func.length > 0 ){
            window[func](event,obj);
        }
        
        
    });

    window.addEventListener('DOMContentLoaded', scroll.update());


});

