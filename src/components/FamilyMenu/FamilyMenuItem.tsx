import React from 'react';

import { FamilyMemberDataWithMenu, FoodGroup } from '../../types';
import FoodGroupItem from './FoodGroupItem';

interface Props {
  familyMemberData: FamilyMemberDataWithMenu;
}

const FamilyMenuItem: React.FC<Props> = ({
  familyMemberData: { name, gender, age, lactoseIntolerance, menu },
}) => (
  <div>
    <h3>{name}</h3>
    <p>Gender: {gender}</p>
    <p>Age: {age}</p>
    <p>Lactose intolerance: {lactoseIntolerance ? '+' : '-'}</p>
    {(Object.keys(menu) as FoodGroup[]).map(foodGroup => (
      <FoodGroupItem key={foodGroup} foodGroup={foodGroup} products={menu[foodGroup]} />
    ))}
  </div>
);

export default FamilyMenuItem;
