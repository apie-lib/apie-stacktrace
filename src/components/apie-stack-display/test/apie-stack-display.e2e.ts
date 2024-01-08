import { newE2EPage } from '@stencil/core/testing';

describe('apie-stack-display', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<apie-stack-display></apie-stack-display>');

    const element = await page.find('apie-stack-display');
    expect(element).toHaveClass('hydrated');
  });
});
