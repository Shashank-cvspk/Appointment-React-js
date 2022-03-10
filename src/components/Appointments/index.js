// Write your code here
import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    appointments: [],
  }

  updateTitle = event => {
    this.setState({title: event.target.value})
  }

  updateDate = event => {
    this.setState({date: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: v4(),
      Title: title,
      Date_: date,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointments: [...prevState.appointments, newAppointment],
      title: '',
      date: '',
    }))
  }

  toggleStar = id => {
    this.setState(prevState => ({
      appointments: prevState.appointments.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isStarred: !eachComment.isStarred}
        }
        return eachComment
      }),
    }))
  }

  renderAppoinments = () => {
    const {appointments} = this.state
    return appointments.map(each => (
      <AppointmentItem
        key={each.id}
        detail={each}
        toggleStar={this.toggleStar}
      />
    ))
  }

  updateList = () => {
    const {appointments} = this.state
    const filter = appointments.filter(each => each.isStarred === true)
    this.setState({appointments: filter})
  }

  render() {
    const {title, date} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <div className="matter">
            <div className="details">
              <h1>Add Appointment</h1>
              <form className="Form" onSubmit={this.onAddAppointment}>
                <label htmlFor="title">TITLE</label>
                <input
                  className="title"
                  type="text"
                  id="title"
                  value={title}
                  onChange={this.updateTitle}
                  placeholder="Title"
                />
                <label htmlFor="date">DATE</label>
                <input
                  className="date"
                  type="date"
                  id="date"
                  value={date}
                  onChange={this.updateDate}
                />
                <button type="submit" className="btn">
                  Add
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr />
          <div className="appointment">
            <div className="header">
              <h1>Appointments</h1>
              <button
                type="button"
                className="starred"
                onClick={this.updateList}
              >
                Starred
              </button>
            </div>
            <ul className="List">{this.renderAppoinments()}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
