import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'apie-render-code',
  styleUrl: 'apie-render-code.css',
  shadow: true,
})
export class ApieRenderCode {
  @Prop() code: string;
  @Prop() highlightLine: number;
  @Prop() linesToDisplay: number = 12;

  @State() lines: string[];

  componentWillLoad() {
    this.lines = this.code.split('\n');
  }

  public getFirstLineNumber(): number
  {
    if (!this.highlightLine) {
      return 1;
    }
    return Math.max(
      1,
      Math.min(
        this.highlightLine - Math.ceil(this.linesToDisplay /2) + 1,
        this.lines.length - this.linesToDisplay
      )
    );
  }

  public getLinesToRender(): string[]
  {
    const firstLine = this.getFirstLineNumber();
    return this.lines.slice(firstLine - 1, firstLine - 1 + this.linesToDisplay);
  }

  render() {
    return (
      <div>
        <pre class="code-container">
          {this.getLinesToRender().map((line, index) => (
            <code
              class={{ 'highlighted': index + this.getFirstLineNumber() === this.highlightLine }}
            >
              {`${index + this.getFirstLineNumber()}. ${line}`}
            </code>
          ))}
        </pre>
      </div>
    );
  }

}
