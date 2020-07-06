import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Target } from "./target";

type State = {};

type Props = {
  target: string;
  resetSignal?: boolean;
  onChooseTarget: (target: string) => any;
};

export class TargetRow extends Component<Props, State> {
  render() {
    const { resetSignal, target, onChooseTarget } = this.props;

    return (
      <View style={{ marginTop: 8 }}>
        <View style={styles.rowContainer}>
          <Target
            value={"2"}
            resetSignal={resetSignal}
            onChooseTarget={onChooseTarget}
            selected={target == "2"}
          />
          <Target
            value={"3"}
            resetSignal={resetSignal}
            onChooseTarget={onChooseTarget}
            selected={target == "3"}
          />
          <Target
            value={"4"}
            resetSignal={resetSignal}
            onChooseTarget={onChooseTarget}
            selected={target == "4"}
          />
          <Target
            value={"5"}
            resetSignal={resetSignal}
            onChooseTarget={onChooseTarget}
            selected={target == "5"}
          />
          <Target
            value={"6"}
            resetSignal={resetSignal}
            onChooseTarget={onChooseTarget}
            selected={target == "6"}
          />
          <Target
            value={"7"}
            resetSignal={resetSignal}
            onChooseTarget={onChooseTarget}
            selected={target == "7"}
          />
          <Target
            value={"8"}
            resetSignal={resetSignal}
            onChooseTarget={onChooseTarget}
            selected={target == "8"}
          />
          <Target
            value={"9"}
            resetSignal={resetSignal}
            onChooseTarget={onChooseTarget}
            selected={target == "9"}
          />
          <Target
            value={"10"}
            resetSignal={resetSignal}
            onChooseTarget={onChooseTarget}
            selected={target == "10"}
          />
          <Target
            value={"J"}
            resetSignal={resetSignal}
            onChooseTarget={onChooseTarget}
            selected={target == "J"}
          />
          <Target
            value={"Q"}
            resetSignal={resetSignal}
            onChooseTarget={onChooseTarget}
            selected={target == "Q"}
          />
          <Target
            value={"K"}
            resetSignal={resetSignal}
            onChooseTarget={onChooseTarget}
            selected={target == "K"}
          />
          <Target
            value={"A"}
            resetSignal={resetSignal}
            onChooseTarget={onChooseTarget}
            selected={target == "A"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
  },
});
