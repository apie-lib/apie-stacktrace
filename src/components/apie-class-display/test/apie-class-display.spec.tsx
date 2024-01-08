import { newSpecPage } from '@stencil/core/testing';
import { ApieClassDisplay } from '../apie-class-display';

describe('apie-class-display', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApieClassDisplay],
      html: `<apie-class-display></apie-class-display>`,
    });
    expect(page.root).toEqualHtml(`
      <apie-class-display>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </apie-class-display>
    `);
  });
});
