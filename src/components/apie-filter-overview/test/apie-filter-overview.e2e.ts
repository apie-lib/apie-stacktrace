import { newE2EPage } from '@stencil/core/testing';

describe('apie-filter-overview', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<apie-filter-overview></apie-filter-overview>');

    const element = await page.find('apie-filter-overview');
    expect(element).toHaveClass('hydrated');
  });
});
