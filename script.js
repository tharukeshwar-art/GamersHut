const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

}

function showSection(sectionId){

  const sections =
    document.querySelectorAll(".page-section");

  sections.forEach(section => {

    section.classList.remove("active-section");

  });

  document
    .getElementById(sectionId)
    .classList.add("active-section");

}