import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { ListItem } from "./components/ListItem";
import articles from './dummies/article';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            author={item.author}
            image={item.urlToImage}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
