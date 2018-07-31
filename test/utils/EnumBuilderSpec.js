import {enumBuilderArray, enumBuilderObject} from '@/utils/EnumBuilder';

describe('EnumBuilder', () => {
    it('doit retourner une enum sous forme Objet', () => {
        const enumObject = enumBuilderObject('label', 'apply')
            .push('NONE', "Aucune", date => date)
            .push('MONTH_1', "Tous les mois", date => new Date(date).setMonth(date.getMonth() + 1))
            .push('YEARS_1', "Tous les ans", date => new Date(date).setFullYear(date.getFullYear() + 1))
            .build();

        expect(typeof enumObject).toBe('object');
        expect(Object.keys(enumObject)).toEqual(expect.arrayContaining(['NONE', 'MONTH_1', 'YEARS_1']));
        
        const testEnumObject = (object, matchObject, applyDate, expectedDate) => {
            expect(object).toMatchObject(matchObject)
            expect(new Date(object.apply(applyDate))).toEqual(expectedDate);
        }

        testEnumObject(enumObject.NONE, {
            name: 'NONE',
            label: "Aucune"  
        }, new Date(2018, 1, 15), new Date(2018, 1, 15));
        testEnumObject(enumObject.MONTH_1, {
            name: 'MONTH_1',
            label: "Tous les mois"  
        }, new Date(2018, 1, 15), new Date(2018, 2, 15));
        testEnumObject(enumObject.YEARS_1, {
            name: 'YEARS_1',
            label: "Tous les ans"  
        }, new Date(2018, 1, 15), new Date(2019, 1, 15));
    })

    it('doit retourner une enum sous forme Array', () => {
        const enumObject = enumBuilderArray('id', 'nom', 'prenom')
            .push('ID1', "Responsable", "1")
            .push('ID2', "Responsable", "2")
            .build();

        expect(Array.isArray(enumObject)).toBe(true);
        expect(enumObject.length).toBe(2);
        expect(enumObject).toContainEqual({
            id: 'ID1',
            nom: 'Responsable',
            prenom: '1'
        });
        expect(enumObject).toContainEqual({
            id: 'ID2',
            nom: 'Responsable',
            prenom: '2'
        })
    })
})