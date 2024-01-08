import { Component, Host, Prop, State, h } from '@stencil/core';
import { getFileContents, type WrappedErrorTrace } from '../../utils/utils';

@Component({
  tag: 'apie-stack-display',
  styleUrl: 'apie-stack-display.css',
  shadow: true,
})
export class ApieStackDisplay {
  @Prop() trace: Array<WrappedErrorTrace>;

  @State() selectedIndex: number = 0;

  public hasFileContents(fileName: string|null|undefined): boolean
  {
    if (!fileName) {
      return false;
    }
    return null !== getFileContents(fileName);
  }

  public getFileContents(fileName: string|null|undefined): string
  {
    if (!fileName) {
      return null;
    }
    return getFileContents(fileName) || null;
  }

  render() {
    if (!this.trace) {
      return (
        <Host>
          <slot></slot>
        </Host>
      );
    }
    return (
      <section>
        <div class="container">
          <div class="stretch-trace-display">
            <aside>
              <div class="stacktrace-list">
                <div class="header">
                  &nbsp;
                </div>
                <div class="list-container">
                  <ol>
                    {this.trace.map((value: WrappedErrorTrace, index: number) => {
                      return ([
                        <li class={ this.selectedIndex === index ? 'stack-item active' : 'stack-item inactive' } onClick={() => this.selectedIndex = index}>
                          { value.file }:{ value.line }<br />
                          { value.class }{ value.type && (value.class ? '::' : '') }{ value.function }
                        </li>,
                        (this.selectedIndex === index && this.hasFileContents(value.file)) &&
                          <li class="source-code stack-item">
                            <apie-render-code linesToDisplay={8} code={this.getFileContents(value.file)} highlightLine={value.line}></apie-render-code>
                          </li>,
                        (this.selectedIndex === index && !this.hasFileContents(value.file)) &&
                          <li class="source-code stack-item missing">
                            No source code available to display.
                          </li>
                      ])
                    })}
                  </ol>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    );
  }

}
