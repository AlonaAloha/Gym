// array to store reviewers
const reviewers = [
  {
    name: "Fiona Hughes",
    occupation: "Physician",
    img: "images/physician.png",
    stars: [
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/half-star.png",
    ],
    text: "Focus on flexibility! Yoga, Pilates, and barre classes. Great for improving mobility and core strength.",
  },
  {
    name: "Alex Woodley",
    occupation: "Bartender",
    img: "images/bartender.png",
    stars: [
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/half-star.png",
    ],
    text: "Welcoming gym for all! Cardio machines, group fitness classes (Zumba, Yoga), friendly staff. Great for beginners or social workouts.",
  },
  {
    name: "Ji-hoon Park",
    occupation: "Chef",
    img: "images/chef.png",
    stars: [
      "images/full-star.png",
      "images/full-star.png",
      "images/half-star.png",
      "images/empty-star.png",
      "images/empty-star.png",
    ],
    text: "Affordable gym with decent equipment. Can get crowded during peak hours and intimidating too. Good option for basic workouts.",
  },
  {
    name: "Emily Grace Johnson",
    occupation: "Attorney",
    img: "images/attorney.png",
    stars: [
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
    ],
    text: "Get bendy! Yoga, Pilates, barre classes. Improve mobility and core strength.",
  },
  {
    name: "Dwight Aldridge",
    occupation: "Steelworker",
    img: "images/steelworker.png",
    stars: [
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
    ],
    text: "Absolutely love this gym! The trainers are so motivating, and the variety of classes keeps things interesting. Plus, the equipment is top-notch.",
  },
  {
    name: "Miguel Cruz",
    occupation: "Blogger",
    img: "images/blogger.png",
    stars: [
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
    ],
    text: "This gym is a hidden gem! It's smaller than some of the chain gyms, but the personal attention from the trainers makes all the difference. Plus, the classes are challenging and fun.",
  },
  {
    name: "Dr. Benjamin Stanley",
    occupation: "Doctor",
    img: "images/doctor.png",
    stars: [
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
    ],
    text: "The best gym in town! The facilities are always clean, and the trainers are incredibly knowledgeable. I've achieved amazing results thanks to their guidance.",
  },
  {
    name: "Chioma Adekunle",
    occupation: "Nurse",
    img: "images/nurse.png",
    stars: [
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
    ],
    text: "Love the community vibe at this gym. Everyone is so supportive, and there's a real sense of camaraderie among members. Plus, the classes are fantastic!",
  },
  {
    name: "Shanice Thompson",
    occupation: "Call Agent",
    img: "images/callAgent.png",
    stars: [
      "images/full-star.png",
      "images/full-star.png",
      "images/empty-star.png",
      "images/empty-star.png",
      "images/empty-star.png",
    ],
    text: "Not impressed with this gym. The equipment is often out of order, and it's always overcrowded during peak hours. Definitely not worth the membership fee.",
  },
  {
    name: "Derek Kelly",
    occupation: "Electrician",
    img: "images/electrician.png",
    stars: [
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
    ],
    text: "Fun & energetic! Zumba, Hip-Hop, dance fitness classes. Burn calories and have a blast!",
  },
  {
    name: "Josh Blessington",
    occupation: "Engineer",
    img: "images/engineer2.png",
    stars: [
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/full-star.png",
      "images/half-star.png",
    ],
    text: "Find your inner peace! Diverse yoga classes, experienced instructors, calming atmosphere. Perfect for relaxation and flexibility.",
  },
];

// make the review random

function autoReview() {
  let reviewContent = document.querySelector(".review__content");
  reviewContent.classList.remove("show"); //removes .review__content.show

  setTimeout(function () {
    let currentReviewIndex = Math.floor(Math.random() * reviewers.length);
    let name = reviewers[currentReviewIndex].name;
    let occupation = reviewers[currentReviewIndex].occupation;
    let img = reviewers[currentReviewIndex].img;
    let text = reviewers[currentReviewIndex].text;
    let star = reviewers[currentReviewIndex].stars;

    document.getElementById("reviewName").innerHTML = name;
    document.getElementById("reviewOccupation").innerHTML = occupation;
    document.getElementById("reviewImgPerson").src = img; //target the .src instead of innerHTML
    document.getElementById("reviewerText").innerHTML = text;

    let starContainer = document.querySelector(".review__rating");
    starContainer.innerHTML = "";
    if (star) {
      star.forEach(function (star) {
        let starImg = document.createElement("img");
        starImg.src = star;
        starContainer.appendChild(starImg);
      });
    }
    reviewContent.classList.add("show");
  }, 1000);
}
window.onload = autoReview;
setInterval(autoReview, 6000); // 5000 means 5 seconds

// image changer automatic

const images = [
  {
    pilate: "images/pilates.jpg",
    yoga: "images/yoga.jpg",
    spinning: "images/spinning.jpg",
  },
  {
    pilate: "images/pilates2.jpg",
    yoga: "images/yoga2.jpg",
    spinning: "images/spinning2.jpg",
  },
  {
    pilate: "images/pilates3.jpg",
    yoga: "images/yoga3.jpg",
    spinning: "images/spinning3.jpg",
  },
];

let pilateImage = document.querySelector(".pilate");
let yogaImage = document.querySelector(".yoga");
let spinningImage = document.querySelector(".spinning");

function imageSlider() {
  let randomImages = Math.floor(Math.random() * images.length);
  pilateImage.src = images[randomImages].pilate;
  yogaImage.src = images[randomImages].yoga;
  spinningImage.src = images[randomImages].spinning;
}

window.onload = imageSlider;
setInterval(imageSlider, 3500);

// BMI Calculator

let result = document.getElementById("result");

function bodyMassCalculator() {
  let heightElement = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let height = heightElement / 100;
  if (
    isNaN(heightElement) ||
    isNaN(weight) ||
    heightElement <= 0 ||
    weight <= 0
  ) {
    result.innerHTML = `Please enter a valid number!`;
    return;
  }
  let bodyMassResult = weight / (height * height);
  let bodyMass = bodyMassResult.toFixed(2);
  result.innerHTML = `Your BMI is ${bodyMass} !`;

  if (bodyMass <= 18.5) {
    result.innerHTML = `You're Underweight at BMI ${bodyMass}!`;
  } else if (bodyMass >= 18.6 && bodyMass <= 24.9) {
    result.innerHTML = `Your BMI is ${bodyMass} which is Normal Weight!`;
  } else if (bodyMass >= 25 && bodyMass <= 29.9) {
    result.innerHTML = `You're Overweight with a BMI of ${bodyMass}! Time to Join Us and We can help you achieve your goals!`;
  } else {
    result.innerHTML = `Obesity level is high at ${bodyMass} and its highly recommended we help you with your training!`;
  }
}
