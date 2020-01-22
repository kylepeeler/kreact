// Using rest here forces an array
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      // React doesn't wrap primitive values or create empty arrays when there
      // is not children, but we do it because it will simplify our code
      // for our library simpler > performant code
      children: children.map(child =>
        typeof child === "object" ? child : createTextElement(child)
      )
    }
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
}

function render(element, container) {
  const dom =
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  const isPropertyNotChildren = key => key !== "children";
  Object.keys(element.props)
    .filter(isPropertyNotChildren)
    .forEach(name => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach(child => render(child, dom));

  container.appendChild(dom);
}

const Kreact = {
  createElement,
  render
};

/** @jsx Kreact.createElement */
const element = (
  <div style="background: salmon">
    <h1>Hello World</h1>
    <h2 style="text-align: right">from Kreact</h2>
  </div>
);

const container = document.getElementById("root");
Kreact.render(element, container);

/* 
Equivalent to:

const element = (
  <div id="foo">
     <a>bar</a>
     <b />
  </div>
);

const container = document.getElementById("root");
ReactDOM.render(element, container);
*/
