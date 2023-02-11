import Router from './router';

export default class FilterPageRouter extends Router {
  constructor() {
    super();
  }

  setCategories(): void {
    const categories = [...document.querySelectorAll('.categories-item_input')]
      .filter((item) => (item as HTMLInputElement).checked)
      .map((item) => (item as HTMLInputElement).value);

    if (categories.length) {
      this.setQuery('categories', categories.join('↕'));
    } else {
      this.deleteQuery('categories');
    }
  }

  setSorting(): void {
    const selector = document.querySelector('.sorter_input');

    if (!(selector instanceof HTMLSelectElement)) return;

    this.setQuery('sort', selector.value);
  }

  getValues(name: string): string[] {
    const queryString = super.getQuery(name);
    if (!queryString) return [];
    console.log(queryString);
    return queryString.split('↕').map((value) => value.toLowerCase());
  }

  getSorting(): string {
    const queryString = super.getQuery('sort');
    if (!queryString) return '';

    return queryString;
  }
}
