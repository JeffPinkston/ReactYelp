import React, { PropTypes as T } from 'react'
import classnames from 'classnames'

import Listing from 'components/Listing/Listing'
import styles from './styles.module.css'

export class Sidebar extends React.Component {
  onClick(place, map, google) {
    if(this.props.onListItemClick){
      place.place = place;
      this.props.onListItemClick(place, map, google)
    }
  }
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.heading}>
          <h1>{this.props.title}</h1>
        </div>
        <Listing places={this.props.places}
          onClick={this.onClick.bind(this)} />
      </div>
    )
  }
}

Sidebar.propTypes = {
  plaves: T.array,
  title: T.string,
  onListItemClick: T.func
}

Sidebar.defaultProps = {
  title: 'Restaurants'
}

export default Sidebar
