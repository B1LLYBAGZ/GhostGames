import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const CalendarComponent = () => {
  const localizer = momentLocalizer(moment);

     // Function to generate recurring events
     const generateRecurringEvents = (title, start, end, recurrenceRule) => {
      const recurringEvents = [];
      const startDate = moment(start);
      const endDate = moment(end);
  
      while (startDate.isBefore(endDate)) {
          recurringEvents.push({
            title: title,
            start: startDate.toDate(),
            end: moment(startDate).add(2, 'hours').toDate(), // Assuming 2-hour duration
          });
    
          startDate.add(recurrenceRule.interval, recurrenceRule.unit);
        }
    
        return recurringEvents;
      };
  

  const events = [
    {
      title: "Pokémon Tournament",
      start: new Date(2024, 9, 10, 10, 0), // Year, Month (0-indexed), Day, Hour, Minute
      end: new Date(2024, 9, 10, 12, 0),
    },
    {
      title: "Yu-Gi-Oh! Duel",
      start: new Date(2024, 9, 11, 14, 0),
      end: new Date(2024, 9, 11, 16, 0),
    },
       // Add recurring events using the generateRecurringEvents function 
       ...generateRecurringEvents("Yugi Tournament", new Date(2024, 7, 5, 18, 30), new Date(2025, 0, 6, 18, 30), { interval: 1, unit: 'weeks' }),
       ...generateRecurringEvents("Yugi Tournament", new Date(2024, 7, 7, 18, 30), new Date(2025, 0, 8, 18, 30), { interval: 1, unit: 'weeks' }),
       ...generateRecurringEvents("Yugi Tournament", new Date(2024, 7, 9, 18, 30), new Date(2025, 0, 10, 18, 30), { interval: 1, unit: 'weeks' }),
       ...generateRecurringEvents("Timewizard", new Date(2024, 7, 10, 14, 0), new Date(2025, 0, 11, 14, 0), { interval: 1, unit: 'weeks' })
      
  ];

  return (
    <Box sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Ghost Events This Week
        </Typography>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={["week"]}
          defaultView="week"
          style={{ height: 350 }}
          min={new Date(0, 0, 0, 12, 0)} // Set the minimum time to start at noon
          max={new Date(0, 0, 0, 22, 59)} // Set the maximum time to end at 11:59 PM
        />
      </Paper>
    </Box>
  );
};

export default CalendarComponent;
