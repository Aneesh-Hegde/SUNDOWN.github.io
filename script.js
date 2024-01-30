// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

let elements = document.querySelector("#element-container");
let fixedImage = document.querySelector("#fixed-image");
elements.addEventListener("mouseenter", function () {
  fixedImage.style.display = "block";
});
elements.addEventListener("mouseleave", function () {
  fixedImage.style.display = "none";
});

let element = document.querySelectorAll("#element");
element.forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    let image = ele.getAttribute("image");
    fixedImage.style.backgroundImage = `url(${image})`;
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
});

let menuButton=document.querySelector("#menu");
let image=document.querySelector("nav img")
let dropMenu=document.querySelector("#drop-menu");
let flag=0;
menuButton.addEventListener("click",function(){
    if(!flag){
        dropMenu.style.top=0;
        image.style.opacity=0
        menuButton.style.position="fixed"
        menuButton.style.right="8vw"
        flag=1;
    }else{
        dropMenu.style.top="-100%";
        image.style.opacity=1
        menuButton.style.position="relative"
        menuButton.style.right=0
        flag=0;
    }
});


let loader=document.querySelector("#loader");

setTimeout(function(){
    loader.style.top="-100%"
},4000)


// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show");

//       }else{
//         entry.target.classList.remove("show");
        
//       }
//     });
//   },{
//     threshold:0.3
//   });

// const hiddenElement=document.querySelectorAll(".hidden")
// hiddenElement.forEach((ele)=>observer.observe(ele))

gsap.from(".swiper",{
    scrollTrigger:{
        trigger:".swiper",
        scroller:"body",
        start:"top 80%",
    },
    transform:"translateY(20%)",
    opacity:0,
    duration:1,
});

let swiperCursor=document.querySelector(".swiper")
let cursor=document.querySelector("#cursor")
swiperCursor.addEventListener("mousemove",function(dets){

    gsap.to("#cursor",{
        scale: 1,
        x:dets.x,
        y:dets.y,
    })
})

swiperCursor.addEventListener("mouseenter",function(dets){
    gsap.to("#cursor",{
        cursor:"none"
    })

})
swiperCursor.addEventListener("mouseleave",function(dets){
    gsap.to("#cursor",{
        scale: 0,
        cursor:"default"
    })

})

//page5 color and text changes on click
let labels=document.querySelectorAll("label")
let lines=document.querySelectorAll("#line")
let para=document.querySelector("#page5-text");
let displayImage=document.querySelector("#display-img")
console.log(para)
function colorChange(){
    lines.forEach(e=>e.style.backgroundColor="#504B45")
}
labels.forEach((label)=> label.addEventListener("click",(e)=>{
    colorChange()
    let name=e.target.control.getAttribute("id")
    labels.forEach(e=>{
        e.style.color="#504B45"
    })
    e.target.style.color="white"
    document.getElementsByClassName(name)[0].style.backgroundColor="#FE330A"
    para.style.opacity=0;
    displayImage.style.opacity=0;
    if(name=="design"){
        setTimeout(function(){
            displayImage.setAttribute("src","https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project.webp")
            para.innerHTML="Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
            para.style.opacity=1;
            displayImage.style.opacity=1;
            
        },300)
    }else if(name=="project"){
        setTimeout(function(){
            displayImage.setAttribute("src","https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp")
            para.innerHTML="Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
            para.style.opacity=1;
            displayImage.style.opacity=1;

        },300)

    }else{
        setTimeout(function(){
            displayImage.setAttribute("src","https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution.webp")
            para.innerHTML="We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
            para.style.opacity=1;
            displayImage.style.opacity=1;

        },300)

        
    }
}))

  
