const assert = require('assert');
const { mount } = require('enzyme'); 
const React = require('react');
const { BrowserRouter, Route, Routes } = require('react-router-dom'); 

const Home = require('../components/Home');


describe('App Component', function() {
  it('should render Home component for the "/" route', function() {
    const wrapper = mount(
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );


    assert.equal(wrapper.find(Home).length, 1);
  });

});
