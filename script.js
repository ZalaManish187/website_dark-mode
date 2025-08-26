var icon = document.getElementById("icon");
var icons = document.getElementById("icons");

document.getElementById("darkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icons.src = "dark theme icon/sun.png";
  } else {
    icons.src = "dark theme icon/moon.png";
  }
});

document.getElementById("resBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "dark theme icon/sun.png";
  } else {
    icon.src = "dark theme icon/moon.png";
  }
});
