// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
var submit_button = document.getElementById('submit-button'); 
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

function goodbye_func() {
    const goodbye_text = "Thank you for your message";
    document.getElementById('contact-page').style.fontSize = "x-large";
    var good_bye = document.getElementById('contact-page');
    good_bye.innerHTML = goodbye_text;
} 

submit_button.addEventListener('click',goodbye_func);
