import React from 'react';

import FamilyMemberFormItem from '../FamilyMemberFormItem';
import { FamilyMemberData } from '../../types';
import styles from './FamilyFormContainer.module.css';

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
}) => (
  <div>
    <h1 className={styles.formHeader}>
      Welcome! Please fill out the form below and we will calculate the optimal daily menu for you
      and your family.
    </h1>
    <form onSubmit={onFormSubmit}>
      <div>
        {familyData.map(familyMemberData => (
          <FamilyMemberFormItem
            key={familyMemberData.memberId}
            familyMemberData={familyMemberData}
            handleMemberDataChange={handleMemberDataChange}
            removeFamilyMember={removeFamilyMember}
          />
        ))}
      </div>

      <div className={styles.footerButtonsWrapper}>
        <button type="button" className={styles.footerBtn} onClick={addFamilyMember}>
          + Add family member
        </button>
        <button type="submit" className={styles.footerBtn} disabled={isSubmitDisabled}>
          Submit
        </button>
      </div>
    </form>
  </div>
);
export default FamilyForm;
