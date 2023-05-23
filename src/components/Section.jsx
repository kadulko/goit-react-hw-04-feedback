import PropTypes from 'prop-types';
import React, { Component } from 'react';

import css from './Section.module.css';
import Statistics from './Statistics';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';

export class Section extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

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

  render(props) {
    const { title } = this.props;
    return (
      <div className={css['feedback-form']}>
        <h4 className={css['form-header']}>{title}</h4>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
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
