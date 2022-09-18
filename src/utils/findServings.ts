import { SERVINGS_DATA } from '../generated';
import { FamilyMemberData, ServingsData, ServingsDataWithRange } from '../types';
import { FOOD_GROUPS_LIST } from './constants';

/** Find servings data based on a food group and family member data (age, gender, etc) */
const findServings = (memberData: FamilyMemberData) =>
  FOOD_GROUPS_LIST.reduce<ServingsDataWithRange[]>((acc, foodGroup) => {
    const servingsData = (SERVINGS_DATA as ServingsData[]).find(
      record =>
        record.fgid === foodGroup &&
        record.gender === memberData.gender &&
        record.ages === memberData.age
    );

    if (!servingsData) return acc;

    return [
      ...acc,
      {
        ...servingsData,
        // Transform '6 to 8' to [6, 8] so it will be easier to use in calculations
        servingsRange: servingsData.servings.split(' to ').map((str: string) => parseInt(str)),
      },
    ];
  }, []);

export default findServings;
