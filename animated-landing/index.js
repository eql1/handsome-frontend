function startLoader() {
  let counter = document.querySelector(".counter");

  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counter.textContent = currentValue + "%";

    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  }
  updateCounter();
}

startLoader();

gsap.to(".counter", 1, {
  delay: 3.5,
  y: -280,
  ease: "power4.inOut",
});

gsap.to(".item h1, .item p", 1, {
  delay: 4,
  y: -40,
  ease: "power4.inOut",
  stagger: {
    amount: 0.5,
  },
});

gsap.to(".item-main h1", 1, {
  delay: 4,
  y: -280,
  ease: "power4.inOut",
  stagger: {
    amount: 0.5,
  },
});
