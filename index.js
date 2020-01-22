const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);

const container = document.getElementById("root");
ReactDOM.render(element, container);

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
