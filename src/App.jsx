import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

import React from "react";
// Задание 7
// function App() {
//   return <div >
//     <div class="text">text1</div>
//     <div class="text">text2</div>
//     </div>;
// }

// Задание 8
// function App() {
//   return (
//     <ul>
//       <li>aaa</li>
//       <li>aaa</li>
//       <li>aaa</li>
//       <li>aaa</li>
//       <li>aaa</li>
//       <li>aaa</li>
//       <li>aaa</li>
//       <li>aaa</li>
//       <li>aaa</li>
//       <li>aaa</li>
//     </ul>
//   );
// }

// Задание 9
// function App() {
// 	return(
// 		<ul>
// 			<li>text1</li>
// 			<li>text2</li>
// 			<li>text3</li>
// 		</ul>
//     );
// }

// Задание 10
// Способ1
// function App() {
//   return (
//     <>
//       <ul>
//         <li>text1</li>
//         <li>text2</li>
//         <li>text3</li>
//       </ul>
//       <ul>
//         <li>text1</li>
//         <li>text2</li>
//         <li>text3</li>
//       </ul>
//     </>
//   );
// }
// Способ2
// function App() {
//   return (
//     <div>
//       <ul>
//         <li>text1</li>
//         <li>text2</li>
//         <li>text3</li>
//       </ul>
//       <ul>
//         <li>text1</li>
//         <li>text2</li>
//         <li>text3</li>
//       </ul>
//     </div>
//   );
// }

// Задание 11
// function App() {
// 	return <input/>;
// }

// Задание 12
// function App() {
// 	return <>
//   <input /><input /><input />
//   </>;
// }

// Задание 13
// function App() {
// 	const str1 = 'text1';
// 	const str2 = 'text1';

// 	return <div>
// 		<p>{str1}</p>
// 		<p>{str2}</p>
// 	</div>;
// }

// Задание 14
// function App() {
// 	const name = 'user';
// 	const age  = '30';

// 	return <div>
// 		name: {name}
// 		age:  {age}
// 	</div>;
// }

// Задание 15
// function App() {
//   const arr = [1, 2, 3, 4, 5];

//   return <div>
//     <ul>
//       <li>{arr[0]}</li>
//       <li>{arr[1]}</li>
//       <li>{arr[2]}</li>
//       <li>{arr[3]}</li>
//       <li>{arr[4]}</li>
//     </ul>
//   </div>;
// }

// Задание 16
// function App() {
// 	const obj = {name: 'john', surname: 'smit'};
// 	return <div>
// 		<p> name: {obj.name}</p>
// 		<p> surname: {obj.surname}</p>
// 	</div>;
// }

// Задание 17
// function App() {
//   const attr = "block";

//   return <div id={attr}>
// 	text
// 	</div>;
// }

// Задание 19
// function App() {
// 	const li1 = <li>text1</li>;
// 	const li2 = <li>text2</li>;
// 	const li3 = <li>text3</li>;
// 	return <main>
// 		{li1}
// 		{li2}
// 		{li3}
// 	</main>;
// }

// Задание 20
// function App() {
// 	const items = <ul>
// 	<li>text1</li>
// 	<li>text2</li>
// 	<li>text3</li>
// 	</ul>
// 	return <ul>
// 		{items}
// 	</ul>
// }

// Задание 22
// function App() {
// 	return <div>
// 		<input /><br />
// 		<input /><br />
// 		<input /><br />
// 		<input />
// 	</div>;
// }

// Задание 23.1
// function App() {
//   return (
//     <div>
//       <ul>
//         <li>aaa</li>
//         <li>aaa</li>
//         <li>aaa</li>
//         <li>aaa</li>
//         <li>aaa</li>
//         <li>aaa</li>
//         <li>aaa</li>
//         <li>aaa</li>
//         <li>aaa</li>
//         <li>aaa</li>
//       </ul>
//     </div>
//   );
// }
// Задание 23.2
// function App() {
//   return (
//     <table>
//       <tbody>
//         <tr>
//           <td>aaa</td>
//           <td>aaa</td>
//           <td>aaa</td>
//         </tr>
//         <tr>
//           <td>bbb</td>
//           <td>bbb</td>
//           <td>bbb</td>
//         </tr>
//         <tr>
//           <td>ccc</td>
//           <td>ccc</td>
//           <td>ccc</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }

// Задание 24.1
// В результате рендеринга кода получится: result: 9 (3 во 2 степени)
// Задание 24.2
// В результате рендеринга кода получится: result: john smit
// Задание 24.3
// В результате рендеринга кода получится: result: 2 (выведение корня)

// Задание 26
// function App() {
// 	let text;
// 	const isAdult = false;
	
// 	if (isAdult) {
// 		text = 'text1';
// 	} else {
// 		text = 'text2';
// 	}
	
// 	return <div>
// 		{text}
// 	</div>;
// }

// Задание 27
function App() {
	let text;
	const isAdmin = false;
	
	if (isAdmin) {
		text = <p>text1</p>;
	} else {
		text = <p>text2</p>;
	}
	
	return text;
}

// Задание 27

// Задание 28
export default App;
