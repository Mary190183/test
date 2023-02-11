import { createElemDOM } from '../../utils/utils';

export class Sorter {
  element: HTMLElement;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): HTMLElement {
    const container = createElemDOM('div', 'sorter');
    const input = createElemDOM('select', 'sorter_input');
    input.setAttribute('type', 'select');
    const sortOptions = [
      this.addOption('basicComplexity-ascending', 'Сложность ascending'),
      this.addOption('basicComplexity-descending', 'Сложность descending'),
      this.addOption('rating-ascending', 'Рейтинг ascending'),
      this.addOption('rating-descending', 'Рейтинг descending'),
    ];

    input.append(...sortOptions);
    container.append(input);

    return container;
  }

  private addOption(value: string, name: string): HTMLElement {
    const option = createElemDOM('option', 'sorter_option', name);
    option.setAttribute('value', value);

    return option;
  }

  public sort(data: DataGame[]) {
    const selector = this.element.querySelector('select') as HTMLSelectElement;
    const [prop, order] = selector.value.split('-') as sortOptions;

    switch (order) {
      case 'ascending':
        data.sort((a, b) => a[prop] - b[prop]);
        break;
      case 'descending':
        data.sort((a, b) => b[prop] - a[prop]);
        break;
    }
  }

  public setValue(value: string) {
    const selector = this.element.querySelector('select');
    if (!(selector instanceof HTMLSelectElement)) return;

    selector.value = value || 'basicComplexity-ascending';
  }
}
