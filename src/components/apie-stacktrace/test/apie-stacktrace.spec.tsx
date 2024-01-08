import { newSpecPage } from '@stencil/core/testing';
import { ApieStacktrace } from '../apie-stacktrace';

describe('apie-stacktrace', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApieStacktrace],
      html: `<apie-stacktrace></apie-stacktrace>`,
    });
    expect(page.root).toEqualHtml(`
      <apie-stacktrace>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </apie-stacktrace>
    `);
  });
});
