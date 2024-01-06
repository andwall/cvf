
const questions = document.querySelectorAll('.question');

/* serialize questions and submit ajax */
function sendToExcel(){
  let serialized = [];
  //serialize
  questions.forEach((q) => {
    serialized.push({name: q.getAttribute('name'), value: q.value});
  })

  //convert to single object
  let mapped = serialized.map(item => ({ [item.name]: item.value }) );
  let newObj = Object.assign({}, ...mapped);

  fetch("https://api.apispreadsheets.com/data/1THHzsJz9Lz6a7WJ/", {
    method: "POST",
    body: JSON.stringify({"data": newObj}),
  }).then(res =>{
    if (res.status === 201){
      // SUCCESS
      // alert("Form data submitted successfully :)")
    }
    else{
      // ERROR
      alert("There was an error submitting the form :(");
    }
  });
}