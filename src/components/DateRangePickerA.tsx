import React, { useState } from 'react';

import 'moment/locale/ja';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import './style/react-dates-custom.css';

import { DateRangePicker } from 'react-dates';
import moment from 'moment';

const DateRangePickerA: React.FC = () => {
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<
    'startDate' | 'endDate' | null
  >(null);
  return (
    <DateRangePicker
      startDate={startDate}
      startDateId="startDateId"
      endDate={endDate}
      endDateId="endDateId"
      onDatesChange={(selectedDates) => {
        setStartDate(selectedDates.startDate);
        setEndDate(selectedDates.endDate);
      }}
      focusedInput={focusedInput}
      onFocusChange={setFocusedInput}
      displayFormat="YYYY-MM-DD"
      noBorder={false}
      isOutsideRange={() => false}
      hideKeyboardShortcutsPanel={true}
      orientation="vertical"
      withPortal={true}
    />
  );
};

export default DateRangePickerA;
