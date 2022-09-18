import React, { useReducer, useState, useMemo, useCallback } from 'react';

import FamilyMenu from '../FamilyMenu';
import FamilyForm from './FamilyForm';
import { reducer, initialState } from './stateHelpers';
import calculateDailyMenu from '../../utils/calculateDailyMenu';
import { ActionType, FamilyMemberData, FamilyMemberDataWithMenu } from '../../types';

const FamilyFormContainer: React.FC = () => {
  const [familyData, dispatch] = useReducer(reducer, initialState);
  const [familyMenu, setFamilyMenu] = useState<FamilyMemberDataWithMenu[]>([]);

  const isSubmitDisabled = useMemo(
    () =>
      familyData.length === 0 ||
      // For now just ensure that name, age and gender is set for every family member
      !familyData.every(member => !!member.name && !!member.age && !!member.gender),
    [familyData]
  );

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const menuByMembers = calculateDailyMenu(familyData);
    setFamilyMenu(menuByMembers);
  };
  const resetForm = () => {
    setFamilyMenu([]);
    dispatch({ type: ActionType.RESET_DATA });
  };

  const handleMemberDataChange = (payload: Partial<FamilyMemberData>) =>
    dispatch({ type: ActionType.CHANGE_MEMBER_DATA, payload });

  const addFamilyMember = useCallback(
    () => dispatch({ type: ActionType.ADD_FAMILY_MEMBER }),
    [dispatch]
  );
  const removeFamilyMember = useCallback(
    (memberId: string) =>
      dispatch({ type: ActionType.REMOVE_FAMILY_MEMBER, payload: { memberId } }),
    [dispatch]
  );

  return (
    <div>
      {familyMenu.length ? (
        <FamilyMenu familyDataWithMenu={familyMenu} resetForm={resetForm} />
      ) : (
        <FamilyForm
          familyData={familyData}
          handleMemberDataChange={handleMemberDataChange}
          addFamilyMember={addFamilyMember}
          removeFamilyMember={removeFamilyMember}
          onFormSubmit={onFormSubmit}
          isSubmitDisabled={isSubmitDisabled}
        />
      )}
    </div>
  );
};

export default FamilyFormContainer;
