export const Cell = {
  Defence: "Defence",
  Mobility: "Mobility",
  Power: "Power",
  Technique: "Technique",
  Utility: "Utility"
};

export const Weapon = {
  Axe: "Axe",
  CB: "Chain Blades",
  Ham: "Hammer",
  Gun: "Repeaters",
  Sword: "Sword",
  Pike: "Pike"
};

export const Armor = {
  Helm: "Helm",
  Chest: "Chest",
  Arms: "Arms",
  Legs: "Legs",
  Lan: "Lantern"
};

export const Abilities = {
  Acidic: { Name: "Acidic", Cell: Cell.Technique },
  Adrenaline: { Name: "Adrenaline", Cell: Cell.Technique },
  Aetherborne: { Name: "Aetherborne", Cell: Cell.Utility },
  Aetherhunter: { Name: "Aetherhunter", Cell: Cell.Power },
  AethericAttunement: { Name: "Aetheric Attunement", Cell: Cell.Utility },
  AethericFrenzy: { Name: "Aetheric Frenzy", Cell: Cell.Utility },
  Agility: { Name: "Agility", Cell: Cell.Mobility },
  AssassinsVigour: { Name: "Assasins Vigour", Cell: Cell.Defence },
  Barbed: { Name: "Barbed", Cell: Cell.Technique },
  Bladestorm: { Name: "Bladestorm", Cell: Cell.Technique },
  Bloodless: { Name: "Bloodless", Cell: Cell.Defence },
  Conditioning: { Name: "Conditioning", Cell: Cell.Mobility },
  Conduit: { Name: "Conduit", Cell: Cell.Utility },
  Cunning: { Name: "Cunning", Cell: Cell.Technique },
  Deconstruction: { Name: "Deconstruction", Cell: Cell.Power },
  Endurance: { Name: "Endurance", Cell: Cell.Mobility },
  Energized: { Name: "Energized", Cell: Cell.Utility },
  Evasion: { Name: "Evasion", Cell: Cell.Mobility },
  EvasiveFury: { Name: "Evasive Fury", Cell: Cell.Technique },
  Fireproof: { Name: "Fireproof", Cell: Cell.Defence },
  FleetFooted: { Name: "Fleet Footed", Cell: Cell.Mobility },
  Fortress: { Name: "Fortress", Cell: Cell.Defence },
  Guardian: { Name: "Guardian", Cell: Cell.Defence },
  Iceborne: { Name: "Iceborne", Cell: Cell.Defence },
  Insulated: { Name: "Insulated", Cell: Cell.Defence },
  KnockoutKing: { Name: "Knockout King", Cell: Cell.Power },
  Lucent: { Name: "Lucent", Cell: Cell.Utility },
  Medic: { Name: "Medic", Cell: Cell.Utility },
  Merciless: { Name: "Merciless", Cell: Cell.Technique },
  Molten: { Name: "Molten", Cell: Cell.Technique },
  Nimble: { Name: "Nimble", Cell: Cell.Mobility },
  NineLives: { Name: "Nine Lives", Cell: Cell.Defence },
  Overpower: { Name: "Overpower", Cell: Cell.Power },
  Pacifier: { Name: "Pacifier", Cell: Cell.Power },
  Predator: { Name: "Predator", Cell: Cell.Technique },
  Rage: { Name: "Rage", Cell: Cell.Power },
  Ragehunter: { Name: "Ragehunter", Cell: Cell.Power },
  Savagery: { Name: "Savagery", Cell: Cell.Technique },
  Sharpened: { Name: "Sharpened", Cell: Cell.Power },
  ShellshockResist: { Name: "Shellshock Resist", Cell: Cell.Defence },
  StunningVigor: { Name: "Stunning Vigor", Cell: Cell.Utility },
  Sturdy: { Name: "Sturdy", Cell: Cell.Defence },
  Swift: { Name: "Swift", Cell: Cell.Mobility },
  Tough: { Name: "Tough", Cell: Cell.Defence },
  Vampiric: { Name: "Vampiric", Cell: Cell.Utility },
  Warmth: { Name: "Warmth", Cell: Cell.Defence },
  WeightedStrikes: { Name: "Weighted Strikes", Cell: Cell.Technique },
  WildFrenzy: { Name: "Wild Frenzy", Cell: Cell.Technique },
  None: null
};

export const Armors = {
  GnasherHelm: {
    Ability: Abilities.Bloodless,
    Cell: Cell.Defence,
    Armor: Armor.Helm
  },
  GnasherChest: {
    Ability: Abilities.Tough,
    Cell: Cell.Defence,
    Armor: Armor.Chest
  },
  GnasherArms: {
    Ability: Abilities.Ragehunter,
    Cell: Cell.Power,
    Armor: Armor.Arms
  },
  GnasherLegs: {
    Ability: Abilities.Tough,
    Cell: Cell.Power,
    Armor: Armor.Legs
  },

  ShrikeHelm: {
    Ability: Abilities.Evasion,
    Cell: Cell.Technique,
    Armor: Armor.Helm
  },
  ShrikeChest: {
    Ability: Abilities.Evasion,
    Cell: Cell.Mobility,
    Armor: Armor.Chest
  },
  ShrikeArms: {
    Ability: Abilities.WeightedStrikes,
    Cell: Cell.Mobility,
    Armor: Armor.Arms
  },
  ShrikeLegs: {
    Ability: Abilities.Bloodless,
    Cell: Cell.Mobility,
    Armor: Armor.Legs
  },

  QuillHelm: {
    Ability: Abilities.Savagery,
    Cell: Cell.Defence,
    Armor: Armor.Helm
  },
  QuillChest: {
    Ability: Abilities.Savagery,
    Cell: Cell.Technique,
    Armor: Armor.Chest
  },
  QuillArms: {
    Ability: Abilities.Barbed,
    Cell: Cell.Technique,
    Armor: Armor.Arms
  },
  QuillLegs: {
    Ability: Abilities.ShellshockResist,
    Cell: Cell.Technique,
    Armor: Armor.Legs
  },

  SkarnHelm: {
    Ability: Abilities.Tough,
    Cell: Cell.Defence,
    Armor: Armor.Helm
  },
  SkarnChest: {
    Ability: Abilities.Guardian,
    Cell: Cell.Defence,
    Armor: Armor.Chest
  },
  SkarnArms: {
    Ability: Abilities.Fortress,
    Cell: Cell.Defence,
    Armor: Armor.Arms
  },
  SkarnLegs: {
    Ability: Abilities.Guardian,
    Cell: Cell.Defence,
    Armor: Armor.Legs
  },

  CharHelm: {
    Ability: Abilities.Fireproof,
    Cell: Cell.Defence,
    Armor: Armor.Helm
  },
  CharChest: {
    Ability: Abilities.Aetherhunter,
    Cell: Cell.Utility,
    Armor: Armor.Chest
  },
  CharArms: { Ability: Abilities.Rage, Cell: Cell.Utility, Armor: Armor.Arms },
  CharLegs: { Ability: Abilities.Rage, Cell: Cell.Power, Armor: Armor.Legs },

  EmberHelm: {
    Ability: Abilities.EvasiveFury,
    Cell: Cell.Mobility,
    Armor: Armor.Helm
  },
  EmberChest: {
    Ability: Abilities.EvasiveFury,
    Cell: Cell.Mobility,
    Armor: Armor.Chest
  },
  EmberArms: {
    Ability: Abilities.Fireproof,
    Cell: Cell.Technique,
    Armor: Armor.Arms
  },
  EmberLegs: {
    Ability: Abilities.Evasion,
    Cell: Cell.Defence,
    Armor: Armor.Legs
  },

  SkraevHelm: {
    Ability: Abilities.FleetFooted,
    Cell: Cell.Mobility,
    Armor: Armor.Helm
  },
  SkraevChest: {
    Ability: Abilities.Adrenaline,
    Cell: Cell.Mobility,
    Armor: Armor.Chest
  },
  SkraevArms: {
    Ability: Abilities.Warmth,
    Cell: Cell.Mobility,
    Armor: Armor.Arms
  },
  SkraevLegs: {
    Ability: Abilities.Adrenaline,
    Cell: Cell.Utility,
    Armor: Armor.Legs
  },

  DraskHelm: {
    Ability: Abilities.AethericAttunement,
    Cell: Cell.Power,
    Armor: Armor.Helm
  },
  DraskChest: {
    Ability: Abilities.AethericAttunement,
    Cell: Cell.Power,
    Armor: Armor.Chest
  },
  DraskArms: {
    Ability: Abilities.Sharpened,
    Cell: Cell.Utility,
    Armor: Armor.Arms
  },
  DraskLegs: {
    Ability: Abilities.FleetFooted,
    Cell: Cell.Utility,
    Armor: Armor.Legs
  },

  ZagaHelm: { Ability: Abilities.Medic, Cell: Cell.Utility, Armor: Armor.Helm },
  ZagaChest: {
    Ability: Abilities.Medic,
    Cell: Cell.Defence,
    Armor: Armor.Chest
  },
  ZagaArms: {
    Ability: Abilities.AethericAttunement,
    Cell: Cell.Utility,
    Armor: Armor.Arms
  },
  ZagaLegs: {
    Ability: Abilities.Insulated,
    Cell: Cell.Defence,
    Armor: Armor.Legs
  },

  PangarHelm: {
    Ability: Abilities.KnockoutKing,
    Cell: Cell.Power,
    Armor: Armor.Helm
  },
  PangarChest: {
    Ability: Abilities.Fortress,
    Cell: Cell.Power,
    Armor: Armor.Chest
  },
  PangarArms: {
    Ability: Abilities.KnockoutKing,
    Cell: Cell.Defence,
    Armor: Armor.Arms
  },
  PangarLegs: {
    Ability: Abilities.Warmth,
    Cell: Cell.Defence,
    Armor: Armor.Legs
  },

  HellionHelm: {
    Ability: Abilities.Ragehunter,
    Cell: Cell.Technique,
    Armor: Armor.Helm
  },
  HellionChest: {
    Ability: Abilities.Molten,
    Cell: Cell.Technique,
    Armor: Armor.Chest
  },
  HellionArms: {
    Ability: Abilities.Molten,
    Cell: Cell.Power,
    Armor: Armor.Arms
  },
  HellionLegs: {
    Ability: Abilities.Fortress,
    Cell: Cell.Power,
    Armor: Armor.Legs
  },

  StormHelm: {
    Ability: Abilities.Energized,
    Cell: Cell.Technique,
    Armor: Armor.Helm
  },
  StormChest: {
    Ability: Abilities.Energized,
    Cell: Cell.Mobility,
    Armor: Armor.Chest
  },
  StormArms: {
    Ability: Abilities.Insulated,
    Cell: Cell.Mobility,
    Armor: Armor.Arms
  },
  StormLegs: {
    Ability: Abilities.AethericFrenzy,
    Cell: Cell.Mobility,
    Armor: Armor.Legs
  },

  KharaHelm: {
    Ability: Abilities.ShellshockResist,
    Cell: Cell.Mobility,
    Armor: Armor.Helm
  },
  KharaChest: {
    Ability: Abilities.Bladestorm,
    Cell: Cell.Technique,
    Armor: Armor.Chest
  },
  KharaArms: {
    Ability: Abilities.Conditioning,
    Cell: Cell.Mobility,
    Armor: Armor.Arms
  },
  KharaLegs: {
    Ability: Abilities.Conditioning,
    Cell: Cell.Power,
    Armor: Armor.Legs
  },

  RezaHelm: {
    Ability: Abilities.Conduit,
    Cell: Cell.Technique,
    Armor: Armor.Helm
  },
  RezaChest: {
    Ability: Abilities.Cunning,
    Cell: Cell.Utility,
    Armor: Armor.Chest
  },
  RezaArms: {
    Ability: Abilities.Conduit,
    Cell: Cell.Technique,
    Armor: Armor.Arms
  },
  RezaLegs: {
    Ability: Abilities.Agility,
    Cell: Cell.Mobility,
    Armor: Armor.Legs
  },

  ShrowdHelm: { Ability: Abilities.Rage, Cell: Cell.Power, Armor: Armor.Helm },
  ShrowdChest: {
    Ability: Abilities.Rage,
    Cell: Cell.Power,
    Armor: Armor.Chest
  },
  ShrowdArms: {
    Ability: Abilities.Medic,
    Cell: Cell.Utility,
    Armor: Armor.Arms
  },
  ShrowdLegs: {
    Ability: Abilities.NineLives,
    Cell: Cell.Utility,
    Armor: Armor.Legs
  },

  KoshaiHelm: {
    Ability: Abilities.Agility,
    Cell: Cell.Technique,
    Armor: Armor.Helm
  },
  KoshaiChest: {
    Ability: Abilities.Predator,
    Cell: Cell.Utility,
    Armor: Armor.Chest
  },
  KoshaiArms: {
    Ability: Abilities.EvasiveFury,
    Cell: Cell.Power,
    Armor: Armor.Arms
  },
  KoshaiLegs: {
    Ability: Abilities.Predator,
    Cell: Cell.Utility,
    Armor: Armor.Legs
  },

  RiftHelm: {
    Ability: Abilities.AethericAttunement,
    Cell: Cell.Utility,
    Armor: Armor.Helm
  },
  RiftChest: {
    Ability: Abilities.Conduit,
    Cell: Cell.Utility,
    Armor: Armor.Chest
  },
  RiftArms: {
    Ability: Abilities.Evasion,
    Cell: Cell.Mobility,
    Armor: Armor.Arms
  },
  RiftLegs: {
    Ability: Abilities.Conduit,
    Cell: Cell.Mobility,
    Armor: Armor.Legs
  },

  ValoHelm: { Ability: Abilities.Lucent, Cell: Cell.Power, Armor: Armor.Helm },
  ValoChest: {
    Ability: Abilities.NineLives,
    Cell: Cell.Power,
    Armor: Armor.Chest
  },
  ValoArms: {
    Ability: Abilities.Lucent,
    Cell: Cell.Defence,
    Armor: Armor.Arms
  },
  ValoLegs: {
    Ability: Abilities.Aetherhunter,
    Cell: Cell.Utility,
    Armor: Armor.Legs
  },

  BoreusHelm: {
    Ability: Abilities.Conditioning,
    Cell: Cell.Utility,
    Armor: Armor.Helm
  },
  BoreusChest: {
    Ability: Abilities.Rage,
    Cell: Cell.Defence,
    Armor: Armor.Chest
  },
  BoreusArms: { Ability: Abilities.Rage, Cell: Cell.Power, Armor: Armor.Arms },
  BoreusLegs: {
    Ability: Abilities.Iceborne,
    Cell: Cell.Technique,
    Armor: Armor.Legs
  }
};
