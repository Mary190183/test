import { createElemDOM } from '../../../utils/utils';
import '../../../assets/styles/filter-page.css';

export class GameCardView {
  private static drawCard(data: DataGame): HTMLElement {
    const card = createElemDOM('div', 'card card-small');
    const title = createElemDOM('h2', 'card__title', data.nameGameRu);
    const imgBlock = createElemDOM('div', 'card__img_block');
    const img = createElemDOM('img', 'card__img');
    const img1 = createElemDOM('h1', 'card__img1', `+`);
    imgBlock.append(img, img1);
    const difficult = createElemDOM('p', 'card__difficult', `Сложность: ${data.basicComplexity}`);
    const description = createElemDOM('p', 'card__description', `${data.check1}, ${data.check2}, ${data.check3}`);
    card.dataset.gameId = data.id.toString();

    if (img instanceof HTMLImageElement) {
      img.alt = data.nameGameRu;
      img.src = data.image;
    }
 
    const buttonView1 = createElemDOM(
      'button',
      'button button_trane',
      'Тренироваться'
    );
 
    const buttonView2 = createElemDOM(
      'button',
      'button button_details',
      'Подробнее'
    );
    const buttWrap = createElemDOM('div', 'wrapper_butt');
    buttWrap.append(buttonView1, buttonView2);
    card.append(imgBlock, difficult, title, description, buttWrap);
    return card;
  }

  public static draw(data: DataGame[]): void {
    const fragment = document.createDocumentFragment();
    const container = document.querySelector('.games');
    if (!container) throw new Error("Can't find element with class 'games'");

    if (!data.length) {
      fragment.append(createElemDOM('p', '', 'No games to display'));
    } 
    else {
      data.forEach((game) => {fragment.append(GameCardView.drawCard(game));
      });
    }

    container.textContent = '';
    container.append(fragment);
  }

  public static drawProduct(game: DataGame): void {
    const fragment = document.createDocumentFragment();
    const container = document.querySelector('.product-page');
    if (!container)
      throw new Error("Can't find element with class 'product-page'");
    const card = createElemDOM('div', 'card card_single');
    card.dataset.gameId = game.id.toString();
    const title = createElemDOM('h3', 'card__title', game.nameGameRu);
    const img = createElemDOM('img', 'img');
    if (img instanceof HTMLImageElement) {
      img.alt = game.nameGameRu;
      img.src = game.image;
    }
    const category = createElemDOM(
      'p',
      'card__category',
      `Тренажер ${game.category}`
    );
    const description = createElemDOM(
      'h5',
      'card__description',
      `Описание: ${game.discriptionp1}`
    );

    card.append(
      title,
      img,
      category,
      description,
    );
    fragment.append(card);

    container.textContent = '';
    container.append(fragment);
  }
  }
