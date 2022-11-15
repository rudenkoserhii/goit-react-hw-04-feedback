import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (type) => {
    switch (type) {
      case 'good': setGood(s => s + 1);
      break;

      case 'neutral': setNeutral(s => s + 1);
      break;

      case 'bad': setBad(s => s + 1);
      break;

      default:
      break;}
  }

  const total = good + neutral + bad;

  const countTotalFeedback = () => total;

  const countPositiveFeedbackPercentage = () => {
  return ((total > 0) ? (( Math.ceil((good / total ) * 100 ))) : 0);
  }

 
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={(e) => onLeaveFeedback(e.target.textContent)}/>      
        </Section>
        <Section title={'Statistic'}>
          { (good > 0 || neutral > 0 || bad > 0)?
            <Statistics good={ good } 
                        neutral={ neutral } 
                        bad={ bad } 
                        total={ countTotalFeedback() } 
                        positivePercentage={ countPositiveFeedbackPercentage() }/>:
            <Notification message="There is no feedback"></Notification> }
        </Section>
      </div>
  )}

