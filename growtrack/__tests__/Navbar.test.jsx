import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar.jsx';

describe('Navbar', () => {
  it('renders brand and nav links', () => {
    render(<Navbar />);
    expect(screen.getByText('GrowTrack')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
  });

  it('toggles mobile menu', () => {
    render(<Navbar />);
    const toggle = screen.getByRole('button');
    fireEvent.click(toggle);
    expect(screen.getAllByText('Download Now').length).toBeGreaterThan(0);
  });
});


