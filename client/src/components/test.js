import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';

async function getData() {
    const dataUrl = "http://localhost:5001/medlem/boka/hamta_alla";

    const schedule = await fetch(dataUrl, {headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
      })
      .then(response => response.json())
    //   .then((data) => {
    //     setTimeout(() => {
    //       console.log("hejkhej");
    //       console.log("dataitems: ", data);
    //     }, 600);
    //   });
      console.log(schedule);
      return schedule;
  };

const appointments = getData();
console.log(appointments);

export default class EditTest extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        data: appointments,
        currentDate: '2018-06-27',
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
      const { currentDate, data } = this.state;
  
      return (
        <Paper>
          <Scheduler
            data={data}
            height={660}
          >
            <ViewState/>   
            <EditingState
              onCommitChanges={this.commitChanges}
            />
            <IntegratedEditing />
            <ConfirmationDialog />
            <DayView
              startDayHour={7.5}
              endDayHour={17.5}
            />
            <Appointments />
            <AppointmentTooltip
              showOpenButton
              showDeleteButton
            />
            <AppointmentForm />
          </Scheduler>
        </Paper>
      );
    }
  }
  