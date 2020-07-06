import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export interface Props {
  value: string;
  red?: boolean;
  isScore?: boolean;
  customStyle?: any;
  resetSignal?: boolean;
  isTarget?: boolean;
}

type State = {
  seen?: boolean;
};

export class Card extends Component<Props, State> {
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
    const { isTarget } = this.props;
    const { seen } = this.state;
    if (seen) {
      return "grey";
    } else if (isTarget) {
      return "yellow";
    } else {
      return "white";
    }
  }

  render() {
    const { isScore } = this.props;
    const borderRadius = isScore ? 16 : 0;
    const bg = this.getBackgroundColor();

    return (
      <TouchableOpacity
        style={[
          styles.card,
          {
            backgroundColor: bg,
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
    width: 32,
    height: 32,
    alignItems: "center",
    margin: 5,
    borderWidth: 1,
    borderColor: "grey",
    justifyContent: "center",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
