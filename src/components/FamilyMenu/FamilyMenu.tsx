import React from 'react';
import { FamilyMemberDataWithMenu } from '../../types';
import FamilyMenuItem from './FamilyMenuItem';

interface Props {
  familyDataWithMenu: FamilyMemberDataWithMenu[];
  resetForm: () => void;
}

const FamilyMenu: React.FC<Props> = ({ familyDataWithMenu, resetForm }) => (
  <div>
    <h1>Here is your daily menu!</h1>
    {familyDataWithMenu.map(familyMemberData => (
      <FamilyMenuItem key={familyMemberData.memberId} familyMemberData={familyMemberData} />
    ))}
    <button onClick={resetForm}>Back</button>
  </div>
);

export default FamilyMenu;
