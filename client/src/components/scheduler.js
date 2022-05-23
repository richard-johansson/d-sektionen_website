import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';


export default class Bookings extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
      this.commitChanges = this.commitChanges.bind(this);
    }

    componentDidMount() {
      this.getData();
    }

    async getData() {
      const dataUrl = "http://localhost:5001/medlem/boka/hamta_alla";
    
      const schedule = await fetch(dataUrl, {headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
      })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        console.log("data state is set here: ", data);
        this.setState({
          data: data
        });
      });
    };

    async postData(booking) {
      const schedule = await fetch("http://localhost:5001/medlem/boka/ny_bokning", {
        method : "post",
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body : JSON.stringify(booking)
      })
      .then(response => {
        console.log(response.status);
      })
    };
  
    commitChanges({ added, changed, deleted }) {
      this.setState((state) => {
        let { data } = state;
        if (added) {
          const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
          data = [...data, { id: startingAddedId, ...added }];
          this.postData(added);
          console.log(added);
        }
        if (changed) {
          data = data.map(appointment => (
            changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
        }
        if (deleted !== undefined) {
          data = data.filter(appointment => appointment.id !== deleted);
        }
        // this.postData(data);
        return { data };
      });
    }
  
    render() {
      const { data } = this.state;
  
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
            <WeekView
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
  