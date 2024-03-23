import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders Navbar component correctly', () => {
    const wrapper = shallow(<Navbar theme="light" setTheme={() => {}} />);
    

    expect(wrapper.exists()).to.be.true;
    
    expect(wrapper.find('.navbar')).to.have.lengthOf(1);
    expect(wrapper.find('.search-box')).to.have.lengthOf(1);
    expect(wrapper.find('input')).to.have.lengthOf(1);
    expect(wrapper.find('button')).to.have.lengthOf(1);
  });

 
});