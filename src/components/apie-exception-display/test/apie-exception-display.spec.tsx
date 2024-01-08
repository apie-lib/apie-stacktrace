import { newSpecPage } from '@stencil/core/testing';
import { ApieExceptionDisplay } from '../apie-exception-display';

describe('apie-exception-display', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApieExceptionDisplay],
      html: `<apie-exception-display></apie-exception-display>`,
    });
    expect(page.root).toEqualHtml(`
      <apie-exception-display>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </apie-exception-display>
    `);
  });
});
