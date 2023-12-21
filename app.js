const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      const script1 = document.createElement("script");
      script1.src = "./chart1.js";

      const script2 = document.createElement("script");
      script2.src = "./chart2.js";

      document.querySelector(".body").appendChild(script1);
      document.querySelector(".body").appendChild(script2);
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => {
  observer.observe(element);
});
