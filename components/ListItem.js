import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';


export const ListItem = ({ title, author, image }) => {
  return (
      <View style={styles.itemContainer}>
        <View style={styles.leftContaienr}>
          <Image
            style={{ width:100,height:100, }}
            source={{uri: image,}}
          />
        </View>
        <View style={styles.rightContaienr} >
          <Text numberOfLines={3} style={styles.text}>
            {title}
          </Text>
              <Text style={styles.subText}>{author}</Text>
        </View>
      </View>
  )
}



const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection:'row',
  },
  leftContaienr: {
    width: 100,
  },
  rightContaienr: {
    flex: 1,
    padding: 8,
    justifyContent:'space-evenly'
  },
  text: {
    fontSize:16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});
