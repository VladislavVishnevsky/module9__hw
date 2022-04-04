//Дана заготовка и результат, который вы должны получить. Ваша задача — написать код, 
//который будет преобразовывать XML в JS-объект и выводить его в консоль.

// XML:

// <list>
//   <student>
//     <name lang="en">
//       <first>Ivan</first>
//       <second>Ivanov</second>
//     </name>
//     <age>35</age>
//     <prof>teacher</prof>
//   </student>
//   <student>
//     <name lang="ru">
//       <first>Петр</first>
//       <second>Петров</second>
//     </name>
//     <age>58</age>
//     <prof>driver</prof>
//   </student>
// </list>

// JS-объект:

// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }

const xmlString =
	`
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

let list = [];
const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
let count = xmlDOM.querySelector("list").children.length;
for (let i = 0; i < count; i++) {
	let obj = {
		name: xmlDOM.querySelector("list").children[i].querySelector("first").textContent + " " + xmlDOM.querySelector("list").children[i].querySelector("second").textContent,
		age: xmlDOM.querySelector("list").children[i].querySelector("age").textContent,
		prof: xmlDOM.querySelector("list").children[i].querySelector("prof").textContent,
		lang: xmlDOM.querySelector("list").children[i].querySelector("name").getAttribute("lang")
	}
	list.push(obj);
}
console.log("list", list);