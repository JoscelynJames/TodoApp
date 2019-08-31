import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import theme from '../theme';
import TodoListIcon from '../assets/icons/todoListIcon.png';

export default class AppBar extends Component {
  render() {
    return (
      <View style={styles.appBar}>
        <Image style={styles.icon} source={TodoListIcon}></Image>
        <Text style={styles.appName}>TodoApp</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appBar: {
    height: 90,
    padding: 10,
    backgroundColor: theme.mainColor,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  appName: {
    color: theme.textColor,
    fontSize: 22,
    width: '80%',
    textAlign: 'center',
  },

  icon: {
    height: 60,
    width: 50,
  },
});
