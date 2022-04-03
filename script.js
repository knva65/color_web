function changeBG() {
    if (document.getElementById("select_op").value==='white') {document.body.style.backgroundColor = 'white';}
   if (document.getElementById("select_op").value==='gray') {document.body.style.backgroundColor = 'gray';}
   if (document.getElementById("select_op").value==='black') {document.body.style.backgroundColor = 'black';}
   if (document.getElementById("select_op").value==='green') {document.body.style.backgroundColor = 'green';}
   if (document.getElementById("select_op").value==='red') {document.body.style.backgroundColor = 'red';}
  }
  




  function changeBG() {
    var selectedBGColor = document.getElementById("select_op").value;
    document.body.style.backgroundColor = selectedBGColor;
  }
