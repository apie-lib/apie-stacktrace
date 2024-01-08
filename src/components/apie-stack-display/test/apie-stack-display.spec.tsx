import { newSpecPage } from '@stencil/core/testing';
import { ApieStackDisplay } from '../apie-stack-display';

describe('apie-stack-display', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApieStackDisplay],
      html: `<apie-stack-display></apie-stack-display>`,
    });
    expect(page.root).toEqualHtml(`
      <apie-stack-display>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </apie-stack-display>
    `);
  });
});
