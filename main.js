function calculate() {
	var weight = document.getElementById('weight').value;
	var height = document.getElementById('height').value;
	var height2 = Math.pow(height,2);
	var bmi = weight/height2;
	var bmi2 = Math.round(bmi);
    if (bmi2 < 18.5) {
        window.alert("Your bmi is " +  bmi2 +" you are underweight");
    } 
    else if (bmi2 >= 18.5 && bmi2 <= 24.9) {
        window.alert("Your bmi is " +  bmi2 + " you are a healthy weight");
    } 
    else if (bmi2 >= 25 && bmi2 <= 29.9) {
        window.alert("Your bmi is " + bmi2 + " you are overweight");
    } 
    else {
        window.alert("Your bmi is " + bmi2 + " you are obese");
    }
}