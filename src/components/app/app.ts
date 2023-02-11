import { Controller } from '../controller/controller';
import { AppRouter } from '../controller/appRouter';

export default class App {
  private controller: Controller;
  router: AppRouter;

  constructor() {
    this.controller = new Controller();
    this.router = new AppRouter();
  }

  start() {
    this.handleLocation();
    const main: HTMLDivElement = <HTMLDivElement>(
      document.querySelector('.main')
    );
    main.addEventListener('click', (e) => {
      if (!e.target || !e.currentTarget) throw new Error('target is null');
      const target = <HTMLElement>e.target;
      const card = target.closest('.card');

      if (!(card instanceof HTMLElement)) return;

      if (target.classList.contains('button_details')) {
        const gameId = card.dataset.gameId;
        if (!gameId)
        throw new Error('There is no data-set attribute in card');
        this.router.routeToGame(gameId);
        this.controller.drawTrenagorsPage(gameId);
      }
    });

    const logo = document.querySelector('.header_heading');
    logo?.addEventListener('click', () => {
      this.router.routeHome();
      this.controller.drawFilterPage();
    });

    window.addEventListener('popstate', () => this.handleLocation());
  }

  handleLocation() {
    const path = this.router.getPath();

    if (path === '/' || path.includes('/?')) {
      this.controller.drawFilterPage();
    } 

    else if (path.includes('/game')) {
      const id = path.split('/').reverse()[0];
      this.controller.drawTrenagorsPage(id);
    } else {
      this.controller.drawPageNotFound();
    }
  }
}
