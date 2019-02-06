import React from 'react';
import './css/SummaryOption.css'

export default class SummaryOption extends React.Component {

  render() {
    const { opts, name } = this.props;
    
    return (
      <div className="summary__option" key={name}>
        <div className="summary__option__label">{name}</div>
        <div className="summary__option__value">{opts.name}</div>
        <div className="summary__option__cost">{"$"+ opts.cost}</div>
      </div>
    )
  }
}