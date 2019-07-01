import React from "react";

import { View, Text, Image } from "react-native";
import styles from "./styles";

const firstItem = ({ user }) => (
  <View style={styles.container}>
    {<Text style={styles.name}>{user.nome}</Text>}
    <View sytle={styles.box_avatar}>
      <Image
        source={{
          uri: `https://github.com/${user.github}.png?size=300`
        }}
        style={styles.avatar}
      />
      <View style={styles.score}>
        <Text style={styles.score_txt}>{user.score}</Text>
      </View>
    </View>
  </View>
);

export default firstItem;
