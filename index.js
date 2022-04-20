var App = function App() {
  return React.createElement(
    "div",
    { className: "flex flex-col items-center justify-center h-[100vh]" },
    React.createElement(
      "h1",
      { className: "text-xl font-bold text-red-600" },
      "Hello World"
    ),
    React.createElement(
      "p",
      null,
      "Made using React + Tailwind CSS"
    )
  );
};

var domContainer = document.querySelector("#react-code");
ReactDOM.render(React.createElement(App), domContainer);