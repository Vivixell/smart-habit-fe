import { render, screen } from '@testing-library/react';
import CTASection from '../components/CTASection.jsx';

describe('CTASection', () => {
  it('renders heading and store links', () => {
    render(<CTASection />);
    expect(screen.getByText('Ready to build better habits?')).toBeInTheDocument();
    expect(screen.getByText('Google Play')).toBeInTheDocument();
    expect(screen.getByText('App Store')).toBeInTheDocument();
  });
});




