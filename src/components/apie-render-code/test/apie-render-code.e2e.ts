import { newE2EPage } from '@stencil/core/testing';

describe('apie-render-code', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<apie-render-code></apie-render-code>');

    const element = await page.find('apie-render-code');
    expect(element).toHaveClass('hydrated');
  });
});
