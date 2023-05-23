import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Notification.module.css';

export class Notification extends Component {
  static propTypes = {};

  render(props) {
    const { message } = this.props;
    return <div className={css.notification}>{message}</div>;
  }
}

export default Notification;
