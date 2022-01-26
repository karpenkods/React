import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";

export const SAVE_TOKEN = "SAVE_TOKEN";

export type TSaveTokenAction = {
  type: typeof SAVE_TOKEN;
  token: string;
};

export const saveTokenAction: ActionCreator<TSaveTokenAction> = (
  token: string
) => ({
  type: SAVE_TOKEN,
  token,
});

export const saveToken =
  (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    dispatch(saveTokenAction(window.__token__));
  };
