import { render } from '@testing-library/react';

import { Footer } from '../../components/Footer';

function renderFooterComponent() {
  return render(<Footer />)
}

describe('footer', () => {
  it('should show the right text', () => {
    const { getByTestId } = renderFooterComponent();

    const text = getByTestId('text');

    expect(text.textContent).toBe('Developed by João Moschetta');
  });
  
  it('should show the right text', () => {
    const { getByTestId } = renderFooterComponent();

    const anchor = getByTestId('anchor');
    
    expect(anchor.getAttribute('href')).toBe('https://github.com/joaomoschetta');
  });
})