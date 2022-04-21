export type PokeResult = {
  name: string;
  url: string;
};

export type PokeListResultType = {
  next: string;
  count: number;
  results: PokeResult[];
};
