import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'apie-class-display',
  styleUrl: 'apie-class-display.css',
  shadow: true,
})
export class ApieClassDisplay {

  @Prop() phpClassName: string;

  render() {
    const parts = this.phpClassName.split('\\');
    const lastIndex = parts.length - 1;
    return (
      <div class="php-class-container">
        {parts.map((part, index) => (
          <span class="php-class-part" key={index}>
            {part} { index !== lastIndex && <span>&thinsp;\&thinsp;</span>}
          </span>
        ))}
      </div>
    );
  }

}
