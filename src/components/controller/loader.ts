import { Game } from '../game/game';

export class Loader implements JSONLoader {
  private games: DataGame[];

  constructor(data: GamesJSON) {
    if (!this.isGamesJSON(data)) {
      throw Error('Invalid games data');
    }

    this.games = data.games.map(
      (game: Game) => new Game(game)
    );
  }

  getProducts() {
    return this.games;
  }

  getProduct(gameId: string): DataGame {
    const id = Number(gameId);
    return this.games.filter((game) => game.id === id)[0];
  }

  private isGamesJSON(data: GamesJSON | unknown): data is GamesJSON {
    return (data as GamesJSON).games !== undefined;
  }
}