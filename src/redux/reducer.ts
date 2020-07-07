import {produce} from "immer";
import { v4 as uuidv4 } from 'uuid';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from 'react-redux';
import { UserId } from '../helper/user';
import { IProfile } from '../view/components/profile';
import { IRatingHistoryRow } from '../service/rating';
import {ILeaderboard, IMatch} from "../helper/data";
import {IFollowingEntry} from "../service/storage";

export function getNoteId() {
  return uuidv4();
}

export const EXEC = 'EXEC'

export function exec(mutation: StateMutation) {
  return {
    type: EXEC,
    mutation
  }
}


export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector

type StateMutation = (state: AppState) => void;

export function useMutate() {
  const dispatch = useDispatch()
  return (m: StateMutation) => dispatch(exec(m));
}

export function setAuth(user: UserId | null) {
  return (state: AppState) => {
    state.auth = user;
  };
}

export function setFollowing(following: IFollowingEntry[]) {
  return (state: AppState) => {
    state.following = following;

    // Invalidate followedMatches cache
    state.followedMatches = undefined;
  };
}

interface IAction {
  type: string;
  id?: string;
  note?: INote;
  mutation?: any;
}

interface INoteEntry {
  id: string;
  note: INote;
}

interface INote {
  noteTitle: string;
  noteValue: string;
}

interface IUser {
  profile?: IProfile;
  rating?: IRatingHistoryRow[];
  matches?: IMatch[];
}

interface IUserDict {
  [key: string]: IUser;
}

interface ILeaderboardDict {
  [key: string]: ILeaderboard;
}

export interface AppState {
  auth?: UserId | null;
  user: IUserDict;

  following: IFollowingEntry[];
  followedMatches?: IMatch[];

  leaderboard: ILeaderboardDict;
}

const initialState: Partial<AppState> = {
  user: {},
  leaderboard: {},
};

function notesReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case EXEC:
      return produce(state, action.mutation);
    default:
      return state
  }
}

export default notesReducer
