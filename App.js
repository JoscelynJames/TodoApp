/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleProvider} from 'native-base';
import TaskPage from './Components/TaskPage';
import AppBar from './Components/AppBar';
import getTheme from './native-base-theme/components';
import lightTheme from './native-base-theme/variables/commonColor';
import darkTheme from './native-base-theme/variables/darkTheme';
import theme from './theme';

export default class App extends Component {
  state = {lightTheme: false};

  toggleTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}));
    console.log('toggle theme app js', this.state);
  };

  render() {
    return (
      <Fragment>
        <StatusBar
          barStyle={this.state.lightTheme ? 'dark-content' : 'light-content'}
        />
        <StyleProvider
          style={getTheme(this.state.lightTheme ? lightTheme : darkTheme)}>
          <AppBar
            lightTheme={this.state.lightTheme}
            toggleTheme={() => this.toggleTheme()}></AppBar>
        </StyleProvider>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  lightBackground: {
    backgroundColor: theme.lightBackground,
  },

  darkBackground: {
    backgroundColor: theme.darkBackground,
  },
});
