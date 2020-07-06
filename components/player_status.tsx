import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export interface Props {
  value: string;
  red?: boolean;
  isScore?: boolean;
  customStyle?: any;
  resetSignal?: boolean;
}

type State = {
  seen?: boolean;
};

export class PlayerStatus extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      seen: false,
    };
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.props.resetSignal != prevProps.resetSignal) {
      this.setState({
        seen: false,
      });
    }
  }

  render() {
    const borderRadius = this.props.isScore ? 16 : 0;
    return (
      <TouchableOpacity
        style={[
          styles.card,
          {
            backgroundColor: this.state.seen ? "grey" : "white",
            borderRadius: borderRadius,
          },
          this.props.customStyle,
        ]}
        onPress={this.onClick}
      >
        <Text
          style={[styles.cardText, { color: this.props.red ? "red" : "black" }]}
        >
          {this.props.value}
        </Text>
      </TouchableOpacity>
    );
  }

  onClick = () => {
    const seen = this.state.seen;
    this.setState({ seen: !seen });
  };
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "pink",
    width: 40,
    height: 32,
    alignItems: "center",
    margin: 5,
    borderWidth: 1,
    borderColor: "grey",
    justifyContent: "center",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
