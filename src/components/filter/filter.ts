export default class Filter {
  data: DataGame[];
  currentFilterOptions: filterOptions;

  constructor(data: DataGame[]) {
    this.data = data;
    this.currentFilterOptions = this.initFilterOptions();
  }

  public filter() {
    const { category } = this.getFilterOptions();
    const data = this.data.filter((item) => category.includes(item.category))
    return data;
  }

  private getFilterOptions(): filterOptions {
    const options = this.initFilterOptions();
    const parsedCategories: string[] = [];
    const categories = [...document.querySelectorAll('.categories-item_input')];

    categories.forEach((item) => {
      if (item instanceof HTMLInputElement && item.checked) {
        parsedCategories.push(item.value);
      }
    });

    if (parsedCategories.length) options.category = parsedCategories;
    return options;
  }

  private initFilterOptions(): filterOptions {
    const category = this.data.map((item) => item.category);
    return { category };
  }
}
