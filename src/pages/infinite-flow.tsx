import React from "react";
import "../styles/infinite-flow.scss";

export default class InfiniteFlow extends React.Component {
  constructor(props) {
    super(props);

    this.updatePosition = this.updatePosition.bind(this);
  }

  componentDidMount() {
    var box: HTMLDivElement | null = document.getElementsByClassName(
      "box"
    )[0] as HTMLDivElement;
    if (box) {
      box.style.setProperty("--position", "3");
    }
  }

  updatePosition = (index) => {
    var box: HTMLDivElement | null = document.getElementsByClassName(
      "box"
    )[0] as HTMLDivElement;
    if (box) {
      box.style.setProperty("--position", index);
    }
  };

  render() {
    const index = [1, 2, 3, 4, 5];

    return (
      <div className="infinite-div">
        <div className="shell">
          {index.map((i) => (
            <input
              type="radio"
              name="position"
              onClick={() => this.updatePosition(i)}
              defaultChecked={i === 3}
            />
          ))}
          <div className="box">
            {index.map((i) => (
              <div
                className="item"
                style={{ "--offset": i } as React.CSSProperties}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
