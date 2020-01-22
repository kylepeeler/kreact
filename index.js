// React.createElement converts JSX -> JSON, simplified output:
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
};

// ReactDOM.render(element, container);
const container = document.getElementById("root");

const node = document.createElement(element.type)
node["title"] = element.props.title

// Using textNode instead of innerText will allow us to treat all elements the same way later
const text = document.createTextNode("")
text["nodeValue"] = element.props.children // Similar to line 14

node.appendChild(text)
container.appendChild(node)
