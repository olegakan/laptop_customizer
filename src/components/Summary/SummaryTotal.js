import React from 'react';
import './css/SummaryTotal.css'

export default class SummaryTotal extends React.Component {

  render() {
    const keys = Object.keys(this.props.opts)
    return (
      <div className="summary__total">
        <div className="summary__total__label">Your Price: </div>
        <div className="summary__total__value">
          {"$" + keys.reduce((acc,val)=>acc+this.props.opts[val].cost, 0)}
        </div>
      </div>
    )
  }
}