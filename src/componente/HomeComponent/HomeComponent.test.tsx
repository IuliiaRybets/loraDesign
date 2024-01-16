import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from './HomeComponent';

describe('<HomeComponent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<HomeComponent />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
