const accordians = document.querySelectorAll(".accordion");

accordians.forEach((accordian) => {
  const icon = accordian.querySelector(".icon");
  const answer = accordian.querySelector(".answer");

  accordian.addEventListener("click", () => {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      answer.classList.maxHeight("active");
    } else {
      icon.classList.add("active");
      answer.classList.maxHeight("active");
    }
  });
});
