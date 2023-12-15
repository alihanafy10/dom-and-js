//التكليف 1
// console.log(document.querySelector("div"));
// console.log(document.querySelector("#elzero"));
// console.log(document.querySelector(".element"));
// console.log(document.querySelector("[name=js]"));
// console.log(document.querySelectorAll("div")[0]);
// console.log(document.querySelectorAll("#elzero")[0]);
// console.log(document.querySelectorAll(".element")[0]);
// console.log(document.querySelectorAll("[name=js]")[0]);
// console.log(document.getElementById("elzero"));
// console.log(document.getElementsByClassName("element")[0]);
// console.log(document.getElementsByTagName("div")[0]);
// console.log(document.getElementsByName("js")[0]);
// console.log(document.body.firstElementChild);
// console.log(document.body.children[0]);
// console.log(document.body.childNodes[3]);


//التكليف 2
// let myElements2 = document.querySelectorAll("div img");
// for (let i = 0; i < myElements2.length; i++){
//   myElements2[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
//   myElements2[i].alt = "elzero logo";
// }


// تكليف 3
// let dolars = document.querySelector("[name=dollar]");
// let res = document.querySelector(".result");
// dolars.oninput = function () {
//   let x = dolars.value * 15.6;
//   res.innerHTML=`${dolars.value} USD Dollar = ${x.toFixed(2)} Egyptian Pound`;
// }


// تكليف 4
// let first = document.getElementsByClassName("one")[0];
// let second = document.getElementsByClassName("two")[0];
// let b = first.innerHTML;
// first.innerHTML = second.innerHTML;
// second.innerHTML =`${b} 2`;

// var temp = first.title;
// first.title = second.title;
// second.title = temp;


// تكليف 5
// let x = document.querySelectorAll("img");
// for (let i = 0; i < x.length; i++) {
//   if (x[i].hasAttribute("alt")) {
//     x[i].alt = "old";
//   }
//   else {
//     x[i].alt="Ali Hanafy"
//   }
// }
// console.log(x);

let num = document.querySelector("[name=elements]"),
  tx = document.querySelector("[name=texts]"),
  op = document.getElementsByTagName("select")[0],
  sup = document.querySelector("[name=create]"),
  form = document.getElementsByTagName("form")[0],
  result = document.querySelector(".results");
result.style.display = "flex";
result.style.flexWrap = "wrap";
result.style.justifyContent ="space-between"
form.onsubmit = function (e) {
  e.preventDefault();
  document.querySelectorAll(".box").forEach(function (el) { return el.remove(); });
  for (let i = 1; i <= num.value; i++){
    let ele = document.createElement(op.value);
  ele.className = `box`;
  ele.title = `${op.value}`
  ele.innerHTML = `${tx.value}`;
    ele.id = `id-${i}`;
    ele.style.backgroundColor = "orange";
    ele.style.color = "white";
    ele.style.padding = "15px 20px";  
    ele.style.width="390px";
    ele.style.textAlign = "center";
    ele.style.borderRadius = "10px";
    ele.style.margin = "20px";
    result.appendChild(ele);
  };
}