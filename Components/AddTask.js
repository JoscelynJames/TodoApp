import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import theme from '../theme';

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      text: 'What needs to get done?',
    };
  }

  onAddPress = () => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, prevState.text],
      text: "what's next?",
    }));
  };

  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  taskInput: {
    width: '70%',
    height: 40,
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
});
