
export const civs = [
    'Aztecs',
    'Berbers',
    'Britons',
    'Bulgarians',
    'Burmese',
    'Byzantines',
    'Celts',
    'Chinese',
    'Cumans',
    'Ethiopians',
    'Franks',
    'Goths',
    'Huns',
    'Incas',
    'Indians',
    'Italians',
    'Japanese',
    'Khmer',
    'Koreans',
    'Lithuanians',
    'Magyars',
    'Malay',
    'Malians',
    'Mayans',
    'Mongols',
    'Persians',
    'Portuguese',
    'Saracens',
    'Slavs',
    'Spanish',
    'Tatars',
    'Teutons',
    'Turks',
    'Vietnamese',
    'Vikings',
] as const;

type ValueOf<T> = T[keyof T];
export type Civ = ValueOf<typeof civs>;

const civList = [
    require('../../assets/civilizations/aztecs.png'),
    require('../../assets/civilizations/berber.png'),
    require('../../assets/civilizations/britons.png'),
    require('../../assets/civilizations/bulgarians.png'),
    require('../../assets/civilizations/burmese.png'),
    require('../../assets/civilizations/byzantines.png'),
    require('../../assets/civilizations/celts.png'),
    require('../../assets/civilizations/chinese.png'),
    require('../../assets/civilizations/cumans.png'),
    require('../../assets/civilizations/ethiopians.png'),
    require('../../assets/civilizations/franks.png'),
    require('../../assets/civilizations/goths.png'),
    require('../../assets/civilizations/huns.png'),
    require('../../assets/civilizations/inca.png'),
    require('../../assets/civilizations/indians.png'),
    require('../../assets/civilizations/italians.png'),
    require('../../assets/civilizations/japanese.png'),
    require('../../assets/civilizations/khmer.png'),
    require('../../assets/civilizations/koreans.png'),
    require('../../assets/civilizations/lithuanians.png'),
    require('../../assets/civilizations/magyars.png'),
    require('../../assets/civilizations/malay.png'),
    require('../../assets/civilizations/malians.png'),
    require('../../assets/civilizations/mayans.png'),
    require('../../assets/civilizations/mongols.png'),
    require('../../assets/civilizations/persians.png'),
    require('../../assets/civilizations/portuguese.png'),
    require('../../assets/civilizations/saracens.png'),
    require('../../assets/civilizations/slavs.png'),
    require('../../assets/civilizations/spanish.png'),
    require('../../assets/civilizations/tatars.png'),
    require('../../assets/civilizations/teutons.png'),
    require('../../assets/civilizations/turks.png'),
    require('../../assets/civilizations/vietnamese.png'),
    require('../../assets/civilizations/vikings.png'),
];

export function getCivIconByIndex(civ: number) {
    return civList[civ];
}

export function getCivIcon(civ: Civ) {
    return civList[civs.indexOf(civ as any)];
}
