import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import TaskItem from './TaskItem';
import theme from '../theme';

export default class AddTask extends Component {
  state = {
    tasks: ['Take out the trash', 'Get dog food', 'Write test for this app'],
    text: 'What needs to get done?',
  };

  onAddPress = () => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, prevState.text],
      text: "What's next?",
    }));
  };

  completeTask = task => {
    const tasks = this.state.tasks.filter(t => t !== task);
    this.setState({tasks});
  };

  render() {
    return (
      <Fragment>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.taskInput}
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
          <TouchableOpacity style={styles.addButton} onPress={this.onAddPress}>
            <Text style={styles.addButtonLabel}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.taskContainer}>
          {this.state.tasks.map((task, i) => {
            return (
              <TaskItem
                key={i}
                task={task}
                completeTask={() => this.completeTask(task)}></TaskItem>
            );
          })}
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  taskInput: {
    width: '70%',
    height: 30,
    color: theme.iconColor,
  },

  addButton: {
    backgroundColor: theme.accentColor,
    borderRadius: 3,
    height: 30,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonLabel: {
    color: theme.textColor,
    fontSize: 15,
  },

  taskContainer: {
    padding: 50,
  },
});
