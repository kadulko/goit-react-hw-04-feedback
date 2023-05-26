import Feedback from './Section';

export const App = () => {
  let state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 35,
        color: '#010101',
      }}
    >
      <Feedback state={state} title="Please leave feedback" />
    </div>
  );
};
