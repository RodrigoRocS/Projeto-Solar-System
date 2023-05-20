import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <h3 data-testid="mission-name">{ name }</h3>
        <div className="mission-data">
          <p className="mission-data-item">
            <img src="../images/calendar.png" alt="" />
            {year}
          </p>
          <p className="mission-data-item">
            <img src="../images/pin.png" alt="" />
            {country}
          </p>
          <p className="mission-data-item">
            <img src="../images/flag.png" alt="" />
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
