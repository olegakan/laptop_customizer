import React from 'react';
import Feature from './Feature';
import './css/Form.css'

export default class Form extends React.Component {
  render() {

    return (
      
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        <Feature 
          updateFeature={this.props.updateFeature}
          state={this.props.state}
          features={this.props.features}/>
      </section>

    )
  }
}
