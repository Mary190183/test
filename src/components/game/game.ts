export class Game {
  "id": number;
  "nameGameRu": string;
  "nameGame": string;
  "check1": string;
  "check2": string;
  "check3": string;
  "discriptionp1": string;
  "discriptionp2"?: string;
  "discriptionp3"?: string;
  "questionp1": string;
  "questionp2"?: string;
  "questionp3"?: string;
  "questionp4"?: string;
  "questionp5"?: string;
  "questionp6"?: string;
  "rulesp1": string;
  "rulesp2"?: string;
  "rulesp3"?: string;
  "rulesp4"?: string;
  "rulesp5"?: string;
  "basicComplexity": number;
  "category": string;
  "levels": number;
  "image": string;
  "rating": number;

  constructor(data: DataGame) {
    ({
      id: this.id,
      nameGameRu: this.nameGameRu,
      nameGame: this.nameGame,
      check1: this.check1,
      check2: this.check2,
      check3: this.check3,
      discriptionp1: this.discriptionp1,
      discriptionp2?: this.discriptionp2,
      discriptionp3?: this.discriptionp3,
      questionp1: this.questionp1,
      questionp2?: this.questionp2,
      questionp3?: this.questionp3,
      questionp4: this.questionp4,
      questionp5?: this.questionp5,
      questionp6?: this.questionp6,
      rulesp1: this.rulesp1,
      rulesp2?: this.rulesp2,
      rulesp3?: this.rulesp3,
      basicComplexity: this.basicComplexity,
      category: this.category,
      levels: this.levels,
      rating: this.rating,
      image: this.image,
    } = data);
  }
}
