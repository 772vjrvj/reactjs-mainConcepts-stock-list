import React from 'react';
import ReactDOM from 'react-dom';
import BasicListComponent from './MAIN CONCEPTS/8. Lists and Keys/Basic List Component';


 const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <React.StrictMode>
    <BasicListComponent numbers={numbers} />
  </React.StrictMode>,
  document.getElementById('root')
);




// 3. Rendering Elements  
// Updating the Rendered Element.js
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   // highlight-next-line
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);



// 5. State and Lifecycle
// State and Lifecycle1.js
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
// setInterval(tick, 1000);


// 5. State and Lifecycle
// State and Lifecycle2.js
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }
// setInterval(tick, 1000);



// 5. State and Lifecycle
// Converting a Function to a Class.js
// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }
// setInterval(tick, 1000);
