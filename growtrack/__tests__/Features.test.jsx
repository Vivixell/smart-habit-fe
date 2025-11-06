import { render, screen } from '@testing-library/react';
import Features from '../components/Features.js';

describe('Features', () => {
  it('renders Features heading and cards', () => {
    render(<Features />);
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Simple Habit Creation')).toBeInTheDocument();
    expect(screen.getByText('Smart Reminders')).toBeInTheDocument();
    expect(screen.getByText('Visual Progress Tracking')).toBeInTheDocument();
    expect(screen.getByText('Gamified Motivation')).toBeInTheDocument();
  });
});




