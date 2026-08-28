// Navbar background

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// Counter Animation

const counters = document.querySelectorAll(".stat-box h2");

const speed = 200;

const animateCounter = (counter) => {

    const target = +counter.dataset.target;

    const update = () => {

        const current = +counter.innerText.replace(/\D/g,"");

        const increment = Math.ceil(target/speed);

        if(current < target){

            counter.innerText = current + increment;

            requestAnimationFrame(update);

        }else{

            if(target===100){

                counter.innerText="100%";

            }else if(target===24){

                counter.innerText="24/7";

            }else if(target===25){

                counter.innerText="25+";

            }else{

                counter.innerText=target.toLocaleString()+"+";

            }

        }

    };

    update();

};

// Scroll Reveal

const reveals=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

const counter=entry.target.querySelectorAll(".stat-box h2");

counter.forEach(c=>animateCounter(c));

}

});

},{threshold:.2});

reveals.forEach(section=>{

section.classList.add("reveal");

observer.observe(section);

});