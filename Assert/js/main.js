//let firstnumber;

//let lastnumber;

//firstnumber = prompt ('input a number?');

//lastnumber = prompt ('input a number?');

//make = name*names

//make = name*2

//document.write(make);



//function Alert(){
    // name = document.getElementById("text1").style.display="none";
    //  document.getElementById("btn").style.backgroundColor="seagreen";
    //  document.getElementById("btn1").style.backgroundColor="yellow";
//}
//function Show(){
  //  name = document.getElementById("text1").style.display="block";
//}
    // alert(name);


    //alert('10' % '3');
   // alert("2" + 1);
    //alert(2 + "1");
    //alert("2" + "1");


     //let oranges = "7";

    //let apple = "30";

    //alert (apple + oranges);

   //let age = prompt ("how old are you?")

           // if (age < 18) {
               //alert ("will you get out!!!!")
           // }



    //let  question = prompt ("When was facebook created")

           // if (question == 2004){

              //  alert("You are correct")
           // }
            // if (question > 2004){
              //  alert("You have gone higher than the answer")
            //}

            // if (question  < 2004){
              //  alert("you are behind the answer")
            //}

           // else{
              //  alert("How can you not know the answer")
           // }
           

          //function Alert(){
           // let name = document.getElementById("name").value;
          

            //if (name == "Idorenyin"){
               // alert("C O R R E C T !!!!")
           // }

           // else{
                //alert("Oooppss!!")
           // }
       // }

       let Tscore,a=0, b=0, c=0, d=0, e=0;

       function btn(){
           Tscore = Number(a + b + c + d + e);
           document.getElementById("score").innerHTML = "score: " + Tscore;
       }


    // Question 1
    let color = document.getElementById('color')
    let answer = document.getElementById('answer')
    
   function btn1(){
    let q1 = document.getElementById("q1").value
       if(q1 == "a" || q1=="A"){
           color.style.backgroundColor="green"
           answer.innerHTML = "<strong> Correct </strong>"
           a=1;
       }
       else{
        color.style.backgroundColor="red"
        //answer.innerHTML = " wrong (Answer :a)"
        a=0;
       }
   }

// Question 2
   let color1 = document.getElementById('color1')
    let answer1 = document.getElementById('answer1')
   function btn2(){
    let q2 = document.getElementById("q2").value
       if(q2 == "b" || q2=="B"){
           color1.style.backgroundColor="green"
           answer1.innerHTML = " <strong> Correct </strong>"
           b=1;
       }
       else{
        color1.style.backgroundColor="red"
        //answer1.innerHTML = " wrong (Answer : b)"
        b=0;
       }
   }

   // Question 3
   let color2 = document.getElementById('color2')
    let answer2 = document.getElementById('answer2')
   function btn3(){
    let q3 = document.getElementById("q3").value
       if(q3== "d" || q3=="D"){
           color2.style.backgroundColor="green"
           answer2.innerHTML = " <strong> Correct </strong>"
           c=1;
       }
       else{
        color2.style.backgroundColor="red"
       // answer1.innerHTML = " wrong (Answer : d)"
       c=0;
       }
   }

    // Question 4
    let color3 = document.getElementById('color3')
    let answer3 = document.getElementById('answer3')
   function btn4(){
    let q4 = document.getElementById("q4").value
       if(q4== "c" || q4=="C"){
           color3.style.backgroundColor="green"
           answer3.innerHTML = " <strong> Correct </strong>"
           d=1;
       }
       else{
        color3.style.backgroundColor="red"
      //  answer3.innerHTML = " wrong (Answer : c)"
      d=0;
       }
   }

   // Question 5
   let color4 = document.getElementById('color4')
   let answer4= document.getElementById('answer4')
  function btn5(){
   let q5 = document.getElementById("q5").value
      if(q5== "b" || q5=="B"){
          color4.style.backgroundColor="green"
          answer4.innerHTML = " <strong> Correct </strong>"
          e=1;
      }
      else{
       color4.style.backgroundColor="red"
      // answer4.innerHTML = " wrong (Answer : b)"
      e=0;
      }
  }


   

           