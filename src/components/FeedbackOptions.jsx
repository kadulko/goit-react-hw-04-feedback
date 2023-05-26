import PropTypes from 'prop-types';
import React, { Component } from 'react';
import style from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render(props) {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={style.buttons}>
        {options.map(option => (
          <button
            className={style.button}
            type="button"
            key={option}
            id={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = { state: PropTypes.object };

export default FeedbackOptions;
