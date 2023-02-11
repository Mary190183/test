import { Loader } from './loader';
export class DescriptionController {
  loader: Loader;
  constructor(
    loader: Loader) {
    this.loader = loader;
  }

  details(e: Event): void {
    if (!e.target || !e.currentTarget) throw new Error('target is null');
    const target = <HTMLElement>e.target;
    if (!target.classList.contains('button_details')) return;
    const card = target.closest('.card');
    if (!(card instanceof HTMLElement))
      throw new Error(`Can't find class card`);
    const gameId = card.dataset.gameId;
    if (!gameId) throw new Error('There is no data-set attribute in card');
  }

}
