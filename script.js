// On successful login
window.location.href = "home.html";

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});








 
  



  const mainForm = document.getElementById("mainForm");
const checkBtn = document.getElementById("checkBtn");
const popupForm = document.getElementById("popupForm");
const closePopup = document.getElementById("closePopup");
const popupConfirmForm = popupForm.querySelector("form");

// Show popup when "Check Availability" is clicked
checkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  popupForm.style.display = "flex";
});

// Close popup
closePopup.addEventListener("click", function () {
  popupForm.style.display = "none";
});

// Close popup on outside click
window.addEventListener("click", function (e) {
  if (e.target === popupForm) {
    popupForm.style.display = "none";
  }
});

// Handle Confirm Booking
popupConfirmForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Generate random availability
  const statuses = ["Available", "Waitlisted", "Not Available"];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  // Simulate "sending" availability message
  alert(`Availability status sent to ${email}\nStatus: ${randomStatus}`);

  // Save to localStorage for History
  const arrival = mainForm.querySelector("input[type='date']").value;
  const departure = mainForm.querySelector("input[type='date']:nth-of-type(2)").value;
  const guests = mainForm.querySelector("input[type='number']").value;

  const booking = {
    name,
    email,
    arrival,
    departure,
    guests,
    status: randomStatus,
    timestamp: new Date().toISOString()
  };

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  popupForm.style.display = "none";
  popupConfirmForm.reset();
  mainForm.reset();
});


 
const aboutBtn = document.querySelector("#about .btn");
const aboutPopup = document.getElementById("aboutBookingPopup");
const aboutClose = document.getElementById("aboutPopupClose");
const aboutForm = aboutPopup.querySelector("form");

// Open About popup
aboutBtn.addEventListener("click", function (e) {
  e.preventDefault();
  aboutPopup.style.display = "flex";
});

// Close popup
aboutClose.addEventListener("click", function () {
  aboutPopup.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", function (e) {
  if (e.target === aboutPopup) {
    aboutPopup.style.display = "none";
  }
});



// Save About Booking Form data
aboutForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const booking = {
    name: document.getElementById("about-name").value,
    email: document.getElementById("about-email").value,
    arrival: document.getElementById("about-arrival").value,
    departure: document.getElementById("about-leaving").value,
    roomType: document.getElementById("about-room").value,
    price: document.getElementById("about-price").value,
    timestamp: new Date().toISOString()
  };

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  alert("Booking confirmed!");
  aboutPopup.style.display = "none";
  aboutForm.reset();
});




  // Show alert on submit
  aboutForm.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload
    alert("Your booking is confirmed!");
    aboutPopup.style.display = "none"; // optionally close the popup
    aboutForm.reset(); // reset form inputs
  });





  const historyLink = document.querySelector("a[href='']");
const historyPopup = document.getElementById("bookingHistoryPopup");
const closeHistory = document.getElementById("closeHistoryPopup");
const historyList = document.getElementById("bookingHistoryList");

historyLink.addEventListener("click", function (e) {
  e.preventDefault();
  historyList.innerHTML = ""; // Clear previous

  const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

  if (savedBookings.length === 0) {
    historyList.innerHTML = "<p>No booking history found.</p>";
  } else {
    savedBookings.forEach((booking, index) => {
      const entry = document.createElement("div");
      entry.style.marginBottom = "1.2rem";
      entry.innerHTML = `
        <strong>Booking ${index + 1}</strong><br>
        Name: ${booking.name}<br>
        Email: ${booking.email}<br>
        Arrival: ${booking.arrival}<br>
        Departure: ${booking.departure}<br>
        Room: ${booking.roomType || "N/A"}<br>
        Price: ${booking.price || "N/A"}
      `;
      historyList.appendChild(entry);
    });
  }

  historyPopup.style.display = "flex";
});

closeHistory.addEventListener("click", function () {
  historyPopup.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === historyPopup) {
    historyPopup.style.display = "none";
  }
});
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

clearHistoryBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to delete all booking history?")) {
    localStorage.removeItem("bookings");
    historyList.innerHTML = "<p>Booking history cleared.</p>";
    setTimeout(() => {
      historyPopup.style.display = "none";
    }, 1000);
  }
});






  //HISTORY>>>>>>>
  
