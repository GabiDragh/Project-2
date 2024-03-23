const assert = require('assert');
const { shallow } = require('enzyme'); 
const React = require('react');
const Navbar = require('../components/Navbar/Navbar');
const Hero = require('../components/Hero');
const Weather = require('../assets/utils/Weather');
const Footer = require('../components/Footer');
const SharedProvider = require('../SharedContext');


const Home = require('../components/Home');

describe('Home Component', function() {
  it('should render child components correctly', function() {
    const wrapper = shallow(<Home />);
    
    
    assert.equal(wrapper.find(Navbar).length, 1);
    assert.equal(wrapper.find(Hero).length, 1); 
    assert.equal(wrapper.find(Weather).length, 1);
    assert.equal(wrapper.find(Footer).length, 1);
    assert.equal(wrapper.find(SharedProvider).length, 1);
  });

});