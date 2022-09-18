import { SERVINGS_DATA } from '../generated';
import { FamilyMemberData, ServingsData, ServingsDataWithRange } from '../types';
import { FOOD_GROUPS_LIST } from './constants';

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
        servingsRange: servingsData.servings.split(' to ').map((str: string) => parseInt(str)),
      },
    ];
  }, []);

export default findServings;
