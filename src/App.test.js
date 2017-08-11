import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders audio crashing', () => {
  const actual = mount(<App />);
  const audio = actual.find('audio');
});
