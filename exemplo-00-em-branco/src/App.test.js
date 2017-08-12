import React from 'react';
import { mount } from 'enzyme';
import App from './App';

it('mount without crashing', () => {
  mount(<App />);
});
