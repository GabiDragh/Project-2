import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText } = render(<Footer />);
    
    
    expect(getByText('Weather Rebel')).toBeInTheDocument();
    expect(getByText('Application')).toBeInTheDocument();
    expect(getByText('Pricing')).toBeInTheDocument();
    expect(getByText('Features')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Mission')).toBeInTheDocument();
    expect(getByText('EdX Bootcamp')).toBeInTheDocument();
    expect(getByText('Help Centre')).toBeInTheDocument();
    expect(getByText('Partners')).toBeInTheDocument();
    expect(getByText('Gabi')).toBeInTheDocument();
    expect(getByText('Maciej')).toBeInTheDocument();
    expect(getByText('Jean')).toBeInTheDocument();
    expect(getByText('Sherin')).toBeInTheDocument();
    expect(getByText('Mohammed')).toBeInTheDocument();
    expect(getByText('Company')).toBeInTheDocument();
    expect(getByText('Press')).toBeInTheDocument();
    expect(getByText('Careers')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
    expect(getByText('Coming soon on')).toBeInTheDocument();
    expect(getByAltText('Facebook')).toBeInTheDocument();
    expect(getByAltText('Twitter')).toBeInTheDocument();
    expect(getByAltText('LinkedIn')).toBeInTheDocument();
    expect(getByAltText('GitHub')).toBeInTheDocument();
    expect(getByText('@2024 Group10. All rights reserved.')).toBeInTheDocument();
    expect(getByText('Terms and Conditions')).toBeInTheDocument();
    expect(getByText('Privacy')).toBeInTheDocument();
    expect(getByText('Security')).toBeInTheDocument();
  });
});