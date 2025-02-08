import { render, screen, waitFor } from '@testing-library/react';

import App from './App';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import ProductPage from './components/ProductPage';

describe('Product Page', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it('render product list when API responds'),
    async () => {
      const mockProducts = [
        {
          id: 4,
          name: '"Mens Casual Slim Fit"',
        },
      ];

      vi.spyOn(global, 'fetch').mockImplementationOnce(() => {
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockProducts),
        });
      });

      render(<App />);

      await screen.findByText('Mens Casual Slim Fit').toBeInTheDocument();

      expect(global.fetch).toHaveBeenCalledTimes(1);
    };

  it('increment no.of cart when clicking ATC btn'),
    async () => {
      const user = userEvent.setup();

      render(<App />);

      const button = screen.getByRole('button', { name: 'Add To Cart' });

      await user.click(button);

      expect(screen.getByRole('itemCount').textContent).toMatch(/1/i);
    };

  it('renders quantity btns when clicking ATC btn'),
    async () => {
      const user = userEvent.setup();

      render(<App />);

      const button = screen.getByRole('button', { name: 'Add To Cart' });

      await user.click(button);

      expect(screen.getByText(/'+'/i));
      expect(screen.getByText(/'-'/i));
    };

  it('no. of items in cart increments when clicking quantity add btn'),
    async () => {
      const user = userEvent.setup();

      render(<App />);

      const button = screen.getByRole('button', { name: 'Add To Cart' });

      await user.click(button);

      const incrementBtn = screen.getByRole('button', { name: '+' });

      await user.click(incrementBtn);

      expect(expect(screen.getByRole('itemCount').textContent).toMatch(/2/i));
    };

  it('no. of items in cart decrements when clicking quantity remove btn'),
    async () => {
      const user = userEvent.setup();

      render(<App />);

      const button = screen.getByRole('button', { name: 'Add To Cart' });

      await user.click(button);

      const incrementBtn = screen.getByRole('button', { name: '-' });

      await user.click(incrementBtn);

      expect(expect(screen.getByRole('itemCount').textContent).toMatch(/0/i));
    };

  it('renders shopping cart page when clicking cart svg'),
    async () => {
      const user = userEvent.setup();

      render(<App />);

      const cartLink = screen.getByRole('shoppingcart');

      await user.click(cartLink);

      expect(screen.getByText('Shopping Cart'));
    };
});
