import React, { useReducer, useCallback } from 'react';

import FamilyMemberForm from '../FamilyMemberForm';
import { reducer, initialState } from './stateHelpers';
import { ActionType, FamilyMemberData } from './types';

const FamilyFormContainer: React.FC = () => {
  const [familyData, dispatch] = useReducer(reducer, initialState);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleMemberDataChange = useCallback(
    (payload: Partial<FamilyMemberData>) =>
      dispatch({ type: ActionType.CHANGE_MEMBER_DATA, payload }),
    [dispatch]
  );

  return (
    <div>
      <h1>
        Welcome! Please fill out the form below and we will calculate the optimal daily menu for you
        and your family.
      </h1>
      <form onSubmit={onFormSubmit}>
        {familyData.map(familyMemberData => (
          <FamilyMemberForm
            key={familyMemberData.memberId}
            familyMemberData={familyMemberData}
            handleMemberDataChange={handleMemberDataChange}
          />
        ))}

        <button
          type="button"
          onClick={e => {
            e.preventDefault();
            dispatch({ type: ActionType.ADD_FAMILY_MEMBER });
          }}
        >
          + Add family member
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FamilyFormContainer;
