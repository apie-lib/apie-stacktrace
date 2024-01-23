import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'apie-filter-overview',
  styleUrl: 'apie-filter-overview.css',
  shadow: true,
})
export class ApieFilterOverview {
  @Prop() filterNames: string[] = [];
  @Prop() inputPrefix: string = 'query';
  @State() filters: Record<string, string> = {};
  @State() filterKey: string = '';
  @State() filterValue: string = '';
  @State() showFilterOptions: boolean = false;

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
    this.filterKey = Object.keys(this.filters)[0] ?? '';
  }

  public get availableFilters(): string[]
  {
    return this.filterNames.filter((filterName: string) => !this.filters[filterName])
  }

  render() {
    return (
      <div>
        <div>
          { this.availableFilters.length > 0 && <button onClick={() => this.toggleOptions()}>Add filter</button> }
          {this.showFilterOptions && (
            <div>
            <select
              onInput={(e) => (this.filterKey = (e.target as HTMLSelectElement).value)}
            >
              [
                <option value="" selected={"" === this.filterKey}>--</option>,
                {this.availableFilters.map((filter) => (
                  <option value={filter} key={filter} selected={filter === this.filterKey}>
                    {filter}
                  </option>
                ))}
              ]
            </select>,
            <input
            type="text"
            value={this.filterValue}
            onInput={(e) => (this.filterValue = (e.target as HTMLInputElement).value)}
          />,
          <button disabled={!this.filterKey || !this.filterValue} onClick={() => this.handleFilterAdd()}>Add Filter</button>
            </div>
          )}         
        </div>

        <div>
          {Object.entries(this.filters).map(([key,value]) => (
            <div key={key} class="filter-tag">
              {key} = {value}
              <button onClick={() => this.handleFilterRemove(key)}>X</button>
              {/* Hidden input for each filter */}
              <input type="hidden" name={`${this.inputPrefix}[${key}]`} value={value} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}