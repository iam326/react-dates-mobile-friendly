import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import DateRangePickerA from './DateRangePickerA';
import DateRangePickerB from './DateRangePickerB';

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
        <DateRangePickerA />
      </div>
      <div className={classes.margin}>
        <DateRangePickerB />
      </div>
    </>
  );
};

export default MainContent;
