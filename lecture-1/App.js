const heading1 = React.createElement("h1", {id:"title1"}, "Heading 1");

const heading2 = React.createElement("h2", {id:"title2"}, "Heading 2");

console.log(heading1);

const container = React.createElement("div", {id:"container"},  [heading1,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
 
// Passing a react element inside the root.
// root.render(heading1);
root.render(container);