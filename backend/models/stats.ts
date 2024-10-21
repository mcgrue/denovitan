//There's four types of stat in the game.
type statCategory = "Damage" | "Resistance" | "Primary" | "Secondary";

class Statistic {
    name: string;
    category: statCategory;
    description: string;
    icon: string;
    statValue = (_war: number, _rog: number, _wiz: number) => {};

    constructor(
        n: string,
        c: statCategory,
        d: string,
        icon: string,
        stat = (_war: number, _rog: number, _wiz: number) => {},
    ) {
        this.name = n;
        this.category = c;
        this.description = d;
        this.icon = icon;
        this.statValue = stat;
    }
}

const damage: Map<string, Statistic> = new Map<string, Statistic>();
const resist: Map<string, Statistic> = new Map<string, Statistic>();
const primary: Map<number, Statistic> = new Map<number, Statistic>();
const secondary: Map<number, Statistic> = new Map<number, Statistic>();

damage.set(
    "acidic",
    new Statistic(
        "Acidic Damage",
        "Damage",
        "Acidic damage is why you should always be careful when attempting to make a really large baking-soda-and-vinegar volcano. It bypasses your opponent's armour.",
        "dmg_acidic",
    ),
);
damage.set(
    "aethereal",
    new Statistic(
        "Aethereal Damage",
        "Damage",
        "Aethereal damage is inflicted when your attack damages using the power of the stars. We have absolutely nothing funny to say about this, because we take astronomy very seriously. So should you. It bypasses your opponent's armour.",
        "dmg_aethereal",
    ),
);
damage.set(
    "asphyxiative",
    new Statistic(
        "Asphyxiative Damage",
        "Damage",
        "Asphyxiative damage is very hard to spell, and is inflicted upon your opponent when your attack suddenly causes them to stop breathing. This is usually accomplished by removing air from the room, and replacing it with gas, cabbage scents, or noxious cologne. It bypasses your opponent's armour.",
        "dmg_asphyxiative",
    ),
);
damage.set(
    "blasting",
    new Statistic(
        "Blasting Damage",
        "Damage",
        "Blasting damage, first discovered by Alfred Nobel, refers to any damage projected from the quasi-elemental plane of dynamite. It is affected by your opponent's armour.",
        "dmg_blast",
    ),
);
damage.set(
    "conflagratory",
    new Statistic(
        "Conflagratory Damage",
        "Damage",
        "Conflagratory damage is inflicted upon your opponent when you manage to set any part of them on fire. It is not affected by armour.",
        "dmg_conflagratory",
    ),
);
damage.set(
    "crushing",
    new Statistic(
        "Crushing Damage",
        "Damage",
        "Crushing damage is caused by maces, blunt objects, feet, rocks, and elderly gravy. It is affected by your opponent's armour.",
        "dmg_crushing",
    ),
);
damage.set(
    "existential",
    new Statistic(
        "Existential Damage",
        "Damage",
        "Existential damage: does it exist or not? We don't know, but your weapon may inflict it on somebody... if they exist. It bypasses your opponent's armour, if it exists. This tooltip is now going to go off and question its existence, read Heidegger, and weep piteously into a bottle of Dr. Sanin's New-Age Pilsner. It bypasses your opponent's armour.",
        "dmg_existential",
    ),
);
damage.set(
    "hyperborean",
    new Statistic(
        "Hyperborean Damage",
        "Damage",
        "Hyperborean damage is inflicted by frost bite, frost demons, frost weapons, Frost Brand, and frost giants. It is not affected by armour.",
        "dmg_hyperborean",
    ),
);
damage.set(
    "necromantic",
    new Statistic(
        "Necromantic Damage",
        "Damage",
        "Necromantic damage is inflicted by necromancy, which usually means that you have a sword that drains life or turns people into zombies or something. It bypasses your opponent's armour.",
        "dmg_necromantic",
    ),
);
damage.set(
    "piercing",
    new Statistic(
        "Piercing Damage",
        "Damage",
        "Piercing damage is caused when you manage to get the pointy bit of the weapon to stick into the other guy's flesh. It bypasses armour.",
        "dmg_piercing",
    ),
);
damage.set(
    "putrefying",
    new Statistic(
        "Putrefying Damage",
        "Damage",
        "Putrefying damage is inflicted by any attacks that cause your opponent's flesh to decay and rot, such as by attacking them with the vegetable crisper in a refridgerator. It bypasses your opponent's armour.",
        "dmg_putrefying",
    ),
);

damage.set(
    "righteous",
    new Statistic(
        "Righteous Damage",
        "Damage",
        "Righteous damage is inflicted by holy weaponry, really pretty elven maidens, angelic beings, certain sorts of very mystical and holy crystals, and mineral water. It bypasses your opponent's armour.",
        "dmg_righteous",
    ),
);
damage.set(
    "slashing",
    new Statistic(
        "Slashing Damage",
        "Damage",
        "Slashing damage is caused when you manage to get the sharp bit of the weapon to cut through the flesh of the other guy. It is affected by your opponent's armour.",
        "dmg_slashing",
    ),
);
damage.set(
    "toxic",
    new Statistic(
        "Toxic Damage",
        "Damage",
        "Toxic damage is everything icky, nasty, and poisonous. It is often inflicted by tiny Brazilian frogs. The frogs do not like you very much, and we do not recommend strapping them to your equipment. It is not affected by armour.",
        "dmg_toxic",
    ),
);
damage.set(
    "transmutative",
    new Statistic(
        "Transmutative Damage",
        "Damage",
        "Transmutative damage is inflicted when your attack changes something into something else, like clean white linens into a very large drycleaning bill. It bypasses your opponent's armour.",
        "dmg_transmutative",
    ),
);
damage.set(
    "voltaic",
    new Statistic(
        "Voltaic Damage",
        "Damage",
        "Voltaic damage is any damage of an electrical nature. It is not affected by your opponent's armour.",
        "dmg_voltaic",
    ),
);

resist.set(
    "acidic",
    new Statistic(
        "Acidic Resistance",
        "Resistance",
        "Acidic resistance is best achieved by covering yourself, head to toe, in baking soda. Failing that, we suggest the adventurer's fallback: magic rings, again.",
        "dmg_acidic_resist",
    ),
);
resist.set(
    "aethereal",
    new Statistic(
        "Aethereal Resistance",
        "Resistance",
        "Aethereal resistance protects you from attacks fuelled by the power of the stars, the universe, and the influences of the Celestial Bodies upon your more earthly body. Caution: do not stare directly into the Celestial Aegis.",
        "dmg_aethereal_resist",
    ),
);
resist.set(
    "asphyxiative",
    new Statistic(
        "Asphyxiative Resistance",
        "Resistance",
        "Asphyxiative resistance: the Heimlich Maneuver of the tenth century.",
        "dmg_asphyxiative_resist",
    ),
);
resist.set(
    "blasting",
    new Statistic(
        "Blasting Resistance",
        "Resistance",
        "Blasting resistance lets you go out with a bang.",
        "dmg_blast_resist",
    ),
);
resist.set(
    "conflagratory",
    new Statistic(
        "Conflagratory Resistance",
        "Resistance",
        "Conflagratory resistance is very useful if you're a witch, or are likely to be working near witches or other flammable objects. Caution: asbestos armour has been determined by the Dwarven Mountainhomes to cause an increase in lung cancer, beard rot, and Strange Moods.",
        "dmg_conflagratory_resist",
    ),
);
resist.set(
    "crushing",
    new Statistic(
        "Crushing Resistance",
        "Resistance",
        "Crushing resistance allows you to successfully resist the impact of large, blunt objects like bricks.",
        "dmg_crushing_resist",
    ),
);
resist.set(
    "existential",
    new Statistic(
        "Existential Resistance",
        "Resistance",
        "Existential resistance: you think, therefore you resist.",
        "dmg_existential_resist",
    ),
);
resist.set(
    "hyperborean",
    new Statistic(
        "Hyperborean Resistance",
        "Resistance",
        "Hyperborean resistance, common amongst the savage Viking hordes, helps you survive even the chilliest of winters or wintery attacks.",
        "dmg_hyperborean_resist",
    ),
);
resist.set(
    "necromantic",
    new Statistic(
        "Necromantic Resistance",
        "Resistance",
        "Necromantic resistance is very useful when dealing with any members of the undead, and the occasional politican.",
        "dmg_necromantic_resist",
    ),
);
resist.set(
    "piercing",
    new Statistic(
        "Piercing Resistance",
        "Resistance",
        "Piercing resistance allows you to be stung by twenty thousand bees and not feel a thing! (Well, very little.)",
        "dmg_piercing_resist",
    ),
);
resist.set(
    "putrefying",
    new Statistic(
        "Putrefying Resistance",
        "Resistance",
        "Putrefying resistance lets you survive attacks which may try to rot your skin off.",
        "dmg_putrefying_resist",
    ),
);

resist.set(
    "righteous",
    new Statistic(
        "Righteous Resistance",
        "Resistance",
        "Righteous resistance helps protect you from being smote by Divine Powers. It will not, however, protect you from being eaten by bears, as befell the children who mocked the prophet Elisha.",
        "dmg_righteous_resist",
    ),
);
resist.set(
    "slashing",
    new Statistic(
        "Slashing Resistance",
        "Resistance",
        "Slashing resistance protects you from attacks by weapons with bladed edges. It also helps reduce razor burn.",
        "dmg_slashing_resist",
    ),
);
resist.set(
    "toxic",
    new Statistic(
        "Toxic Resistance",
        "Resistance",
        "Toxic resistance is highly praised by those gourmands wishing to dine on the finest in Goblin cuisine.",
        "dmg_toxic_resist",
    ),
);
resist.set(
    "transmutative",
    new Statistic(
        "Transmutative Resistance",
        "Resistance",
        "Transmutative resistance helps you resist transmutation. Whatever that is.",
        "dmg_transmutative_resist",
    ),
);
resist.set(
    "voltaic",
    new Statistic(
        "Voltaic Resistance",
        "Resistance",
        "Voltaic resistance is best achieved by strapping frogs to your body. Their tough, thick conductive hides will help protect you from any electrical encounters. Failing that, we recommend magic rings or something.",
        "dmg_voltaic_resist",
    ),
);

primary.set(
    0,
    new Statistic(
        "Burliness",
        "Primary",
        "Burliness is the primary attribute of the Warrior and pertains to getting into trouble, hitting ones head on other people, and getting hit by large objects/limbs/pseudopods. It affects hitpoints, melee power, and block chance.",
        "stat_burliness",
        (war: number, rog: number, wiz: number) => {
            return war * 2 + rog + wiz;
        },
    ),
);
primary.set(
    1,
    new Statistic(
        "Sagacity",
        "Primary",
        "Sagacity is the primary attribute of the wizard, and is mostly about being a know-it-all. It affects mana points and magic power.",
        "stat_sagacity",
        (war: number, rog: number, wiz: number) => {
            return war + rog + wiz * 2;
        },
    ),
);
primary.set(
    2,
    new Statistic(
        "Nimbleness",
        "Primary",
        "Nimbleness is the primary attribute of the Rogue and is the quality of swiftness, grace, and not getting hit by things. It affects dodge chance, sneakiness, enemy dodge reduction, and counter-attack chance. Nimbleness is pretty great.",
        "stat_nimbleness",
        (war: number, rog: number, wiz: number) => {
            return war + rog * 2 + wiz;
        },
    ),
);
primary.set(
    3,
    new Statistic(
        "Caddishness",
        "Primary",
        "Toxic resistance is highly praised by those gourmands wishing to dine on the finest in Goblin cuisine.",
        "stat_caddishness",
        (war: number, rog: number, wiz: number) => {
            return war * 2 + rog * 2 + wiz;
        },
    ),
);
primary.set(
    4,
    new Statistic(
        "Stubborness",
        "Primary",
        "Caddishness is the primary attribute of the Pirate and revolves around not caring about the feelings of others. It affects critical hit and counter-attack chance.",
        "stat_stubborness",
        (war: number, rog: number, wiz: number) => {
            return war * 2 + rog + wiz * 2;
        },
    ),
);
primary.set(
    5,
    new Statistic(
        "Savvy",
        "Primary",
        "Stubbornness is the primary attribute of the Monk and enhances self-righteousness and the ability to ignore mean things other people say about you. It affects magical resistance and block chance.",
        "stat_savvy",
        (war: number, rog: number, wiz: number) => {
            return war + rog * 2 + wiz * 2;
        },
    ),
);
