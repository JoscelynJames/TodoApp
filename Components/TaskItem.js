import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import theme from '../theme';
import completeIcon from '../assets/icons/complete.png';

export default class TaskItem extends Component {
  state = {
    fadeOutAnimation: new Animated.Value(1),
    doAnimation: false,
  };

  handleCompletePress = () => {
    this.setState({doAnimation: true});

    Animated.timing(this.state.fadeOutAnimation, {
      toValue: 0,
      duration: 1000,
    }).start();

    setTimeout(() => {
      this.setState({doAnimation: false});
      this.props.completeTask(this.props.task);
    }, 1500);
  };

  render() {
    const {fadeOutAnimation, doAnimation} = this.state;

    return (
      <Animated.View
        style={{
          ...styles.taskItemContainer,
          opacity: doAnimation ? fadeOutAnimation : null,
        }}>
        <Text style={styles.task}>{this.props.task}</Text>
        <TouchableOpacity onPress={this.handleCompletePress}>
          <Image style={styles.icons} source={completeIcon} />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  taskItemContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },

  task: {
    fontSize: 18,
    width: '90%',
    color: theme.iconColor,
  },

  icons: {
    height: 15,
    width: 15,
    marginLeft: 10,
  },
});
