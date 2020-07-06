import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export interface Props {
  value: string;
  resetSignal?: boolean;
  selected?: boolean;
  onChooseTarget: (value: string) => any;
}

type State = {};

export class Target extends Component<Props, State> {
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

  getBackgroundColor() {
    const { selected } = this.props;
    if (selected) {
      return "yellow";
    } else {
      return "white";
    }
  }

  render() {
    const bg = this.getBackgroundColor();

    return (
      <TouchableOpacity
        style={[
          styles.card,
          {
            backgroundColor: bg,
          },
        ]}
        onPress={this.onClick}
      >
        <Text style={[styles.cardText, { color: "black" }]}>
          {this.props.value}
        </Text>
      </TouchableOpacity>
    );
  }

  onClick = () => {
    this.props.onChooseTarget(this.props.value);
  };
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "pink",
    width: 32,
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
