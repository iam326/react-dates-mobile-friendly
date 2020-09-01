import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import 'moment/locale/ja';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import './style/react-dates-custom.css';

import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    blank: {
      marginTop: '30px',
    },
    textField: {
      width: '25ch',
    },
  })
);

const DateRangePickerB: React.FC = () => {
  const classes = useStyles();
  const dateFormat = 'YYYY-MM-DD';
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<'startDate' | 'endDate'>(
    'startDate'
  );
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <>
      <TextField
        className={classes.textField}
        label="日付範囲選択"
        value={
          startDate && endDate
            ? `${startDate.format(dateFormat)} ~ ${endDate.format(dateFormat)}`
            : ''
        }
        onFocus={() => setDisplay(true)}
      />
      {display && (
        <DayPickerRangeController
          onFocusChange={(focusedInput) => {
            setFocusedInput(!focusedInput ? 'startDate' : focusedInput);
          }}
          onDatesChange={(selectedDates) => {
            if (focusedInput === 'startDate') {
              setStartDate(selectedDates.startDate);
            } else {
              setEndDate(selectedDates.endDate);
              setDisplay(false);
            }
          }}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
          hideKeyboardShortcutsPanel={true}
          numberOfMonths={2}
          minimumNights={0}
          withPortal={true}
          orientation="vertical"
        />
      )}
    </>
  );
};

export default DateRangePickerB;
