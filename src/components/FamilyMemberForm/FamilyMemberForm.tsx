import React from 'react';

import { FamilyMemberData, Gender } from '../../types';
import { AGE_OPTIONS } from './constants';

interface Props {
  familyMemberData: FamilyMemberData;
  handleMemberDataChange: (payload: Partial<FamilyMemberData>) => void;
  removeFamilyMember: (memberId: string) => void;
}

const FamilyMemberForm: React.FC<Props> = ({
  familyMemberData,
  handleMemberDataChange,
  removeFamilyMember,
}) => {
  const onDataChange = (data: Partial<FamilyMemberData>) =>
    // Always include 'memberId' to change proper data in reducer
    handleMemberDataChange({ ...data, memberId: familyMemberData.memberId });

  return (
    <div>
      <button type="button" onClick={() => removeFamilyMember(familyMemberData.memberId)}>
        -
      </button>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={familyMemberData.name}
          onChange={e => onDataChange({ name: e.target.value })}
        />
      </label>

      <label>
        Gender
        <select name="gender" onChange={e => onDataChange({ gender: e.target.value as Gender })}>
          <option value="">--Please select gender--</option>
          <option value={Gender.Male}>Male</option>
          <option value={Gender.Female}>Female</option>
        </select>
      </label>

      <label>
        Age
        <select name="age" onChange={e => onDataChange({ age: e.target.value })}>
          <option value="">--Please select age--</option>
          {AGE_OPTIONS.map(optionData => (
            <option key={optionData.value} value={optionData.value}>
              {optionData.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Lactose intolerance
        <input
          type="checkbox"
          name="lactoseIntolerance"
          checked={familyMemberData.lactoseIntolerance}
          onChange={e => onDataChange({ lactoseIntolerance: e.target.checked })}
        />
      </label>
    </div>
  );
};

export default FamilyMemberForm;
