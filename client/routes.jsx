import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import Calculator from './CalculatorPage/Calculator.jsx';

FlowRouter.route('/', {
  action(){
    mount(MainLayout,{
      content: (<Calculator />)
    })
  }
});
