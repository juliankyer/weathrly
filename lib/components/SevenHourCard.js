import React from 'react'

const SevenHourCard = ({ hour, temp, condition, icon }) => {
  return (
    <div className="sevenHourCard">
      <img src={icon} />
      <p>{hour}</p>
      <p>{temp}°</p>
      <p>{condition}</p>
    </div>
  )
}

export default SevenHourCard