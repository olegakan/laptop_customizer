import React from 'react';
import SummaryOption from './SummaryOption';
import SummaryTotal from './SummaryTotal';
import './css/Summary.css'

export default class Summary extends React.Component {

  render() {
    const options = Object.keys(this.props.options);

    return(
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        {options.map(k=>(
          <SummaryOption 
            name={k}
            opts={this.props.options[k]}
            key={k}/>
        ))}
        <SummaryTotal opts={this.props.options}/>
      </section>

    )
  }
}

