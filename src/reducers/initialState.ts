export interface ISearchBox {
  state: string,
  term: string
}

export default interface IState {
  readonly version: string,
  state: string,
  searchBox?: ISearchBox | null
};

export const initialState: IState = {
  version: '0.1',
  state: 'idle', // Global machine
  searchBox: {
    state: 'idle',
    term: ''
  }
};