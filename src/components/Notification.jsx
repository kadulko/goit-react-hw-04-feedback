import PropTypes from 'prop-types';
import React, { Component } from 'react';
import style from './Notification.module.css';

export class Notification extends Component {
  static propTypes = { message: PropTypes.string };

  render(props) {
    const { message } = this.props;
    return <div className={style.notification}>{message}</div>;
  }
}

export default Notification;
