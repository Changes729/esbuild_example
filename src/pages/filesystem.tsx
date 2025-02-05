import React from "react";

export default class FileSystemTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directoryHandle: null,
    };
  }

  async getDir() {
    const directoryHandle = await window.showDirectoryPicker();
    this.setState({ directoryHandle });
    console.log(directoryHandle);
    for await (let [name, handle] of directoryHandle.entries()) {
      console.log(name, handle);
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>FileSystem Test</h1>
        <p>Directory: {this.state.directoryHandle?.name}</p>
        <button onClick={() => this.getDir()}>Get Directory</button>
      </div>
    );
  }
}
