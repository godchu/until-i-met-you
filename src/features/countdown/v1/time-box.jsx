'use client'

import { css } from '../../../../styled-system/css'

const countdownBox = css({
  background: '#222',
  color: '#fff',
  padding: '12px 16px',
  borderRadius: '10px',
  minWidth: '80px',
  textAlign: 'center',
  flex: '1 1 100px',
  transition: 'transform 0.3s ease',

  _hover: {
    transform: 'scale(1.05)',
  },

  mobile: {
    padding: '15px 20px',
  },
})

const countdownNumber = css({
  fontSize: '1rem',
  display: 'block',
  fontWeight: '700',

  mobile: {
    fontSize: '2.5rem',
  },
})

const countdownLabel = css({
  fontSize: '0.8rem',
  color: '#ccc',
  marginTop: '5px',

  mobile: {
    fontSize: '0.9rem',
  },
})

export const TimeBox = ({ value, label }) => {
  return (
    <div className={countdownBox}>
      <span className={countdownNumber}>{value}</span>
      <span className={countdownLabel}>{label}</span>
    </div>
  )
}
