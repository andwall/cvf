const sections = document.querySelectorAll('.fieldset');
const inputs = document.querySelectorAll('.form-input');
const submitBtn = document.getElementById('submit-btn');
const tempMsg = document.getElementById('temp-msg');
const MAX = 100;
const MIN = 0;

/* Validates that each input has values >= MIN value and <= MAX value*/
inputs.forEach(input => {
  input.addEventListener('gcdsBlur', function() {
    const min = this.getAttribute('min');
    const max = this.getAttribute('max');

    if(parseInt(this.value) > max){
      this.value = max;
    }else if(parseInt(this.value) < min){
      this.value = min;
    }
   
    if(this.value > 0){
      this.value = this.value.replace(/^0+/, '')
    }
  }); 
});

/* Validates that each section adds up to 100 points. If not, set error message*/
sections.forEach(section => {
  section.addEventListener('gcdsBlur', function(){
    //get all children inputs
    let childInputs = section.getElementsByTagName('gcds-input');
    let total = 0;
    let message = ``; 
    for(let i = 0; i < childInputs.length; i++){
      total += parseInt(childInputs[i].value);
    }
  
    let rem = Math.abs(MAX - total);
    if(total < 100){
      message = `Please distribute your remaining ${rem} points`;
    }else if(total > 100){
      message = `Please remove ${rem} points`
    }
    section.setAttribute('error-message', message);
  });
});

/* Function: getTotal
*  Purpose: gets the total value of all input fields in the form
*  in:      the name of the inputs to search for
*  return:  the total value of all inputs
*/
function getTotal(inputName){
  const inputs = document.querySelectorAll(inputName);
  if(inputs.length == 0) return 0;
  let total = 0;
  inputs.forEach((input) => {
    total += parseInt(input.value);
  });
  return total;
}

/* On submit form */
submitBtn.addEventListener('click', function(){
  const total = getTotal('.form-input');
  console.log(total);
  console.log(sections.length * MAX)
  if(total == sections.length * MAX){
    subForm();
    tempMsg.innerHTML = "Do excel stuff";
  }else{
    console.log("Wait theres stuff to fix");
    tempMsg.innerHTML = "Wait theres stuff to fix"
  }
});