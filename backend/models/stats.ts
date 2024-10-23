//There's four types of stat in the game.
type statCategory = "Damage" | "Resistance" | "Primary" | "Secondary";

//IDs are either numeric or strings... for some reason.
type statID = number | string;

class Stat {
    name: string;
    description: string;
    icon: string;
    statValue = (_war: number, _rog: number, _wiz: number) => {};

    constructor(
        n: string,
        d: string,
        icon: string,
        stat = (_war: number, _rog: number, _wiz: number) => {},
    ) {
        this.name = n;
        this.description = d;
        this.icon = icon;
        this.statValue = stat;
    }
}

const damage: { [id: string]: Stat } = {
    "acidic": new Stat(
        "Acidic Damage",
        "Acidic damage is why you should always be careful when attempting to make a really large baking-soda-and-vinegar volcano. It bypasses your opponent's armour.",
        "dmg_acidic",
    ),
    "aethereal": new Stat(
        "Aethereal Damage",
        "Aethereal damage is inflicted when your attack damages using the power of the stars. We have absolutely nothing funny to say about this, because we take astronomy very seriously. So should you. It bypasses your opponent's armour.",
        "dmg_aethereal",
    ),
    "asphyxiative": new Stat(
        "Asphyxiative Damage",
        "Asphyxiative damage is very hard to spell, and is inflicted upon your opponent when your attack suddenly causes them to stop breathing. This is usually accomplished by removing air from the room, and replacing it with gas, cabbage scents, or noxious cologne. It bypasses your opponent's armour.",
        "dmg_asphyxiative",
    ),
    "blasting": new Stat(
        "Blasting Damage",
        "Blasting damage, first discovered by Alfred Nobel, refers to any damage projected from the quasi-elemental plane of dynamite. It is affected by your opponent's armour.",
        "dmg_blast",
    ),
    "conflagratory": new Stat(
        "Conflagratory Damage",
        "Conflagratory damage is inflicted upon your opponent when you manage to set any part of them on fire. It is not affected by armour.",
        "dmg_conflagratory",
    ),
    "crushing": new Stat(
        "Crushing Damage",
        "Crushing damage is caused by maces, blunt objects, feet, rocks, and elderly gravy. It is affected by your opponent's armour.",
        "dmg_crushing",
    ),
    "existential": new Stat(
        "Existential Damage",
        "Existential damage: does it exist or not? We don't know, but your weapon may inflict it on somebody... if they exist. It bypasses your opponent's armour, if it exists. This tooltip is now going to go off and question its existence, read Heidegger, and weep piteously into a bottle of Dr. Sanin's New-Age Pilsner. It bypasses your opponent's armour.",
        "dmg_existential",
    ),
    "hyperborean": new Stat(
        "Hyperborean Damage",
        "Hyperborean damage is inflicted by frost bite, frost demons, frost weapons, Frost Brand, and frost giants. It is not affected by armour.",
        "dmg_hyperborean",
    ),
    "necromantic": new Stat(
        "Necromantic Damage",
        "Necromantic damage is inflicted by necromancy, which usually means that you have a sword that drains life or turns people into zombies or something. It bypasses your opponent's armour.",
        "dmg_necromantic",
    ),
    "piercing": new Stat(
        "Piercing Damage",
        "Piercing damage is caused when you manage to get the pointy bit of the weapon to stick into the other guy's flesh. It bypasses armour.",
        "dmg_piercing",
    ),
    "putrefying": new Stat(
        "Putrefying Damage",
        "Putrefying damage is inflicted by any attacks that cause your opponent's flesh to decay and rot, such as by attacking them with the vegetable crisper in a refridgerator. It bypasses your opponent's armour.",
        "dmg_putrefying",
    ),
    "righteous": new Stat(
        "Righteous Damage",
        "Righteous damage is inflicted by holy weaponry, really pretty elven maidens, angelic beings, certain sorts of very mystical and holy crystals, and mineral water. It bypasses your opponent's armour.",
        "dmg_righteous",
    ),
    "slashing": new Stat(
        "Slashing Damage",
        "Slashing damage is caused when you manage to get the sharp bit of the weapon to cut through the flesh of the other guy. It is affected by your opponent's armour.",
        "dmg_slashing",
    ),
    "toxic": new Stat(
        "Toxic Damage",
        "Toxic damage is everything icky, nasty, and poisonous. It is often inflicted by tiny Brazilian frogs. The frogs do not like you very much, and we do not recommend strapping them to your equipment. It is not affected by armour.",
        "dmg_toxic",
    ),
    "transmutative": new Stat(
        "Transmutative Damage",
        "Transmutative damage is inflicted when your attack changes something into something else, like clean white linens into a very large drycleaning bill. It bypasses your opponent's armour.",
        "dmg_transmutative",
    ),
    "voltaic": new Stat(
        "Voltaic Damage",
        "Voltaic damage is any damage of an electrical nature. It is not affected by your opponent's armour.",
        "dmg_voltaic",
    ),
};

const resist: { [id: string]: Stat } = {
    "acidic": new Stat(
        "Acidic Resistance",
        "Acidic resistance is best achieved by covering yourself, head to toe, in baking soda. Failing that, we suggest the adventurer's fallback: magic rings, again.",
        "dmg_acidic_resist",
    ),
    "aethereal": new Stat(
        "Aethereal Resistance",
        "Aethereal resistance protects you from attacks fuelled by the power of the stars, the universe, and the influences of the Celestial Bodies upon your more earthly body. Caution: do not stare directly into the Celestial Aegis.",
        "dmg_aethereal_resist",
    ),
    "asphyxiative": new Stat(
        "Asphyxiative Resistance",
        "Asphyxiative resistance: the Heimlich Maneuver of the tenth century.",
        "dmg_asphyxiative_resist",
    ),
    "blasting": new Stat(
        "Blasting Resistance",
        "Blasting resistance lets you go out with a bang.",
        "dmg_blast_resist",
    ),
    "conflagratory": new Stat(
        "Conflagratory Resistance",
        "Conflagratory resistance is very useful if you're a witch, or are likely to be working near witches or other flammable objects. Caution: asbestos armour has been determined by the Dwarven Mountainhomes to cause an increase in lung cancer, beard rot, and Strange Moods.",
        "dmg_conflagratory_resist",
    ),
    "crushing": new Stat(
        "Crushing Resistance",
        "Crushing resistance allows you to successfully resist the impact of large, blunt objects like bricks.",
        "dmg_crushing_resist",
    ),
    "existential": new Stat(
        "Existential Resistance",
        "Existential resistance: you think, therefore you resist.",
        "dmg_existential_resist",
    ),
    "hyperborean": new Stat(
        "Hyperborean Resistance",
        "Hyperborean resistance, common amongst the savage Viking hordes, helps you survive even the chilliest of winters or wintery attacks.",
        "dmg_hyperborean_resist",
    ),
    "necromantic": new Stat(
        "Necromantic Resistance",
        "Necromantic resistance is very useful when dealing with any members of the undead, and the occasional politican.",
        "dmg_necromantic_resist",
    ),
    "piercing": new Stat(
        "Piercing Resistance",
        "Piercing resistance allows you to be stung by twenty thousand bees and not feel a thing! (Well, very little.)",
        "dmg_piercing_resist",
    ),
    "putrefying": new Stat(
        "Putrefying Resistance",
        "Putrefying resistance lets you survive attacks which may try to rot your skin off.",
        "dmg_putrefying_resist",
    ),
    "righteous": new Stat(
        "Righteous Resistance",
        "Righteous resistance helps protect you from being smote by Divine Powers. It will not, however, protect you from being eaten by bears, as befell the children who mocked the prophet Elisha.",
        "dmg_righteous_resist",
    ),
    "slashing": new Stat(
        "Slashing Resistance",
        "Slashing resistance protects you from attacks by weapons with bladed edges. It also helps reduce razor burn.",
        "dmg_slashing_resist",
    ),
    "toxic": new Stat(
        "Toxic Resistance",
        "Toxic resistance is highly praised by those gourmands wishing to dine on the finest in Goblin cuisine.",
        "dmg_toxic_resist",
    ),
    "transmutative": new Stat(
        "Transmutative Resistance",
        "Transmutative resistance helps you resist transmutation. Whatever that is.",
        "dmg_transmutative_resist",
    ),
    "voltaic": new Stat(
        "Voltaic Resistance",
        "Voltaic resistance is best achieved by strapping frogs to your body. Their tough, thick conductive hides will help protect you from any electrical encounters. Failing that, we recommend magic rings or something.",
        "dmg_voltaic_resist",
    ),
};
const primary: { [id: number]: Stat } = {
    0: new Stat(
        "Burliness",
        "Burliness is the primary attribute of the Warrior and pertains to getting into trouble, hitting ones head on other people, and getting hit by large objects/limbs/pseudopods. It affects hitpoints, melee power, and block chance.",
        "stat_burliness",
        (war: number, rog: number, wiz: number) => {
            return war * 2 + rog + wiz;
        },
    ),
    1: new Stat(
        "Sagacity",
        "Sagacity is the primary attribute of the wizard, and is mostly about being a know-it-all. It affects mana points and magic power.",
        "stat_sagacity",
        (war: number, rog: number, wiz: number) => {
            return war + rog + wiz * 2;
        },
    ),
    2: new Stat(
        "Nimbleness",
        "Nimbleness is the primary attribute of the Rogue and is the quality of swiftness, grace, and not getting hit by things. It affects dodge chance, sneakiness, enemy dodge reduction, and counter-attack chance. Nimbleness is pretty great.",
        "stat_nimbleness",
        (war: number, rog: number, wiz: number) => {
            return war + rog * 2 + wiz;
        },
    ),
    3: new Stat(
        "Caddishness",
        "Toxic resistance is highly praised by those gourmands wishing to dine on the finest in Goblin cuisine.",
        "stat_caddishness",
        (war: number, rog: number, wiz: number) => {
            return war * 2 + rog * 2 + wiz;
        },
    ),
    4: new Stat(
        "Stubborness",
        "Caddishness is the primary attribute of the Pirate and revolves around not caring about the feelings of others. It affects critical hit and counter-attack chance.",
        "stat_stubborness",
        (war: number, rog: number, wiz: number) => {
            return war * 2 + rog + wiz * 2;
        },
    ),
    5: new Stat(
        "Savvy",
        "Stubbornness is the primary attribute of the Monk and enhances self-righteousness and the ability to ignore mean things other people say about you. It affects magical resistance and block chance.",
        "stat_savvy",
        (war: number, rog: number, wiz: number) => {
            return war + rog * 2 + wiz * 2;
        },
    ),
};
const secondary: { [id: number]: Stat } = {
    0: new Stat(
        "Life",
        "This number shows how not-dead you are. When it hits zero you cease to live. Try not to let that happen.",
        "stat_life",
        (war: number, rog: number, wiz: number) => {
            return 5 + war * 4 + rog * 3 + wiz * 2;
        },
    ),
    1: new Stat(
        "Mana",
        "This number shows your capacity to cast magic spells, all of which cost mana to some degree or other.",
        "stat_mana",
        (war: number, rog: number, wiz: number) => {
            return war * 2 + rog * 2 + wiz * 4;
        },
    ),
    2: new Stat(
        "Melee Power",
        "Melee Power affects how hard you hit with your weapons (or feet, if you don't have any). It's also how hard you throw stuff, but not how hard you shoot your crossbow bolts because that wouldn't make sense.",
        "stat_meleepower",
        (war: number, rog: number, wiz: number) => {
            return Math.floor((war * 2 + rog + wiz - 5) / 3);
        },
    ),
    3: new Stat(
        "Magic Power",
        "Magic Power affects the power of your spells.",
        "stat_magicpower",
        (war: number, rog: number, wiz: number) => {
            return Math.floor((war + rog + wiz * 2) / 2);
        },
    ),
    4: new Stat(
        "Crit",
        "Critical Chance affects how likely you are to land a particularly effective blow in combat, dealing double damage.",
        "stat_crit",
        (war: number, rog: number, wiz: number) => {
            return Math.floor((war * 2 + rog * 2 + wiz) / 2);
        },
    ),
    5: new Stat(
        "Haywire",
        "Haywire Chance affects how likely your spells are to trigger a highly unstable resonance cascade event.",
        "stat_haywire",
        (war: number, rog: number, wiz: number) => {
            return Math.floor((war + rog * 2 + wiz * 2) / 2);
        },
    ),
    6: new Stat(
        "Dodge",
        "Dodge Chance affects how likely you are to avoid the consequences of your actions and physical attacks.",
        "stat_dodge",
        (war: number, rog: number, wiz: number) => {
            return Math.floor((war + rog * 2 + wiz) / 2);
        },
    ),
    7: new Stat(
        "Block",
        "Block Chance affects how likely you are to (mostly) block what you deserve, at least so far as physical attacks go.",
        "stat_block",
        (war: number, rog: number, wiz: number) => {
            return Math.floor(
                (war * 2 + rog + wiz) / 6 + (war * 2 + rog + wiz * 2) / 6,
            );
        },
    ),
    8: new Stat(
        "Counter",
        "Counter Chance affects how likely you are to commit a vindictive act in melee combat by returning an enemy's attack with one of your own.",
        "stat_counter",
        (war: number, rog: number, wiz: number) => {
            return Math.floor(
                (war + rog * 2 + wiz) / 6 + (war * 2 + rog * 2 + wiz) / 6,
            );
        },
    ),
    9: new Stat(
        "Enemy Dodge Reduction",
        "Enemy Dodge Reduction affects how likely an enemy is to not dodge your attacks. Because heroes never miss - but sometimes their attacks are dodged.",
        "stat_edr",
        (war: number, rog: number, wiz: number) => {
            return Math.floor((war + rog * 2 + wiz) / 3);
        },
    ),
    10: new Stat(
        "Armour Absorption",
        "Armour Absorption is how good your armor is at standing between you and inevitability. Each point of Armour Absorption removes one point of mundane damage types.",
        "stat_armourabsorption",
    ),
    11: new Stat(
        "Magic Resistance",
        "Affects how intuitively you can (mostly) nullify a magical attack against you.",
        "stat_magicresistance",
        (war: number, rog: number, wiz: number) => {
            return Math.floor((war * 2 + rog + wiz * 2) / 2);
        },
    ),
    12: new Stat(
        "Sneakiness",
        "Sneakiness is how good you are at tip-toeing around your problems rather than facing them. Helps with sneaking by enemies, not waking sleeping enemies, and with avoiding traps.",
        "stat_sneakiness",
        (war: number, rog: number, wiz: number) => {
            return Math.max(
                Math.floor((war * 2 + rog * 4 + wiz * 3) * 0.75) - 20,
                0,
            );
        },
    ),
    13: new Stat(
        "Life Regen",
        "Listen up, this one is tricky: This number is your health regeneration bonus. It is subtracted from the base health regeneration rate to determine the number of steps it takes for you to regenerate one point of health. A higher number is better.",
        "stat_liferegen",
    ),
    14: new Stat(
        "Mana Regen",
        "Listen up, this one is tricky: This number is your mana regeneration bonus. It is subtracted from the base mana regeneration rate to determine the number of steps it takes for you to regenerate one point of mana. A higher number is better.",
        "stat_manaregen",
    ),
    15: new Stat(
        "Wand Affinity",
        "[[Deprecated stat.]]",
        "stat_wandburn",
    ),
    16: new Stat(
        "Trap Affinity",
        "Trap Affinity is a rating of your ability to avoid and disarm traps.",
        "stat_traplevel",
    ),
    17: new Stat(
        "Trap Sight Radius",
        "Trap Sight Radius determines the distance at which you can spot and identify traps.",
        "stat_trapsense",
    ),
    18: new Stat(
        "Sight Radius",
        "Visual Sight Radius is how far you can see in the dark dungeon.",
        "stat_sight",
    ),
    19: new Stat(
        "Smithing",
        "This is a rating of how good you are at smithery.",
        "stat_smithing",
    ),
    20: new Stat(
        "Tinkering",
        "This is a rating of how good you are at tinkering.",
        "stat_tinkerer",
    ),
    21: new Stat(
        "Alchemy",
        "This is a rating of how good you are at alchemizing.",
        "stat_alchemy",
    ),
    22: new Stat(
        "Magic Reflection",
        "[[No Description -- chance to reflect projectiles]]",
        "stat_reflection",
    ),
    23: new Stat(
        "Wand Crafting",
        "This is a rating of how good you are at wandcrafting.",
        "stat_wandburn",
    ),
    99: new Stat(
        "Experience Points",
        "[[No Description -- used to discern how close the player is to a levelup.",
        "xp_medal",
    ),
};

const statistics: { [type: string]: object } = {
    "Damage": damage,
    "Resistance": resist,
    "Primary": primary,
    "Secondary": secondary,
};

//This should return associated arrays for data manipulation.
export function RenderStats() {
    return statistics;
}

export function StatsByID(_id: statID) {
}

export function StatsByCategory(_type: statCategory) {
}
