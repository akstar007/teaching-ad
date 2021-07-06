function contact()
{
  window.open("contact-us.html", "_parent");
}

function courses()
{
  window.open("courses.html", "_parent");
}

function about()
{
  window.open("about.html", "_parent");
}

function home()
{
  window.open("home.html", "_parent");
}

function review()
{
  window.open("review.html", "_parent");
}

$(document).ready(function(e) { 

const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");
const course = document.querySelector(".course");


const testimonials = [
  {
    name: "Rupesh",
    position: "Stratford, United Kingdom",
    photo: "images/rup.png",
    text:
      "Abhijeet is a very talented, young enthusiastic programmer who has great understanding of concepts. His brain is like a encyclopaedia, he just knows everything. He has a pre-defined curriculum set up which he sends you a few days before your first class. Communication is spot on, I live in the UK, but all comms, are done via Whatsapp, and everything is picked up swiftly. Sessions are hosted via Zoom calls. Abhijeet makes sure you learn every topic, before moving onto the next. During class he will also test you, as he asks questions to make sure you have understood everything. At a very young age, Abhijeet has loads of talent and passion",
    c:"POWERSHELL"
  },
  {
    name: "Eshwar Senthilnathan",
    position: "New Hampshire, USA",
    photo: "images/esh.png",
    text:
      "I am going into my third year of college as a computer science major. Not sure what I am specializing in. The logic portion of the questions given were hard to understand. The tutor helped me overcome it by explaining what the question meant, step by step. I also attempted some questions on my own with some push. I didn't care much about the grades, but 97% overall. I only cared about how to solve problems. The teaching style was a unique 1 on 1 experience. There was a lot of engagement between the tutor and student. The tutor gave practice problems and notes to go over. It helped me retain much more information. I am overall satisfied with this kind of experience. Thank you so much for your support!",
    c:"OS ADMINISTRATION"
  }  
];

let index = 0;

const updateTestimonial = () => {
  const { name, position, photo, text , c } = testimonials[index];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  course.innerHTML = c;
  index++;
  if (index > testimonials.length - 1) index = 0;
};

setInterval(updateTestimonial, 10000);
});