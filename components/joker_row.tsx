import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "./card";

type Props = {
  resetSignal?: boolean;
};

type State = {};

export class JokerRow extends Component<Props, State> {
  render() {
    const customStyle = { width: 50 };
    const { resetSignal } = this.props;
    return (
      <View style={styles.rowContainer}>
        <Card
          value={"大王"}
          red={true}
          customStyle={customStyle}
          resetSignal={resetSignal}
        />
        <Card
          value={"大王"}
          red={true}
          customStyle={customStyle}
          resetSignal={resetSignal}
        />
        <Card
          value={"小王"}
          customStyle={customStyle}
          resetSignal={resetSignal}
        />
        <Card
          value={"小王"}
          customStyle={customStyle}
          resetSignal={resetSignal}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
  },
});
