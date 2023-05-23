import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Statistics.module.css';

export class Statistics extends Component {
  static propTypes = {};

  render(props) {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className={css.statistics}>
        <h4>Statistics</h4>
        <div className={css.feedback}>
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
