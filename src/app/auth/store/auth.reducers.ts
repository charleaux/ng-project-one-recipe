export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: undefined,
  authenticated: false
};

export function authReducer(state = initialState, action) {
  return state;
}
