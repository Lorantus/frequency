import {enumBuilderArray} from './EnumBuilder';

export const RESPONSABLES = enumBuilderArray('id', 'nom', 'prenom')
    .push('ID1', "Responsable", "1")
    .push('ID2', "Responsable", "2")
    .push('ID3', "Responsable", "3")
    .push('ID4', "Responsable", "4")
    .push('ID5', "Responsable", "5")
    .push('ID6', "Responsable", "6")
    .push('ID7', "Responsable", "7")
    .build();
