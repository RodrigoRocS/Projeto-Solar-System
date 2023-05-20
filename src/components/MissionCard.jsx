import React, { Component } from 'react';
import PropTypes from 'prop-types';
import calendarImage from '../images/calendar.png';
import pinImage from '../images/pin.png';
import flagImage from '../images/flag.png';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <h3 data-testid="mission-name">{ name }</h3>
        <div className="mission-data">
          <p
            className="mission-data-item"
            data-testid="mission-year"
          >
            <img src={ calendarImage } alt="" />
            {year}
          </p>
          <p
            className="mission-data-item"
            data-testid="mission-country"
          >
            <img src={ pinImage } alt="" />
            {country}
          </p>
          <p
            className="mission-data-item"
            data-testid="mission-destination"
          >
            <img src={ flagImage } alt="" />
            {destination}
          </p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
export default MissionCard;
