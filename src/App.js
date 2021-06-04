import React from 'react';
import questions from './asset/data/Data';
import Accordian from './Accordian';


function App() {
  // const age = (dob) => {
  //   let diff_ms = Date.now() - dob.getTime();
  //   let age_dt = new Date(diff_ms);
  //   return Math.abs(age_dt.getUTCFullYear() - 1970);
  // }

  return (
    <div className="container">
      <svg className="svg-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fef9e9" fillOpacity="1" d="M0,288L12,288C24,288,48,288,72,266.7C96,245,120,203,144,202.7C168,203,192,245,216,261.3C240,277,264,267,288,250.7C312,235,336,213,360,176C384,139,408,85,432,85.3C456,85,480,139,504,165.3C528,192,552,192,576,213.3C600,235,624,277,648,261.3C672,245,696,171,720,133.3C744,96,768,96,792,128C816,160,840,224,864,208C888,192,912,96,936,74.7C960,53,984,107,1008,117.3C1032,128,1056,96,1080,96C1104,96,1128,128,1152,117.3C1176,107,1200,53,1224,69.3C1248,85,1272,171,1296,181.3C1320,192,1344,128,1368,112C1392,96,1416,128,1428,144L1440,160L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"></path>
      </svg>
      <main className="main">
        <header className="header">
          <p className="header__number">{questions.length}</p><h1 className="header__headline"> FAQ ABOUT ME</h1>
        </header>
        <section className="section">
          {
            questions.map((question) => {
              return <Accordian key={question.id}  {...question} />
            })
          }
        </section>
      </main>
    </div>
  );
}

export default App;
