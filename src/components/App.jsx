import Section from './Section';

export const App = () => {
  const FEEDBACK = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  return <Section stats={FEEDBACK} title="Please leave feedback" />;
};
