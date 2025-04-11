function goBuhat() {
  const phrases = [
    "Дороу",
    "Я б хотів тобі сказати",
    "цього..",
    "ну..",
    "I love you❤️",
  ];
  const random = Math.floor(Math.random() * phrases.length);
  document.getElementById("memeText").textContent = phrases[random];
}
