/* these functions are made by me (forester2015), not the offical AoPS code */

function show_hide(id) {
  if (document.querySelector(`#${id}`).style.display == "none") {
    document.querySelector(`#${id}`).style.display = "block";
  } else {
    document.querySelector(`#${id}`).style.display = "none";
  }
}

function show_tip(triangle, tip) {
  document.querySelector(`#${triangle}`).style.display = "block";
  document.querySelector(`#${tip}`).style.display = "block";
}

function hide_tip(triangle, tip) {
  document.querySelector(`#${triangle}`).style.display = "none";
  document.querySelector(`#${tip}`).style.display = "none";
}
