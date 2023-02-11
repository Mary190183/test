import { createElemDOM } from '../utils/utils';
import { GameCardView } from '../components/view/game/gameCardView';
import { DescriptionController } from '../components/controller/descriptionController';
import { Breadcrumbs } from '../components/filter/breadcrumbs';

export class TrenagorsPage {
  descriptionController: DescriptionController;
  game?: DataGame;
  page: HTMLElement;
  constructor(descriptionController: DescriptionController) {
    this.descriptionController = descriptionController;
    this.page = createElemDOM('div', 'product-page');
    // this.setListeners();
  }
  draw(game: DataGame): void {
    this.game = game;
    const breadcrumbs = Breadcrumbs.get(game);
    const main = document.querySelector('.main');
    if (!main) throw new Error("Can't find element with class 'main'");
    this.clear();
    main.append(this.page);
    GameCardView.drawProduct(this.game);
    this.page.prepend(breadcrumbs);
  }
  private clear() {
    const main = document.querySelector('.main');
    if (!main) throw new Error("Can't find element with class 'main'");
    main.innerHTML = '';
  }
  // private setListeners(): void {
  //   this.page.addEventListener('click', (e: Event) => {
  //     if (!e.target || !e.currentTarget) throw new Error('target is null');
  //     const target = <HTMLElement>e.target;
  //     if (target.classList.contains('images__img')) {
  //       const img = document.querySelector('.card__img');

  //       if (
  //         img instanceof HTMLImageElement &&
  //         target instanceof HTMLImageElement
  //       ) {
  //         img.src = target.src;
  //         img.alt = target.alt;
  //       }
  //     }
  //   });
  // }
}
