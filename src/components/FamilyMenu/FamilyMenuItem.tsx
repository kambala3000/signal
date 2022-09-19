import React from 'react';

import { FamilyMemberDataWithMenu, FoodGroup } from '../../types';
import FoodGroupItem from './FoodGroupItem';
import styles from './FamilyMenu.module.css';

interface Props {
  familyMemberData: FamilyMemberDataWithMenu;
}

const FamilyMenuItem: React.FC<Props> = ({
  familyMemberData: { name, gender, age, lactoseIntolerance, menu },
}) => (
  <div className={styles.itemWrapper}>
    <h3 className={styles.memberName}>{name}</h3>
    <p className={styles.memberInfoRow}>
      <span className={styles.semibold}>Gender:</span> {gender}
    </p>
    <p className={styles.memberInfoRow}>
      <span className={styles.semibold}>Age:</span> {age}
    </p>
    <p className={styles.memberInfoRow}>
      <span className={styles.semibold}>Lactose intolerance:</span> {lactoseIntolerance ? '+' : '-'}
    </p>
    {(Object.keys(menu) as FoodGroup[]).map(foodGroup => (
      <FoodGroupItem key={foodGroup} foodGroup={foodGroup} products={menu[foodGroup]} />
    ))}
  </div>
);

export default FamilyMenuItem;
