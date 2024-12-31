import { render, screen } from '@testing-library/react';

import App from './App';
import { expect } from 'vitest';

describe('Home Page', () => {
  it('renders Home Page', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
