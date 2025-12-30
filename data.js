// ===== HERO DATA & TOOLS =====
// Last Updated: Season 35 (December 2024)
// Patch: 1.9.42 ("Sky Piercer" Update)

const PATCH_VERSION = "1.9.42";
const LAST_UPDATED = "Dec 30, 2024";

// Helper to generate reliable avatars (since official hotlinks often 403)
const getAvatar = (name, color) => {
    const bg = color ? color.replace('#', '') : '333';
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${bg}&color=fff&size=128&bold=true&font-size=0.4`;
};

const HEROES_DATA = {
    // ===== TANKS =====
    tanks: [
        { name: "Tigreal", tier: "S", winRate: 54.2, color: "#3a86ff" },
        { name: "Minotaur", tier: "S", winRate: 53.8, color: "#e63946" },
        { name: "Khufra", tier: "A", winRate: 52.1, color: "#7209b7" },
        { name: "Atlas", tier: "A", winRate: 51.5, color: "#4361ee" },
        { name: "Franco", tier: "A", winRate: 50.8, color: "#8338ec" },
        { name: "Gloo", tier: "A", winRate: 52.5, color: "#7209b7" },
        { name: "Hylos", tier: "S", winRate: 55.4, color: "#06d6a0" },
    ],

    // ===== FIGHTERS =====
    fighters: [
        { name: "Suyou", tier: "S+", winRate: 58.2, color: "#ef233c" }, // New Hero
        { name: "Cici", tier: "S", winRate: 54.5, color: "#fb8500" },
        { name: "Arlott", tier: "S", winRate: 53.1, color: "#d90429" },
        { name: "Yu Zhong", tier: "A", winRate: 51.9, color: "#ffd60a" },
        { name: "Paquito", tier: "A", winRate: 51.5, color: "#e63946" },
        { name: "Terizla", tier: "S", winRate: 53.8, color: "#00b4d8" },
        { name: "Chou", tier: "A", winRate: 50.4, color: "#ff6b35" },
    ],

    // ===== ASSASSINS =====
    assassins: [
        { name: "Ling", tier: "S", winRate: 55.2, color: "#9d4edd" },
        { name: "Hayabusa", tier: "S", winRate: 54.7, color: "#e63946" },
        { name: "Fanny", tier: "S", winRate: 53.5, color: "#4cc9f0" },
        { name: "Nolan", tier: "A", winRate: 52.3, color: "#3a0ca3" },
        { name: "Joy", tier: "A", winRate: 51.8, color: "#ffbe0b" },
        { name: "Lancelot", tier: "B", winRate: 49.5, color: "#480ca8" },
        { name: "Saber", tier: "A", winRate: 51.2, color: "#0077b6" },
    ],

    // ===== MARKSMEN =====
    marksmen: [
        { name: "Roger", tier: "S", winRate: 55.8, color: "#7209b7" },
        { name: "Harith", tier: "S", winRate: 54.5, color: "#4361ee" },
        { name: "Claude", tier: "S", winRate: 53.2, color: "#fb8500" },
        { name: "Beatrix", tier: "A", winRate: 52.8, color: "#00b4d8" },
        { name: "Wanwan", tier: "A", winRate: 51.5, color: "#fb8500" },
        { name: "Moskov", tier: "S", winRate: 53.5, color: "#7209b7" },
        { name: "Layla", tier: "B", winRate: 50.2, color: "#f72585" },
    ],

    // ===== MAGES =====
    mages: [
        { name: "Zhuxin", tier: "S+", winRate: 56.5, color: "#7209b7" }, // New Hero
        { name: "Valentina", tier: "S", winRate: 54.2, color: "#ff006e" },
        { name: "Vexana", tier: "S", winRate: 53.8, color: "#38b000" },
        { name: "Novaria", tier: "S", winRate: 53.1, color: "#4cc9f0" },
        { name: "Kagura", tier: "A", winRate: 51.5, color: "#06d6a0" },
        { name: "Nana", tier: "A", winRate: 52.5, color: "#ffd60a" },
        { name: "Eudora", tier: "B", winRate: 50.1, color: "#0077b6" },
    ],

    // ===== SUPPORTS =====
    supports: [
        { name: "Mathilda", tier: "S", winRate: 55.4, color: "#00b4d8" },
        { name: "Chip", tier: "S", winRate: 54.8, color: "#d90429" },
        { name: "Floryn", tier: "A", winRate: 53.2, color: "#38b000" },
        { name: "Angela", tier: "A", winRate: 52.5, color: "#ffd60a" },
        { name: "Diggie", tier: "S", winRate: 54.1, color: "#fb8500" },
        { name: "Estes", tier: "B", winRate: 51.0, color: "#70e000" },
    ]
};

// Generate Images Dynamically
Object.values(HEROES_DATA).forEach(list => {
    list.forEach(h => {
        h.img = getAvatar(h.name, h.color);
    });
});

// Role icons and metadata
const ROLES = [
    { id: "tanks", name: "Tank", icon: "🛡️", color: "#4361ee" },
    { id: "fighters", name: "Fighter", icon: "⚔️", color: "#ff6b35" },
    { id: "assassins", name: "Assassin", icon: "🗡️", color: "#9d4edd" },
    { id: "marksmen", name: "Marksman", icon: "🏹", color: "#00b4d8" },
    { id: "mages", name: "Mage", icon: "🔮", color: "#8338ec" },
    { id: "supports", name: "Support", icon: "💚", color: "#38b000" }
];

// ===== ITEM ICONS =====
const ITEMS = {
    // New Season 34/35 Items
    "Sky Piercer": { icon: "🗡️", type: "physical" },
    "Malefic Gun": { icon: "🔫", type: "physical" },
    "Wishing Lantern": { icon: "🏮", type: "magic" },
    "Winter Crown": { icon: "👑", type: "magic" },
    "Thunder Belt": { icon: "⚡", type: "defense" },

    // Boots
    "Tough Boots": { icon: "🥾", type: "boots" },
    "Rapid Boots": { icon: "👟", type: "boots" },
    "Magic Shoes": { icon: "🧙", type: "boots" },
    "Swift Boots": { icon: "⚡", type: "boots" },
    "Demon Shoes": { icon: "😈", type: "boots" },
    "Arcane Boots": { icon: "👞", type: "boots" },

    // Physical
    "Blade of Heptaseas": { icon: "⚔️", type: "physical" },
    "Malefic Roar": { icon: "🦁", type: "physical" },
    "Blade of Despair": { icon: "💀", type: "physical" },
    "Endless Battle": { icon: "♾️", type: "physical" },
    "Berserker's Fury": { icon: "💢", type: "physical" },
    "Windtalker": { icon: "🌪️", type: "physical" },
    "Scarlet Phantom": { icon: "👻", type: "physical" },
    "Hunter Strike": { icon: "🎯", type: "physical" },
    "War Axe": { icon: "🪓", type: "physical" },
    "Sea Halberd": { icon: "🔱", type: "physical" },
    "Great Dragon Spear": { icon: "🐲", type: "physical" },

    // Magic
    "Starlium Scythe": { icon: "🌙", type: "magic" },
    "Genius Wand": { icon: "🪄", type: "magic" },
    "Holy Crystal": { icon: "💎", type: "magic" },
    "Divine Glaive": { icon: "🗝️", type: "magic" },
    "Blood Wings": { icon: "🩸", type: "magic" },
    "Clock of Destiny": { icon: "⏰", type: "magic" },
    "Lightning Truncheon": { icon: "⚡", type: "magic" },
    "Glowing Wand": { icon: "🔥", type: "magic" },
    "Flask of the Oasis": { icon: "🧪", type: "magic" },
    "Ice Queen Wand": { icon: "❄️", type: "magic" },

    // Defense
    "Immortality": { icon: "👼", type: "defense" },
    "Dominance Ice": { icon: "❄️", type: "defense" },
    "Athena's Shield": { icon: "🛡️", type: "defense" },
    "Antique Cuirass": { icon: "🏛️", type: "defense" },
    "Radiant Armor": { icon: "✨", type: "defense" },
    "Guardian Helmet": { icon: "💚", type: "defense" },
    "Brute Force Breastplate": { icon: "🥋", type: "defense" },
    "Blade Armor": { icon: "🛡️", type: "defense" },
    "Oracle": { icon: "🔮", type: "defense" },
    "Rose Gold Meteor": { icon: "🛡️", type: "defense" },
    "Fleeting Time": { icon: "⏳", type: "magic" },
};

// ===== BUILDS DATA (META S35) =====
const BUILDS_DATA = {
    "Suyou": {
        role: "Fighter/Assassin",
        difficulty: "Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Tough Boots", "Sky Piercer", "Blade of Heptaseas", "Hunter Strike", "Malefic Roar", "Blade of Despair"],
        tips: "New S-Tier Jungler. Tap S1 to chase, Hold S1 to stun. Sky Piercer executes low HP enemies.",
        counters: ["Phoveus", "Khufra"],
        counteredBy: ["Heavy CC", "Burst"],
        img: getAvatar("Suyou", "#ef233c")
    },
    "Zhuxin": {
        role: "Mage",
        difficulty: "Medium",
        emblem: "Mage - Impure Rage",
        spell: "Sprint",
        items: ["Demon Shoes", "Clock of Destiny", "Wishing Lantern", "Ice Queen Wand", "Glowing Wand", "Winter Crown"],
        tips: "Spam S2 to grab enemies. Wishing Lantern burn + Glowing Wand melts tanks. Mana management is key.",
        counters: ["Immobile Tanks", "Melee Fighters"],
        counteredBy: ["Ling", "Fanny", "Sprint users"],
        img: getAvatar("Zhuxin", "#7209b7")
    },
    "Chip": {
        role: "Support/Tank",
        difficulty: "Hard",
        emblem: "Support - Focusing Mark",
        spell: "Flicker",
        items: ["Tough Boots", "Fleeting Time", "Dominance Ice", "Athena's Shield", "Antique Cuirass", "Immortality"],
        tips: "Place portals (Ult) behind enemies for ganks. Use S1 to stun. Special food heals out of combat.",
        counters: ["Split pushers", "Slow rotations"],
        counteredBy: ["Area denial (Pharsa/Yve)", "Burst"],
        img: getAvatar("Chip", "#d90429")
    },
    "Hayabusa": {
        role: "Assassin",
        difficulty: "Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Magic Shoes", "Sky Piercer", "Blade of Heptaseas", "Endless Battle", "Malefic Roar", "Blade of Despair"],
        tips: "Sky Piercer is core! It executes enemies below 6-12% HP, ensuring your Ult secures kills.",
        counters: ["Isolated targets", "Mages"],
        counteredBy: ["Winter Crown", "Won"],
        img: getAvatar("Hayabusa", "#e63946")
    },
    "Saber": {
        role: "Assassin",
        difficulty: "Easy",
        emblem: "Assassin - Rupture",
        spell: "Retribution",
        items: ["Magic Shoes", "Sky Piercer", "Blade of Heptaseas", "Hunter Strike", "Malefic Roar", "Blade of Despair"],
        tips: "One-shot build. Sky Piercer guarantee kills even if they survive the Ult by a sliver of HP.",
        counters: ["All squishies"],
        counteredBy: ["Antique Cuirass", "Winter Crown"],
        img: getAvatar("Saber", "#0077b6")
    },
    "Layla": {
        role: "Marksman",
        difficulty: "Easy",
        emblem: "Marksman - Quantum Charge",
        spell: "Flicker",
        items: ["Swift Boots", "Windtalker", "Berserker's Fury", "Malefic Gun", "Blade of Despair", "Malefic Roar"],
        tips: "Malefic Gun increases your range. Activate it to hit enemies from outside their screen!",
        counters: ["Short range MMs"],
        counteredBy: ["Assassins"],
        img: getAvatar("Layla", "#f72585")
    },
    "Clint": {
        role: "Marksman",
        difficulty: "Medium",
        emblem: "Assassin - Killing Spree",
        spell: "Flicker",
        items: ["Tough Boots", "Endless Battle", "Thunder Belt", "Malefic Roar", "Blade of Despair", "Sky Piercer"],
        tips: "Hybrid built with new Thunder Belt stacks. Sky Piercer helps secure kills with passive grid proc.",
        counters: ["Wanwan", "Claude"],
        counteredBy: ["Long range mages"],
        img: getAvatar("Clint", "#324e2b") // Guessed color
    },
    "Novaria": {
        role: "Mage",
        difficulty: "Hard",
        emblem: "Mage - Lethal Ignition",
        spell: "Flicker",
        items: ["Arcane Boots", "Clock of Destiny", "Lightning Truncheon", "Wishing Lantern", "Holy Crystal", "Divine Glaive"],
        tips: "Wishing Lantern fits her perfectly (damage based on HP). Snipe tanks to trigger the lantern burn.",
        counters: ["Vision hiders"],
        counteredBy: ["Lolita", "Fanny"],
        img: getAvatar("Novaria", "#4cc9f0")
    },
    "Hylos": {
        role: "Tank",
        difficulty: "Easy",
        emblem: "Tank - Concussive Blast",
        spell: "Revitalize",
        items: ["Tough Boots", "Thunder Belt", "Clock of Destiny", "Dominance Ice", "Radiant Armor", "Blade Armor"],
        tips: "Highest winrate tank in S35. Revamped Thunder Belt + Revitalize makes him unkillable.",
        counters: ["Attack speed heroes"],
        counteredBy: ["Karrie", "DHS users"],
        img: getAvatar("Hylos", "#06d6a0")
    },
    "Ling": {
        role: "Assassin",
        difficulty: "Very Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Tough Boots", "Berserker's Fury", "Endless Battle", "Great Dragon Spear", "Malefic Roar", "Blade of Despair"],
        tips: "Use walls to regen energy. S1 > S2 combo. Great Dragon Spear reduces Ult cooldown for more plays.",
        counters: ["Immobile backline"],
        counteredBy: ["Khufra", "Minsitthar"],
        img: getAvatar("Ling", "#9d4edd")
    },
    "Chou": {
        role: "Fighter/Roam",
        difficulty: "Hard",
        emblem: "Tank - Concussive Blast",
        spell: "Flicker",
        items: ["Rapid Boots", "Thunder Belt", "Dominance Ice", "Athena's Shield", "Antique Cuirass", "Immortality"],
        tips: "Tank Chou is meta again. Thunder Belt gives true damage + slow. Kick enemies into your team.",
        counters: ["Assassins"],
        counteredBy: ["Diggie"],
        img: getAvatar("Chou", "#ff6b35")
    },
    "Tigreal": {
        role: "Tank",
        difficulty: "Easy",
        emblem: "Tank - Concussive Blast",
        spell: "Flicker",
        items: ["Tough Boots", "Dominance Ice", "Athena's Shield", "Antique Cuirass", "Immortality", "Radiant Armor"],
        tips: "Wait for enemies to group. Flicker + Ult + S2 push is a game winning combo.",
        counters: ["Grouped enemies"],
        counteredBy: ["Valir", "Diggie"],
        img: getAvatar("Tigreal", "#3a86ff")
    },
    "Beatrix": {
        role: "Marksman",
        difficulty: "Hard",
        emblem: "Marksman - Quantum Charge",
        spell: "Flicker",
        items: ["Swift Boots", "Hunter Strike", "Blade of Despair", "Malefic Roar", "Sky Piercer", "Rose Gold Meteor"],
        tips: "Sniper (Renner) + Sky Piercer is a one-shot cheat code. Use it to delete squishies.",
        counters: ["Tanks", "Squishies"],
        counteredBy: ["Irithyel", "Clint"],
        img: getAvatar("Beatrix", "#00b4d8")
    },
    "Esmeralda": {
        role: "Fighter",
        difficulty: "Medium",
        emblem: "Support - Avarice",
        spell: "Purify",
        items: ["Tough Boots", "Starlium Scythe", "Brute Force Breastplate", "Oracle", "Dominance Ice", "Holy Crystal"],
        tips: "Starlium Scythe (new Calamity) gives hybrid lifesteal. Infinite shield generation.",
        counters: ["Phoveus", "Terizla"],
        counteredBy: ["Dyrroth", "Sea Halberd"],
        img: getAvatar("Esmeralda", "#b69101") // Guessed
    }
};
