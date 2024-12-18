import React from "react";
import svg from "../../public/static/pure_test.svg";

export default class SvgObj extends React.Component {
  componentDidMount() {
    let circle_1 = document.getElementById("path1");
    let circle_2 = document.getElementById("path1-9");

    circle_1!.onclick = () => {
      console.log("click 1");
    };

    circle_2!.onclick = () => {
      console.log("click 2");
    };
  }

  render() {
    return <div dangerouslySetInnerHTML={{ __html: svg }} />;
  }
}
