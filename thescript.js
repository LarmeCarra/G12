document.addEventListener('DOMContentLoaded', () => {
    const video =document.querySelectorAll('video');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observerCallback =(entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }

        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    video.forEach(video => {
        observer.observe(video);
    });
});


const videos = document.querySelectorAll("video");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
            if (video.dataset.src) {
                video.src = video.dataset.src;
                video.removeAttribute("data-src");
                video.load(); // Make sure browser loads it now
            }
            video.play();
        } else {
            video.pause();
        }
    });
}, { threshold: 0.3 });

videos.forEach(video => observer.observe(video));



const audio = document.getElementById("myAudio");
const audio1 = document.getElementById("myAudio1");
const button = document.getElementById("haha");
var dd = document.querySelector(".bgbackground");
var ss = document.getElementById("container");

let isPlaying = false;

button.addEventListener("click", () => {
    if (!isPlaying) {
        ss.style.display = "block";
        audio.play().catch(err => console.log(err));
        audio1.pause();
        button.textContent = "Pause Music";
        isPlaying = true;
        dd.classList.toggle('visible');
        
    } else {
        
        ss.style.display = "none";
        isPlaying = false;
    }
});







const container = document.querySelector('.fireflies');

for (let i = 0; i < 25; i++) {
    let firefly = document.createElement('div');
    firefly.classList.add('firefly');

    firefly.style.left = Math.random() * 100 + "%";
    firefly.style.top = Math.random() * 100 + "%";
    firefly.style.animationDuration = (5 + Math.random() * 5) + "s";
    firefly.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(firefly);
}


const aaudio = document.getElementById("myAudio");
const aaudio1 = document.getElementById("myAudio1");
const bbutton = document.getElementById("hehe");

let iisPlaying = false;

bbutton.addEventListener("click", () => {
    if (!iisPlaying) {
        aaudio1.play().catch(err => console.log(err));
        aaudio.pause();
        iisPlaying = true;
        
    } else {
        
        iisPlaying = false;
    }
});