function calculate(){
    var gpa1=parseFloat(document.getElementById("gpa1").value);
    var gpa2=parseFloat(document.getElementById("gpa2").value);
    var gpa3=parseFloat(document.getElementById("gpa3").value);
    var gpa4=parseFloat(document.getElementById("gpa4").value);
    var gpa5=parseFloat(document.getElementById("gpa5").value);
    var gpa6=parseFloat(document.getElementById("gpa6").value);
    var gpa7=parseFloat(document.getElementById("gpa7").value);
    var gpa8=parseFloat(document.getElementById("gpa8").value);

    var cre1=parseFloat(document.getElementById("cre1").value);
    var cre2=parseFloat(document.getElementById("cre2").value);
    var cre3=parseFloat(document.getElementById("cre3").value);
    var cre4=parseFloat(document.getElementById("cre4").value);
    var cre5=parseFloat(document.getElementById("cre5").value);
    var cre6=parseFloat(document.getElementById("cre6").value);
    var cre7=parseFloat(document.getElementById("cre7").value);
    var cre8=parseFloat(document.getElementById("cre8").value);
    
    document.getElementById("result").value=((gpa1*cre1)+(gpa2*cre2)+(gpa3*cre3)+(gpa4*cre4)+(gpa5*cre5)+(gpa6*cre6)+(gpa7*cre7)+(gpa8*cre8))/(cre1+cre2+cre3+cre4+cre5+cre6+cre7+cre8);
}