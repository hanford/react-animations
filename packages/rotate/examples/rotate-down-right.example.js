import React from "react";
import { RotateDownRight } from "../src";

export let name = "<RotateDownRight />";

export class Example extends React.Component {
  state = {
    reveal: false
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ reveal: !this.state.reveal })}>
          Reveal
        </button>

        <RotateDownRight reveal={this.state.reveal}>
          <div
            style={{
              maxWidth: 300,
              border: "1px solid gray",
              padding: 8,
              marginTop: 8,
              width: 300
            }}
          >
            <h1>React Component</h1>
          </div>
        </RotateDownRight>
      </React.Fragment>
    );
  }
}
