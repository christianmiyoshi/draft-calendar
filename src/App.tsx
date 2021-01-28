import React, { useState } from 'react';
import MonthView from './components/MonthView';
import { format, getMonth, getYear } from 'date-fns';
import { chunk } from './utils/array/chunk';

interface ICalendarAnnual {
  year:number
}

const CalendarAnnual : React.FC<ICalendarAnnual> = ({ year} ) => {
  const months = Array.from(Array(12).keys());
  const dates = months.map(m => new Date(year, m, 1));
  const numberMonthsInLine = 4;
  const dateChunks = chunk(dates, numberMonthsInLine);

  return <div>
    <div style={{textAlign: 'center', fontSize: '30px'}}>{year}</div>
    {
        dateChunks.map(dates => 
          <div style={{display: 'flex', flexDirection: 'row'}}>
          {dates.map(d => 
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <MonthView 
                year={getYear(d)}
                month={getMonth(d)}
              />
            </div>
            
          )}
          </div>
        )
      }
  </div>
}

function App() {
  return (
    <div>
      <CalendarAnnual 
        year={2020}
      />
      <CalendarAnnual 
        year={2021}
      />
      <CalendarAnnual 
        year={2022}
      />
    </div>
  );
}

export default App;
