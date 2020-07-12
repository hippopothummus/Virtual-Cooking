//initial settings
var extra = 0;
var xp = 0;
var numpeople = 1;
setNumber("text_input1", numpeople);

//buttons
onEvent("recipes_button", "click", function( ) {
  setScreen("recipes_screen");
});
onEvent("recipe_back", "click", function( ) {
  setScreen("welcome_screen");
});
onEvent("settings_button", "click", function( ) {
  setScreen("settings_screen");
});
onEvent("settings_back", "click", function( ) {
  setScreen("welcome_screen");
});
onEvent("frenchtoast_button", "click", function( ) {
  setScreen("AR_screen");
  showElement("check_mark1");
  setText("experience_level", "Experience: 10 | Beginner");
});
onEvent("pancakes_button", "click", function( ) {
  setScreen("AR_screen");
  showElement("check_mark2");
  setText("experience_level", "Experience: 20 | Beginner");
});
onEvent("backfromar", "click", function( ) {
  setScreen("recipes_screen");
  hideElement("lock1");
  hideElement("lockback1");
});

//settings
onEvent("text_input1", "input", function( ) {
  numpeople = getNumber("text_input1");
  console.log(numpeople);
});

onEvent("checkbox1", "click", function( ) {
  if (extra===0) {
    extra = 1;
  } else {
    extra = 0;
  }
  console.log("extra=" +extra);
});
onEvent("dropdown1", "change", function( ) {
if (getText("dropdown1")== "Beginner") {
    xp = 0;
  } else if (getText("dropdown1")== "Intermediate") {
    xp = 1;
  } else if (getText("dropdown1")== "Advanced"){
    xp = 2;
  }
console.log(xp);
});
