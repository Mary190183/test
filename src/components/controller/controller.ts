import { NotFoundPage } from './../../pages/notFoundPage';
import { TrenagorsPage } from '../../pages/trenagorsPage';
import { DescriptionController } from './descriptionController';
import { Loader } from './loader';
import gamesData from '../../data/games.json';
import { FilterPage } from '../../pages/filterPage';

export class Controller {
  private loader: Loader;
  private games: DataGame[];
  private filterPage: FilterPage;
  private descriptionController: DescriptionController;
  private trenagorsPage: TrenagorsPage;
  private notFoundPage: NotFoundPage;

  constructor() {
    this.loader = new Loader(gamesData);
    this.games = this.loader.getProducts();
    this.descriptionController = new DescriptionController(this.loader);
    this.filterPage = new FilterPage(this.games, this.descriptionController);
    this.trenagorsPage = new TrenagorsPage(this.descriptionController);
    this.notFoundPage = new NotFoundPage();
  }

  drawFilterPage() {
    this.filterPage.data = this.games;
    this.filterPage.draw();
  }

  drawTrenagorsPage(id: string) {
    const game = this.loader.getProduct(id);
    if (game) this.trenagorsPage.draw(game);
    else this.notFoundPage.draw();
  }
  drawPageNotFound() {
    this.notFoundPage.draw();
  }
}
