import React from 'react';

const CityDropdownItem = (props) => {
  const city = props.city;
  return (
    <div className="city-dropdown-item" onClick={() => props.setCurrentCity(city.id)}>
      {city.name}
    </div>
  );
};

class CityDropdown extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({defaultCity:""});
    this.props.fetchAllCities();
  }

  handleButtonClick(){
    this.setState({
      listOpen: false
    });
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  render() {
    const cities = this.props.cities;
    if (cities.length === 0) {
      return (<div></div>);
    } else {
      return(
        <div className="city-dropdown">
          <div className="city-filter-header">
            <p>{this.props.currentCityName}</p>
            <button id="dropdown-button" onClick={() => this.handleButtonClick()}>△</button>
          </div>
          <ul className="city-filter-list">
            {cities.map( city => <CityDropdownItem key={city.id} city={city}
              setCurrentCity={this.props.setCurrentCity}/> )}
          </ul>
        </div>
      );
    }
  }
}

export default CityDropdown;
