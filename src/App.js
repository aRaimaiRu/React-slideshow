import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  state = {
    picturelist: [
      { id: 0, src: "./test.jpg" },
      { id: 1, src: "./test2.png" },
      { id: 2, src: "./test3.png" },
    ],
    current: 1,
  };

  handleClick = (number) => () => {
    this.setState((state) => ({
      ...state,
      current:
        (state.current + number) % 3 == -1
          ? state.picturelist.length - 1
          : (state.current + number) % 3,
    }));
  };

  render() {
    return (
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          {this.state.picturelist.map(
            (picture, idx) =>
              this.state.current == picture.id && (
                <img key={idx} src={picture.src} style={{ maxWidth: "100%" }} />
              )
          )}
        </div>
        <div className="col-sm-4">
          <button onClick={this.handleClick(-1)}>Prev</button>
          <button onClick={this.handleClick(1)}>Next</button>
        </div>
      </div>
    );
  }
}

export default App;
