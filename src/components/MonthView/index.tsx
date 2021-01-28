import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './style.css';
import { RootType } from '../../store';
import {ReactCustomInputDateCalendar} from 'react-custom-styled-calendar';

type MonthViewProps = {
    month: number,
    year: number,
    selectedDates?: Date[]
}

const MonthView : React.FC<MonthViewProps> = ({month, year, selectedDates = []}) => {

  return (
    <div style={{padding: '20px', marginBottom: '40px'}}>
        <ReactCustomInputDateCalendar
            month={month}
            year={year}
        />
    </div>
  );
}

export default MonthView;
