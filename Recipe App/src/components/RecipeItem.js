import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Card from "./common/Card";
import Button from "./common/Button";

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  }
});
export default class RecipeItem extends Component {
  goToDetails = () => {
    const { navigation, item } = this.props;
    navigation.navigate("Details", { item: item });
  };
  render() {
    const { item } = this.props;
    return (
      <Card>
        <Image
          style={{
            flex: 1,
            height: 250,
            width: "100%",
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7
          }}
          resizeMode="cover"
          source={{ uri: item.image_url }}
        />
        <View style={{ marginVertical: 20, marginHorizontal: 10 }}>
          <View style={styles.details}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
              {item.title}
            </Text>
          </View>
          <Text style={{ color: "#666" }}>
            <Text style={{ fontStyle: "italic" }}>published by </Text>
            <Text style={{ fontWeight: "bold" }}>{item.publisher}</Text>
          </Text>
        </View>
        <Button onPressButton={this.goToDetails} title={"View Details"} />
      </Card>
    );
  }
}
