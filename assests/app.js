const testimonials = [{
        name: "Hazel Dawson",
        photo: "./pictures/c1.jpeg",
        job: "Managing Director",
        text: "healthy is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!"
    },
    {
        name: "Rati Jhaveri",
        photo: "./pictures/c2.jpeg",
        job: "HouseWife",
        text: "healthy makes me more productive and gets the job done in a fraction of the time. I'm glad I found healthy."
    },
    {
        name: "Aditi Nayak",
        photo: "./pictures/c3.jpeg",
        job: "Manager",
        text: "We don’t need to spend as much time in meetings now that we use healthy."
    },
    {
        name: "Minerva Schmidt",
        photo: "./pictures/c4.jpeg",
        job: "Marketing Director",
        text: "Coordination of activities improved tremendously with healthy."
    }
];
const user_img = document.querySelector("#testimonial-img");
const textEl = document.querySelector(".testimonial-text");
const userName = document.querySelector(".user-name");
const userJob = document.querySelector(".user-job");
let id = 0;
updateTestimonial();

function updateTestimonial() {
    const { name, photo, job, text } = testimonials[id];
    user_img.src = photo;
    textEl.innerText = text;
    userName.innerText = name;
    userJob.innerText = job;
    id++;
    if (id === testimonials.length) {
        id = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 5000);
}

// *rating feedback
const stars = document.querySelectorAll(".fa-star");
const emojis = document.querySelectorAll(".far");
const ratingText = document.querySelector(".rating-feedback");
const feedBackBtn = document.querySelector("#submit-btn");
const feedbackInput = document.getElementById("feedback-input");
let inputValue = feedbackInput.value;
const colors = [
    "red",
    "orange",
    "yellow",
    "seagreen",
    "green"
];
const texts = [
    "Very Poor",
    "Poor",
    "Good",
    "very good",
    "excellent"
]
updateRating(0);
// star
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        updateRating(index);
    })
})

function updateRating(index) {
    stars.forEach((star, id) => {
        if (id < index + 1) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    })
    emojis.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index * 50}px)`;
        emoji.style.color = colors[index];
        ratingText.innerHTML = texts[index];
    })
}
feedBackBtn.addEventListener('click', () => {
        // console.log(feedbackInput);
        if (feedbackInput.value === "") {
            alert("Enter Your suggestion");
        } else {
            alert("Thank you for your Suggestion");
            feedbackInput.value = "";

            updateRating(0);
        }

    })
    // console.log(stars);
    // *date
let date = new Date();
date = date.toString();
let dateArr = date.split(" ");
// console.log(dateArr);
document.getElementById("date").innerHTML = `${dateArr[1]}  , ${dateArr[2]} , ${dateArr[3]} year`;
// let dateArr = date.split(" ");