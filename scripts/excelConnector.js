
const questions = document.querySelectorAll('.question');

/* serialize questions and submit ajax */
function subForm(){
  let serialized = [];
  //serialize
  questions.forEach((q) => {
    serialized.push({name: q.getAttribute('name'), value: q.value});
  })

  //convert to single object
  let mapped = serialized.map(item => ({ [item.name]: item.value }) );
  let newObj = Object.assign({}, ...mapped);
  console.log(serialized)
  console.log(newObj);
  console.log(JSON.stringify(serialized))

  fetch("https://api.apispreadsheets.com/data/1THHzsJz9Lz6a7WJ/", {
    method: "POST",
    body: JSON.stringify({"data": newObj}),
  }).then(res =>{
    if (res.status === 201){
      // SUCCESS
      alert("Form data submitted successfully :)")
    }
    else{
      // ERROR
      alert("There was an error submitting the form :(");
    }
  });
  // //ajax call
  // jQuery.ajax({
  //   url: 'https://api.apispreadsheets.com/data/YxEc7Ali1fLDkkGL/',
  //   type: 'post',
  //   data: serialized,
  //   success: function(){
  //     alert("Form Data Submitted :)");
  //   },
  //   error: function(){
  //     alert("Something went wrong :(");
  //   }
  // })
}