function calculate(){
    var lastcgpa=parseFloat(document.getElementById("lastcgpa").value);
    var gpa=parseFloat(document.getElementById("gpa").value);
    

    var totalcre=parseFloat(document.getElementById("totalcre").value);
    var cre=parseFloat(document.getElementById("cre").value);
    
    
    document.getElementById("result").value=((lastcgpa*totalcre)+(gpa*cre))/(totalcre+cre);
}