
const questions = document.querySelectorAll('input');

/* serialize questions and submit ajax */
function subForm(){
  let serialized = [];
  //serialize
  questions.forEach((q) => {
    serialized.push({name: q.getAttribute('name'), value: q.value});
  })

  console.log(serialized)
  //ajax call
  jQuery.ajax({
    url: 'https://api.apispreadsheets.com/data/YxEc7Ali1fLDkkGL/',
    type: 'post',
    data: serialized,
    success: function(){
      alert("Form Data Submitted :)");
    },
    error: function(){
      alert("Something went wrong :(");
    }
  })
}