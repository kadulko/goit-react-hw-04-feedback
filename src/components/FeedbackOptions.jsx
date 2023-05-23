import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  static propTypes = {};

  render(props) {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={css.buttons}>
        {options.map(option => (
          <button
            className={css.button}
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

export default FeedbackOptions;
