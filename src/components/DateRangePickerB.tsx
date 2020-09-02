import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import moment from 'moment';
import { DayPickerRangeController } from 'react-dates';

import 'moment/locale/ja';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import './style/react-dates-custom.css';

const useStyles = makeStyles(() =>
  createStyles({
    textField: {
      width: '25ch',
    },
    close: {
      position: 'absolute',
      top: '5px',
      right: '5px',
    },
  })
);

const DateRangePickerB: React.FC = () => {
  const classes = useStyles();
  const dateFormat = 'YYYY/MM/DD';
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
        InputProps={{
          readOnly: true,
        }}
        onFocus={() => setDisplay(true)}
      />
      {display && (
        <>
          <Hidden xsDown implementation="js">
            <DayPickerRangeController
              startDate={startDate}
              endDate={endDate}
              focusedInput={focusedInput}
              numberOfMonths={2}
              minimumNights={0}
              hideKeyboardShortcutsPanel={true}
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
            />
          </Hidden>
          <Hidden smUp implementation="js">
            <DayPickerRangeController
              startDate={startDate}
              endDate={endDate}
              focusedInput={focusedInput}
              numberOfMonths={2}
              minimumNights={0}
              withPortal={true}
              orientation="vertical"
              hideKeyboardShortcutsPanel={true}
              renderCalendarInfo={() => (
                <IconButton
                  aria-label="close"
                  className={classes.close}
                  onClick={() => setDisplay(false)}
                >
                  <ClearIcon />
                </IconButton>
              )}
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
            />
          </Hidden>
        </>
      )}
    </>
  );
};

export default DateRangePickerB;
