import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Footer from '../components/Footer.jsx';

describe('Footer', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: async () => ({}) }));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders link groups and subscribe UI', () => {
    render(<Footer />);
    expect(screen.getByText('Links')).toBeInTheDocument();
    expect(screen.getByText('Socials')).toBeInTheDocument();
    expect(screen.getByText('Legal')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email address here')).toBeInTheDocument();
  });

  it('validates email and shows success on subscribe', async () => {
    render(<Footer />);
    const input = screen.getByPlaceholderText('Enter your email address here');
    fireEvent.change(input, { target: { value: 'john@example.com' } });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(screen.getByText("You're in! Thanks for subscribing")).toBeInTheDocument());
  });
});




