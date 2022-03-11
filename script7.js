function calculation(){

    // getting name of subject from taking input
    var sub_name = document.inputs.nameofsubject;

     // getting credit of subject from taking input
    var credit = document.inputs.credit;

     // getting marks of subject from taking input
    var marks = document.inputs.marks;


    // getting contain of table
    var table_item = document.getElementById("output");


    if(sub_name.value != "" && credit.value != "" && marks.value != ""){

        // creating tr tag
        var tr_tag = document.createElement("tr");

        // creating td tag 
        var td_tag1 = document.createElement("td");
        var td_tag2 = document.createElement("td");
        var td_tag3 = document.createElement("td");
        var td_tag4 = document.createElement("td");


        // appedning value to td tag
        td_tag1.appendChild(document.createTextNode(sub_name.value));
        td_tag2.appendChild(document.createTextNode(credit.value));
        td_tag3.appendChild(document.createTextNode(marks.value));


        // seting grade & point for grdae
       var point = 0;
        var grade ;
        if(Number(marks.value)>=90){
            grade = "S";
            point = 10;
        }else if(Number(marks.value)>=80 && Number(marks.value)<90){
            grade = "A";
            point = 9;
        }else if(Number(marks.value)>=70 && Number(marks.value)<80){
            grade = "B";
            point = 8;
        }else if(Number(marks.value)>=60 && Number(marks.value)<70){
            grade = "C";
            point = 7;
        }else if(Number(marks.value)>=50 && Number(marks.value)<60){
            grade = "D";
            point = 6;
        }else{
            grade="E";
            point = 5;
        }


        // for grade 
        td_tag4.appendChild(document.createTextNode(grade));

        // appending td to tr tags
        tr_tag.appendChild(td_tag1);
        tr_tag.appendChild(td_tag2);
        tr_tag.appendChild(td_tag3);
        tr_tag.appendChild(td_tag4);

        // appending tr to table
   
        table_item.appendChild(tr_tag);

        let gpa = ( Number(document.getElementById("ans").innerHTML) + ((point*Number(credit.value)) / (Number(credit.value))))/2;

        gpa = Math.round(gpa*100)/100;

        gpa = gpa.toFixed(2);

        document.getElementById("ans").innerHTML = gpa;

        // clear input box
        sub_name.value = "";
        credit.value = "";
        marks.value = "";


        tr_tag.onclick = function(){
            this.parentNode.removeChild(this);
        }

    }
    else{
        alert("Fill all the required filled ! ");
    }


}

