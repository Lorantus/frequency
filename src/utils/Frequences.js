import {enumBuilderObject} from './EnumBuilder';

export const FREQUENCES = enumBuilderObject('label', 'apply')
    .push('NONE', "Aucune", date => date)
    .push('MONTH_1', "Tous les mois", date => new Date(date).setMonth(date.getMonth() + 1))
    .push('MONTH_2', "Tous les 2 mois", date => new Date(date).setMonth(date.getMonth() + 2))
    .push('MONTH_4', "Tous les 4 mois", date => new Date(date).setMonth(date.getMonth() + 4))
    .push('MONTH_6', "Tous les 6 mois", date => new Date(date).setMonth(date.getMonth() + 6))
    .push('YEARS_1', "Tous les ans", date => new Date(date).setFullYear(date.getFullYear() + 1))
    .push('YEARS_2', "Tous les 2 ans", date => new Date(date).setFullYear(date.getFullYear() + 2))
    .build();

export const DEFAULT_FREQUENCE = FREQUENCES.NONE;
