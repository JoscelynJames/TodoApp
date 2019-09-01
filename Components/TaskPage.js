import React, {Component, Fragment} from 'react';
import AppBar from './AppBar';
import AddTask from './AddTask';

export default class TaskPage extends Component {
  render() {
    return (
      <Fragment>
        <AppBar></AppBar>
        <AddTask></AddTask>
      </Fragment>
    );
  }
}
