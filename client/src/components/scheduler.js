import * as React from 'react';
import { useParams, useNavigate } from "react-router";
import Paper from '@mui/material/Paper';
import { ViewState, EditingState, IntegratedEditing} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  DateNavigator,
  Appointments,
  Toolbar,
  ViewSwitcher,
  TodayButton,
  AppointmentTooltip,
  AppointmentForm,
  ConfirmationDialog,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';

const schedulerData = [
  ];

// Remove reoccurence and all day
const BooleanEditor = props => {
  return <AppointmentForm.BooleanEditor {...props} readOnly />;
};

// Swedish time
const sweTime = date => new Date(date).toLocaleString('sv_SE', { 
  timeZone: 'Europe/Stockholm' });

// Appointment
const mapAppointmentData = appointment => ({
  id: appointment.id,
  startDate: sweTime(appointment.start.dateTime),
  endDate: sweTime(appointment.end.dateTime),
  title: appointment.summary,
});

// Inital state
const initialState = {
  data: [],
  loading: false,
  currentViewName: 'Week',
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'setLoading':
      return { ...state, loading: action.payload };
    case 'setData':
      return { ...state, data: action.payload.map(mapAppointmentData) };
    case 'setCurrentViewName':
      return { ...state, currentViewName: action.payload };
    case 'setCurrentDate':
      return { ...state, currentDate: action.payload };
    default:
      return state;
  }
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: schedulerData,
    };
    this.commitChanges = this.commitChanges.bind(this);
  }

  commitChanges({ added, changed, deleted }) {
    this.setState(async function(state) {
      let { data } = state;
      if (added) 
      {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
        console.log(data);
        
        // This will send a post request to update the data in the database.
        await fetch("http://localhost:5001/medlem/boka/ny_bokning", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      }
      if (changed)
      {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined)
      {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { data } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
          height={600}
        >
          <ViewState
            defaultCurrentViewName="Week"
          />

          <EditingState
            onCommitChanges={this.commitChanges}
          />
          <IntegratedEditing />

          <DayView
            startDayHour={0}
            endDayHour={24}
          />
          <WeekView
            startDayHour={0}
            endDayHour={24}
          />
          <MonthView
            startDayHour={0}
            endDayHour={24}
          />

          <ConfirmationDialog />
          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          <TodayButton />
          <Appointments />
          <DragDropProvider />
          <AppointmentTooltip
            showCloseButton
            showOpenButton
            showDeleteButton
          />
          <AppointmentForm
            booleanEditorComponent={BooleanEditor}
          />
        </Scheduler>
      </Paper>
    );
  }
}
