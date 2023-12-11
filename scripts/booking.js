/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// Define each day get element.
const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");

// Define button get element.
const half_day = document.getElementById("half");
const full_day = document.getElementById("full");
const clear_button = document.getElementById("clear-button");

// Define variable counter.
var nbr_selected_day = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function onClick() {
        if (!this.classList.contains("clicked")) {
            this.classList.add("clicked");
            nbr_selected_day += 1;
        } else {
            this.classList.remove("clicked")
            nbr_selected_day -= 1;
        }
        return nbr_selected_day;
    }

monday.addEventListener("click", onClick);
tuesday.addEventListener("click", onClick);
wednesday.addEventListener("click", onClick);
thursday.addEventListener("click", onClick);
friday.addEventListener("click", onClick);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear() {
    var calculate_cost_text = document.getElementById("calculated-cost")
    var total_cost = 0;
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    calculate_cost_text.innerHTML = total_cost;
    nbr_selected_day = 0;
    return nbr_selected_day, calculate_cost_text.innerHTML
}

clear_button.addEventListener("click", clear);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function half_day_rate() {
    full_day.classList.remove("clicked");
    half_day.classList.add("clicked");
    var daily_rate = 20;
    calculate(daily_rate);
}

half_day.addEventListener("click", half_day_rate);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function full_day_rate() {
    full_day.classList.add("clicked");
    half_day.classList.remove("clicked");
    var daily_rate = 35;
    calculate(daily_rate);
}

full_day.addEventListener("click", full_day_rate);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(daily_rate) {
    var calculate_cost_text = document.getElementById("calculated-cost");
    var total_cost;
    total_cost = daily_rate * nbr_selected_day;
    return calculate_cost_text.innerHTML = total_cost;
}
