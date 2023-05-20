import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="PLANETAS" />
        <div className="planets">
          {planets.map((e) => (
            <PlanetCard
              key={ e.name }
              planetImage={ e.image }
              planetName={ e.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
