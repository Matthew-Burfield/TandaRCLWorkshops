import React from "react";

class GiveFullName extends React.Component {
  state = { firstName: "Matt", lastName: "Burfield" };
  setFirstName = firstName => {
    this.setState({
      firstName
    });
  };
  setLastName = lastName => {
    this.setState({
      lastName
    });
  };
  render() {
    this.props.children({
      fullName: `${this.state.firstName} ${this.state.lastName}`,
      setFirstName: this.setFirstName,
      setLastName: this.setLastName
    });
  }
}

const consumer = () => {
  <GiveFullName>
    {({ fullName, setFirstName, setLastName }) => {
      return (
        <React.Fragment>
          <p>Hello, {fullName}</p>
          <button
            onClick={() => {
              setFirstName("Ben");
            }}
          >
            Update name
          </button>
        </React.Fragment>
      );
    }}
  </GiveFullName>;
};

children("Matt");

function children(name) {
  return name;
}

() => {};
