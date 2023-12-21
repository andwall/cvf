const sections = document.querySelectorAll('.fieldset');
const input = document.getElementById('form-input');
const inputs = document.querySelectorAll('.form-input');
const submitBtn = document.getElementById('submit-btn');
const tempMsg = document.getElementById('temp-msg');
const MAX = 100;
const MIN = 0;
let isValid = false;

/* Validates that each input has values >= MIN value and <= MAX value*/
inputs.forEach(input => {
  input.addEventListener('gcdsBlur', function() {
    if(parseInt(this.value) > this.getAttribute('max')){
      this.value = this.getAttribute('max');
    }else if(parseInt(this.value) < this.getAttribute('min')){
      this.value = this.getAttribute('min');
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
      isValid = false;
    }else if(total > 100){
      message = `Please remove ${rem} points`
      isValid = false;
    }else{
      isValid = true;
    }
    section.setAttribute('error-message', message);
  });
});

/* On submit form */
submitBtn.addEventListener('click', function(){
  if(isValid){
    console.log("Do excel stuff");
    tempMsg.innerHTML = "Do excel stuff";
  }else{
    console.log("Wait theres stuff to fix");
    tempMsg.innerHTML = "Wait theres stuff to fix"
  }
});