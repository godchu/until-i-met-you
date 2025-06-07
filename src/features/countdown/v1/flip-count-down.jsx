'use client'

import { getDHMS, useCountDown } from '@/hooks/use-count-down'
import { TimeBox } from './time-box'
import { css } from '../../../../styled-system/css'

export const countdownContainer = css({
  textAlign: 'center',
  paddingX: '20px',
  paddingY: '40px',
})

export const countdownTitle = css({
  fontFamily: 'Mona Sans',
  fontSize: '30px',
  marginBottom: '30px',
  fontWeight: '800',

  mobile: {
    fontSize: '48px',
  },
})

export const countdownTimer = css({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '20px',
})

export const FlipCountDown = ({ startTime, endTime, title }) => {
  const onFinish = () => {
    alert('Time is up!')
  }

  const [days, hours, minutes, seconds] = useCountDown(
    Math.max(0, Math.floor((endTime - startTime) / 1000)),
    getDHMS,
    onFinish
  )

  return (
    <div className={countdownContainer}>
      <h2 className={countdownTitle}>{title}</h2>
      <div className={countdownTimer}>
        <TimeBox value={days} label="Days" />
        <TimeBox value={hours} label="Hours" />
        <TimeBox value={minutes} label="Minutes" />
        <TimeBox value={seconds} label="Seconds" />
      </div>
    </div>
  )
}
