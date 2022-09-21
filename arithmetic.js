var back = 0;

   function add(num1, num2) {
       return num1 + num2;
   } 
   
   function functions() {
       if (back==0) 
       {
           var first = document.getElementById("number1").value;
           var second = document.getElementById("number2").value;
           var Addition = add(first, second);
           document.getElementById("number1").style.display = 'none';
           document.getElementById("number2").style.display = 'none';
           document.getElementById("Answer").style.display = 'block';
           document.getElementById("Answer").value = "Answer: " + Addition;
           document.getElementById("write").value = "Go Back";
           back = back+1;
       }
       else
       {
           document.getElementById("Answer").style.display = 'none';
           document.getElementById("number1").style.display = 'inline';
           document.getElementById("number2").style.display = 'inline';
           document.getElementById("write").value = "Add";
           back = 0;
       }
   }
   
   function subtract(num1, num2) {
       return num1 - num2;
   } 
   
   function functions() {
       if (back==0) 
       {
           var first = document.getElementById("number1").value;
           var second = document.getElementById("number2").value;
           var subtract = subtract(first, second);
           document.getElementById("number1").style.display = 'none';
           document.getElementById("number2").style.display = 'none';
           document.getElementById("Answer").style.display = 'block';
           document.getElementById("Answer").value = "Answer: " + subtract;
           document.getElementById("write").value = "Go Back";
           back = back-1;
       }
       else
       {
           document.getElementById("Answer").style.display = 'none';
           document.getElementById("number1").style.display = 'inline';
           document.getElementById("number2").style.display = 'inline';
           document.getElementById("write").value = "subtract";
           back = 0;
       }
   }


   function multiply(num1, num2) {
       return num1 * num2;
   } 
   
   function functions() {
       if (back==0) 
       {
           var first = document.getElementById("number1").value;
           var second = document.getElementById("number2").value;
           var multiply = multiply(first, second);
           document.getElementById("number1").style.display = 'none';
           document.getElementById("number2").style.display = 'none';
           document.getElementById("Answer").style.display = 'block';
           document.getElementById("Answer").value = "Answer: " + multiply;
           document.getElementById("write").value = "Go Back";
           back = back*1;
       }
       else
       {
           document.getElementById("Answer").style.display = 'none';
           document.getElementById("number1").style.display = 'inline';
           document.getElementById("number2").style.display = 'inline';
           document.getElementById("write").value = "Multiply";
           back = 0;
       }
   }


   function divide(num1, num2) {
       return num1 / num2;
   } 
   
   function functions() {
       if (back==0) 
       {
           var first = document.getElementById("number1").value;
           var second = document.getElementById("number2").value;
           var divide = divide(first, second);
           document.getElementById("number1").style.display = 'none';
           document.getElementById("number2").style.display = 'none';
           document.getElementById("Answer").style.display = 'block';
           document.getElementById("Answer").value = "Answer: " + divide;
           document.getElementById("write").value = "Go Back";
           back = back/1;
       }
       else
       {
           document.getElementById("Answer").style.display = 'none';
           document.getElementById("number1").style.display = 'inline';
           document.getElementById("number2").style.display = 'inline';
           document.getElementById("write").value = "divide";
           back = 0;
       }
   }
