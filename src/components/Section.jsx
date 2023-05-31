import PropTypes from 'prop-types';
import React, { Component } from 'react';

import style from './Section.module.css';
import Statistics from './Statistics';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  };

  state = this.props.stats;

  options = [
    { name: 'good', color: 'green' },
    { name: 'neutral', color: 'goldenrod' },
    { name: 'bad', color: 'firebrick' },
  ];

  addFeedback = evt => {
    const { id } = evt.target;

    this.setState(state => {
      return { [id]: this.state[id] + 1 };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, num) => acc + num, 0);

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    return (
      <div className={style['feedback-form']}>
        <h4 className={style['form-header']}>{this.props.title}</h4>
        <FeedbackOptions
          options={this.options}
          onLeaveFeedback={this.addFeedback}
        />
        {this.countTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </div>
    );
  }
}

export default Section;
