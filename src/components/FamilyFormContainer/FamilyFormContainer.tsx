import React, { useReducer, useCallback, useState } from 'react';

import FamilyMemberForm from '../FamilyMemberForm';
import { reducer, initialState } from './stateHelpers';
import calculateDailyMenu from '../../utils/calculateDailyMenu';
import { ActionType, FamilyMemberData, FamilyMemberDataWithMenu } from '../../types';

const FamilyFormContainer: React.FC = () => {
  const [familyData, dispatch] = useReducer(reducer, initialState);
  const [familyMenu, setFamilyMenu] = useState<FamilyMemberDataWithMenu[]>([]);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const menuByMembers = calculateDailyMenu(familyData);
    console.log('menuByMembers', menuByMembers);
    setFamilyMenu(menuByMembers);
  };

  const handleMemberDataChange = useCallback(
    (payload: Partial<FamilyMemberData>) =>
      dispatch({ type: ActionType.CHANGE_MEMBER_DATA, payload }),
    [dispatch]
  );

  return (
    <div>
      {familyMenu.length ? (
        <div>
          <button onClick={() => setFamilyMenu([])}>Back</button>
        </div>
      ) : (
        <>
          <h1>
            Welcome! Please fill out the form below and we will calculate the optimal daily menu for
            you and your family.
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
        </>
      )}
    </div>
  );
};

export default FamilyFormContainer;
