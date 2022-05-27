import React, {useState, useEffect, useContext} from 'react';
import Paper from '@mui/material/Paper';
import { withSnackbar } from 'notistack';
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
  DragDropProvider,
  Resources,
  EditRecurrenceMenu,
  AllDayPanel
} from '@devexpress/dx-react-scheduler-material-ui';
import { styled } from '@mui/material/styles';
import classNames from 'clsx';
import { object } from 'prop-types';
import Kia from '../img/kiaceed.png'; // Import using relative path
import Tesla from '../img/tesla.jpg'; // Import using relative path

const PREFIX = 'schedule';

const classes = {
  firstRoom: `${PREFIX}-firstRoom`,
  secondRoom: `${PREFIX}-secondRoom`,
  header: `${PREFIX}-header`,
};

const StyledAppointmentTooltipHeader = styled(AppointmentTooltip.Header)(() => ({
  [`&.${classes.firstRoom}`]: {
    background: `url(${Kia})`,
  },
  [`&.${classes.secondRoom}`]: {
    background: `url(${Tesla})`,
  },
  [`&.${classes.header}`]: {
    height: '260px',
    backgroundSize: 'cover',
  },
}));

const getClassByCar = (cars) => {
  if (cars === '628cd04b18f1ef12f013af14') {
    return classes.firstRoom;
  }
  else {
    return classes.secondRoom;
  }
};

class Bookings extends React.PureComponent {
    constructor(props) {
      super(props);
      this.email = props.email
      this.state = {
        data: [],
        resources: []
      };
      this.commitChanges = this.commitChanges.bind(this);
    }

    Header = (({
      children, appointmentData, ...restProps
    }) => (
      <StyledAppointmentTooltipHeader
        {...restProps}
        appointmentData = {this.data}
        className={classNames(getClassByCar(appointmentData.cars), classes.header)}
      >
      </StyledAppointmentTooltipHeader>
    ));
    

    messages = {
      today: "Idag",
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
      current: "Den här händelsen",
      currentAndFollowing: "Den här och kommande händelser",
      all: "Alla händelser",
      menuEditingTitle: "Redigera återkommande händelse",
      menuDeletingTitle: "Ta bort återkommande händelse",
      cancelButton: "Avbryt"
    }

    componentDidMount() {
      this.getData();
      this.getResources();
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

    async getResources() {
      const resourcesUrl = "http://localhost:5001/medlem/boka/hamta_resurser";
    
      const schedule = await fetch(resourcesUrl, {headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
      })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        console.log("getResources()", data);
        data = data.map(app => ({id: app._id, ...app}))
        this.setState({
          resources: [{
            fieldName: 'cars',
            title: 'Bilar',
            instances: data
          }]
        });
      });
    };

    async postData(booking) {
      booking.email = this.email;
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
        let variant = '', message = '';
        switch (parseInt(response.status)) {
          case 200:
            variant = 'success'
            message = 'Bokning gjord'
            break;
          case 409:
            variant = 'error'
            message = 'Bokningen överlappar med en tidigare bokning'
            break;
          default:
            variant = 'error'
            message = 'Bokningen kunde inte göras'
        }
        this.props.enqueueSnackbar(message, { 
          variant: variant
        });
      })
    };

    async changeData(changedBooking) {
      const id = Object.keys(changedBooking)[0];
      changedBooking[id].email = this.email;
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
        let variant = '', message = '';
        switch (parseInt(response.status)) {
          case 200:
            variant = 'success'
            message = 'Bokning har ändrats'
            break;
          case 409:
            variant = 'error'
            message = 'Ändringen överlappar med en tidigare bokning'
            break;
          case 401:
            variant = 'error'
            message = 'Du kan inte ändra någon annans bokning'
            break;
          default:
            variant = 'error'
            message = 'Bokningen kunde inte ändras'
        }
        this.props.enqueueSnackbar(message, { 
          variant: variant
        });
      })
    };

    async deleteData(deletedBooking) {
      //const reqEmail = this.email;
      //console.log("reqEmail:", reqEmail)
      fetch(`http://localhost:5001/medlem/boka/ta_bort_bokning/${deletedBooking}`, {
        method : "delete",
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({"reqEmail" :  this.email}),
      })
      .then(response => {
        console.info(response);
        let variant = '', message = '';
        switch (parseInt(response.status)) {
          case 200:
            variant = 'success'
            message = 'Bokningen togs bort'
            break;
          case 401:
            variant = 'error'
            message = 'Du kan inte ta bort någon annans bokning'
            break;
          default:
            variant = 'error'
            message = 'Bokningen kunde inte tas bort'
        }
        this.props.enqueueSnackbar(message, { 
          variant: variant
        });
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
      const { data, resources } = this.state;
  
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
            <EditRecurrenceMenu
              messages={this.messages}
            />
            <IntegratedEditing />
            <ConfirmationDialog />
            <DayView
              startDayHour={7.5}
            />
            <WeekView
              startDayHour={7.5}
            />
            <MonthView />
            <Toolbar/>
            <ViewSwitcher/>
            <DateNavigator/>
            <TodayButton 
              messages={this.messages} 
            />
            <Appointments />
            <AllDayPanel />
            <Resources
              data={resources}
              mainResourceName="cars"
            />
            <DragDropProvider />
            <AppointmentTooltip
              showOpenButton
              showDeleteButton
              headerComponent={this.Header}
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
              messages = {this.messages}
            />
          </Scheduler>
        </Paper>
      );
    }
  }
  
  export default withSnackbar(Bookings);