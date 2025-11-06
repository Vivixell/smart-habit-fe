import { render, screen } from '@testing-library/react';
import HowItWorks from '../components/HowItWorks.jsx';

describe('HowItWorks', () => {
  it('renders heading and step titles', () => {
    render(<HowItWorks />);
    expect(screen.getByText('How it Works')).toBeInTheDocument();
    expect(screen.getByText('Define Your Goal')).toBeInTheDocument();
    expect(screen.getByText('Build your routine')).toBeInTheDocument();
    expect(screen.getByText('Track progress')).toBeInTheDocument();
  });
});




