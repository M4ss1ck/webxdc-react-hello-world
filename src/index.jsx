const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className="text-xl font-bold text-red-600">Hello World</h1>
      <p>Made using React + Tailwind CSS</p>
    </div>
  );
};

const domContainer = document.querySelector("#react-code");
ReactDOM.render(React.createElement(App), domContainer);
