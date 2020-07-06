import React, { Component } from "react";
import { Text, Alert, TouchableOpacity, View, StyleSheet } from "react-native";
import { Suit } from "../constants";
import { Row } from "./row";
import { JokerRow } from "./joker_row";
import { TargetRow } from "./target_row";

type State = {
  resetSignal: boolean;
  target: string;
  targetSuit?: Suit;
  hideOthers: boolean;
};

type Props = {
  onResetClick?: () => any;
};

export class Tractor extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      resetSignal: false,
      hideOthers: false,
      target: "2",
      targetSuit: undefined,
    };
  }

  render() {
    const { resetSignal } = this.state;

    return (
      <View style={styles.container}>
        <Row
          suit={Suit.HEART}
          {...this.state}
          onTargetSuitClick={this.onChooseTargetSuit}
        />
        <Row
          suit={Suit.SPADE}
          {...this.state}
          onTargetSuitClick={this.onChooseTargetSuit}
        />
        <Row
          suit={Suit.DIAMOND}
          {...this.state}
          onTargetSuitClick={this.onChooseTargetSuit}
        />
        <Row
          suit={Suit.CLUB}
          {...this.state}
          onTargetSuitClick={this.onChooseTargetSuit}
        />

        <View style={styles.rowContainer}>
          <JokerRow resetSignal={resetSignal} />

          <TouchableOpacity
            style={[styles.submitButton]}
            onPress={this.onResetClick}
          >
            <Text style={styles.submitButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.rowContainer, { backgroundColor: "#e6e6ff" }]}>
          <Text style={{ alignSelf: "center", marginLeft: 20, fontSize: 20 }}>
            打几？
          </Text>
          <TargetRow
            onChooseTarget={this.onChooseTarget}
            target={this.state.target}
          />
          <TouchableOpacity
            style={[styles.submitButton]}
            onPress={this.onHideOthersClick}
          >
            <Text style={styles.submitButtonText}>
              {this.state.hideOthers ? "Show All" : "Hide others"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  onResetClick = () => {
    Alert.alert(
      "Are you sure to reset?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            this.setState({
              resetSignal: !this.state.resetSignal,
              targetSuit: undefined,
            });
          },
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  onHideOthersClick = () => {
    this.setState({ hideOthers: !this.state.hideOthers });
  };

  onChooseTarget = (target: string) => {
    this.setState({ target: target });
  };

  onChooseTargetSuit = (targetSuit: Suit) => {
    this.setState({ targetSuit: targetSuit });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
