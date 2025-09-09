function grade() {
    let marks = prompt ("input marks");
    marks = Number(marks);
     if (marks > 79 && marks <= 100){
        return "A";}
    else if (marks > 60) {
        return "B";}
    else if (marks > 49){
        return "C";}
    else if ( marks > 40){
        return "E";}
    else if (marks > 0){
        return "Fail";}
    else {return "Invalid input"}
    
}
alert(grade());

