function collapses_nav_site() {
  let el_down = document.getElementsByClassName("down-nav-site")[0];
  let el_right = document.getElementsByClassName("right-nav-site")[0];

  if (el_right && el_right.style.display !== "none") {
    el_right.style.display = "none";
    el_down.style.display = "inline-block";
  } else {
    el_right.style.display = "inline-block";
    el_down.style.display = "none";
  }
}

function collapses_nav_page() {
  let el_down = document.getElementsByClassName("down-nav_page")[0];
  let el_right = document.getElementsByClassName("right-nav_page")[0];

  if (el_right && el_right.style.display !== "none") {
    el_right.style.display = "none";
    el_down.style.display = "inline-block";
  } else {
    el_right.style.display = "inline-block";
    el_down.style.display = "none";
  }
}
