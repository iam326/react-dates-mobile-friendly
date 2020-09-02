import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

import 'moment/locale/ja';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import './style/react-dates-custom.css';

const useStyles = makeStyles(() =>
  createStyles({
    close: {
      position: 'absolute',
      top: '5px',
      right: '5px',
    },
  })
);

const DateRangePickerA: React.FC = () => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<
    'startDate' | 'endDate' | null
  >(null);
  return (
    <>
      <Hidden xsDown implementation="js">
        <DateRangePicker
          startDate={startDate}
          startDateId="startDateId"
          endDate={endDate}
          endDateId="endDateId"
          focusedInput={focusedInput}
          isOutsideRange={() => false}
          hideKeyboardShortcutsPanel={true}
          onFocusChange={setFocusedInput}
          onDatesChange={(selectedDates) => {
            setStartDate(selectedDates.startDate);
            setEndDate(selectedDates.endDate);
          }}
        />
      </Hidden>
      <Hidden smUp implementation="js">
        <DateRangePicker
          startDate={startDate}
          startDateId="startDateId"
          endDate={endDate}
          endDateId="endDateId"
          focusedInput={focusedInput}
          isOutsideRange={() => false}
          withPortal={true}
          orientation="vertical"
          hideKeyboardShortcutsPanel={true}
          renderCalendarInfo={() => (
            <IconButton aria-label="close" className={classes.close}>
              <ClearIcon />
            </IconButton>
          )}
          onFocusChange={setFocusedInput}
          onDatesChange={(selectedDates) => {
            setStartDate(selectedDates.startDate);
            setEndDate(selectedDates.endDate);
          }}
        />
      </Hidden>
    </>
  );
};

export default DateRangePickerA;
