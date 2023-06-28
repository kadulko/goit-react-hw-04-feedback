import PropTypes from 'prop-types';
import React, { useState } from 'react';

import style from './Section.module.css';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

const Section = props => {
  const [stats, setStats] = useState({ ...props.stats });

  const options = [
    { name: 'good', color: 'green' },
    { name: 'neutral', color: 'goldenrod' },
    { name: 'bad', color: 'firebrick' },
  ];

  const addFeedback = evt => {
    const { id } = evt.target;

    setStats(prevStats => {
      return { ...prevStats, [id]: prevStats[id] + 1 };
    });
  };

  const totalFeedback = Object.values(stats).reduce((acc, num) => acc + num, 0);
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((stats.good / totalFeedback) * 100)
    : 0;

  return (
    <div className={style['feedback-form']}>
      <h4 className={style['form-header']}>{props.title}</h4>
      <FeedbackOptions options={options} onLeaveFeedback={addFeedback} />
      {totalFeedback ? (
        <Statistics
          good={stats.good}
          neutral={stats.neutral}
          bad={stats.bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Section;
