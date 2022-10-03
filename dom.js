
 /*
  DOM Manipulation Methods:
  1.document.getElementById();
  2.document.getElementsByClassName();
  3.document.getElementsByTagName();
  4.create_element();
  5.appendChild();
  */
  

//elem = document.getElementById('p1');
//console.log(elem);

//elemclass = document.getElementsByClassName('para');
//console.log(elemclass);

//elemclass[0].style.background = "hotpink";
//elemclass[1].classList.add("newclass");
//console.log(elem.innerText);
//console.log(elemclass[0].innerHTML);


/*
elem1 = document.getElementsByClassName('para');
console.log(elem1);

elem1[0].style.background = "grey";
elem1[1].style.background = "hotpink";
elem1[1].style.color = "black";
*/

/*const p1 = document.getElementById('u1');
console.log(p1.textContent);


const show_element = document.querySelector('h1');
console.log(show_element);
*/

//const a = document.querySelector('u1');
//console.log(a);


tag = document.getElementsByTagName('p');
console.log(tag[2].innerText);

create_element = document.createElement('h1');
create_element.innerText="This Is Custom Heading";
tag[2].appendChild(create_element);

create_element1 = document.createElement('h2');
create_element1.innerText="This Is Custom Heading 2";
tag[2].replaceChild(create_element1,create_element);

tag[2].removeElement('h2');