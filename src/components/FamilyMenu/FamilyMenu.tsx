import React from 'react';
import { FamilyMemberDataWithMenu, FoodGroup } from '../../types';
import { FOOD_GROUP_TITLES } from '../../utils/constants';

interface Props {
  familyDataWithMenu: FamilyMemberDataWithMenu[];
  resetForm: () => void;
}

const FamilyMenu: React.FC<Props> = ({ familyDataWithMenu, resetForm }) => {
  return (
    <div>
      <h1>Here is your daily menu!</h1>
      {familyDataWithMenu.map(({ memberId, name, gender, age, lactoseIntolerance, menu }) => (
        <div key={memberId}>
          <h3>{name}</h3>
          <p>Gender: {gender}</p>
          <p>Age: {age}</p>
          <p>Lactose intolerance: {lactoseIntolerance ? '+' : '-'}</p>
          {(Object.keys(menu) as FoodGroup[]).map(foodGroup => (
            <div key={foodGroup}>
              <h4>{FOOD_GROUP_TITLES[foodGroup]}</h4>
              {menu[foodGroup].map(product => (
                <div key={product.food}>
                  <p>
                    {product.food} x{product.quantity} {product.srvg_sz}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
      <button onClick={resetForm}>Back</button>
    </div>
  );
};

export default FamilyMenu;
