// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StrapAllegory title', () => {
    render(<App />);
    const titleElement = screen.getByText(/StrapAllegory/i);
    expect(titleElement).toBeInTheDocument();
});
