import { Component, Host, Prop, h } from '@stencil/core';
import type { WrappedError } from '../../utils/utils';
import '../apie-exception-display/apie-exception-display';

@Component({
  tag: 'apie-stacktrace',
  styleUrl: 'apie-stacktrace.css',
  shadow: true,
})
export class ApieStacktrace {
  @Prop({mutable: true, reflect: true}) exceptions: Array<WrappedError>;
  @Prop({mutable: true, reflect: true}) phpVersion: string;

  render() {
    if (this.exceptions) {
      return (
        <Host>
          {this.exceptions.map((value: WrappedError, index: number) => {
            return (
              [
                <apie-exception-display key={index} message={value.message} phpVersion={index ? null : this.phpVersion} phpClassName={value.class} code={value.code} ></apie-exception-display>,
                value.trace && <apie-stack-display trace={value.trace}></apie-stack-display>,
              ]
            )
          })}
        </Host>
      );
    }
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
