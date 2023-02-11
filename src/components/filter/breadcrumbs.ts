import { createElemDOM } from "../../utils/utils";

export class Breadcrumbs{
    public static get(game: DataGame): HTMLElement {
      const {category, nameGameRu, id} = game;
      const container = createElemDOM('div', 'breadcrumbs');
      const sep = createElemDOM('span', 'breadcrumbs_sep', ' / ');
      const firstCrumb = createElemDOM('a', 'breadcrumbs_path', `Тренажеры ${category.toLowerCase()}`);
      const secondCrumb = createElemDOM('a', 'breadcrumbs_path', nameGameRu);
      firstCrumb.setAttribute('href', `/?categories=${category}`);
      secondCrumb.setAttribute('href', `/game/${id}`);
      container.append(firstCrumb, sep, sep.cloneNode(true), secondCrumb)

      return container;
    }
}