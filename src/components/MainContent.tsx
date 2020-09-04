import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import ResponsiveDateRangePicker from './ResponsiveDateRangePicker';
import ResponsiveDayPickerRangeController from './ResponsiveDayPickerRangeController';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      marginTop: theme.spacing(3),
    },
  })
);

const MainContent: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <h2>DateRangePicker</h2>
        <ResponsiveDateRangePicker />
      </div>
      <div className={classes.margin}>
        <h2>DayPickerRangeController</h2>
        <ResponsiveDayPickerRangeController />
      </div>
    </>
  );
};

export default MainContent;
