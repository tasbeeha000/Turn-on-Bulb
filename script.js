let arr = [
    "Smile, shine, repeat",
    "Dream big always",
    "Make it happen",
    "Believe in yourself",
    "Live with purpose",
    "Embrace the journey",
    "Keep moving forward",
    "Live with intention",
    "Learn, grow, repeat",
    "Be the change.",
    "Kindness never expires.",
    "Dare to dream.",
    "Grow through what you go through.",
    "Follow your heart.",
    "Stay positive always.",
    "Love without limits.",
    "Seek adventure daily.",
    "Find your bliss.",
    "Celebrate every achievement.",
    "Own your story.",
    "Inspire through action.",
    "Make it count.",
    "Sparkle with kindness.",
    "Discover your passion.",
    "Do small things.",
    "Dream, believe, achieve.",

  ];

  function toggleClass() {
    var element = document.getElementById("myElement");
    let btn = document.getElementById("buttonElement");
    let text = document.getElementById("textElement");

    if (element.src.includes("bulbboff")) {
      element.src = "bulboooon.jpg";
      btn.innerHTML = "OFF";

      let randomIndex = Math.floor(Math.random() * arr.length);
      text.textContent = arr[randomIndex];
      text.classList.remove("display-none");
    } else {
      element.src = "bulbboff.jpg";
      btn.innerHTML = "ON";

      text.classList.add("display-none");
    }
  }