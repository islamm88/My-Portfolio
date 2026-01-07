// SESSION 1
// =====================
"use strict";

// variable
//========================
// - declaration  in memory
// - assign

// key word for declare variable
//    ( var  -   let    -    const )

// declaration >>   let x
// - assign    >>   = 5

let x = 5;
console.log(x);

//    ( var  -   let    -    const )

// var  redeclaration & rassign

var a;
a = 10;
console.log("a = ", a);
var a = 20;
console.log("a = ", a);

// let  No redeclaration  & rassign Ok

let b = 10;
console.log("b = ", b);

b = 20;
// let b = 10 ;
console.log("b = ", b);

// const  No redeclaration & No rassign
const c = 15;
console.log("c = ", c);

let num1 = 10;
let num2 = 20;

let sum = num1 + num2;
console.log("sum = ", sum);

// ====================================

// name "Rules" name "Conventions "
/*

1- dont start with number 
2- dont use special character  accept $ _ 
3- dont use space 
4- case sensitive  
5- dont use reserved word 
6- using camal case or snak case 


*/

// Data Type

// ( number - string - boolean - undefined - null - object - symbol )

let H = 10;
console.log(typeof H);
let G = "Hi";
console.log(typeof G);
let T = 5 > 10;
console.log(typeof T);
let Y;
console.log(typeof Y);
let n = null;
console.log(typeof n);

// Global Scope --  Function Scope --   Block Scope
// =================================================

// Global Scope
// ================
/*
A variable is global if it is declared outside any function.

<script>
  let x = 10;
  var y = 20;
  const z = 30;
</script>
*/

// Function Scope
// =================

/*
  <script>
  2 way to print result of variable 
  ==================================
      function test1() {
        var x = 10 ;
        let y = 5 ;
        const z = 20 ;
        return [x ,y ,z]
      }
      let result = test1();
      console.log(result[0]);
      console.log(result[1]);
      console.log(result[2]);

      function test2() {
        var x = 10 ;
        let y = 5 ;
        const z = 20 ;
        console.log(x);
        console.log(y);
        console.log(z);
      }
      test2()
  </script>

*/

//Block Scope
// ===============

/*
<script>
  if (true) {
    var x = 1;
    let y = 2;
    const z = 3;
  }

  console.log(x); // ✔️
  console.log(y); // ❌
  console.log(z); // ❌

</script>

var ❌ don't has block scope

*/

/*

5️⃣ إمتى أستخدم إيه؟ 🤔
القاعدة الذهبية:

✅ استخدم const دايمًا

✅ استخدم let لو القيمة هتتغير

❌ ابعد عن var إلا لو فاهم انت بتعمل إيه


خلاصة سريعة جدًا 🧠

Global Scope: برا أي دالة

Function Scope: جوه دالة

Block Scope: جوه { }

var ❌ block

let / const ✔️ block



*/
// --------------

// SESSION 2
// =====================

// Arithmetic Operators

//  (( +      -       /       *      %      **      ++      -- ))

let number1 = 5;
let number2 = 2;

let sum1 = number1 + number2;
console.log(sum1);

let sub = number1 - number2;
console.log(sub);

let Mult = number1 * number2;
console.log(Mult);

let div = number1 / number2;
console.log(div);

let mod = number1 % number2;
console.log(mod);

let exp = number1 ** number2;
console.log(exp);

let inc1 = ++number1;
console.log(inc1);

let inc2 = number2++;
console.log(inc2);

let dec1 = --number1;
console.log(dec1);

let dec2 = number2--;
console.log(dec2);

let z = 5 * ((4 + 2) / 3) * 5;
console.log(z);

// ===============================================

// OUTPUT

// <div id = "demo1"></div>
// <div id = "demo2"></div>

<script>
  document.getElementById("demo1").innerHTML = "<p>Welcome in JS </p>";
  document.getElementById("demo2").innerText = "Welcome in JS";
</script>;
