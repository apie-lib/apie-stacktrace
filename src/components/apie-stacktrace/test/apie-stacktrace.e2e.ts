import { newE2EPage } from '@stencil/core/testing';

describe('apie-stacktrace', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<apie-stacktrace></apie-stacktrace>');

    const element = await page.find('apie-stacktrace');
    expect(element).toHaveClass('hydrated');
  });
});
