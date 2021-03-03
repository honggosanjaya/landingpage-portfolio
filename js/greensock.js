let timeLineAbout = gsap.timeline({
    scrollTrigger:{
        trigger: '#about',
        start: "center bottom",
        toggleActions:"restart pause resume none"
    }
});

timeLineAbout.from(".about__images", {x: 200, opacity: 0, duration: 1.5})
.from(".content", {y: 300, opacity: 0, duration: 1}, "-=1")


let timeLineProjectSatu = gsap.timeline({
    scrollTrigger:{
        trigger: '.content__title--putih',
        start:"top",
        toggleActions:"restart none reverse none"
    }
});

timeLineProjectSatu.from(".project__project1--images", {x: -200, opacity: 0, duration: 1.5})


let timeLineProjectDua = gsap.timeline({
    scrollTrigger:{
        trigger: '.content__project--pink',
        start:"top",
        toggleActions:"restart none reverse none"
    }
});

timeLineProjectDua.from(".project__project2--images", {x: -200, opacity: 0, duration: 1.5})

let timeLineProjectTiga = gsap.timeline({
    scrollTrigger:{
        trigger: '.content__project--blue',
        start:"top",
        toggleActions:"restart none reverse none"
    }
});

timeLineProjectTiga.from(".project__project3--images", {x: -200, opacity: 0, duration: 1.5})

let tl = gsap.timeline({
    delay: 1.5 
});
tl.from('.header__navbar', { duration: 1.5, ease: "power2.out", y: -100 });