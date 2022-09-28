import DtPicker from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/index.css";
import {useState} from 'react'
const DatePicker = ({date, setDate}) => {
  return (
    <DtPicker
      onChange={setDate}
      date={date}
      type="single"
      local="en"
      withTime
      showWeekend
    />
  );
};
export default DatePicker;
