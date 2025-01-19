import { render, screen, waitFor } from '@testing-library/react';

import App from './App';
import { beforeEach, expect } from 'vitest';

describe('Product Page', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('renders Product Page', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('render product list when API responds'),
    async () => {
      const mockProducts = [
        {
          id: 4,
          name: 'Handmade Fresh Table',
        },
      ];

      jest.spyOn(global, 'fetch').mockimplementationOnce(() => {
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockProducts),
        });
      });

      render(<App />);

      await screen.findByText('Handmade Fresh Table');

      expect(global.fetch).toHaveBeenCalledOnce();
    };
});
