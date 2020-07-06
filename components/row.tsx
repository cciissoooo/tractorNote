import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { Card } from "./card";
import { Suit } from "../constants";
import { PlayerStatus } from "./player_status";

type RowState = {};

type RowProps = {
  suit: Suit;
  resetSignal?: boolean;
  target?: string;
  targetSuit?: Suit;
  hideOthers?: boolean;
  onTargetSuitClick: (targetSuit: Suit) => any;
};

const alwaysShowArray: string[] = ["A", "K", "Q", "J", "10", "5"];

export class Row extends Component<RowProps, RowState> {
  state = {};

  getBackgroundColor() {
    const { suit, targetSuit } = this.props;
    if (targetSuit) {
      if (suit == targetSuit) {
        return "#ffffcc";
      }
    }
    switch (this.props.suit) {
      case Suit.HEART:
        return "#ffe6ee";
      case Suit.SPADE:
        return "#cfe2cf";
      case Suit.DIAMOND:
        return "#ffe6ee";
      case Suit.CLUB:
        return "#cfe2cf";
    }
  }

  isTextColorRed() {
    switch (this.props.suit) {
      case Suit.HEART:
        return true;
      case Suit.SPADE:
        return false;
      case Suit.DIAMOND:
        return true;
      case Suit.CLUB:
        return false;
    }
  }

  getSuitSource() {
    switch (this.props.suit) {
      case Suit.HEART:
        return require("../assets/heart.png");
      case Suit.SPADE:
        return require("../assets/spade.png");
      case Suit.DIAMOND:
        return require("../assets/diamond.png");
      case Suit.CLUB:
        return require("../assets/club.png");
    }
  }

  show(value: string): boolean {
    const { target, hideOthers } = this.props;
    if (!hideOthers) {
      return true;
    }

    let showArray = alwaysShowArray;
    if (target && target !== "clear") {
      showArray = alwaysShowArray.concat([target]);
    }

    return showArray.includes(value);
  }

  onSuitClick = () => {
    this.props.onTargetSuitClick(this.props.suit);
  };

  render() {
    const source = this.getSuitSource();
    const bg = this.getBackgroundColor();
    const isTextColorRed = this.isTextColorRed();
    const { resetSignal, target } = this.props;

    return (
      <View
        style={{
          marginTop: 5,
          backgroundColor: bg,
          flexDirection: "row",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={this.onSuitClick}>
            <Image style={[styles.icon, {}]} source={source} />
          </TouchableOpacity>

          <View>
            <View style={styles.rowContainer}>
              {this.show("A") && (
                <React.Fragment>
                  <Card
                    value={"A"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "A"}
                  />
                  <Card
                    value={"A"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "A"}
                  />
                </React.Fragment>
              )}

              {this.show("K") && (
                <React.Fragment>
                  <Card
                    value={"K"}
                    red={isTextColorRed}
                    isScore
                    resetSignal={resetSignal}
                    isTarget={target == "K"}
                  />
                  <Card
                    value={"K"}
                    red={isTextColorRed}
                    isScore
                    resetSignal={resetSignal}
                    isTarget={target == "K"}
                  />
                </React.Fragment>
              )}

              {this.show("Q") && (
                <React.Fragment>
                  <Card
                    value={"Q"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "Q"}
                  />
                  <Card
                    value={"Q"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "Q"}
                  />
                </React.Fragment>
              )}

              {this.show("J") && (
                <React.Fragment>
                  <Card
                    value={"J"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "J"}
                  />
                  <Card
                    value={"J"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "J"}
                  />
                </React.Fragment>
              )}

              {this.show("10") && (
                <React.Fragment>
                  <Card
                    value={"10"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "10"}
                    isScore
                  />
                  <Card
                    value={"10"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "10"}
                    isScore
                  />
                </React.Fragment>
              )}

              {this.show("9") && (
                <React.Fragment>
                  <Card
                    value={"9"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "9"}
                  />
                  <Card
                    value={"9"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "9"}
                  />
                </React.Fragment>
              )}

              {this.show("8") && (
                <React.Fragment>
                  <Card
                    value={"8"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "8"}
                  />
                  <Card
                    value={"8"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "8"}
                  />
                </React.Fragment>
              )}
            </View>

            <View style={styles.rowContainer}>
              {this.show("7") && (
                <React.Fragment>
                  <Card
                    value={"7"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "7"}
                  />
                  <Card
                    value={"7"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "7"}
                  />
                </React.Fragment>
              )}

              {this.show("6") && (
                <React.Fragment>
                  <Card
                    value={"6"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "6"}
                  />
                  <Card
                    value={"6"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "6"}
                  />
                </React.Fragment>
              )}

              {this.show("5") && (
                <React.Fragment>
                  <Card
                    value={"5"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "5"}
                    isScore
                  />
                  <Card
                    value={"5"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "5"}
                    isScore
                  />
                </React.Fragment>
              )}

              {this.show("4") && (
                <React.Fragment>
                  <Card
                    value={"4"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "4"}
                  />
                  <Card
                    value={"4"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "4"}
                  />
                </React.Fragment>
              )}

              {this.show("3") && (
                <React.Fragment>
                  <Card
                    value={"3"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "3"}
                  />
                  <Card
                    value={"3"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "3"}
                  />
                </React.Fragment>
              )}

              {this.show("2") && (
                <React.Fragment>
                  <Card
                    value={"2"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "2"}
                  />
                  <Card
                    value={"2"}
                    red={isTextColorRed}
                    resetSignal={resetSignal}
                    isTarget={target == "2"}
                  />
                </React.Fragment>
              )}
            </View>
          </View>
        </View>

        <View
          style={{
            marginLeft: 10,
            borderLeftWidth: 1,
            borderColor: "grey",
            paddingLeft: 10,
          }}
        >
          <View style={{ marginLeft: 20 }}>
            <PlayerStatus value={"上没"} resetSignal={resetSignal} />
          </View>

          <View style={{ flexDirection: "row" }}>
            <PlayerStatus value={"左没"} resetSignal={resetSignal} />
            <PlayerStatus value={"右没"} resetSignal={resetSignal} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 5,
    width: 24,
    height: 24,
    marginTop: 20,
  },
});
