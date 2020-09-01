import React from 'react';

import DateRangePickerA from './DateRangePickerA';
import DateRangePickerB from './DateRangePickerB';

const MainContent: React.FC = () => {
  return (
    <>
      <div>
        <DateRangePickerA />
      </div>
      <div>
        <DateRangePickerB />
      </div>
    </>
  );
};

export default MainContent;
