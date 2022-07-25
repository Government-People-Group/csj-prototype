/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})
// Start by hiding the conditional area. So put a div around the whole enter trust information with an ID of conditional or whatever you want to call it. We will call this variable a from now on.
var a = $("#conditional");
//Then hide the variable a by default
a.hide();
//Listen for a change to the checkbox, in this case the name of the checkbox is waste. So whenever you tick one of those boxes the following code will fire each time.
$("input[name='uk']").change(function() {
    //Create a new variable called A_is_checked with a value which checks to see if the last item of the checboxes is checked
var A_is_checked = $("input[name='uk']:first").is(':checked');
    //If the user has checked the last item (variable A_is_checked) then
if (A_is_checked) {
      //Show A (or the conditional)
a.show();
} else {
      //Else we will assume that it hasn't been ticked so don't show the conditional
  a.hide();
 }
});
var a = $("#conditional");
//Then hide the variable a by default
a.hide();
//Listen for a change to the checkbox, in this case the name of the checkbox is waste. So whenever you tick one of those boxes the following code will fire each time.
$("input[name='contact']").change(function() {
    //Create a new variable called A_is_checked with a value which checks to see if the last item of the checboxes is checked
var A_is_checked = $("input[name='contact']:last").is(':checked');
    //If the user has checked the last item (variable A_is_checked) then
if (A_is_checked) {
      //Show A (or the conditional)
a.show();
} else {
      //Else we will assume that it hasn't been ticked so don't show the conditional
  a.hide();
 }
});
var a = $("#conditional");
//Then hide the variable a by default
a.hide();
//Listen for a change to the checkbox, in this case the name of the checkbox is waste. So whenever you tick one of those boxes the following code will fire each time.
$("input[name='updates']").change(function() {
    //Create a new variable called A_is_checked with a value which checks to see if the last item of the checboxes is checked
var A_is_checked = $("input[name='updates']:first").is(':checked');
    //If the user has checked the last item (variable A_is_checked) then
if (A_is_checked) {
      //Show A (or the conditional)
a.show();
} else {
      //Else we will assume that it hasn't been ticked so don't show the conditional
  a.hide();
 }
});
var a = $("#conditional-panel-members");
//Then hide the variable a by default
a.hide();
//Listen for a change to the checkbox, in this case the name of the checkbox is waste. So whenever you tick one of those boxes the following code will fire each time.
$("input[name='panel-selected']").change(function() {
    //Create a new variable called A_is_checked with a value which checks to see if the last item of the checboxes is checked
var A_is_checked = $("input[name='panel-selected']:first").is(':checked');
    //If the user has checked the last item (variable A_is_checked) then
if (A_is_checked) {
      //Show A (or the conditional)
a.show();
} else {
      //Else we will assume that it hasn't been ticked so don't show the conditional
  a.hide();
 }
});
