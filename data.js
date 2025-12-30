// ===== HERO DATA WITH OFFICIAL MLBB API IMAGES =====
// Source: https://mapi.mobilelegends.com/hero/list (Official Moonton API)
// Last Updated: Season 35 (January 2025 / January 2025)
// Patch: 1.9.42 (The "Sky Piercer" & "Suyou" Update)

const PATCH_VERSION = "1.9.42";
const LAST_UPDATED = "Jan 1, 2025";

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

// ===== BUILDS DATA (META S35) - ALL 40 HEROES =====
const BUILDS_DATA = {
    // ========== TANKS ==========
    "Tigreal": {
        role: "Tank",
        difficulty: "Easy",
        emblem: "Tank - Concussive Blast",
        spell: "Flicker",
        items: ["Tough Boots", "Dominance Ice", "Athena's Shield", "Antique Cuirass", "Immortality", "Radiant Armor"],
        tips: "Wait for enemies to group. Flicker + Ult + S2 push is a game winning combo. Always check bushes with S1.",
        counters: ["Grouped enemies", "Immobile carries"],
        counteredBy: ["Valir", "Diggie", "Wan Wan"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_23a7a603ff9d20074777d52e2eb202f3.jpg"
    },
    "Minotaur": {
        role: "Tank",
        difficulty: "Medium",
        emblem: "Tank - Concussive Blast",
        spell: "Flicker",
        items: ["Tough Boots", "Oracle", "Dominance Ice", "Athena's Shield", "Antique Cuirass", "Immortality"],
        tips: "Build rage before fights. Ult in Rage Mode fears enemies. Oracle boosts your healing passive significantly.",
        counters: ["Sustain teams", "Melee comps"],
        counteredBy: ["Baxia", "Sea Halberd users"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/1ec5d92a9e0981838a6b362cd21cbdb0.jpg"
    },
    "Khufra": {
        role: "Tank",
        difficulty: "Hard",
        emblem: "Tank - Concussive Blast",
        spell: "Flicker",
        items: ["Tough Boots", "Dominance Ice", "Antique Cuirass", "Athena's Shield", "Radiant Armor", "Immortality"],
        tips: "S2 counters ALL dash heroes (Fanny, Ling, Lancelot). Time your bounce to interrupt enemy dashes.",
        counters: ["Fanny", "Ling", "Lancelot", "Wanwan"],
        counteredBy: ["Valir", "Karrie", "Long range poke"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_398cd0a73db63a4b098ab28de5953a0d.png"
    },
    "Atlas": {
        role: "Tank",
        difficulty: "Medium",
        emblem: "Tank - Concussive Blast",
        spell: "Flicker",
        items: ["Tough Boots", "Dominance Ice", "Athena's Shield", "Antique Cuirass", "Radiant Armor", "Immortality"],
        tips: "Flicker during Ult animation for surprise 5-man setups. Use S2 to escape or chase. Ult goes through Purify!",
        counters: ["Grouped enemies", "Immobile teams"],
        counteredBy: ["Diggie", "Spread formations"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_a2f68d5c30c0198006b2c85b7a5cb48b.png"
    },
    "Franco": {
        role: "Tank",
        difficulty: "Hard",
        emblem: "Tank - Concussive Blast",
        spell: "Flicker",
        items: ["Tough Boots", "Dominance Ice", "Athena's Shield", "Antique Cuirass", "Blade Armor", "Immortality"],
        tips: "Hook accuracy wins games. Predict enemy movement. Use Ult to suppress priority targets for 1.8s.",
        counters: ["Immobile carries", "Mages"],
        counteredBy: ["Wanwan", "Diggie", "Mobile assassins"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_07605801972ede9147e9769ac7991aa0.png"
    },
    "Gloo": {
        role: "Tank",
        difficulty: "Medium",
        emblem: "Tank - Concussive Blast",
        spell: "Vengeance",
        items: ["Tough Boots", "Cursed Helmet", "Dominance Ice", "Radiant Armor", "Athena's Shield", "Immortality"],
        tips: "Attach to enemy damage dealer with Ult, then use Vengeance. They either die or waste skills on you.",
        counters: ["Squishy carries", "Immobile mages"],
        counteredBy: ["Karrie", "True damage dealers"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/14a44f871e2d9e0aaf35149e6201fb8a.png"
    },
    "Hylos": {
        role: "Tank",
        difficulty: "Easy",
        emblem: "Tank - Concussive Blast",
        spell: "Revitalize",
        items: ["Tough Boots", "Thunder Belt", "Clock of Destiny", "Dominance Ice", "Radiant Armor", "Blade Armor"],
        tips: "Highest winrate tank in S35. Revamped Thunder Belt + Revitalize makes you unkillable. Ult path slows enemies.",
        counters: ["Attack speed heroes", "Melee comps"],
        counteredBy: ["Karrie", "DHS users", "Esmeralda"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_f3ddb1088279d711417234034024223d.png"
    },

    // ========== FIGHTERS ==========
    "Suyou": {
        role: "Fighter/Assassin",
        difficulty: "Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Tough Boots", "Sky Piercer", "Blade of Heptaseas", "Hunter Strike", "Malefic Roar", "Blade of Despair"],
        tips: "New S-Tier Jungler. Tap S1 to chase, Hold S1 to stun. Sky Piercer executes low HP enemies. Mask form = burst.",
        counters: ["Squishy backline", "Immobile mages"],
        counteredBy: ["Phoveus", "Khufra", "Heavy CC"],
        img: "https://static.wikia.nocookie.net/mobile-legends/images/c/c4/Hero1261-icon.png/revision/latest"
    },
    "Cici": {
        role: "Fighter",
        difficulty: "Hard",
        emblem: "Fighter - Festival of Blood",
        spell: "Flicker",
        items: ["Tough Boots", "War Axe", "Brute Force Breastplate", "Oracle", "Dominance Ice", "Immortality"],
        tips: "Spin to win! S1 resets on kills. Use Ult to pull enemies back. Very mobile with low cooldowns.",
        counters: ["Squishy teams", "Immobile carries"],
        counteredBy: ["Phoveus", "Heavy CC", "Burst mages"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/bc77a45f649d36befd844b767a0b66e2.png"
    },
    "Arlott": {
        role: "Fighter",
        difficulty: "Medium",
        emblem: "Fighter - Festival of Blood",
        spell: "Flicker",
        items: ["Tough Boots", "War Axe", "Blade of Heptaseas", "Brute Force Breastplate", "Malefic Roar", "Immortality"],
        tips: "Ult pulls enemies to walls for GUARANTEED stun. Use S1 poke in lane. S2 gives sustain in fights.",
        counters: ["Immobile targets", "Near walls"],
        counteredBy: ["Mobile assassins", "Ranged kiters"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/bd640274b1595c6713c5c360c458a740.png"
    },
    "Yu Zhong": {
        role: "Fighter",
        difficulty: "Medium",
        emblem: "Fighter - Festival of Blood",
        spell: "Flicker",
        items: ["Tough Boots", "War Axe", "Brute Force Breastplate", "Oracle", "Radiant Armor", "Immortality"],
        tips: "Stack passive before Dragon form. In Dragon, you're immune to CC and heal massively. Dive backline freely.",
        counters: ["Sustained fights", "Melee comps"],
        counteredBy: ["Baxia", "Sea Halberd", "Burst before transform"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/d53f0e10d58b1841219073c026febc51.jpg"
    },
    "Paquito": {
        role: "Fighter",
        difficulty: "Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Flicker",
        items: ["Tough Boots", "Blade of Heptaseas", "War Axe", "Hunter Strike", "Malefic Roar", "Blade of Despair"],
        tips: "Champ Stance skills are enhanced. Master the 3-hit passive stack. S1>S2>Ult>S1>S2 is the burst combo.",
        counters: ["Squishy targets", "Short trades"],
        counteredBy: ["Phoveus", "Heavy CC", "Outscaling"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_f3695c153689c30f8ebfd334931e0525.jpg"
    },
    "Terizla": {
        role: "Fighter",
        difficulty: "Medium",
        emblem: "Fighter - Festival of Blood",
        spell: "Flicker",
        items: ["Tough Boots", "Bloodlust Axe", "War Axe", "Brute Force Breastplate", "Oracle", "Immortality"],
        tips: "Ult pulls enemies IN. Use it to group enemies for your team. S2 third hit deals massive damage.",
        counters: ["Immobile teams", "Melee comps"],
        counteredBy: ["Ranged kiters", "Karrie"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_45c908d0d59990c13d229ab22db05ebb.png"
    },
    "Chou": {
        role: "Fighter/Roam",
        difficulty: "Hard",
        emblem: "Tank - Concussive Blast",
        spell: "Flicker",
        items: ["Rapid Boots", "Thunder Belt", "Dominance Ice", "Athena's Shield", "Antique Cuirass", "Immortality"],
        tips: "Tank Chou is meta. Thunder Belt gives true damage + slow. Flicker-Kick priority targets into your team.",
        counters: ["Squishy carries", "Assassins"],
        counteredBy: ["Diggie", "Purify users"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_a3dd4a2b8bd5b8f25a8dd520f2c1c71a.png"
    },

    // ========== ASSASSINS ==========
    "Ling": {
        role: "Assassin",
        difficulty: "Very Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Tough Boots", "Berserker's Fury", "Endless Battle", "Great Dragon Spear", "Malefic Roar", "Blade of Despair"],
        tips: "Use walls to regen energy. S1>S2 combo for crits. Great Dragon Spear reduces Ult CD. Untargetable during Ult.",
        counters: ["Immobile backline", "Squishy mages"],
        counteredBy: ["Khufra", "Minsitthar", "CC chains"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_cdbe15a03ad4518f37d89c9e1cbf5c4e.png"
    },
    "Hayabusa": {
        role: "Assassin",
        difficulty: "Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Magic Shoes", "Sky Piercer", "Blade of Heptaseas", "Endless Battle", "Malefic Roar", "Blade of Despair"],
        tips: "Sky Piercer executes below 6-12% HP. Ult ISOLATED targets for max damage. Always have shadow for escape.",
        counters: ["Isolated targets", "Squishy mages"],
        counteredBy: ["Winter Crown", "Grouping", "CC"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/3de2f55e701a340a02f1828e79cdb9fa.png"
    },
    "Fanny": {
        role: "Assassin",
        difficulty: "Very Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Tough Boots", "Blade of Heptaseas", "Hunter Strike", "Malefic Roar", "Blade of Despair", "Rose Gold Meteor"],
        tips: "Master cable mechanics. Blue buff is MANDATORY. Prey Mark (passive) stacks = more damage. Cable through walls.",
        counters: ["Squishy backline", "No CC comps"],
        counteredBy: ["Khufra", "Minsitthar", "CC heavy teams"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_523a730c11b8c22fc6c3fcc5575c29a2.png"
    },
    "Nolan": {
        role: "Assassin",
        difficulty: "Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Tough Boots", "Blade of Heptaseas", "Endless Battle", "Hunter Strike", "Malefic Roar", "Blade of Despair"],
        tips: "Hit enemies with dimension edges for bonus damage. Ult is invincibility frames. Combo: S1>S2>AA>Ult.",
        counters: ["Squishy targets", "Grouped enemies"],
        counteredBy: ["Mobile carries", "Spread formations"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/a00c000fd13db499e4bd43766dc56101.png"
    },
    "Joy": {
        role: "Assassin",
        difficulty: "Medium",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Magic Shoes", "Starlium Scythe", "Genius Wand", "Holy Crystal", "Divine Glaive", "Blood Wings"],
        tips: "Electro marks = dashes. Stack marks with S1, then dash infinitely with S2. Build magic for hybrid scaling.",
        counters: ["Immobile targets", "Squishy mages"],
        counteredBy: ["Hard CC", "Burst damage"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/41ea7c650a26473c193f21e20fd123d6.png"
    },
    "Lancelot": {
        role: "Assassin",
        difficulty: "Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Magic Shoes", "Blade of Heptaseas", "Endless Battle", "Hunter Strike", "Malefic Roar", "Blade of Despair"],
        tips: "S2 gives immunity. Time it to dodge CC/Ults. S1 through minions for surprise burst. Very skill-expressive.",
        counters: ["Squishy backline", "Skillshot reliant"],
        counteredBy: ["Khufra", "Point-click CC", "Tanky comps"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/e20549844522450e535e614538699eb9.png"
    },
    "Saber": {
        role: "Assassin",
        difficulty: "Easy",
        emblem: "Assassin - Rupture",
        spell: "Retribution",
        items: ["Magic Shoes", "Sky Piercer", "Blade of Heptaseas", "Hunter Strike", "Malefic Roar", "Blade of Despair"],
        tips: "One-shot build. Sky Piercer guarantees kills. Point-click Ult is noob-friendly. Target priority = enemy carry.",
        counters: ["All squishies", "Immobile mages"],
        counteredBy: ["Antique Cuirass", "Winter Crown", "Immortality"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/35a5d68d1704e2c4c6323abd4859a622.jpg"
    },

    // ========== MARKSMEN ==========
    "Roger": {
        role: "Marksman/Fighter",
        difficulty: "Medium",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Tough Boots", "Great Dragon Spear", "Endless Battle", "Berserker's Fury", "Malefic Roar", "Blade of Despair"],
        tips: "Human form = range poke. Wolf form = execute low HP. Ult at 40% enemy HP for execute. Top tier jungler.",
        counters: ["Low HP targets", "Squishy teams"],
        counteredBy: ["CC chains", "Burst mages"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_d2f1ce4289d7399177b7f8a25bdf593d.png"
    },
    "Harith": {
        role: "Marksman/Mage",
        difficulty: "Hard",
        emblem: "Mage - Impure Rage",
        spell: "Retribution",
        items: ["Arcane Boots", "Starlium Scythe", "Concentrated Energy", "Holy Crystal", "Divine Glaive", "Blood Wings"],
        tips: "Ult gives infinite dashes. S2 in Ult zone = 0 CD. Position in your Ult circle. Shield steals enemy shields.",
        counters: ["Shield dependent heroes", "Melee comps"],
        counteredBy: ["Long range burst", "CC outside Ult"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_6df4352d8f0d6ce429ad308d323c6206.png"
    },
    "Claude": {
        role: "Marksman",
        difficulty: "Hard",
        emblem: "Marksman - Quantum Charge",
        spell: "Retribution",
        items: ["Swift Boots", "Demon Hunter Sword", "Golden Staff", "Corrosion Scythe", "Windtalker", "Malefic Roar"],
        tips: "DHS + Golden Staff melts tanks. Ult in middle of enemy team. Dexter (S1) swap for repositioning.",
        counters: ["Tanks", "Grouped enemies"],
        counteredBy: ["Burst assassins", "CC chains"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_99318a0a409d80f0f2d4b47ee63b6bda.png"
    },
    "Beatrix": {
        role: "Marksman",
        difficulty: "Hard",
        emblem: "Marksman - Quantum Charge",
        spell: "Flicker",
        items: ["Swift Boots", "Hunter Strike", "Blade of Despair", "Malefic Roar", "Sky Piercer", "Rose Gold Meteor"],
        tips: "Renner (sniper) one-shots with Sky Piercer. Nibiru for teamfights. Bennett for chase. Wesker close range.",
        counters: ["Squishy targets", "Immobile enemies"],
        counteredBy: ["Dive assassins", "Gap closers"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_bc9478f69dafbf6ff27d8e19899637ca.png"
    },
    "Wanwan": {
        role: "Marksman",
        difficulty: "Hard",
        emblem: "Marksman - Quantum Charge",
        spell: "Inspire",
        items: ["Swift Boots", "Corrosion Scythe", "Demon Hunter Sword", "Golden Staff", "Windtalker", "Malefic Roar"],
        tips: "Hit all 4 weakness points to unlock Ult. Ult makes you UNTARGETABLE. S2 purifies CC. High skill ceiling.",
        counters: ["Immobile tanks", "No hard CC"],
        counteredBy: ["Burst before Ult", "Suppression (Franco/Kaja)"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_d744e6f02ba1d9b5f246a5532cc2b201.png"
    },
    "Moskov": {
        role: "Marksman",
        difficulty: "Medium",
        emblem: "Marksman - Quantum Charge",
        spell: "Flicker",
        items: ["Swift Boots", "Berserker's Fury", "Windtalker", "Scarlet Phantom", "Malefic Roar", "Blade of Despair"],
        tips: "S2 stuns if enemy hits wall. Basic attacks pierce through enemies. Ult reveals and slows globally.",
        counters: ["Grouped enemies", "Near walls"],
        counteredBy: ["Dive assassins", "Gap closers"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/2f37c7bb49843330b8b972f11b60da08.png"
    },
    "Layla": {
        role: "Marksman",
        difficulty: "Easy",
        emblem: "Marksman - Quantum Charge",
        spell: "Flicker",
        items: ["Swift Boots", "Windtalker", "Berserker's Fury", "Malefic Gun", "Blade of Despair", "Malefic Roar"],
        tips: "Malefic Gun extends your already insane range. Stay behind your tank. You outdamage everyone late game.",
        counters: ["Short range carries", "Immobile teams"],
        counteredBy: ["Assassins", "Any dive hero"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_a05a03db633cc03ef3f733d2786073c4.jpg"
    },

    // ========== MAGES ==========
    "Zhuxin": {
        role: "Mage",
        difficulty: "Medium",
        emblem: "Mage - Impure Rage",
        spell: "Sprint",
        items: ["Demon Shoes", "Clock of Destiny", "Wishing Lantern", "Ice Queen Wand", "Glowing Wand", "Winter Crown"],
        tips: "Spam S2 to grab enemies. Wishing Lantern burn + Glowing Wand melts tanks. Sprint for kiting.",
        counters: ["Immobile Tanks", "Melee Fighters"],
        counteredBy: ["Ling", "Fanny", "High mobility"],
        img: "https://static.wikia.nocookie.net/mobile-legends/images/0/05/Hero1251-icon.png/revision/latest"
    },
    "Valentina": {
        role: "Mage",
        difficulty: "Hard",
        emblem: "Mage - Impure Rage",
        spell: "Flicker",
        items: ["Arcane Boots", "Clock of Destiny", "Lightning Truncheon", "Holy Crystal", "Divine Glaive", "Blood Wings"],
        tips: "Copy enemy Ults! S1 heals you based on damage. Target enemy with best Ult. You're a counter-pick specialist.",
        counters: ["Strong Ult heroes", "Immobile mages"],
        counteredBy: ["Useless Ult heroes (Zilong)"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/3fcfa9c74ac47800a3e13a5985d76e55.png"
    },
    "Vexana": {
        role: "Mage",
        difficulty: "Medium",
        emblem: "Mage - Impure Rage",
        spell: "Flicker",
        items: ["Demon Shoes", "Clock of Destiny", "Lightning Truncheon", "Holy Crystal", "Divine Glaive", "Winter Crown"],
        tips: "Ult creates a puppet of killed enemy. Kill their carry = your puppet carry. Zoning queen with S1/S2.",
        counters: ["Squishy carries", "Grouped enemies"],
        counteredBy: ["Dive assassins", "High mobility"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/2334082b961a77941bc0f87e598bfabb.png"
    },
    "Novaria": {
        role: "Mage",
        difficulty: "Hard",
        emblem: "Mage - Lethal Ignition",
        spell: "Flicker",
        items: ["Arcane Boots", "Clock of Destiny", "Lightning Truncheon", "Wishing Lantern", "Holy Crystal", "Divine Glaive"],
        tips: "Wishing Lantern % HP damage is insane. Snipe tanks to trigger the burn. S1 reveals through fog.",
        counters: ["High HP tanks", "Vision reliant"],
        counteredBy: ["Lolita", "Fanny", "Gap closers"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/233e528d55a4c6083bd914c2768ac50d.png"
    },
    "Kagura": {
        role: "Mage",
        difficulty: "Very Hard",
        emblem: "Mage - Impure Rage",
        spell: "Flicker",
        items: ["Arcane Boots", "Clock of Destiny", "Lightning Truncheon", "Holy Crystal", "Divine Glaive", "Winter Crown"],
        tips: "Blue Ult = link and pull. Red Ult = burst. Master umbrella positioning. S2 purifies CC! Highest skill cap mage.",
        counters: ["Grouped enemies", "Immobile teams"],
        counteredBy: ["Dive assassins", "Instant burst"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/b7bedaacdacd3de349e538f72fe640c9.png"
    },
    "Nana": {
        role: "Mage/Support",
        difficulty: "Easy",
        emblem: "Mage - Impure Rage",
        spell: "Flicker",
        items: ["Demon Shoes", "Ice Queen Wand", "Glowing Wand", "Holy Crystal", "Divine Glaive", "Winter Crown"],
        tips: "Molina (S2) transforms enemies. Place it in choke points. Passive revives you once! Annoying poke machine.",
        counters: ["Dive assassins", "Single target"],
        counteredBy: ["Long range burst", "AoE damage"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_08d0332be76ff7bdd894f7c7227be56c.png"
    },
    "Eudora": {
        role: "Mage",
        difficulty: "Easy",
        emblem: "Mage - Lethal Ignition",
        spell: "Flicker",
        items: ["Arcane Boots", "Clock of Destiny", "Lightning Truncheon", "Holy Crystal", "Divine Glaive", "Blood Wings"],
        tips: "S2>S3>S1 is the one-shot combo. Target squishy carries. Hide in bush for surprise burst. Simple but effective.",
        counters: ["Squishy targets", "No Athena users"],
        counteredBy: ["Athena's Shield", "Magic resist stacking"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_ed32e3c71ecd41652fc54a7efd02aba4.jpg"
    },

    // ========== SUPPORTS ==========
    "Mathilda": {
        role: "Support/Assassin",
        difficulty: "Medium",
        emblem: "Support - Focusing Mark",
        spell: "Flicker",
        items: ["Rapid Boots", "Fleeting Time", "Dominance Ice", "Athena's Shield", "Antique Cuirass", "Immortality"],
        tips: "Ult attaches to ally for gap close. S1 poke stacks soul. S2 gives ally movement speed. Best aggressive roamer.",
        counters: ["Immobile backline", "Solo targets"],
        counteredBy: ["CC chains", "Grouped enemies"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_74d09f52db9256502ecf2c32211a8102.jpg"
    },
    "Chip": {
        role: "Support/Tank",
        difficulty: "Hard",
        emblem: "Support - Focusing Mark",
        spell: "Flicker",
        items: ["Tough Boots", "Fleeting Time", "Dominance Ice", "Athena's Shield", "Antique Cuirass", "Immortality"],
        tips: "Place portals behind enemies for surprise ganks. S1 stuns. Food heals out of combat. Global map pressure.",
        counters: ["Split pushers", "Slow rotations"],
        counteredBy: ["Area denial (Pharsa/Yve)", "Portal camping"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/2daca928703774862b329074220fe7cd.png"
    },
    "Floryn": {
        role: "Support",
        difficulty: "Easy",
        emblem: "Support - Focusing Mark",
        spell: "Flicker",
        items: ["Demon Shoes", "Fleeting Time", "Dominance Ice", "Athena's Shield", "Oracle", "Immortality"],
        tips: "Give lantern to your carry at game start. Global heal with Ult. S1 poke. Stay behind team and heal.",
        counters: ["Poke comps", "Sustained fights"],
        counteredBy: ["Baxia", "Anti-heal items", "Burst"],
        img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/ddd105d16922b8122368acb0a8f3606f.png"
    },
    "Angela": {
        role: "Support",
        difficulty: "Easy",
        emblem: "Support - Focusing Mark",
        spell: "Flicker",
        items: ["Demon Shoes", "Fleeting Time", "Ice Queen Wand", "Glowing Wand", "Athena's Shield", "Immortality"],
        tips: "Ult attaches to ally GLOBALLY. S1 stacks slow enemies. S2 heals and speeds ally. Babysit your carry.",
        counters: ["Dive targets", "Peel for carry"],
        counteredBy: ["AoE damage", "Killing Angela first"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_feffcc9c39731586e645dbef2ce70afd.png"
    },
    "Diggie": {
        role: "Support",
        difficulty: "Medium",
        emblem: "Support - Focusing Mark",
        spell: "Flicker",
        items: ["Demon Shoes", "Fleeting Time", "Dominance Ice", "Athena's Shield", "Antique Cuirass", "Immortality"],
        tips: "Ult REMOVES all CC from allies. Counter-pick vs CC comps. S2 pulls enemies. Egg form = unkillable scouting.",
        counters: ["CC heavy teams", "Atlas/Tigreal"],
        counteredBy: ["Sustain damage", "Low CC comps"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_84b30de71c6315ecc936a8b4d5076efc.png"
    },
    "Estes": {
        role: "Support",
        difficulty: "Easy",
        emblem: "Support - Focusing Mark",
        spell: "Flicker",
        items: ["Demon Shoes", "Fleeting Time", "Oracle", "Dominance Ice", "Athena's Shield", "Immortality"],
        tips: "Strongest single-target heal. Ult = team-wide heal. Oracle boosts your healing. Stay alive = team stays alive.",
        counters: ["Sustained fights", "Poke comps"],
        counteredBy: ["Baxia", "Sea Halberd", "Burst damage"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_42b2d76fe927ce57a1d29e220e2b5eea.png"
    },

    // ========== BONUS FIGHTERS ==========
    "Esmeralda": {
        role: "Fighter/Mage",
        difficulty: "Medium",
        emblem: "Support - Avarice",
        spell: "Purify",
        items: ["Tough Boots", "Starlium Scythe", "Brute Force Breastplate", "Oracle", "Dominance Ice", "Holy Crystal"],
        tips: "Starlium Scythe gives hybrid lifesteal. You steal enemy shields. Purify to escape CC. Infinite sustain.",
        counters: ["Shield heroes", "Low burst"],
        counteredBy: ["Dyrroth", "Karrie", "True damage"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_b691012cb168b31b172da8b62552e746.png"
    },
    "Clint": {
        role: "Marksman",
        difficulty: "Medium",
        emblem: "Assassin - Killing Spree",
        spell: "Flicker",
        items: ["Tough Boots", "Endless Battle", "Thunder Belt", "Malefic Roar", "Blade of Despair", "Sky Piercer"],
        tips: "Passive empowers next basic attack after skill. Weave skills between autos. Thunder Belt = true damage procs.",
        counters: ["Squishy targets", "Medium range"],
        counteredBy: ["Dive assassins", "Long range mages"],
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_3d40bca69a0e8ef0ac5f0bc49d49f7f0.png"
    }
}
