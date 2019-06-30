import React from "react";

import { View, Text, Image } from "react-native";
import styles from "./styles";

const firstItem = ({ user }) => (
  <View style={styles.container}>
    {<Text style={styles.name}>{user.name}</Text>}
    <View sytle={styles.box_avatar}>
      <Image
        source={{
          uri: "http://www.sclance.com/pngs/png-avatar/png_avatar_1049041.png"
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
