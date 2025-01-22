import { render, screen, waitFor } from '@testing-library/react';

import App from './App';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

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
});
