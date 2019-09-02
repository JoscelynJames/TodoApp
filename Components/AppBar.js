import React, {Component} from 'react';
import {StyleSheet, Image, Switch} from 'react-native';
import {
  Header,
  Container,
  Content,
  H1,
  Left,
  Right,
  Body,
  Title,
  Text,
  Footer,
  Button,
  FooterTab,
  Icon,
} from 'native-base';
import theme from '../theme';
import TodoListIcon from '../assets/icons/todoListIcon.png';
import AddTask from './AddTask';

export default class AppBar extends Component {
  toggleTheme = () => {
    this.props.toggleTheme();
  };

  render() {
    return (
      <Container>
        <Header style={styles.appBar}>
          <Body>
            <H1 style={styles.appName}>TodoApp</H1>
          </Body>
          <Right>
            <Switch
              style={styles.themeToggle}
              onChange={this.toggleTheme}></Switch>
          </Right>
        </Header>
        <Content styles={styles.mainContent}>
          <AddTask></AddTask>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  appBar: {
    height: 90,
    backgroundColor: theme.accentColor,
  },

  appName: {
    color: theme.textColor,
  },

  icon: {
    height: 95,
    marginLeft: 20,
    marginBottom: 20,
  },

  themeToggle: {
    marginRight: 20,
  },

  mainContent: {
    backgroundColor: 'red',
    marginTop: 100,
  },
});
