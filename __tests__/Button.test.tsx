import { render, screen } from '@testing-library/react';
import Button from '../src/components/Button';

test('renders button with children', () => {
    render(<Button>مرحبا</Button>);
    expect(screen.getByText(/مرحبا/i)).toBeInTheDocument();
});