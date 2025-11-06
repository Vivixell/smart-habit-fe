import { render, screen, fireEvent } from '@testing-library/react';
import HeroSlider from '../components/HeroSlider.jsx';

describe('HeroSlider', () => {
  it('renders slide CTA and dots', () => {
    render(<HeroSlider />);
    // dots are buttons
    expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
    // multiple CTAs exist across slides
    expect(screen.getAllByText('Download App').length).toBeGreaterThan(0);
  });

  it('changes slide when dot clicked', () => {
    render(<HeroSlider />);
    const dots = screen.getAllByRole('button');
    fireEvent.click(dots[1]);
    // second slide has Actions text
    expect(screen.getByText(/Actions/)).toBeInTheDocument();
  });
});


