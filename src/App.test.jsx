import { render, screen } from '@testing-library/react';

import App from './App';
import { expect } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Home Page', () => {
  it('renders Home Page', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('category page is rendered to the screen', async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole('button', { name: 'Shop here' });

    await user.click(button);

    expect(screen.findByText('CATEGORY')).toBeInTheDocument();
  });

  it('shopping cart page is rendered to the screen', async () => {
    const user = userEvent.setup();

    render(<App />);
    const link = screen.getByRole('a', { name: 'Shopping cart' });

    await user.click(link);

    expect(screen.findByText('SHOPPING CART')).toBeInTheDocument();
  });
});
