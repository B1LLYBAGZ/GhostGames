import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const CalendarComponent = () => {
  const localizer = momentLocalizer(moment);

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
    // Add more events as needed
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
          style={{ height: 300 }}
        />
      </Paper>
    </Box>
  );
};

export default CalendarComponent;
