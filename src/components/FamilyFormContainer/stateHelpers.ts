import uniqueId from 'lodash/uniqueId';
import { Action, ActionType, FamilyMemberData } from '../../types';

const getInitialFamilyMemberData = (): FamilyMemberData => ({
  memberId: uniqueId(),
  name: '',
  gender: null,
  age: null,
  lactoseIntolerance: false,
});

export const initialState: FamilyMemberData[] = [getInitialFamilyMemberData()];

export const reducer = (state: FamilyMemberData[], action: Action) => {
  switch (action.type) {
    case ActionType.ADD_FAMILY_MEMBER: {
      return [...state, getInitialFamilyMemberData()];
    }
    case ActionType.CHANGE_MEMBER_DATA: {
      return state.map(data =>
        data.memberId === action.payload?.memberId ? { ...data, ...action.payload } : data
      );
    }
    case ActionType.REMOVE_FAMILY_MEMBER: {
      return state.filter(data => data.memberId !== action.payload?.memberId);
    }
    case ActionType.RESET_DATA: {
      return [getInitialFamilyMemberData()];
    }
    default: {
      return state;
    }
  }
};
