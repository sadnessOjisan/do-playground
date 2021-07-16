import { render } from "react-dom";

const f = () => 3;

let x = do {
  let tmp = f();
  tmp * tmp + 1;
};

console.log(x);

const Component = (props) => (
  <div className="myComponent">
    {do {
      if (props.color === "blue") {
        <div style={{ color: "blue" }}>blue </div>;
      } else if (props.color === "red") {
        <div style={{ color: "red" }}>red </div>;
      } else if (props.color === "blue") {
        <div style={{ color: "blue" }}>blue </div>;
      } else {
        // assertNever とかができる！
      }
    }}
  </div>
);

const Root = () => {
  return (
    <div>
      <Component color="red" />
    </div>
  );
};

render(<Root />, document.getElementById("root"));
