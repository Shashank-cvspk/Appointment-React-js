// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {detail, toggleStar} = props
  const {id, Title, Date_, isStarred} = detail
  const newDate = format(new Date(Date_), 'dd MMMM yyyy, EEEE')
  const src = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const updateStar = () => {
    toggleStar(id)
  }

  return (
    <li className="list">
      <div className="detailed">
        <p className="title_">{Title}</p>
        <button
          type="button"
          className="star"
          onClick={updateStar}
          testid="star"
        >
          <img src={src} alt="star" />
        </button>
      </div>
      <p>Date:{newDate}</p>
    </li>
  )
}
export default AppointmentItem
