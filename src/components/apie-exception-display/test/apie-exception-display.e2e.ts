import { newE2EPage } from '@stencil/core/testing';

describe('apie-exception-display', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<apie-exception-display></apie-exception-display>');

    const element = await page.find('apie-exception-display');
    expect(element).toHaveClass('hydrated');
  });
});
