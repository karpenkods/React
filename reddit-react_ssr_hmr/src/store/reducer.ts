import { ActionCreator, Reducer } from "redux";
import {
  MeRequestAction,
  MeRequestSuccessAction,
  MeRequestErrorAction,
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
} from "./me/actions";
import { meReducer, MeState } from "./me/reducer";
import { TSaveTokenAction, SAVE_TOKEN } from "./token/actions";

export type RootState = {
  commentText: string;
  token: string;
  me: MeState;
};

const initialState: RootState = {
  commentText: "Привет, SkillBox!",
  token: "",
  me: {
    loading: false,
    error: "",
    data: {},
  },
};

const UPDATE_COMMENT = "UPDATE_COMMENT";

type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string;
};
export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
});

const SET_TOKEN = "SET_TOKEN";
type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
};

export const setToken: ActionCreator<SetTokenAction> = (token) => ({
  type: SET_TOKEN,
  token,
});

type MyAction =
  | UpdateCommentAction
  | SetTokenAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction
  | TSaveTokenAction;

export const rootReducer: Reducer<RootState, MyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      };
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
