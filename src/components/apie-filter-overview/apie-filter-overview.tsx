import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'apie-filter-overview',
  styleUrl: 'apie-filter-overview.css',
  shadow: false,
  scoped: true
})
export class ApieFilterOverview {
  @Prop({mutable: true, reflect: true}) filterNames: string[] = [];
  @Prop({mutable: true, reflect: true}) inputPrefix: string = 'query';
  @Prop({mutable: true, reflect: true}) filters: Record<string, string> = {};
  @Prop({mutable: true, reflect: true}) labels: Record<string, string> = {};
  @State() filterKey: string = '';
  @State() filterValue: string = '';
  @State() showFilterOptions: boolean = false;

  private select?: HTMLSelectElement;

  handleFilterAdd() {
    if (this.filterKey && this.filterValue) {
      this.filters[this.filterKey] = this.filterValue;
    }
    this.filters = {...this.filters}
    this.showFilterOptions = true;
    this.toggleOptions();
  }

  handleFilterRemove(index: string) {
    delete this.filters[index]
    this.filters = {...this.filters}
  }

  toggleOptions() {
    this.showFilterOptions = !this.showFilterOptions;
    this.filterKey = this.availableFilters[0] ?? '';
    if (this.showFilterOptions && this.select) {
      setTimeout(() => {
        this.select.focus();
      }, 100)
    }
  }

  public get availableFilters(): string[]
  {
    return this.filterNames.filter((filterName: string) => !this.filters[filterName])
  }

  render() {
    return (
      <div>
        <div>
          {
            [
              this.availableFilters.length > 0 && <button type="button" onClick={() => this.toggleOptions()}>Add filter</button>,
              <div style={ { display: (this.showFilterOptions ? 'block' : 'none') } }>
                <select
                  ref={el => this.select = el as HTMLSelectElement}
                  class="select-container"
                  onInput={(e) => (this.filterKey = (e.target as HTMLSelectElement).value)}
                >
                  [
                    {this.availableFilters.map((filter) => (
                      <option value={filter} key={filter} selected={filter === this.filterKey}>
                        {this.labels[filter] ?? filter}
                      </option>
                    ))}
                  ]
                </select>,
                <input
                  type="text"
                  value={this.filterValue}
                  onInput={(e) => (this.filterValue = (e.target as HTMLInputElement).value)}
                />,
                <button type="button" disabled={!this.filterKey || !this.filterValue} onClick={() => this.handleFilterAdd()}>Add Filter</button>
              </div>  
            ]
          }
        </div>

        <div>
          {Object.entries(this.filters).map(([key,value]) => (
            <div key={key} class="filter-tag">
              {this.labels[key] ?? key} contains "{value}"
              <button type="button" onClick={() => this.handleFilterRemove(key)}>X</button>
              {/* Hidden input for each filter */}
              <input type="hidden" name={`${this.inputPrefix}[${key}]`} value={value} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}