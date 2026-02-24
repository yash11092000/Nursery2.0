// window.addEventListener("scroll", () => {
//   document.querySelector(".custom-navbar").classList.toggle("scrolled", window.scrollY > 60);
// });
document.addEventListener("DOMContentLoaded", function () {


  new Splide("#plantSplide", {
    type: "loop",
    autoplay: true,
    interval: 3000,
    speed: 800,
    arrows: true,
    pagination: true,
    pauseOnHover: false,
  }).mount();
});

gsap.registerPlugin(ScrollTrigger, SplitText);

gsap.to("#LetterSection h1", {
  xPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: "#LetterSection",
    start: "top 70%",
    end: "bottom top",
    scrub: 2
    // markers: true
  }
});

gsap.from(".img-left", {
  y: 120,
  opacity: 0,
  rotate: -6,
  ease: "none",
  scrollTrigger: {
    trigger: ".plant-images",
    start: "top 80%",
    end: "top 80%",
    scrub: 3,
    //markers: true
  }
});

gsap.from(".img-right", {
  y: 160,
  opacity: 0,
  rotate: 6,
  ease: "none",
  scrollTrigger: {
    trigger: ".plant-images",
    start: "top 80%",
    end: "top 80%",
    scrub: 3,
    //markers: true
  }
});

let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#PlantInfoSection",
    //markers: true,
    start: "10% 50%",
    end: "50% 50%",
    scrub: 4
  }
})


t1.to("#PlantInfoSection .LeftText", {
  x: -400,
  duration: 5,
  delay: 1,
}, "Text")

t1.to("#PlantInfoSection .RightText", {
  x: 400,
  duration: 5,
  delay: 1,
}, "Text")




const marquee = document.querySelector(".marquee");

gsap.to(marquee, {
  xPercent: -50,
  repeat: -1,
  duration: 20,
  ease: "linear"
});

gsap.from(".about-text", {
  y: 60,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about-us",
    start: "top 75%",
    end: "top 45%",
    scrub: 1
  }
});

gsap.from(".about-image img", {
  scale: 0.9,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about-us",
    start: "top 75%",
    end: "top 45%",
    scrub: 1
  }
});


document.querySelectorAll(".tool-icon").forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    gsap.to(icon, {
      y: -12,
      rotate: -6,
      scale: 1.12,
      duration: 0.4,
      ease: "power3.out"
    });
  });

  icon.addEventListener("mouseleave", () => {
    gsap.to(icon, {
      y: 0,
      rotate: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.out"
    });
  });
});

gsap.from(".contact-box", {
  x: -50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 75%"
  }
});

gsap.from(".map-box", {
  x: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 75%"
  }
});


document.getElementById("ContactForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const formData = new FormData(this);

  fetch("https://script.google.com/macros/s/AKfycbyWYwH3THlTwbnCsmJfwPiuMsm22mH21zi6lnT0JIO1Iu8vmafPRj5FRS_JstH0Bz4x/exec", {
      method: "POST",
      body: formData
    })
    .then(() => {
      alert("Saved successfully");
      this.reset();
    })
    .catch(err => console.error(err));
});


let split1 = SplitText.create(".AnimatedText1", {
  type: "words"
})

let split2 = SplitText.create(".AnimatedText2", {
  type: "words"
})



gsap.from(split1.words, {
   y: 100,
    autoAlpha: 0,
    stagger: {
      amount: 0.5,
      from: "random"
    },
    duration:3,
    scrollTrigger:{
      trigger:".plantSection",
      start:"10% 80%",
      end:"20% 90%",
      scrub:3
    }
})

gsap.from(split2.words, {
   y: 100,
    autoAlpha: 0,
    stagger: {
      amount: 0.5,
      from: "random"
    },
    duration:3,
    scrollTrigger:{
    //markers:true,
    trigger:"#AboutUsSection",
    start:"10% 80%",
    end:"20% 90%",
    scrub:3
  }
})


let panels = gsap.utils.toArray(".panel");

gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-section",
    pin: true,
    scrub: 1,
    snap: 1 / (panels.length - 1),
    end: () => "+=" + document.querySelector(".wrapper").offsetWidth
  }
});
