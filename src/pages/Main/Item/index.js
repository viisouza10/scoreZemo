import React from "react";
import PropTypes from "prop-types";

import { View, Text, Image } from "react-native";

import styles from "./styles";

const Item = ({ user }) => (
  <View style={styles.container}>
    <Text style={styles.position}>{user.posicao}.</Text>
    <Image
      source={{
        uri: "http://www.sclance.com/pngs/png-avatar/png_avatar_1049041.png"
      }}
      style={styles.avatar}
    />
    <Text style={styles.name}>{user.name}</Text>
    <Text style={styles.score}>{user.score}</Text>
  </View>
);

Item.protoTypes = {
  user: PropTypes.shape({
    nome: PropTypes.string
  }).isRequired
};
export default Item;
