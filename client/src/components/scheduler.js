import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
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
  }

  render() {
    const { data } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
          height={660}
        >
          <ViewState
            defaultCurrentViewName="Week"
          />

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

          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          <TodayButton />
          <Appointments />
          <AppointmentTooltip
            showCloseButton
            showOpenButton
          />
          <AppointmentForm
            readOnly
          />
        </Scheduler>
      </Paper>
    );
  }
}
