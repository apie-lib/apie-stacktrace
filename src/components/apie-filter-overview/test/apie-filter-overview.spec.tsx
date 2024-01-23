import { newSpecPage } from '@stencil/core/testing';
import { ApieFilterOverview } from '../apie-filter-overview';

describe('apie-filter-overview', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApieFilterOverview],
      html: `<apie-filter-overview></apie-filter-overview>`,
    });
    expect(page.root).toEqualHtml(`
      <apie-filter-overview>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </apie-filter-overview>
    `);
  });
});
