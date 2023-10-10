const cursorBlur = document.querySelector("#cursorBlur")
const cursor = document.querySelector("#cursor")
const h4 = document.querySelectorAll("#nav h4")


document.addEventListener('mousemove', (dets) => {
    cursor.style.left = dets.x +35+ "px"
    cursor.style.top = dets.y +-10+ "px"
    cursorBlur.style.left = dets.x - 200 + "px"
    cursorBlur.style.top = dets.y - 200 + "px"
})

h4.forEach((h) => {
    h.addEventListener("mouseenter", () => {
        cursor.style.scale = 3
        cursor.style.border = "1px solid white"
        cursor.style.background = "transparent"
        h.style.color = "#95C11E"
    })
    h.addEventListener("mouseleave", () => {
        cursor.style.scale = 1
        cursor.style.border = "0"
        cursor.style.background = " #95C11E;"
        h.style.color = "white"
    })
});


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        scrub: 1,
        start: "top -10%",
        end: "top 11%"
    }

});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        scrub: 1,
        // markers: true,
        start: "top -10%",
        end: "top -70%"
    }
});

gsap.from("#aboutus img, #about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#aboutus",
        scroller: "body",
        // markers:false,
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }

});

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }


});
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:90,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -40%",
        scrub:4
    }

})
