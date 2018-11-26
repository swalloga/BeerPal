import React from 'react';
import { Route } from 'react-router-dom';

class FavoriteIndexComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFavorites();
  }

  // componentDidUpdate(prevProps) {
  //   if (Object.keys(prevProps.favorites) !== Object.keys(this.props.favorites)) {
  //     this.props.fetchFavorites();
  //   }
  // }

  render() {
    const favorites = Object.values(this.props.favorites);
    return (
      <div className="favorites-index">
        <h3 className="favorites-label">My Favorites</h3>
        <ul className="favorites-list">
          {favorites.map( (favorite) => {
            const favoriteId = favorite.id;
            return (<li className="fav-list-item" key={favorite.id}>
              <button className="fav-heart-button" onClick={() => this.props.deleteFavorite(favoriteId)}>
                <img className="heart-icon-fav" src={window.heart_icon_f} />
              </button>
              <div className="fav-info">
                <h3 className="fav-bar-name">{favorite.bar_name}</h3>
                <h4 className="fav-bar-address">{favorite.bar_address}</h4>
              </div>
            </li>);
          })}
        </ul>
      </div>
    );
  }
}

export default FavoriteIndexComponent;
