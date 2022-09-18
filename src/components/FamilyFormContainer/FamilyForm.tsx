import React from 'react';

import FamilyMemberForm from '../FamilyMemberForm';
import { ActionType, FamilyMemberData } from '../../types';

interface Props {
  familyData: FamilyMemberData[];
  handleMemberDataChange: (payload: Partial<FamilyMemberData>) => void;
  addFamilyMember: () => void;
  removeFamilyMember: (memberId: string) => void;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitDisabled: boolean;
}

const FamilyForm: React.FC<Props> = ({
  familyData,
  handleMemberDataChange,
  addFamilyMember,
  removeFamilyMember,
  onFormSubmit,
  isSubmitDisabled,
}) => {
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
            removeFamilyMember={removeFamilyMember}
          />
        ))}

        <button type="button" onClick={addFamilyMember}>
          + Add family member
        </button>
        <button type="submit" disabled={isSubmitDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FamilyForm;
