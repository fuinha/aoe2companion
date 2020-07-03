import {Tech, TechEffect} from "./techs";
import {ImageSourcePropType} from "react-native";
import {aoeData, aoeStringKey, aoeUnitDataId} from "../data/data";


export interface IUnitLine {
    unique?: boolean;
    units: Unit[];
    upgrades: TechEffect[];
}

interface IUnitLineDict {
    [unit: string]: IUnitLine;
}

export const unitLines: IUnitLineDict = {
    'TradeCart': {
        units: ['TradeCart'],
        upgrades: [
            'Sultans',
            'Caravan',
            'Faith',
            'Heresy',
            'SilkRoad',
        ],
    },
    'TradeCog': {
        units: ['TradeCog'],
        upgrades: [
            'Sultans',
            'Careening',
            'Carrack',
            'DryDock',
            'Caravan',
            'Faith',
            'Heresy',
            'Shipwright',
            'SilkRoad',
        ],
    },
    'FishingShip': {
        units: ['FishingShip'],
        upgrades: [
            'Gillnets',
            'Careening',
            'Carrack',
            'DryDock',
            'Faith',
            'Heresy',
            'Shipwright',
        ],
    },
    'TransportShip': {
        units: ['TransportShip'],
        upgrades: [
            'Careening-5',
            'Carrack',
            'DryDock-10',
            'Faith',
            'Heresy',
            'Shipwright',
        ],
    },
    'Villager': {
        units: ['Villager'],
        upgrades: [
            'Wheelbarrow',
            'HandCart',
            'HeavyPlow',
            'DoubleBitAxe',
            'BowSaw',
            'TwoManSaw',
            'StoneMining',
            'StoneShaftMining',
            'GoldMining',
            'GoldShaftMining',
            'Sultans-GatheringSpeed',
            'Loom',
            'Sappers',
            'Forging-Villager',
            'IronCasting-Villager',
            'BlastFurnace-Villager',
            'ScaleMailArmor-Villager',
            'ChainMailArmor-Villager',
            'PlateMailArmor-Villager',
            'Supremacy',
            'Faith',
            'Heresy',
            'TreadmillCrane',
        ],
    },
    'Missionary': {
        units: ['Missionary'],
        upgrades: [
            'Sanctity',
            'Bloodlines',
            'BlockPrinting',
            'Fervor',
            'Husbandry',
            'Redemption',
            'Atonement',
            'Illumination',
            'Theocracy',
            'Inquisition',
            'Faith',
            'Heresy',
        ],
    },
    'Monk': {
        units: ['Monk'],
        upgrades: [
            'Sanctity',
            'Sanctity-5',
            'Redemption',
            'Redemption-5',
            'Atonement',
            'Atonement-5',
            'HerbalMedicine-5',
            'Heresy',
            'Heresy-5',
            'Fervor',
            'Fervor-5',
            'Faith',
            'Faith-5',
            'Illumination',
            'Illumination-5',
            'BlockPrinting',
            'BlockPrinting-5',
            'Theocracy',
            'Theocracy-5',
            'Orthodoxy',
            'Inquisition',
            'Madrasah',
        ],
    },
    'DemolitionRaft': {
        units: ['DemolitionRaft', 'DemolitionShip', 'HeavyDemolitionShip'],
        upgrades: [
            'Careening',
            'Carrack',
            'DryDock',
            'Faith',
            'Heresy',
            'Shipwright',
        ],
    },
    'FireGalley': {
        units: ['FireGalley', 'FireShip', 'FastFireShip'],
        upgrades: [
            'GreekFire',
            'Careening',
            'Carrack',
            'DryDock',
            'Faith',
            'Heresy',
            'Shipwright',
        ],
    },
    'Galley': {
        units: ['Galley', 'WarGalley', 'Galleon'],
        upgrades: [
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'Ballistics',
            'Careening',
            'Carrack',
            'DryDock',
            'Faith',
            'Heresy',
            'Shipwright',
        ],
    },
    'Arambai': {
        units: ['Arambai', 'EliteArambai'],
        unique: true,
        upgrades: [
            'Bloodlines',
            'ManipurCavalry',
            'Ballistics',
            'PaddedArcherArmor',
            'Husbandry',
            'Faith',
            'Conscription',
        ],
    },
    'OrganGun': {
        units: ['OrganGun', 'EliteOrganGun'],
        unique: true,
        upgrades: [
            'SiegeEngineers-20-1',
            'Arquebus',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'Caravel': {
        units: ['Caravel', 'EliteCaravel'],
        unique: true,
        upgrades: [
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'Ballistics',
            'Careening',
            'Carrack',
            'DryDock',
            'Faith',
            'Heresy',
        ],
    },
    'SiegeTower': {
        units: ['SiegeTower'],
        upgrades: [
            'FurorCeltica',
            'Ironclad',
            'Drill',
            'Faith',
            'Heresy',
        ],
    },
    'Conquistador': {
        units: ['Conquistador', 'EliteConquistador'],
        unique: true,
        upgrades: [
            'Bloodlines',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'Husbandry',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'TurtleShip': {
        units: ['TurtleShip', 'EliteTurtleShip'],
        unique: true,
        upgrades: [
            'Careening',
            'DryDock',
            'Panokseon',
            'Faith',
            'Shipwright',
        ],
    },
    'Longboat': {
        units: ['Longboat', 'EliteLongboat'],
        unique: true,
        upgrades: [
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'Ballistics',
            'Careening',
            'DryDock',
            'Faith',
            'Heresy',
        ],
    },
    'Janissary': {
        units: ['Janissary', 'EliteJanissary'],
        unique: true,
        upgrades: [
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'BallistaElephant': {
        units: ['BallistaElephant', 'EliteBallistaElephant'],
        unique: true,
        upgrades: [
            'Bloodlines',
            'SiegeEngineers-20-1',
            'Chemistry',
            'DoubleCrossbow',
            'ScaleBardingArmor',
            'ChainBardingArmor',
            'PlateBardingArmor',
            'Husbandry',
            'Conscription',
        ],
    },
    'FlamingCamel': {
        units: ['FlamingCamel'],
        upgrades: [
            'SiegeEngineers-20',
            'Conscription',
            'Bloodlines',
            'Husbandry',
        ],
    },
    'Petard': {
        units: ['Petard'],
        upgrades: [
            'SiegeEngineers-40',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'Trebuchet': {
        units: ['Trebuchet'],
        upgrades: [
            'SiegeEngineers-20-1',
            'Chemistry',
            'Warwolf',
            'TimuridSiegecraft',
            'Kataparuto',
            'Ironclad',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'BombardCannon': {
        units: ['BombardCannon'],
        upgrades: [
            'SiegeEngineers-20-1',
            'TorsionEngines',
            'Artillery',
            'Arquebus',
            'Ironclad',
            'Faith',
            'Heresy',
        ],
    },
    'Mangonel': {
        units: ['Mangonel', 'Onager', 'SiegeOnager'],
        upgrades: [
            'FurorCeltica',
            'SiegeEngineers-20-1',
            'Chemistry',
            'TorsionEngines',
            'Shinkichon',
            'Ironclad',
            'Drill',
            'Faith',
            'Heresy',
        ],
    },
    'BatteringRam': {
        units: ['BatteringRam', 'CappedRam', 'SiegeRam'],
        upgrades: [
            'FurorCeltica',
            'SiegeEngineers-20',
            'Ironclad',
            'Drill',
            'Faith',
            'Heresy',
        ],
    },
    'Scorpion': {
        units: ['Scorpion', 'HeavyScorpion'],
        upgrades: [
            'FurorCeltica',
            'SiegeEngineers-20-1',
            'Chemistry',
            'Rocketry-4',
            'TorsionEngines',
            'DoubleCrossbow',
            'Ironclad',
            'Drill',
            'Faith',
            'Heresy',
        ],
    },
    'HandCannoneer': {
        units: ['HandCannoneer'],
        upgrades: [
            'Shatagni',
            'Arquebus',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'KarambitWarrior': {
        units: ['KarambitWarrior', 'EliteKarambitWarrior'],
        unique: true,
        upgrades: [
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Arson',
            'ScaleMailArmor',
            'ChainMailArmor',
            'PlateMailArmor',
            'Squires',
            'Tracking',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'Gbeto': {
        units: ['Gbeto', 'EliteGbeto'],
        unique: true,
        upgrades: [
            'Forging',
            'IronCasting',
            'Arson',
            'ScaleMailArmor',
            'ChainMailArmor',
            'PlateMailArmor',
            'Squires',
            'Tracking',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'ShotelWarrior': {
        units: ['ShotelWarrior', 'EliteShotelWarrior'],
        unique: true,
        upgrades: [
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Arson',
            'ScaleMailArmor',
            'ChainMailArmor',
            'PlateMailArmor',
            'Squires',
            'Tracking',
            'Faith',
            'Heresy',
            'Conscription',
            'RoyalHeirs',
        ],
    },
    'Condottiero': {
        units: ['Condottiero'],
        unique: true,
        upgrades: [
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Arson',
            'GarlandWars',
            'Druzhina',
            'Chieftains',
            'ScaleMailArmor',
            'ChainMailArmor',
            'PlateMailArmor',
            'Squires',
            'Tracking',
            'Faith',
            'Heresy',
            'Conscription',
            'Perfusion',
        ],
    },
    'JaguarWarrior': {
        units: ['JaguarWarrior', 'EliteJaguarWarrior'],
        unique: true,
        upgrades: [
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Arson',
            'GarlandWars',
            'ScaleMailArmor',
            'ChainMailArmor',
            'PlateMailArmor',
            'Squires',
            'Tracking',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'Berserk': {
        units: ['Berserk', 'EliteBerserk'],
        unique: true,
        upgrades: [
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Arson',
            'Chieftains',
            'ScaleMailArmor',
            'ChainMailArmor',
            'PlateMailArmor',
            'Squires',
            'Tracking',
            'Faith',
            'Heresy',
            'Conscription',
            'Berserkergang',
        ],
    },
    'TeutonicKnight': {
        units: ['TeutonicKnight', 'EliteTeutonicKnight'],
        unique: true,
        upgrades: [
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Arson',
            'ScaleMailArmor',
            'ChainMailArmor',
            'PlateMailArmor',
            'Squires',
            'Tracking',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'Samurai': {
        units: ['Samurai', 'EliteSamurai'],
        unique: true,
        upgrades: [
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Arson',
            'ScaleMailArmor',
            'ChainMailArmor',
            'PlateMailArmor',
            'Squires',
            'Tracking',
            'Faith',
            'Conscription',
        ],
    },
    'Huskarl': {
        units: ['Huskarl', 'EliteHuskarl'],
        unique: true,
        upgrades: [
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'ScaleMailArmor',
            'ChainMailArmor',
            'Squires',
            'Tracking',
            'Faith',
            'Conscription',
            'Perfusion',
            'Anarchy',
        ],
    },
    'ThrowingAxeman': {
        units: ['ThrowingAxeman', 'EliteThrowingAxeman'],
        unique: true,
        upgrades: [
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Arson',
            'BeardedAxe',
            'ScaleMailArmor',
            'ChainMailArmor',
            'PlateMailArmor',
            'Squires',
            'Tracking',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'WoadRaider': {
        units: ['WoadRaider', 'EliteWoadRaider'],
        unique: true,
        upgrades: [
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Arson',
            'ScaleMailArmor',
            'ChainMailArmor',
            'PlateMailArmor',
            'Tracking',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'EagleScout': {
        units: ['EagleScout', 'EagleWarrior', 'EliteEagleWarrior'],
        upgrades: [
            'ElDorado',
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Arson',
            'GarlandWars',
            'ScaleMailArmor',
            'ChainMailArmor',
            'PlateMailArmor',
            'Squires',
            'Couriers',
            'Tracking',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'Spearman': {
        units: ['Spearman', 'Pikeman', 'Halberdier'],
        upgrades: [
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Arson',
            'GarlandWars',
            'Druzhina',
            'Chieftains',
            'ScaleMailArmor',
            'ChainMailArmor',
            'PlateMailArmor',
            'TowerShields',
            'Squires',
            'Tracking',
            'Faith',
            'Heresy',
            'Conscription',
            'Perfusion',
        ],
    },
    'Militia': {
        units: ['Militia', 'ManAtArms', 'LongSwordsman', 'TwoHandedSwordsman', 'Champion'],
        upgrades: [
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Arson',
            'GarlandWars',
            'Druzhina',
            'Chieftains',
            'ScaleMailArmor',
            'ChainMailArmor',
            'PlateMailArmor',
            'Bagains',
            'Squires',
            'Tracking',
            'Faith',
            'Heresy',
            'Conscription',
            'Perfusion',
            'Supplies',
            'ForcedLevy',
        ],
    },
    'Keshik': {
        units: ['Keshik', 'EliteKeshik'],
        unique: true,
        upgrades: [
            'Bloodlines',
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'ScaleBardingArmor',
            'ChainBardingArmor',
            'PlateBardingArmor',
            'Husbandry',
            'Conscription',
        ],
    },
    'Leitis': {
        units: ['Leitis', 'EliteLeitis'],
        unique: true,
        upgrades: [
            'Bloodlines',
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'ScaleBardingArmor',
            'ChainBardingArmor',
            'PlateBardingArmor',
            'Husbandry',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'Konnik': {
        units: ['Konnik', 'EliteKonnik'],
        unique: true,
        upgrades: [
            'Bloodlines',
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Arson-Dismounted',
            'Stirrups-Mounted',
            'ScaleBardingArmor',
            'ChainBardingArmor',
            'PlateBardingArmor',
            'ScaleMailArmor-Dismounted',
            'ChainMailArmor-Dismounted',
            'PlateMailArmor-Dismounted',
            'Husbandry',
            'Squires-Dismounted',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'Boyar': {
        units: ['Boyar', 'EliteBoyar'],
        unique: true,
        upgrades: [
            'Bloodlines',
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'ScaleBardingArmor',
            'ChainBardingArmor',
            'PlateBardingArmor',
            'Husbandry',
            'Conscription',
        ],
    },
    'MagyarHuszar': {
        units: ['MagyarHuszar', 'EliteMagyarHuszar'],
        unique: true,
        upgrades: [
            'Bloodlines',
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'ScaleBardingArmor',
            'ChainBardingArmor',
            'PlateBardingArmor',
            'Husbandry',
            'Heresy',
            'Conscription',
            'CorvinianArmy',
        ],
    },
    'Tarkan': {
        units: ['Tarkan', 'EliteTarkan'],
        unique: true,
        upgrades: [
            'Bloodlines',
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'ScaleBardingArmor',
            'ChainBardingArmor',
            'PlateBardingArmor',
            'Husbandry',
            'Faith',
            'Heresy',
            'Conscription',
            'Marauders',
        ],
    },
    'Mameluke': {
        units: ['Mameluke', 'EliteMameluke'],
        unique: true,
        upgrades: [
            'Bloodlines',
            'Zealotry',
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'ScaleBardingArmor',
            'ChainBardingArmor',
            'PlateBardingArmor',
            'Husbandry',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'WarElephant': {
        units: ['WarElephant', 'EliteWarElephant'],
        unique: true,
        upgrades: [
            'Bloodlines',
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'ScaleBardingArmor',
            'ChainBardingArmor',
            'PlateBardingArmor',
            'Husbandry',
            'Mahouts',
            'Faith',
            'Conscription',
        ],
    },
    'Cataphract': {
        units: ['Cataphract', 'EliteCataphract'],
        unique: true,
        upgrades: [
            'Forging',
            'IronCasting',
            'Logistica',
            'ScaleBardingArmor',
            'ChainBardingArmor',
            'PlateBardingArmor',
            'Husbandry',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'SteppeLancer': {
        units: ['SteppeLancer', 'EliteSteppeLancer'],
        upgrades: [
            'Bloodlines',
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'ScaleBardingArmor',
            'ChainBardingArmor',
            'PlateBardingArmor',
            'SilkArmor',
            'Husbandry',
            'Faith',
            'Heresy',
            'Conscription',
            'SteppeHusbandry',
        ],
    },
    'BattleElephant': {
        units: ['BattleElephant', 'EliteBattleElephant'],
        upgrades: [
            'Bloodlines',
            'Chatras',
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'ManipurCavalry',
            'TuskSwords',
            'ScaleBardingArmor',
            'ChainBardingArmor',
            'PlateBardingArmor',
            'Howdah',
            'Husbandry',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'CamelRider': {
        units: ['CamelRider', 'HeavyCamelRider', 'ImperialCamelRider'],
        upgrades: [
            'Bloodlines',
            'Zealotry',
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Farimba',
            'ScaleBardingArmor',
            'ChainBardingArmor',
            'PlateBardingArmor',
            'Husbandry',
            'Faith',
            'Heresy',
            'Conscription',
            'MaghrebiCamels',
        ],
    },
    'Knight': {
        units: ['Knight', 'Cavalier', 'Paladin'],
        upgrades: [
            'Bloodlines',
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Farimba',
            'ManipurCavalry',
            'Stirrups',
            'ScaleBardingArmor',
            'ChainBardingArmor',
            'PlateBardingArmor',
            'Husbandry',
            'Faith',
            'Heresy',
            'Conscription',
            'Chivalry',
        ],
    },
    'XolotlWarrior': {
        units: ['XolotlWarrior'],
        upgrades: [
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Faith',
            'Heresy',
        ],
    },
    'ScoutCavalry': {
        units: ['ScoutCavalry', 'LightCavalry', 'Hussar'],
        upgrades: [
            'Bloodlines',
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Farimba',
            'ManipurCavalry',
            'Stirrups',
            'ScaleBardingArmor',
            'ChainBardingArmor',
            'PlateBardingArmor',
            'SilkArmor',
            'Husbandry',
            'Faith',
            'Heresy',
            'Conscription',
            'Chivalry',
            'SteppeHusbandry',
        ],
    },
    'Kipchak': {
        units: ['Kipchak', 'EliteKipchak'],
        unique: true,
        upgrades: [
            'Bloodlines',
            'Sipahi',
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'ThumbRing-11',
            'Ballistics',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'ParthianTactics-2',
            'RecurveBow',
            'SilkArmor',
            'Husbandry',
            'Faith',
            'Heresy',
            'Conscription',
            'Kasbah',
        ],
    },
    'RattanArcher': {
        units: ['RattanArcher', 'EliteRattanArcher'],
        unique: true,
        upgrades: [
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'ThumbRing-18',
            'Ballistics',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'Faith',
            'Conscription',
        ],
    },
    'Genitour': {
        units: ['Genitour', 'EliteGenitour'],
        unique: true,
        upgrades: [
            'Bloodlines',
            'Sipahi',
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'Atlatl',
            'AndeanSling',
            'ThumbRing-No',
            'Ballistics',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'SilkArmor',
            'Husbandry',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'CamelArcher': {
        units: ['CamelArcher', 'EliteCamelArcher'],
        unique: true,
        upgrades: [
            'Bloodlines',
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'ThumbRing-18',
            'Ballistics',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'Husbandry',
            'Faith',
            'Heresy',
            'Conscription',
            'Kasbah',
            'MaghrebiCamels',
        ],
    },
    'GenoeseCrossbowman': {
        units: ['GenoeseCrossbowman', 'EliteGenoeseCrossbowman'],
        unique: true,
        upgrades: [
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'ThumbRing-18-No',
            'Ballistics',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'Pavise',
            'Faith',
            'Conscription',
        ],
    },
    'ElephantArcher': {
        units: ['ElephantArcher', 'EliteElephantArcher'],
        unique: true,
        upgrades: [
            'Bloodlines',
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'ThumbRing-18-No',
            'Ballistics',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'ParthianTactics-2',
            'Husbandry',
            'Faith',
            'Conscription',
        ],
    },
    'WarWagon': {
        units: ['WarWagon', 'EliteWarWagon'],
        unique: true,
        upgrades: [
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'ThumbRing-11-No',
            'Ballistics',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'Husbandry',
            'Faith',
            'Conscription',
        ],
    },
    'Mangudai': {
        units: ['Mangudai', 'EliteMangudai'],
        unique: true,
        upgrades: [
            'Bloodlines',
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'ThumbRing-18',
            'Ballistics',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'ParthianTactics-2',
            'Husbandry',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'ChuKoNu': {
        units: ['ChuKoNu', 'EliteChuKoNu'],
        unique: true,
        upgrades: [
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'Rocketry-2',
            'ThumbRing-25',
            'Ballistics',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'Faith',
            'Conscription',
        ],
    },
    'Longbowman': {
        units: ['Longbowman', 'EliteLongbowman'],
        unique: true,
        upgrades: [
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'Ballistics',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'Faith',
            'Conscription',
        ],
    },
    'CavalryArcher': {
        units: ['CavalryArcher', 'HeavyCavalryArcher'],
        upgrades: [
            'Bloodlines',
            'Sipahi',
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'ParthianTactics-4',
            'RecurveBow',
            'ThumbRing-11',
            'Ballistics',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'SilkArmor',
            'Husbandry',
            'Faith',
            'Heresy',
            'Conscription',
            'SteppeHusbandry',
        ],
    },
    'Skirmisher': {
        units: ['Skirmisher', 'EliteSkirmisher', 'ImperialSkirmisher'],
        upgrades: [
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'Atlatl',
            'Yeomen',
            'AndeanSling',
            'ThumbRing-No',
            'Ballistics',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'Pavise',
            'TowerShields',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'Archer': {
        units: ['Archer', 'Crossbowman', 'Arbalester'],
        upgrades: [
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'ObsidianArrows',
            'Yeomen',
            'ThumbRing-18',
            'Ballistics',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'Pavise',
            'Faith',
            'Heresy',
            'Kamandaran',
            'Conscription',
        ],
    },
    'PlumedArcher': {
        units: ['PlumedArcher', 'ElitePlumedArcher'],
        unique: true,
        upgrades: [
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'ThumbRing-18',
            'Ballistics',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'Slinger': {
        units: ['Slinger'],
        upgrades: [
            'Fletching',
            'BodkinArrow',
            'Bracer',
            'Chemistry',
            'AndeanSling',
            'ThumbRing-No',
            'Ballistics',
            'PaddedArcherArmor',
            'LeatherArcherArmor',
            'RingArcherArmor',
            'Couriers',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
    'Kamayuk': {
        units: ['Kamayuk', 'EliteKamayuk'],
        unique: true,
        upgrades: [
            'Forging',
            'IronCasting',
            'BlastFurnace',
            'Arson',
            'ScaleMailArmor',
            'ChainMailArmor',
            'PlateMailArmor',
            'Couriers',
            'Squires',
            'Tracking',
            'Faith',
            'Heresy',
            'Conscription',
        ],
    },
};

const unitsInternal = {
    'TradeCart': {
        dataId: '128',
    },
    'TradeCog': {
        dataId: '17',
    },
    'FishingShip': {
        dataId: '13',
    },
    'TransportShip': {
        dataId: '545',
    },
    'Villager': {
        dataId: '83',
    },
    'Monk': {
        dataId: '125',
    },
    'Missionary': {
        dataId: '775',
    },
    'CannonGalleon': {
        dataId: '420',
    },
    'EliteCannonGalleon': {
        dataId: '691',
    },
    'DemolitionRaft': {
        dataId: '1104',
    },
    'DemolitionShip': {
        dataId: '527',
    },
    'HeavyDemolitionShip': {
        dataId: '528',
    },
    'FireGalley': {
        dataId: '1103',
    },
    'FireShip': {
        dataId: '529',
    },
    'FastFireShip': {
        dataId: '532',
    },
    'Galley': {
        dataId: '539',
    },
    'WarGalley': {
        dataId: '21',
    },
    'Galleon': {
        dataId: '442',
    },
    'Arambai': {
        dataId: '1126',
    },
    'EliteArambai': {
        dataId: '1128',
    },
    'OrganGun': {
        dataId: '1001',
    },
    'EliteOrganGun': {
        dataId: '1003',
    },
    'Caravel': {
        dataId: '1004',
    },
    'EliteCaravel': {
        dataId: '1006',
    },
    'SiegeTower': {
        dataId: '1105',
    },
    'Conquistador': {
        dataId: '771',
    },
    'EliteConquistador': {
        dataId: '773',
    },
    'TurtleShip': {
        dataId: '831',
    },
    'EliteTurtleShip': {
        dataId: '832',
    },
    'Longboat': {
        dataId: '250',
    },
    'EliteLongboat': {
        dataId: '533',
    },
    'Janissary': {
        dataId: '46',
    },
    'EliteJanissary': {
        dataId: '557',
    },
    'BallistaElephant': {
        dataId: '1120',
    },
    'EliteBallistaElephant': {
        dataId: '1122',
    },
    'FlamingCamel': {
        dataId: '1263',
    },
    'Petard': {
        dataId: '440',
    },
    'Trebuchet': {
        dataId: '42',
    },
    'BombardCannon': {
        dataId: '36',
    },
    'Mangonel': {
        dataId: '280',
    },
    'Onager': {
        dataId: '550',
    },
    'SiegeOnager': {
        dataId: '588',
    },
    'BatteringRam': {
        dataId: '35',
    },
    'CappedRam': {
        dataId: '422',
    },
    'SiegeRam': {
        dataId: '548',
    },
    'Scorpion': {
        dataId: '279',
    },
    'HeavyScorpion': {
        dataId: '542',
    },
    'HandCannoneer': {
        dataId: '5',
    },
    'KarambitWarrior': {
        dataId: '1123',
    },
    'EliteKarambitWarrior': {
        dataId: '1125',
    },
    'Gbeto': {
        dataId: '1013',
    },
    'EliteGbeto': {
        dataId: '1015',
    },
    'ShotelWarrior': {
        dataId: '1016',
    },
    'EliteShotelWarrior': {
        dataId: '1018',
    },
    'Condottiero': {
        dataId: '882',
    },
    'JaguarWarrior': {
        dataId: '725',
    },
    'EliteJaguarWarrior': {
        dataId: '726',
    },
    'Berserk': {
        dataId: '692',
    },
    'EliteBerserk': {
        dataId: '694',
    },
    'TeutonicKnight': {
        dataId: '25',
    },
    'EliteTeutonicKnight': {
        dataId: '554',
    },
    'Samurai': {
        dataId: '291',
    },
    'EliteSamurai': {
        dataId: '560',
    },
    'Huskarl': {
        dataId: '41',
    },
    'EliteHuskarl': {
        dataId: '555',
    },
    'ThrowingAxeman': {
        dataId: '281',
    },
    'EliteThrowingAxeman': {
        dataId: '531',
    },
    'WoadRaider': {
        dataId: '232',
    },
    'EliteWoadRaider': {
        dataId: '534',
    },
    'EagleScout': {
        dataId: '751',
    },
    'EagleWarrior': {
        dataId: '753',
    },
    'EliteEagleWarrior': {
        dataId: '752',
    },
    'Spearman': {
        dataId: '93',
    },
    'Pikeman': {
        dataId: '358',
    },
    'Halberdier': {
        dataId: '359',
    },
    'Militia': {
        dataId: '74',
    },
    'ManAtArms': {
        dataId: '75',
    },
    'LongSwordsman': {
        dataId: '77',
    },
    'TwoHandedSwordsman': {
        dataId: '473',
    },
    'Champion': {
        dataId: '567',
    },
    'Keshik': {
        dataId: '1228',
    },
    'EliteKeshik': {
        dataId: '1230',
    },
    'Leitis': {
        dataId: '1234',
    },
    'EliteLeitis': {
        dataId: '1236',
    },
    'Konnik': {
        dataId: '1254',
    },
    'EliteKonnik': {
        dataId: '1255',
    },
    'Boyar': {
        dataId: '876',
    },
    'EliteBoyar': {
        dataId: '878',
    },
    'MagyarHuszar': {
        dataId: '869',
    },
    'EliteMagyarHuszar': {
        dataId: '871',
    },
    'Tarkan': {
        dataId: '755',
    },
    'EliteTarkan': {
        dataId: '757',
    },
    'Mameluke': {
        dataId: '282',
    },
    'EliteMameluke': {
        dataId: '556',
    },
    'WarElephant': {
        dataId: '239',
    },
    'EliteWarElephant': {
        dataId: '558',
    },
    'Cataphract': {
        dataId: '40',
    },
    'EliteCataphract': {
        dataId: '553',
    },
    'SteppeLancer': {
        dataId: '1370',
    },
    'EliteSteppeLancer': {
        dataId: '1372',
    },
    'BattleElephant': {
        dataId: '1132',
    },
    'EliteBattleElephant': {
        dataId: '1134',
    },
    'CamelRider': {
        dataId: '329',
    },
    'HeavyCamelRider': {
        dataId: '330',
    },
    'ImperialCamelRider': {
        dataId: '207',
    },
    'Knight': {
        dataId: '38',
    },
    'Cavalier': {
        dataId: '283',
    },
    'Paladin': {
        dataId: '569',
    },
    'XolotlWarrior': {
        dataId: '10000',
    },
    'ScoutCavalry': {
        dataId: '448',
    },
    'LightCavalry': {
        dataId: '546',
    },
    'Hussar': {
        dataId: '441',
    },
    'Kipchak': {
        dataId: '1231',
    },
    'EliteKipchak': {
        dataId: '1233',
    },
    'RattanArcher': {
        dataId: '1129',
    },
    'EliteRattanArcher': {
        dataId: '1131',
    },
    'Genitour': {
        dataId: '1010',
    },
    'EliteGenitour': {
        dataId: '1012',
    },
    'CamelArcher': {
        dataId: '1007',
    },
    'EliteCamelArcher': {
        dataId: '1009',
    },
    'GenoeseCrossbowman': {
        dataId: '866',
    },
    'EliteGenoeseCrossbowman': {
        dataId: '868',
    },
    'ElephantArcher': {
        dataId: '873',
    },
    'EliteElephantArcher': {
        dataId: '875',
    },
    'WarWagon': {
        dataId: '827',
    },
    'EliteWarWagon': {
        dataId: '829',
    },
    'Mangudai': {
        dataId: '11',
    },
    'EliteMangudai': {
        dataId: '561',
    },
    'ChuKoNu': {
        dataId: '73',
    },
    'EliteChuKoNu': {
        dataId: '559',
    },
    'Longbowman': {
        dataId: '8',
    },
    'EliteLongbowman': {
        dataId: '530',
    },
    'CavalryArcher': {
        dataId: '39',
    },
    'HeavyCavalryArcher': {
        dataId: '474',
    },
    'Skirmisher': {
        dataId: '7',
    },
    'EliteSkirmisher': {
        dataId: '6',
    },
    'ImperialSkirmisher': {
        dataId: '1155',
    },
    'Archer': {
        dataId: '4',
    },
    'Crossbowman': {
        dataId: '24',
    },
    'Arbalester': {
        dataId: '492',
    },
    'PlumedArcher': {
        dataId: '763',
    },
    'ElitePlumedArcher': {
        dataId: '765',
    },
    'Slinger': {
        dataId: '185',
    },
    'Kamayuk': {
        dataId: '879',
    },
    'EliteKamayuk': {
        dataId: '881',
    },
};

export const units = unitsInternal as UnitDict;

interface IUnit {
    dataId: aoeUnitDataId;
}

interface UnitDict {
    [unit: string]: IUnit;
}

interface UnitIconDict {
    [unit: string]: ImageSourcePropType;
}

const unitIcons: UnitIconDict = {
    'Kamayuk': require('../../assets/units/Kamayuk.png'),
    'Slinger': require('../../assets/units/Slinger.png'),
    'PlumedArcher': require('../../assets/units/PlumedArcher.png'),
    'Archer': require('../../assets/units/Archer.png'),
    'Crossbowman': require('../../assets/units/Crossbowman.png'),
    'Arbalester': require('../../assets/units/Arbalester.png'),
    'Skirmisher': require('../../assets/units/Skirmisher.png'),
    'EliteSkirmisher': require('../../assets/units/EliteSkirmisher.png'),
    'ImperialSkirmisher': require('../../assets/units/ImperialSkirmisher.png'),
    'CavalryArcher': require('../../assets/units/CavalryArcher.png'),
    'HeavyCavalryArcher': require('../../assets/units/HeavyCavalryArcher.png'),
    'Longbowman': require('../../assets/units/Longbowman.png'),
    'ChuKoNu': require('../../assets/units/ChuKoNu.png'),
    'Mangudai': require('../../assets/units/Mangudai.png'),
    'WarWagon': require('../../assets/units/WarWagon.png'),
    'ElephantArcher': require('../../assets/units/ElephantArcher.png'),
    'GenoeseCrossbowman': require('../../assets/units/GenoeseCrossbowman.png'),
    'CamelArcher': require('../../assets/units/CamelArcher.png'),
    'Genitour': require('../../assets/units/Genitour.png'),
    'RattanArcher': require('../../assets/units/RattanArcher.png'),
    'Kipchak': require('../../assets/units/Kipchak.png'),
    'ScoutCavalry': require('../../assets/units/ScoutCavalry.png'),
    'LightCavalry': require('../../assets/units/LightCavalry.png'),
    'Hussar': require('../../assets/units/Hussar.png'),
    'XolotlWarrior': require('../../assets/units/XolotlWarrior.png'),
    'Knight': require('../../assets/units/Knight.png'),
    'Cavalier': require('../../assets/units/Cavalier.png'),
    'Paladin': require('../../assets/units/Paladin.png'),
    'CamelRider': require('../../assets/units/CamelRider.png'),
    'HeavyCamelRider': require('../../assets/units/HeavyCamelRider.png'),
    'ImperialCamelRider': require('../../assets/units/ImperialCamelRider.png'),
    'BattleElephant': require('../../assets/units/BattleElephant.png'),
    'EliteBattleElephant': require('../../assets/units/EliteBattleElephant.png'),
    'SteppeLancer': require('../../assets/units/SteppeLancer.png'),
    'EliteSteppeLancer': require('../../assets/units/EliteSteppeLancer.png'),
    'Cataphract': require('../../assets/units/Cataphract.png'),
    'WarElephant': require('../../assets/units/WarElephant.png'),
    'Mameluke': require('../../assets/units/Mameluke.png'),
    'Tarkan': require('../../assets/units/Tarkan.png'),
    'MagyarHuszar': require('../../assets/units/MagyarHuszar.png'),
    'Boyar': require('../../assets/units/Boyar.png'),
    'Konnik': require('../../assets/units/Konnik.png'),
    'Leitis': require('../../assets/units/Leitis.png'),
    'Keshik': require('../../assets/units/Keshik.png'),
    'Militia': require('../../assets/units/Militia.png'),
    'ManAtArms': require('../../assets/units/ManAtArms.png'),
    'LongSwordsman': require('../../assets/units/LongSwordsman.png'),
    'TwoHandedSwordsman': require('../../assets/units/TwoHandedSwordsman.png'),
    'Champion': require('../../assets/units/Champion.png'),
    'Spearman': require('../../assets/units/Spearman.png'),
    'Pikeman': require('../../assets/units/Pikeman.png'),
    'Halberdier': require('../../assets/units/Halberdier.png'),
    'EagleScout': require('../../assets/units/EagleScout.png'),
    'EagleWarrior': require('../../assets/units/EagleWarrior.png'),
    'EliteEagleWarrior': require('../../assets/units/EliteEagleWarrior.png'),
    'WoadRaider': require('../../assets/units/WoadRaider.png'),
    'ThrowingAxeman': require('../../assets/units/ThrowingAxeman.png'),
    'Huskarl': require('../../assets/units/Huskarl.png'),
    'Samurai': require('../../assets/units/Samurai.png'),
    'TeutonicKnight': require('../../assets/units/TeutonicKnight.png'),
    'Berserk': require('../../assets/units/Berserk.png'),
    'JaguarWarrior': require('../../assets/units/JaguarWarrior.png'),
    'Condottiero': require('../../assets/units/Condottiero.png'),
    'ShotelWarrior': require('../../assets/units/ShotelWarrior.png'),
    'Gbeto': require('../../assets/units/Gbeto.png'),
    'KarambitWarrior': require('../../assets/units/KarambitWarrior.png'),
    'HandCannoneer': require('../../assets/units/HandCannoneer.png'),
    'Scorpion': require('../../assets/units/Scorpion.png'),
    'HeavyScorpion': require('../../assets/units/HeavyScorpion.png'),
    'BatteringRam': require('../../assets/units/BatteringRam.png'),
    'CappedRam': require('../../assets/units/CappedRam.png'),
    'SiegeRam': require('../../assets/units/SiegeRam.png'),
    'Mangonel': require('../../assets/units/Mangonel.png'),
    'Onager': require('../../assets/units/Onager.png'),
    'SiegeOnager': require('../../assets/units/SiegeOnager.png'),
    'BombardCannon': require('../../assets/units/BombardCannon.png'),
    'Trebuchet': require('../../assets/units/Trebuchet.png'),
    'Petard': require('../../assets/units/Petard.png'),
    'FlamingCamel': require('../../assets/units/FlamingCamel.png'),
    'BallistaElephant': require('../../assets/units/BallistaElephant.png'),
    'Janissary': require('../../assets/units/Janissary.png'),
    'Longboat': require('../../assets/units/Longboat.png'),
    'TurtleShip': require('../../assets/units/TurtleShip.png'),
    'Conquistador': require('../../assets/units/Conquistador.png'),
    'SiegeTower': require('../../assets/units/SiegeTower.png'),
    'Caravel': require('../../assets/units/Caravel.png'),
    'OrganGun': require('../../assets/units/OrganGun.png'),
    'Arambai': require('../../assets/units/Arambai.png'),
    'Galley': require('../../assets/units/Galley.png'),
    'WarGalley': require('../../assets/units/WarGalley.png'),
    'Galleon': require('../../assets/units/Galleon.png'),
    'FireGalley': require('../../assets/units/FireGalley.png'),
    'FireShip': require('../../assets/units/FireShip.png'),
    'FastFireShip': require('../../assets/units/FastFireShip.png'),
    'DemolitionRaft': require('../../assets/units/DemolitionRaft.png'),
    'DemolitionShip': require('../../assets/units/DemolitionShip.png'),
    'HeavyDemolitionShip': require('../../assets/units/HeavyDemolitionShip.png'),
    'CannonGalleon': require('../../assets/units/CannonGalleon.png'),
    'EliteCannonGalleon': require('../../assets/units/EliteCannonGalleon.png'),
    'Monk': require('../../assets/units/Monk.png'),
    'Missionary': require('../../assets/units/Missionary.png'),
    'TradeCart': require('../../assets/units/TradeCart.png'),
    'TradeCog': require('../../assets/units/TradeCog.png'),
    'FishingShip': require('../../assets/units/FishingShip.png'),
    'TransportShip': require('../../assets/units/TransportShip.png'),
    'Villager': require('../../assets/units/Villager.png'),
};


export type Unit = keyof typeof unitsInternal;
export type UnitLine = keyof typeof unitLines;

export function getUnitLineIcon(unitLine: UnitLine) {
    const unit = unitLines[unitLine].units[0] as Unit;
    return getUnitIcon(unit);
}

export function getUnitLineName(unitLine: UnitLine) {
    const unit = unitLines[unitLine].units[0] as Unit;
    return getUnitName(unit);
}

export function getEliteUniqueResearchIcon() {
    return require('../../assets/units/EliteUniqueResearch.jpg');
}

export function getUnitIcon(unit: Unit) {
    return unitIcons[unit];
}

export function getUnitName(unit: Unit) {
    const unitEntry = units[unit];
    if (unitEntry == null) {
        throw Error(`getUnitLineName ${unit} - no dataId`);
    }
    const dataId = units[unit].dataId;
    // console.log("DATA ID", dataId);
    // console.log("DATA ID", aoeData.data.units);
    const data = aoeData.data.units[dataId];
    return aoeData.strings[data.LanguageNameId.toString() as aoeStringKey];
}

function strRemoveTo(str: string, find: string) {
    return str.substring(str.indexOf(find) + find.length);
}

function strRemoveFrom(str: string, find: string) {
    return str.substring(0, str.indexOf(find));
}

export function getUnitDescription(unit: Unit) {
    const unitEntry = units[unit];
    if (unitEntry == null) {
        throw Error(`getUnitLineName ${unit} - no dataId`);
    }
    const dataId = units[unit].dataId;
    // console.log("DATA ID", dataId);
    // console.log("DATA ID", aoeData.data.units);
    const data = aoeData.data.units[dataId];
    let description = aoeData.strings[data.LanguageHelpId.toString() as aoeStringKey];

    description = strRemoveTo(description, '<br>');
    description = strRemoveFrom(description, '<i> Upgrades:');

    return description;
}