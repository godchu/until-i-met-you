'use client'

/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { getDHMS, useCountDown } from '@/hooks/use-count-down';

export const FlipCountdown = (props) => {
  const {
    theme = 'dark',
    size = 'medium',
    endAt = moment().toISOString(),
    hideDay,
    hideHour,
    hideMinute,
    hideSecond,
    titlePosition = 'top',
    endAtZero,
    onTimeUp,
  } = props;

  const [completed, setCompleted] = useState(false);
  const targetTime = moment(endAt).diff(moment(), 'seconds');
  const [day, hour, minute, second] = useCountDown(targetTime, getDHMS, () => {
    setCompleted(true);
    onTimeUp();
  });

  const buildFlip = (key, value) => {
    const ref = useRef(null);
    const [prev, setPrev] = useState(value);

    useEffect(() => {
      if (prev !== value && ref.current) {
        const first = ref.current.querySelector('.flip-countdown-card-sec.one');
        const second = ref.current.querySelector('.flip-countdown-card-sec.two');
        if (first && second) {
          first.classList.remove('flip');
          second.classList.remove('flip');
          void first.offsetWidth;
          void second.offsetWidth;
          first.classList.add('flip');
          second.classList.add('flip');
        }
        setPrev(value);
      }
    }, [value]);

    const part1 = Number.parseInt(value / 10);
    const part2 = Number.parseInt(value % 10);
    const prev1 = Number.parseInt(prev / 10);
    const prev2 = Number.parseInt(prev % 10);

    return (
      <span className='flip-countdown-piece' ref={ref}>
        {titlePosition === 'top' && (
          <span className='flip-countdown-title'>
            {props[`${key}Title`] || key.charAt(0).toUpperCase() + key.slice(1)}
          </span>
        )}
        <span className='flip-countdown-card'>
          <span className='flip-countdown-card-sec one'>
            <span className='card__top'>{part1}</span>
            <span className='card__bottom' data-value={prev1} />
            <span className='card__back' data-value={prev1}>
              <span className='card__bottom' data-value={part1} />
            </span>
          </span>
          <span className='flip-countdown-card-sec two'>
            <span className='card__top'>{part2}</span>
            <span className='card__bottom' data-value={prev2} />
            <span className='card__back' data-value={prev2}>
              <span className='card__bottom' data-value={part2} />
            </span>
          </span>
        </span>
        {titlePosition === 'bottom' && (
          <span className='flip-countdown-title'>
            {props[`${key}Title`] || key.charAt(0).toUpperCase() + key.slice(1)}
          </span>
        )}
      </span>
    );
  };

  if (completed && !endAtZero) {
    return <div className='flip-countdown'>{props.children || endAt}</div>;
  }

  return (
    <div className={`flip-countdown theme-${theme} size-${size}`}>
      {!hideDay && buildFlip('day', Number.parseInt(day))}
      {!hideHour && buildFlip('hour', Number.parseInt(hour))}
      {!hideMinute && buildFlip('minute', Number.parseInt(minute))}
      {!hideSecond && buildFlip('second', Number.parseInt(second))}
    </div>
  );
};


