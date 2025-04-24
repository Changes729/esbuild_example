import React from "react";
import p5 from "p5";

class App extends React.Component {
  myRef;
  myP5;

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p) => {
    p.setup = () => {
      // Create the canvas
      p.createCanvas(710, 400);

      // Set background to black
      p.background(0);

      // Set width of the lines
      p.strokeWeight(10);

      // Set color mode to hue-saturation-brightness (HSB)
      p.colorMode(p.HSB);

      // Set screen reader accessible description
      p.describe("A blank canvas where the user draws by dragging the mouse");
    };


    p.mouseDragged = () => {
      // Set the color based on the mouse position, and draw a line
      // from the previous position to the current position
      let lineHue = p.mouseX - p.mouseY;
      p.stroke(lineHue, 90, 90);
      p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
    }

  };

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return <div ref={this.myRef}></div>;
  }
}

export default App;
