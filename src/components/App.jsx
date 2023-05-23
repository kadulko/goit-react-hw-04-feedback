import Feedback from './Section';

export const App = () => {
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
      <Feedback title="Please leave feedback" />
    </div>
  );
};
