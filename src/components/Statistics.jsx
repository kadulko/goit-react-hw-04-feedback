import PropTypes from 'prop-types';
import React, { Component } from 'react';
import style from './Statistics.module.css';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render(props) {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className={style.statistics}>
        <h4>Statistics</h4>
        <div className={style.feedback}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </div>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
}

export default Statistics;
