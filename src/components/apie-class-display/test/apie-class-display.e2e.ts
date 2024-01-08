import { newE2EPage } from '@stencil/core/testing';

describe('apie-class-display', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<apie-class-display></apie-class-display>');

    const element = await page.find('apie-class-display');
    expect(element).toHaveClass('hydrated');
  });
});
