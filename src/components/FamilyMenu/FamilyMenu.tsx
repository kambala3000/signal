import React from 'react';

import { FamilyMemberDataWithMenu } from '../../types';
import FamilyMenuItem from './FamilyMenuItem';
import styles from './FamilyMenu.module.css';

interface Props {
  familyDataWithMenu: FamilyMemberDataWithMenu[];
  resetForm: () => void;
}

const FamilyMenu: React.FC<Props> = ({ familyDataWithMenu, resetForm }) => (
  <div>
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>Here is your daily menu!</h1>
      <button onClick={resetForm}>Back</button>
    </div>
    {familyDataWithMenu.map(familyMemberData => (
      <FamilyMenuItem key={familyMemberData.memberId} familyMemberData={familyMemberData} />
    ))}
  </div>
);

export default FamilyMenu;
