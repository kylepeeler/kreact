const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);

const container = document.getElementById("root");
ReactDOM.render(element, container);
                                    // Using rest here forces an array
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children
    },
  }
}

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
