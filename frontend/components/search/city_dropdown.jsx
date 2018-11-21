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
    this.state = { listOpen: false };
    this.toggleList = this.toggleList.bind(this);
  }

  componentDidMount() {
    this.setState({defaultCity:""});
    this.props.fetchAllCities();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentCityId !== this.props.currentCityId) {
      const toggleState = !this.state.listOpen;
      this.setState({
        listOpen: toggleState
      });
    }
  }

  toggleList(e){
    e.preventDefault();
    const toggleState = !this.state.listOpen;
    this.setState({
      listOpen: toggleState
    });
  }

  render() {
    const cities = this.props.cities;
    if (cities.length === 0) {
      return (<div></div>);
    } else {
      if (!this.state.listOpen) {
        return(
          <div className="city-filter-header">
            <button id="dropdown-button" onClick={this.toggleList}>
              <label>{this.props.currentCityName}</label>
            </button>
          </div>
        );
      } else {
        return(
          <div className="city-dropdown">
            <div className="city-filter-header">
              <button id="dropdown-button" onClick={this.toggleList}>
                <label>{this.props.currentCityName}</label>
              </button>
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
}

export default CityDropdown;
