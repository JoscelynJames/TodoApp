import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import theme from '../theme';
import completeIcon from '../assets/icons/complete.png';
import deleteIcon from '../assets/icons/remove.png';

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
  }

  handleCompletePress = () => {
    this.props.completeTask(this.props.task);
  };

  render() {
    return (
      <View style={styles.taskItemContainer}>
        <Text style={styles.task}>{this.props.task}</Text>
        <TouchableOpacity onPress={this.handleCompletePress}>
          <Image style={styles.icons} source={completeIcon} />
        </TouchableOpacity>
      </View>
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
  },

  icons: {
    height: 15,
    width: 15,
    marginLeft: 10,
  },
});
