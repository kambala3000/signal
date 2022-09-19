import React from 'react';

import { FamilyMemberData, Gender } from '../../types';
import { AGE_OPTIONS } from './constants';
import styles from './FamilyMemberFormItem.module.css';

interface Props {
  familyMemberData: FamilyMemberData;
  handleMemberDataChange: (payload: Partial<FamilyMemberData>) => void;
  removeFamilyMember: (memberId: string) => void;
}

const FamilyMemberFormItem: React.FC<Props> = ({
  familyMemberData,
  handleMemberDataChange,
  removeFamilyMember,
}) => {
  const onDataChange = (data: Partial<FamilyMemberData>) =>
    // Always include 'memberId' to change proper data in reducer
    handleMemberDataChange({ ...data, memberId: familyMemberData.memberId });

  return (
    <div className={styles.container}>
      <div className={styles.rowsWrapper}>
        <div className={styles.formRow}>
          <label className={styles.inputLabel}>
            Name
            <input
              type="text"
              name="name"
              className={styles.formInput}
              value={familyMemberData.name}
              onChange={e => onDataChange({ name: e.target.value })}
            />
          </label>

          <label className={styles.inputLabel}>
            Gender
            <select
              name="gender"
              className={styles.formSelect}
              onChange={e => onDataChange({ gender: e.target.value as Gender })}
            >
              <option value="">– Please select gender –</option>
              <option value={Gender.Male}>Male</option>
              <option value={Gender.Female}>Female</option>
            </select>
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.inputLabel}>
            Age
            <select
              name="age"
              className={styles.formSelect}
              onChange={e => onDataChange({ age: e.target.value })}
            >
              <option value="">– Please select age –</option>
              {AGE_OPTIONS.map(optionData => (
                <option key={optionData.value} value={optionData.value}>
                  {optionData.label}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.checkboxLabel}>
            Lactose intolerance
            <input
              type="checkbox"
              name="lactoseIntolerance"
              className={styles.checkboxInput}
              checked={familyMemberData.lactoseIntolerance}
              onChange={e => onDataChange({ lactoseIntolerance: e.target.checked })}
            />
          </label>
        </div>
      </div>

      <button
        type="button"
        className={styles.removeMemberBtn}
        onClick={() => removeFamilyMember(familyMemberData.memberId)}
      >
        –
      </button>
    </div>
  );
};

export default FamilyMemberFormItem;
