var tl = gsap.timeline({scrollTrigger: {
    trigger: "#page1",
    start: "50% 50%",
    end: "150% 50%",
    pin:true,
    //markers: true,
    scrub: 5,
}})

tl.to(".top-con", {
    rotateX: "110deg",
    opacity: 0,
    duration: 1.5,
}, "anime")

tl.to(
  ".bottom-con",
  {
    rotateX: "-110deg",
    opacity: 0,
    duration: 1.5,
  },
  "anime"
);

tl.to(
  "#page1>video",
  {
    width: "100%",
    height: "100%",
    duration: 5,
  },
  "anime"
);
