import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactSection from '../components/ContactSection.jsx';

describe('ContactSection', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: async () => ({}) }));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('submits the form and shows success message', async () => {
    render(<ContactSection />);
    fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'John' } });
    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByTestId('subject-input'), { target: { value: 'Hello' } });
    fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'Test message' } });
    fireEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => expect(screen.getByTestId('status-message')).toBeInTheDocument());
    expect(screen.getByText(/Message sent successfully/i)).toBeInTheDocument();
  });
});



