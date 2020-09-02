import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

import 'moment/locale/ja';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import './style/react-dates-custom.css';

const useStyles = makeStyles(() => ({
  close: {
    position: 'absolute',
    top: '5px',
    right: '5px',
  },
}));

const DateRangePickerA: React.FC = () => {
  const classes = useStyles();
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
      isOutsideRange={() => false}
      hideKeyboardShortcutsPanel={true}
      orientation="vertical"
      withPortal={true}
      renderCalendarInfo={() => (
        <IconButton aria-label="close" className={classes.close}>
          <ClearIcon />
        </IconButton>
      )}
    />
  );
};

export default DateRangePickerA;
