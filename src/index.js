import LocomotiveScroll from "locomotive-scroll";

const scrollContainer = scrollSettings.container;
const showMobile = scrollSettings.showMobile;
const showTablet = scrollSettings.showTablet;



document.addEventListener("DOMContentLoaded", () => {

    function ScrollUpdateDelay() {
        setTimeout(function(){ scroll.update(); }, 500);
   
    }

    ScrollUpdateDelay();
   
    const scroll = new LocomotiveScroll({
        el: document.querySelector(scrollContainer),
        smooth: true,
        reloadOnContextChange: true,
        smartphone: { 
            smooth: showMobile,
            gestureDirection: 'vertical',
            direction: 'vertical'
        },
        tablet: {
            smooth: showTablet,
            gestureDirection: 'vertical',
            direction: 'vertical'
    
        }
    });

    scroll.on('call', (func,event,obj) => {
        
        if( func ){
            window[func](event,obj);
        }
        
    });

});

