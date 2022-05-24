import React, {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  TodayButton,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
  DragDropProvider
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
        console.log("getData()", data);
        data = data.map(app => ({id: app._id, ...app}))
        this.setState({
          data: data
        });
      });
    };

    async postData(booking) {
      fetch(`http://localhost:5001/medlem/boka/ny_bokning`, {
        method : "post",
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body : JSON.stringify(booking)
      })
      .then(response => {
        console.info(response);
      })
    };

    async changeData(changedBooking) {
      const id = Object.keys(changedBooking)[0];
      fetch(`http://localhost:5001/medlem/boka/uppdatera_bokning/${id}`, {
        method : "put",
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(changedBooking)
      })
      .then(response => {
        console.info(response);
      })
    };

    async deleteData(deletedBooking) {
      fetch(`http://localhost:5001/medlem/boka/ta_bort_bokning/${deletedBooking}`, {
        method : "delete",
      })
      .then(response => {
        console.info(response);
      })
    };
  
    async commitChanges(arg) {
      // arg = { added: ..., changed: ..., deleted: ...}
      const { added, changed, deleted } = arg

      if (added) {
        await this.postData(added)
      }
      if (changed) {
        await this.changeData(changed)
      }
      if (deleted) {
        await this.deleteData(deleted)
      }
      this.getData();
    };
  
    render() {
      const { data } = this.state;
  
      return (
        <Paper>
          <Scheduler
            data={data}
            height={660}
            locale={'sv-SE'}
            >
            <ViewState
              defaultCurrentViewName="Week"
            />
            <EditingState
              onCommitChanges={this.commitChanges}
            />
            <IntegratedEditing />
            <ConfirmationDialog />
            <DayView
              startDayHour={7.5}
              endDayHour={17.5}
            />
            <WeekView
              startDayHour={7.5}
              endDayHour={17.5}
            />
            <MonthView
              startDayHour={7.5}
              endDayHour={17.5}
            />
            <Toolbar/>
            <ViewSwitcher/>
            <DateNavigator/>
            <TodayButton 
              messages={{ today: "Idag" }} 
            />
            <Appointments />
            <DragDropProvider />
            <AppointmentTooltip
              showOpenButton
              showDeleteButton
            />
            <AppointmentForm
              dateEditorComponent={(props) => {
                return (
                  <AppointmentForm.DateEditor
                        {...props}
                        locale={"sv-SE"}
                  />
                );
              }}
              messages = {{
                detailsLabel: "Detaljer",
                allDayLabel: "Heldag",
                titleLabel: "Titel",
                commitCommand: "Spara",
                moreInformationLabel: "Beskrivning",
                repeatLabel: "Upprepa",
                notesLabel: "Lägg till beskrivning",
                never: "Upprepas inte",
                daily: "Dagligen",
                weekly: "Veckovis",
                monthly: "Månatligen",
                yearly: "Årligen",
                repeatEveryLabel: "Varje",
                daysLabel: "dag(ar)",
                endRepeatLabel: "Slutar",
                onLabel: "Efter",
                afterLabel: "Den",
                occurrencesLabel: "veckor",
                weeksOnLabel: "veckor",
                monthsLabel: "månader",
                ofEveryMonthLabel: "varje månad",
                theLabel: "Den",
                firstLabel: "Första",
                secondLabel: "Andra",
                thirdLabel: "Tredje",
                fourthLabel: "Fjärde",
                lastLabel: "Sista",
                yearsLabel: "år",
                ofLabel: "av",
                everyLabel: "Varje",
              }}
            />
          </Scheduler>
        </Paper>
      );
    }
  }
  