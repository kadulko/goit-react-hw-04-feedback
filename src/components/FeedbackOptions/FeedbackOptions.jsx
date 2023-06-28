import PropTypes from 'prop-types';
import React from 'react';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  return (
    <div className={style.buttons}>
      {options.map(option => (
        <button
          className={style.button}
          type="button"
          key={option.name}
          style={{ backgroundColor: option.color }}
          id={option.name}
          onClick={onLeaveFeedback}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = { state: PropTypes.object };

export default FeedbackOptions;
