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

const ResponsiveDateRangePicker: React.FC = () => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<
    'startDate' | 'endDate' | null
  >(null);

  const dateRangePicker = (isMobile?: boolean) => (
    <DateRangePicker
      startDate={startDate}
      startDateId="startDateId"
      endDate={endDate}
      endDateId="endDateId"
      focusedInput={focusedInput}
      isOutsideRange={() => false}
      withPortal={isMobile}
      orientation={isMobile ? 'vertical' : 'horizontal'}
      hideKeyboardShortcutsPanel={true}
      renderCalendarInfo={() =>
        isMobile ? (
          <IconButton aria-label="close" className={classes.close}>
            <ClearIcon />
          </IconButton>
        ) : (
          <></>
        )
      }
      onFocusChange={setFocusedInput}
      onDatesChange={(selectedDates) => {
        setStartDate(selectedDates.startDate);
        setEndDate(selectedDates.endDate);
      }}
    />
  );

  return (
    <>
      <Hidden xsDown implementation="js">
        {dateRangePicker()}
      </Hidden>
      <Hidden smUp implementation="js">
        {dateRangePicker(true)}
      </Hidden>
    </>
  );
};

export default ResponsiveDateRangePicker;
