//Always returns the object
//ReactElement(Object)=>HTML(Browser Understands)
import React from 'react';
import ReactDOM from 'react-dom/client';
// the render basically takes the object and convert it into  h1 tag and put it up on the dom

//React createElement=>JS Object=>When we render this obj on to the DOM it becomes the html element

//JSXelement=>Transpile to to React element that is React.createElement=>ReactElement=>JSObject=>HTML element(Rendering)
//babel is converting JSX to React.createElement

const elem = <span>This is React element</span>;

//React Functional Components
const Title = () => (
  <h1 className="head" tabIndex="5">
    Hello there, Abhishek
  </h1>
);

//React Component
const title2 = (
  <h1 className="head" tabIndex="5">
    {elem}
    Hello there, This is React Component
  </h1>
);

//React Functional Components=> This can be defined as a function that returns the JSX Code/React element that become the Functional Component

const HeadingComponent1 = () => (
  <div>
    {title2}
    {<Title />}
    <h1 className="heading">This line is React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent1 />); //Rendering




