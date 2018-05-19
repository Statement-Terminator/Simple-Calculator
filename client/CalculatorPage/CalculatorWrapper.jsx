import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Calculator from './Calculator.jsx';

export default class CalculatorWrapper extends TrackerReact(React.Component){
  render(){
    return(
      <Calculator />
    )
  }
}
