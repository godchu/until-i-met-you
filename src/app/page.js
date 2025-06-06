// import { FlipCountdown } from "@/components/flip-count-down";

// export default function Home() {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Countdown Timer</h2>
//       <FlipCountdown
//          hideYear
//          hideMonth
//          theme='dark'
//          size='large'
//          titlePosition='bottom'

//          endAt={new Date(
//            Date.now() +
//            1000 /* sec */ *
//            60 /* min */ *
//            60 /* hour */ *
//            48 /* day */ *
//            30 /* month */ *
//            12 /* year */ *
//            2
//          ).toUTCString()}
//          dayTitle='DAYS'
//          hourTitle='HOURS'
//          minuteTitle='MINUTES'
//          secondTitle='SECONDS'
//       />
//     </div>
//   );
// }
"use client"

import FlipCountdown from "@rumess/react-flip-countdown";

function App() {
  return (

    <FlipCountdown
      theme='dark'
      size='large'
      titlePosition='top'
      endAt={new Date('2026-02-09').toUTCString()}
      dayTitle='DAYS'
      hourTitle='HOURS'
      minuteTitle='MINUTES'
      secondTitle='SECONDS'
      yearTitle='YEARS'

    />
        
  );
}

export default App;
