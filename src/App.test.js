import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('Add to cart funcitonality works', () => {
  render(<App />);
  const button = screen.getAllByRole('button', { name: 'Add to Cart' });
  fireEvent.click(button[0]);
  const badge = screen.getByRole('cart-count');
  within(badge).getByText('1');
});
