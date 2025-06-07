'use client'

import { FlipCountDown } from '@/features/countdown/v1/flip-count-down'

function HomePage() {
  return (
    <>
      <FlipCountDown
        title="Until I met you"
        startTime={new Date()}
        endTime={new Date('2026-09-02T00:00:00')}
      />
    </>
  )
}

export default HomePage
