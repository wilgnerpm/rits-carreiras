import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme-adapter-react-16'
import App from './App';
import Header from './components/Header';

it('allows us to set props', () => {
  const component = mount(<Header />)
      expect(component).toEqual({})
      component.unmount()

});
