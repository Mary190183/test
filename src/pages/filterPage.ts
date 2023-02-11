import { DescriptionController } from './../components/controller/descriptionController';
import { createElemDOM } from '../utils/utils';
import { GameCardView } from '../components/view/game/gameCardView';
import Filter from '../components/filter/filter';
import { Sorter } from '../components/filter/sorter';
import FilterPageRouter from '../components/controller/filterPageRouter';
import '../assets/styles/filter-page.css';

export class FilterPage {
  data: DataGame[];
  filteredData: DataGame[];
  filterBlock: HTMLElement;
  filter: Filter;
  descriptionController: DescriptionController;
  sorter: Sorter;
  router: FilterPageRouter;
  gamesHTML: HTMLElement;

  constructor(data: DataGame[], descriptionController: DescriptionController) {
    this.data = data;
    this.router = new FilterPageRouter();
    this.filteredData = data;
    this.filterBlock = this.createFiltersBlock(data);
    this.filter = new Filter(data);
    this.descriptionController = descriptionController;
    this.sorter = new Sorter();
    this.gamesHTML = createElemDOM('section', 'games');
    this.setListeners();
  }

  public draw(): void {
    const main = document.querySelector('.main');
    if (!main) throw new Error("Can't find element with class 'main'");
    this.clear();
    const page = createElemDOM('div', 'filter-page');
    const pageWrap = createElemDOM('div', 'trenagors-title-wrapper');
    const pageTitle = createElemDOM('h2', 'trenagors-title', `Тренажеры для ума`);
    const topControlsPanel = createElemDOM('div', 'top-panel');
    const games = this.gamesHTML;
    topControlsPanel.append(
      this.sorter.element,
    );

    page.append(this.filterBlock, pageWrap);
    pageWrap.append(topControlsPanel, pageTitle, games);
    main.append(page);
    this.restoreInputs();
    this.data = this.filter.filter();
    this.sorter.sort(this.data);
    GameCardView.draw(this.data);
    // this.setFoundNumber(this.data.length);
  }

  private clear(): void {
    const main = document.querySelector('.main');
    if (!main) throw new Error("Can't find element with class 'main'");
    main.innerHTML = '';
  }

  private update() {
    const games = document.querySelector('.games');
    if (!games) throw new Error("Can't find element with class 'main'");
    games.innerHTML = '';
    this.sorter.sort(this.data);
    GameCardView.draw(this.data);
    // this.setFoundNumber(this.data.length);
  }

  private createFiltersBlock(data: DataGame[]): HTMLElement {
    const container = createElemDOM('aside', 'filter');
    // const foundText = createElemDOM('div', 'found-text', 'Found: ');
    // const foundNum = createElemDOM('span', 'found-num');
    const categoriesBlock = createElemDOM('div', 'filter-block-container');
    const categoriesFieldset = createElemDOM(
      'fieldset',
      'filter-block_category'
    );
    const categoriesHeading = createElemDOM(
      'h3',
      'filter__title',
      'Категории тренажеров:'
    );
    const categories = [...new Set(data.map((game) => game.category))];
    categoriesFieldset.append(
      ...this.createCheckboxBlock(categories, 'categories', 'category')
    );


    // foundText.append(foundNum);
    categoriesBlock.append(categoriesHeading, categoriesFieldset);
      container.append(
      // foundText,
      categoriesBlock,
    );
    return container;
  }

  private createCheckboxBlock(
    array: string[],
    prefix: string,
    filterType: string
  ): HTMLElement[] {
    const items = array.map((item) => {
      const itemName = `Тренажеры ${item[0]}${item.slice(1)}`;
      const input = createElemDOM('input', `${prefix}-item_input`);
      const label = createElemDOM(
        'label',
        `${prefix}-item_label filter-item checkbox-container`,
        itemName
      );
      const box = createElemDOM('span', 'checkbox');
      input.dataset.type = filterType;
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', item);
      input.setAttribute('name', filterType);
      input.setAttribute('value', item);
      label.setAttribute('for', item);
      label.append(input, box);
      return label;
    });
    return items;
  }

  
  private setListeners(): void {
    this.filterBlock.addEventListener('click', (e) => this.applyFilters(e));
    this.filterBlock.addEventListener('change', (e) => this.applyFilters(e));
    this.sorter.element.addEventListener('input', (e) => {
      const target = e.target;
      if (!(target instanceof HTMLSelectElement)) return;
      this.sorter.sort(this.data);
      this.update();
      this.router.setSorting();
    });
  }

  private applyFilters(e: Event) {
    const target = e.target;
    if (!(target instanceof HTMLInputElement)) return;
    this.data = this.filter.filter();
    if (target.dataset.type === 'category') this.router.setCategories();
    this.update();
    // this.setFoundNumber(this.data.length);
  }

  private restoreInputs(): void {
    const categories = this.router.getValues('categories');
    const categoriesInputs = [
      ...document.querySelectorAll('.categories-item_input'),
    ];

    categoriesInputs.forEach((input) => {
      if (input instanceof HTMLInputElement) {
        if (categories?.includes(input.value.toLowerCase())) {
          input.checked = true;
        } else input.checked = false;
      }
    });
  }
  // private setFoundNumber(value: number) {
  //   const span = document.querySelector('.found-num');
  //   if (!(span)) return;
  //   span.textContent = value.toString();
  // }
}
