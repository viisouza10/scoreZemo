import React, { Component } from "react";

import {
  View,
  StatusBar,
  ActivityIndicator,
  FlatList,
  Text
} from "react-native";
import Item from "./Item";
import FirstItem from "./FirstItem";

import styles from "./styles";
import { colors } from "~/styles";

import api from "~/services/api";

export default class Main extends Component {
  state = {
    data: [],
    loading: true,
    refreshing: false
  };

  componentDidMount() {
    this.getScore();
  }

  getScore = async () => {
    let { data } = await api.get(`/GetUserScoreTrello`);
    data = data.data;
    this.setState({ data, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <Item user={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;
    const first = data.shift();
    return (
      <View>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.secundary}
          translucent
        />
        <FirstItem user={first} />
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          onRefresh={this.getScore}
          refreshing={refreshing}
          style={styles.ranking}
        />
      </View>
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
