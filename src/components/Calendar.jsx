import { startOfMonth, endOfMonth, eachDayOfInterval, format } from 'date-fns';
import { useState } from 'react';

const Calendar = () => {
  const [gymDays, setGymDays] = useState({});

  const currentMonth = new Date();

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const month = format(daysInMonth[0], 'MMMM yyyy');

  const handleDayClick = (day) => {
    const dateKey = format(day, 'yyyy-MM-dd');
    setGymDays({
      ...gymDays,
      [dateKey]: !gymDays[dateKey],
    });
  };

  const calendarGrid = daysInMonth.map((day) => {
    const dateKey = format(day, 'yyyy-MM-dd');
    return (
      <div
        key={day}
        className={`day ${gymDays[dateKey] ? 'gym-day' : ''}`}
        onClick={() => handleDayClick(day)}
      >
        {format(day, 'd')}
      </div>
    );
  });

  return (
    <div className="cal">
      <div className="calendar-top">
        <label className="node-label">Calendar</label>
        <div className="legend">
          <span className="gym-day-legend"></span> Gym Day
        </div>
      </div>
      <div className="month-header">{month}</div>
      <div className="cal-grid">
        <div className="day-header">Mon</div>
        <div className="day-header">Tue</div>
        <div className="day-header">Wed</div>
        <div className="day-header">Thurs</div>
        <div className="day-header">Fri</div>
        <div className="day-header">Sat</div>
        <div className="day-header">Sun</div>
        {calendarGrid}
      </div>
    </div>
  );
};

export default Calendar;
