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
    const data = [
      { id: 1, posicao: 1, score: 10, name: "Vinicius " },
      { id: 2, posicao: 2, score: 220, name: "Filipi Souza" },
      { id: 3, posicao: 3, score: 30, name: "Matheus Souza" },
      { id: 4, posicao: 4, score: 10, name: "Vinicius " },
      { id: 5, posicao: 5, score: 220, name: "Filipi Souza" },
      { id: 6, posicao: 6, score: 30, name: "Matheus Souza" },
      { id: 7, posicao: 7, score: 30, name: "Matheus Souza" },
      { id: 8, posicao: 8, score: 30, name: "Matheus Souza" }
    ];

    this.setState({ data, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <Item user={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;
    const first = data.shift();
    return (
      <View>
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
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
