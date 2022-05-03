import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
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
    { startDate: '2022-05-03T09:45', endDate: '2022-05-03T11:00', title: 'Meeting' },
    { startDate: '2022-05-02T12:00', endDate: '2022-05-02T13:30', title: 'Go to a gym' },
  ];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: schedulerData,
    };
    this.commitChanges = this.commitChanges.bind(this);
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
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
            startDayHour={9}
            endDayHour={18}
          />
          <WeekView
            startDayHour={10}
            endDayHour={19}
          />
          <MonthView
            startDayHour={10}
            endDayHour={19}
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
          />
          <AppointmentForm
          />
        </Scheduler>
      </Paper>
    );
  }
}
