import { Component, Prop, State, h } from '@stencil/core';
import type { WrappedError, WrappedErrorTraceList } from '../../utils/utils';

@Component({
  tag: 'apie-exception-display',
  styleUrl: 'apie-exception-display.css',
  shadow: true,
})
export class ApieExceptionDisplay implements WrappedError {
  @Prop({mutable: true, reflect: true}) message?: string;
  @Prop({mutable: true, reflect: true}) code?: number;
  @Prop({mutable: true, reflect: true}) phpClassName?: string;
  @Prop({mutable: true, reflect: true}) trace?: WrappedErrorTraceList;
  @Prop({mutable: true, reflect: true}) phpVersion?: string;
  @State() clamped: boolean = true;
  render() {
    return (
      <div>
        <section>
          <div class="stretch-exception-display">
            <main>
              <div class="overflow-hidden">
                <div class="exception-message-block">
                  <header class="exception-type">
                    { this.phpClassName && <apie-class-display phpClassName={this.phpClassName}></apie-class-display> }
                    { this.phpVersion && <div class="php-version">
                      <span><span class="tracking-wider">PHP</span>&nbsp;{this.phpVersion}</span>
                    </div> }
                  </header>
                  <div class="exception-message" onClick={() => this.clamped = !this.clamped}>
                    <div class={this.clamped ? "clamped-message" : ""}>{this.message}</div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>
      </div>
    );
  }

}
