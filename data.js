// ===== HERO DATA WITH OFFICIAL MLBB API IMAGES =====
// Source: https://mapi.mobilelegends.com/hero/list (Official Moonton API)
// Last Updated: Season 35 (December 2024 / January 2025)
// Patch: 1.9.42 (The "Sky Piercer" & "Suyou" Update)

const PATCH_VERSION = "1.9.42";
const LAST_UPDATED = "Dec 30, 2024";

// Helper for heroes not yet in API (Suyou, Zhuxin)
const getAvatar = (name, color) => {
    const bg = color ? color.replace('#', '') : '333';
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${bg}&color=fff&size=128&bold=true&font-size=0.4`;
};

const HEROES_DATA = {
    // ===== TANKS (All Official API URLs) =====
    tanks: [
        { name: "Tigreal", tier: "S", winRate: 54.2, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_23a7a603ff9d20074777d52e2eb202f3.jpg", color: "#3a86ff" },
        { name: "Minotaur", tier: "S", winRate: 53.8, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/1ec5d92a9e0981838a6b362cd21cbdb0.jpg", color: "#e63946" },
        { name: "Khufra", tier: "A", winRate: 52.1, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_398cd0a73db63a4b098ab28de5953a0d.png", color: "#7209b7" },
        { name: "Atlas", tier: "A", winRate: 51.5, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_a2f68d5c30c0198006b2c85b7a5cb48b.png", color: "#4361ee" },
        { name: "Franco", tier: "A", winRate: 50.8, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_07605801972ede9147e9769ac7991aa0.png", color: "#8338ec" },
        { name: "Gloo", tier: "A", winRate: 52.5, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/14a44f871e2d9e0aaf35149e6201fb8a.png", color: "#7209b7" },
        { name: "Hylos", tier: "S", winRate: 55.4, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_f3ddb1088279d711417234034024223d.png", color: "#06d6a0" },
    ],

    // ===== FIGHTERS (Official API URLs + Suyou Fallback) =====
    fighters: [
        { name: "Suyou", tier: "S+", winRate: 58.2, img: "https://static.wikia.nocookie.net/mobile-legends/images/c/c4/Hero1261-icon.png/revision/latest", color: "#ef233c" },
        { name: "Cici", tier: "S", winRate: 54.5, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/bc77a45f649d36befd844b767a0b66e2.png", color: "#fb8500" },
        { name: "Arlott", tier: "S", winRate: 53.1, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/bd640274b1595c6713c5c360c458a740.png", color: "#d90429" },
        { name: "Yu Zhong", tier: "A", winRate: 51.9, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/d53f0e10d58b1841219073c026febc51.jpg", color: "#ffd60a" },
        { name: "Paquito", tier: "A", winRate: 51.5, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_f3695c153689c30f8ebfd334931e0525.jpg", color: "#e63946" },
        { name: "Terizla", tier: "S", winRate: 53.8, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_45c908d0d59990c13d229ab22db05ebb.png", color: "#00b4d8" },
        { name: "Chou", tier: "A", winRate: 50.4, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_a3dd4a2b8bd5b8f25a8dd520f2c1c71a.png", color: "#ff6b35" },
    ],

    // ===== ASSASSINS (All Official API URLs) =====
    assassins: [
        { name: "Ling", tier: "S", winRate: 55.2, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_cdbe15a03ad4518f37d89c9e1cbf5c4e.png", color: "#9d4edd" },
        { name: "Hayabusa", tier: "S", winRate: 54.7, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/3de2f55e701a340a02f1828e79cdb9fa.png", color: "#e63946" },
        { name: "Fanny", tier: "S", winRate: 53.5, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_523a730c11b8c22fc6c3fcc5575c29a2.png", color: "#4cc9f0" },
        { name: "Nolan", tier: "A", winRate: 52.3, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/a00c000fd13db499e4bd43766dc56101.png", color: "#3a0ca3" },
        { name: "Joy", tier: "A", winRate: 51.8, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/41ea7c650a26473c193f21e20fd123d6.png", color: "#ffbe0b" },
        { name: "Lancelot", tier: "B", winRate: 49.5, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/e20549844522450e535e614538699eb9.png", color: "#480ca8" },
        { name: "Saber", tier: "A", winRate: 51.2, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/35a5d68d1704e2c4c6323abd4859a622.jpg", color: "#0077b6" },
    ],

    // ===== MARKSMEN (All Official API URLs) =====
    marksmen: [
        { name: "Roger", tier: "S", winRate: 55.8, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_d2f1ce4289d7399177b7f8a25bdf593d.png", color: "#7209b7" },
        { name: "Harith", tier: "S", winRate: 54.5, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_6df4352d8f0d6ce429ad308d323c6206.png", color: "#4361ee" },
        { name: "Claude", tier: "S", winRate: 53.2, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_99318a0a409d80f0f2d4b47ee63b6bda.png", color: "#fb8500" },
        { name: "Beatrix", tier: "A", winRate: 52.8, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_bc9478f69dafbf6ff27d8e19899637ca.png", color: "#00b4d8" },
        { name: "Wanwan", tier: "A", winRate: 51.5, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_d744e6f02ba1d9b5f246a5532cc2b201.png", color: "#fb8500" },
        { name: "Moskov", tier: "S", winRate: 53.5, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/2f37c7bb49843330b8b972f11b60da08.png", color: "#7209b7" },
        { name: "Layla", tier: "B", winRate: 50.2, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_a05a03db633cc03ef3f733d2786073c4.jpg", color: "#f72585" },
    ],

    // ===== MAGES (Official API URLs + Zhuxin Fallback) =====
    mages: [
        { name: "Zhuxin", tier: "S+", winRate: 56.5, img: "https://static.wikia.nocookie.net/mobile-legends/images/0/05/Hero1251-icon.png/revision/latest", color: "#7209b7" },
        { name: "Valentina", tier: "S", winRate: 54.2, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/3fcfa9c74ac47800a3e13a5985d76e55.png", color: "#ff006e" },
        { name: "Vexana", tier: "S", winRate: 53.8, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/2334082b961a77941bc0f87e598bfabb.png", color: "#38b000" },
        { name: "Novaria", tier: "S", winRate: 53.1, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/233e528d55a4c6083bd914c2768ac50d.png", color: "#4cc9f0" },
        { name: "Kagura", tier: "A", winRate: 51.5, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/b7bedaacdacd3de349e538f72fe640c9.png", color: "#06d6a0" },
        { name: "Nana", tier: "A", winRate: 52.5, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_08d0332be76ff7bdd894f7c7227be56c.png", color: "#ffd60a" },
        { name: "Eudora", tier: "B", winRate: 50.1, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_ed32e3c71ecd41652fc54a7efd02aba4.jpg", color: "#0077b6" },
    ],

    // ===== SUPPORTS (All Official API URLs) =====
    supports: [
        { name: "Mathilda", tier: "S", winRate: 55.4, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_74d09f52db9256502ecf2c32211a8102.jpg", color: "#00b4d8" },
        { name: "Chip", tier: "S", winRate: 54.8, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/2daca928703774862b329074220fe7cd.png", color: "#d90429" },
        { name: "Floryn", tier: "A", winRate: 53.2, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/ddd105d16922b8122368acb0a8f3606f.png", color: "#38b000" },
        { name: "Angela", tier: "A", winRate: 52.5, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_feffcc9c39731586e645dbef2ce70afd.png", color: "#ffd60a" },
        { name: "Diggie", tier: "S", winRate: 54.1, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_84b30de71c6315ecc936a8b4d5076efc.png", color: "#fb8500" },
        { name: "Estes", tier: "B", winRate: 51.0, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_42b2d76fe927ce57a1d29e220e2b5eea.png", color: "#70e000" },
    ]
};

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

// ===== BUILDS DATA (META S35) - All Official API Images =====
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
        img: "https://static.wikia.nocookie.net/mobile-legends/images/c/c4/Hero1261-icon.png/revision/latest"
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
        img: "https://static.wikia.nocookie.net/mobile-legends/images/0/05/Hero1251-icon.png/revision/latest"
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
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/2daca928703774862b329074220fe7cd.png"
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
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/3de2f55e701a340a02f1828e79cdb9fa.png"
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
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/35a5d68d1704e2c4c6323abd4859a622.jpg"
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
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_a05a03db633cc03ef3f733d2786073c4.jpg"
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
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_3d40bca69a0e8ef0ac5f0bc49d49f7f0.png"
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
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/233e528d55a4c6083bd914c2768ac50d.png"
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
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_f3ddb1088279d711417234034024223d.png"
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
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_cdbe15a03ad4518f37d89c9e1cbf5c4e.png"
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
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_a3dd4a2b8bd5b8f25a8dd520f2c1c71a.png"
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
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_23a7a603ff9d20074777d52e2eb202f3.jpg"
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
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_bc9478f69dafbf6ff27d8e19899637ca.png"
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
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_b691012cb168b31b172da8b62552e746.png"
    }
};
