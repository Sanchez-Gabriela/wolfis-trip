/** @jsx jsx */
import { useDatepicker, START_DATE } from '@datepicker-react/hooks';
import { jsx } from '@emotion/core';
import Month from './Month';
import NavButton from './NavButton';
import DatepickerContext from './Datepickercontext';

export default function Datepicker(props) {
  // props.state
  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    startDate: props.state.startDate,
    endDate: props.state.endDate,
    focusedInput: props.state.focusedInput,
    onDatesChange: handleDateChange,
  });

  function handleDateChange(data) {
    if (!data.focusedInput) {
      props.setState({ ...data, focusedInput: START_DATE });
    } else {
      props.setState(data);
    }
  }

  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
      }}
    >
      {/* <div>
        <strong>Focused input: </strong>
        {state.focusedInput}
      </div> */}
      <br />
      <div>
        <strong>Start date: </strong>
        {props.state.startDate &&
          props.state.startDate
            .toLocaleString()
            .split(' ')[0]
            .replace(/,\s*$/, '')}
      </div>
      <br />
      <div>
        <strong>End date: </strong>
        {props.state.endDate &&
          props.state.endDate
            .toLocaleString()
            .split(' ')[0]
            .replace(/,\s*$/, '')}
      </div>
      <br />
      <strong></strong>

      <NavButton onClick={goToPreviousMonths}>Previous</NavButton>
      <NavButton onClick={goToNextMonths}>Next</NavButton>

      <div
        css={{
          fontFamily: 'Karla',
          display: 'grid',
          margin: '32px 0 0',
          gridTemplateColumns: `repeat(${activeMonths.length}, 200px)`,
          gridGap: '0 64px',
        }}
      >
        {activeMonths.map((month) => (
          <Month
            key={`${month.year}-${month.month}`}
            year={month.year}
            month={month.month}
            firstDayOfWeek={firstDayOfWeek}
          />
        ))}
      </div>
    </DatepickerContext.Provider>
  );
}
