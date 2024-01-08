import { newSpecPage } from '@stencil/core/testing';
import { ApieRenderCode } from '../apie-render-code';

describe('apie-render-code', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApieRenderCode],
      html: `<apie-render-code></apie-render-code>`,
    });
    expect(page.root).toEqualHtml(`
      <apie-render-code>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </apie-render-code>
    `);
  });
});
