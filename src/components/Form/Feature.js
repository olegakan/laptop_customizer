import React from 'react';
import FeatureList from './FeatureList';
import './css/Feature.css';

export default class Feature extends React.Component {

  render() {

    return Object.keys(this.props.features).map(key=>(
      <div className="feature" key={key}>
        <div className="feature__name" key={key}>{key}</div>
        <FeatureList
          updateFeature={this.props.updateFeature}
          id={key}
          state={this.props.state}
          items={this.props.features[key]}/>
      </div>
    ))
    
  }
}
      