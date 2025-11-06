import { render, screen, fireEvent } from '@testing-library/react';
import Testimonials from '../components/Testimonials.js';

describe('Testimonials', () => {
  it('renders heading', () => {
    render(<Testimonials />);
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
  });

  it('navigates next and previous', () => {
    render(<Testimonials />);
    const next = screen.getByAltText('Next testimonial');
    const prev = screen.getByAltText('Previous testimonial');
    fireEvent.click(next);
    fireEvent.click(prev);
    expect(screen.getByText(/Frontend Developer|Software Tester/)).toBeInTheDocument();
  });
});



