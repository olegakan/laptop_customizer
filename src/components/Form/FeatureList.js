import React from 'react';
import './css/FeatureList.css'

export default class FeatureList extends React.Component {

  render() {
    
    return (
      <ul className="feature__list">
        {this.props.items.map((item, idx) =>{
          const selectedClass = item.name === this.props.state[this.props.id].name ? 'feature__selected' : '';
          const featureClass = 'feature__option ' + selectedClass;
          
          return (
            <li 
              key={idx} 
              className="feature__item">
              <div
                className={featureClass}
                onClick={()=> this.props.updateFeature(this.props.id, item)}>
                {item.name}
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(item.cost) })
              </div>
            </li>)
        })}
      </ul>
    )
  }
}

