type DataGame = {
  "id": number,
  "nameGameRu": string,
  "nameGame": string,
  "check1": string,
  "check2": string,
  "check3": string,
  "discriptionp1": string,
  "discriptionp2"?: string,
  "discriptionp3"?: string,
  "questionp1": string,
  "questionp2"?: string,
  "questionp3"?: string,
  "questionp4"?: string,
  "questionp5"?: string,
  "questionp6"?: string,
  "rulesp1": string,
  "rulesp2"?: string,
  "rulesp3"?: string,
  "rulesp4"?: string,
  "rulesp5"?: string,
  "basicComplexity": number,
  "category": string,
  "rating": number,
  "levels": number,
  "image": string,
};

type GamesJSON = {
  games: DataGame[];
  total: number;
  skip: number;
  limit: number;
};

interface JSONLoader {
  getProducts(): DataGame[];
}

type filterOptions = {
  category: string[];
};

type sortOptions = [
  prop: 'rating' | 'basicComplexity',
  order: 'ascending' | 'descending'
];

type inputOrder = {
  target: HTMLInputElement;
  errors: string[];
  errorTarget: HTMLElement;
};

type route = {
  route: string;
  data: string;
};
