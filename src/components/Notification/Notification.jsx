import PropTypes from 'prop-types';
import React from 'react';
import style from './Notification.module.css';

const Notification = props => {
  const { message } = props;

  return <div className={style.notification}>{message}</div>;
};

Notification.propTypes = { message: PropTypes.string };

export default Notification;
