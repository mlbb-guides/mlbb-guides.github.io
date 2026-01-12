const fs = require('fs');
const path = require('path');

const HEROES_DATA = {
    tanks: [
        { name: "Tigreal", tier: "S", winRate: 54.2, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_23a7a603ff9d20074777d52e2eb202f3.jpg", color: "#3a86ff" },
        { name: "Minotaur", tier: "S", winRate: 53.8, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/1ec5d92a9e0981838a6b362cd21cbdb0.jpg", color: "#e63946" },
        { name: "Khufra", tier: "A", winRate: 52.1, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_398cd0a73db63a4b098ab28de5953a0d.png", color: "#7209b7" },
        { name: "Atlas", tier: "A", winRate: 51.5, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_a2f68d5c30c0198006b2c85b7a5cb48b.png", color: "#4361ee" },
        { name: "Franco", tier: "A", winRate: 50.8, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_07605801972ede9147e9769ac7991aa0.png", color: "#8338ec" },
        { name: "Gloo", tier: "A", winRate: 52.5, img: "https://wsrv.nl/?url=akmweb.youngjoygame.com/web/madmin/image/14a44f871e2d9e0aaf35149e6201fb8a.png", color: "#7209b7" },
        { name: "Hylos", tier: "S", winRate: 55.4, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_f3ddb1088279d711417234034024223d.png", color: "#06d6a0" },
        { name: "Johnson", tier: "A", winRate: 51.8, color: "#4361ee" },
        { name: "Gatotkaca", tier: "S", winRate: 53.5, color: "#dc2626" },
        { name: "Belerick", tier: "A", winRate: 52.0, color: "#15803d" },
        { name: "Uranus", tier: "S", winRate: 54.5, color: "#0891b2" },
        { name: "Baxia", tier: "S", winRate: 53.2, color: "#059669" },
        { name: "Lolita", tier: "A", winRate: 51.5, color: "#ec4899" },
        { name: "Akai", tier: "A", winRate: 51.2, color: "#f97316" }
    ],
    fighters: [
        { name: "Suyou", tier: "S+", winRate: 58.2, color: "#ef233c" },
        { name: "Cici", tier: "S", winRate: 54.5, color: "#fb8500" },
        { name: "Arlott", tier: "S", winRate: 53.1, color: "#d90429" },
        { name: "Yu Zhong", tier: "A", winRate: 51.9, color: "#ffd60a" },
        { name: "Paquito", tier: "A", winRate: 51.5, color: "#e63946" },
        { name: "Terizla", tier: "S", winRate: 53.8, color: "#00b4d8" },
        { name: "Chou", tier: "A", winRate: 50.4, color: "#ff6b35" },
        { name: "Esmeralda", tier: "A", winRate: 52.5, color: "#7c3aed" },
        { name: "Guinevere", tier: "A", winRate: 51.5, color: "#eab308" },
        { name: "Aldous", tier: "A", winRate: 52.0, color: "#dc2626" },
        { name: "Ruby", tier: "A", winRate: 52.3, color: "#be185d" },
        { name: "X.Borg", tier: "A", winRate: 51.8, color: "#f97316" },
        { name: "Lapu-Lapu", tier: "S", winRate: 53.5, color: "#0ea5e9" },
        { name: "Jawhead", tier: "S", winRate: 53.0, color: "#3b82f6" }
    ],
    assassins: [
        { name: "Ling", tier: "S", winRate: 55.2, color: "#9d4edd" },
        { name: "Hayabusa", tier: "S", winRate: 54.7, color: "#e63946" },
        { name: "Fanny", tier: "S", winRate: 53.5, color: "#4cc9f0" },
        { name: "Nolan", tier: "A", winRate: 52.3, color: "#3a0ca3" },
        { name: "Joy", tier: "A", winRate: 51.8, color: "#ffbe0b" },
        { name: "Lancelot", tier: "B", winRate: 49.5, color: "#480ca8" },
        { name: "Saber", tier: "A", winRate: 51.2, color: "#0077b6" },
        { name: "Gusion", tier: "S", winRate: 53.5, color: "#6366f1" },
        { name: "Karina", tier: "A", winRate: 52.0, color: "#8b5cf6" },
        { name: "Selena", tier: "S", winRate: 53.2, color: "#6d28d9" },
        { name: "Benedetta", tier: "S", winRate: 54.0, color: "#be185d" },
        { name: "Natalia", tier: "A", winRate: 50.8, color: "#0f172a" }
    ],
    marksmen: [
        { name: "Roger", tier: "S", winRate: 55.8, color: "#7209b7" },
        { name: "Harith", tier: "S", winRate: 54.5, color: "#4361ee" },
        { name: "Claude", tier: "S", winRate: 53.2, color: "#fb8500" },
        { name: "Beatrix", tier: "A", winRate: 52.8, color: "#00b4d8" },
        { name: "Wanwan", tier: "A", winRate: 51.5, color: "#fb8500" },
        { name: "Moskov", tier: "S", winRate: 53.5, color: "#7209b7" },
        { name: "Layla", tier: "B", winRate: 50.2, color: "#f72585" },
        { name: "Miya", tier: "A", winRate: 51.5, color: "#06d6a0" },
        { name: "Bruno", tier: "A", winRate: 52.0, color: "#f59e0b" },
        { name: "Karrie", tier: "A", winRate: 51.8, color: "#8b5cf6" },
        { name: "Lesley", tier: "A", winRate: 51.5, color: "#ec4899" },
        { name: "Granger", tier: "A", winRate: 52.5, color: "#1e293b" },
        { name: "Natan", tier: "S", winRate: 54.0, color: "#6366f1" },
        { name: "Yi Sun-shin", tier: "S", winRate: 54.5, color: "#1e40af" }
    ],
    mages: [
        { name: "Zhuxin", tier: "S+", winRate: 56.5, color: "#7209b7" },
        { name: "Valentina", tier: "S", winRate: 54.2, color: "#ff006e" },
        { name: "Vexana", tier: "S", winRate: 53.8, color: "#38b000" },
        { name: "Novaria", tier: "S", winRate: 53.1, color: "#4cc9f0" },
        { name: "Kagura", tier: "A", winRate: 51.5, color: "#06d6a0" },
        { name: "Nana", tier: "A", winRate: 52.5, color: "#ffd60a" },
        { name: "Eudora", tier: "B", winRate: 50.1, color: "#0077b6" },
        { name: "Pharsa", tier: "S", winRate: 53.5, color: "#1e3a8a" },
        { name: "Yve", tier: "S", winRate: 54.0, color: "#0e7490" },
        { name: "Lunox", tier: "A", winRate: 51.5, color: "#c026d3" },
        { name: "Lylia", tier: "A", winRate: 52.0, color: "#7c3aed" },
        { name: "Vale", tier: "A", winRate: 51.8, color: "#0ea5e9" },
        { name: "Alice", tier: "S", winRate: 53.0, color: "#dc2626" },
        { name: "Cecilion", tier: "A", winRate: 52.5, color: "#4c1d95" },
        { name: "Luo Yi", tier: "S", winRate: 53.2, color: "#ec4899" }
    ],
    supports: [
        { name: "Mathilda", tier: "S", winRate: 55.4, color: "#00b4d8" },
        { name: "Chip", tier: "S", winRate: 54.8, color: "#d90429" },
        { name: "Floryn", tier: "S", winRate: 53.2, color: "#38b000" },
        { name: "Angela", tier: "A", winRate: 52.5, color: "#ffd60a" },
        { name: "Diggie", tier: "S", winRate: 54.1, color: "#fb8500" },
        { name: "Estes", tier: "A", winRate: 51.0, color: "#70e000" },
        { name: "Rafaela", tier: "A", winRate: 52.0, color: "#f0abfc" },
        { name: "Kaja", tier: "A", winRate: 51.5, color: "#fbbf24" },
        { name: "Faramis", tier: "A", winRate: 52.5, color: "#16a34a" }
    ]
};

const BUILDS_DATA = {
    "Tigreal": {
        role: "Tank",
        difficulty: "Easy",
        emblem: "Tank - Concussive Blast",
        spell: "Flicker",
        items: ["Tough Boots", "Dominance Ice", "Athena's Shield", "Antique Cuirass", "Immortality", "Radiant Armor"],
        tips: "Wait for enemies to group. Flicker + Ult + S2 push is a game winning combo. Always check bushes with S1.",
        counters: ["Grouped enemies", "Immobile carries"],
        counteredBy: ["Valir", "Diggie", "Wanwan"],
        lore: "Tigreal is the Captain of the Light's Order, a legendary warrior who has defended the Moniyan Empire for decades. His unwavering loyalty and powerful defensive abilities make him a cornerstone of any team composition.",
        skills: {
            passive: "Fearless - Tigreal gains a stack of blessing when hit by basic attacks. At 4 stacks, he becomes immune to the next basic attack.",
            skill1: "Attack Wave - Tigreal slashes forward, dealing damage and slowing enemies.",
            skill2: "Sacred Hammer - Tigreal charges forward and pushes enemies back.",
            ultimate: "Implosion - Tigreal pulls all nearby enemies toward him and stuns them."
        },
        gameplay: "Tigreal excels at initiating team fights. Position yourself in bushes near objectives and wait for the enemy team to group. The classic combo is Flicker + Ultimate + Skill 2 to pull enemies into your team while pushing them further back. In lane, use Skill 1 to poke and check bushes safely. Always communicate with your team before engaging, as Tigreal's success depends on follow-up damage."
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
        lore: "Hylos is the Grand Warden of the centaur race, blessed with immense HP and the ability to channel the power of nature. His ring of punishment burns all enemies who dare stand near him.",
        skills: {
            passive: "Thickened Blood - Hylos converts mana into HP, making mana items incredibly valuable.",
            skill1: "Law and Order - Hylos launches a ring that deals damage and stuns the first enemy hit.",
            skill2: "Ring of Punishment - Toggle skill that drains Hylos's mana to deal continuous damage and slow nearby enemies.",
            ultimate: "Glorious Pathway - Creates a path that heals Hylos and allies while slowing enemies who walk on it."
        },
        gameplay: "Hylos is deceptively tanky due to his passive converting mana to HP. Build Clock of Destiny early for massive HP scaling. Keep Ring of Punishment active during team fights to apply continuous pressure and slow. Use your ultimate to engage or disengage - the path heals your team while hindering enemies. Thunder Belt synergizes perfectly with your kit, adding true damage to your already oppressive presence."
    },
    "Ling": {
        role: "Assassin",
        difficulty: "Very Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Tough Boots", "Berserker's Fury", "Endless Battle", "Great Dragon Spear", "Malefic Roar", "Blade of Despair"],
        tips: "Use walls to regen energy. S1>S2 combo for crits. Great Dragon Spear reduces Ult CD. Untargetable during Ult.",
        counters: ["Immobile backline", "Squishy mages"],
        counteredBy: ["Khufra", "Minsitthar", "CC chains"],
        lore: "Ling is the Cyan Finch of the Oriental Fighters, a legendary swordsman who can traverse walls with supernatural agility. His blade dances leave enemies unable to react before they fall.",
        skills: {
            passive: "Cloud Walker - Ling can jump onto walls and regenerate energy while on them. Crit rate is converted to crit damage.",
            skill1: "Finch Poise - Ling dashes and deals crit damage. On walls, he can dash further.",
            skill2: "Defiant Sword - Ling thrusts forward, dealing damage and slowing enemies.",
            ultimate: "Tempest of Blades - Ling becomes untargetable and drops 4 swords, dealing burst damage in an area."
        },
        gameplay: "Ling requires excellent map awareness and energy management. Always return to walls to regenerate energy before engaging. Farm efficiently in the early game to hit your power spike. In team fights, wait for CC abilities to be used before dropping from walls. Your ultimate makes you untargetable - use it to dodge crucial enemy skills. The S1>S2 combo with a basic attack weave maximizes your burst damage."
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
        lore: "Hayabusa is the shadow of the Scarlet Shadow ninja clan, trained from birth in the deadly arts of assassination. His shadow techniques allow him to be in multiple places at once.",
        skills: {
            passive: "Ninjutsu: Shadow Heal - Dealing damage heals Hayabusa. More effective when skills hit the same target.",
            skill1: "Phantom Shuriken - Throws shurikens that deal damage and slow. Hitting the same target returns energy.",
            skill2: "Quad Shadow - Creates shadows that Hayabusa can teleport between.",
            ultimate: "Ougi: Shadow Kill - Hayabusa dashes around a single target, dealing massive damage. Damage is split between targets."
        },
        gameplay: "Hayabusa is the king of isolated picks. Always look for enemies farming alone or split from their team. Your ultimate deals FULL damage to a single target but is split when multiple enemies are present. Use S2 to create an escape shadow before engaging. The Sky Piercer execute passive guarantees kills on low HP targets. Master the S1>S2>Ult>S2 (teleport back) combo for safe assassinations."
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
        lore: "Chou is the Kung Fu Boy, a street fighter who mastered the arts of Asian martial arts. His kicks are legendary, capable of displacing even the mightiest foes.",
        skills: {
            passive: "Only Fast - After moving a certain distance, Chou's next basic attack deals extra damage and slows.",
            skill1: "Jeet Kune Do - Chou punches 3 times, with the third punch knocking enemies airborne.",
            skill2: "Shunpo - Chou dashes forward, becoming immune to CC during the dash.",
            ultimate: "The Way of the Dragon - Chou kicks an enemy, knocking them back. Recasting performs a flying kick."
        },
        gameplay: "Tank Chou is currently meta because of his pick potential and survivability. The Flicker-Kick combo is game-changing: use Ultimate first kick, then Flicker behind the enemy, and use the second kick to send them flying into your team. Thunder Belt adds true damage to your already disruptive kit. In lane, use S1's third hit airborne to interrupt enemy skills. S2 immunity is crucial for dodging CC."
    },
    "Suyou": {
        role: "Fighter/Assassin",
        difficulty: "Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Tough Boots", "Sky Piercer", "Blade of Heptaseas", "Hunter Strike", "Malefic Roar", "Blade of Despair"],
        tips: "New S-Tier Jungler. Tap S1 to chase, Hold S1 to stun. Sky Piercer executes low HP enemies. Mask form = burst.",
        counters: ["Squishy backline", "Immobile mages"],
        counteredBy: ["Phoveus", "Khufra", "Heavy CC"],
        lore: "Suyou is the newest addition to the Land of Dawn, a warrior who wields a mystical mask that grants him dual personalities - one for pursuit, one for execution.",
        skills: {
            passive: "Dual Form - Suyou switches between two forms based on his actions, each enhancing different abilities.",
            skill1: "Swift Strike - Tap to dash forward, Hold to charge and stun enemies.",
            skill2: "Blade Dance - Suyou spins his blade, dealing damage in an area.",
            ultimate: "Mask Awakening - Transforms into mask form, gaining enhanced stats and abilities."
        },
        gameplay: "Suyou has the highest win rate among junglers in Season 35. Master the S1 tap vs hold mechanic - tap for chasing, hold for stunning priority targets. His mask form provides massive burst damage. Sky Piercer synergizes perfectly with his execution playstyle. Focus on farming early, then look for picks on isolated enemies. In team fights, wait for CC to be used before diving the backline."
    },
    "Zhuxin": {
        role: "Mage",
        difficulty: "Medium",
        emblem: "Mage - Impure Rage",
        spell: "Sprint",
        items: ["Demon Shoes", "Clock of Destiny", "Wishing Lantern", "Ice Queen Wand", "Glowing Wand", "Winter Crown"],
        tips: "Spam S2 to grab enemies. Wishing Lantern burn + Glowing Wand melts tanks. Sprint for kiting.",
        counters: ["Immobile Tanks", "Melee Fighters"],
        counteredBy: ["Ling", "Fanny", "High mobility"],
        lore: "Zhuxin is a powerful mage from the Eastern lands, wielding ancient magic that allows her to grab and control enemies from a distance.",
        skills: {
            passive: "Soul Link - Zhuxin's abilities mark enemies, dealing bonus damage on subsequent hits.",
            skill1: "Spirit Bomb - Zhuxin launches a projectile that explodes on contact.",
            skill2: "Soul Grab - Zhuxin extends her magic to grab and pull enemies toward her.",
            ultimate: "Spiritual Awakening - Zhuxin unleashes a massive wave of energy, dealing continuous damage."
        },
        gameplay: "Zhuxin dominates the current meta with her oppressive control and damage. Spam S2 to grab enemies out of position - this is your primary tool for picks. Build Wishing Lantern for the HP% burn which melts tanks, combined with Glowing Wand for even more burn damage. Use Sprint to kite melee heroes who try to dive you. Position safely in team fights and control the battlefield with your long-range abilities."
    },
    "Roger": {
        role: "Marksman/Fighter",
        difficulty: "Medium",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Tough Boots", "Great Dragon Spear", "Endless Battle", "Berserker's Fury", "Malefic Roar", "Blade of Despair"],
        tips: "Human form = range poke. Wolf form = execute low HP. Ult at 40% enemy HP for execute. Top tier jungler.",
        counters: ["Low HP targets", "Squishy teams"],
        counteredBy: ["CC chains", "Burst mages"],
        lore: "Roger is the Dire Wolf Hunter who was bitten by a werewolf and gained the ability to transform between human and wolf form at will.",
        skills: {
            passive: "Full Moon Curse - Roger deals bonus damage to enemies below 40% HP in both forms.",
            skill1: "Human: Open Fire - Shoots and slows. Wolf: Lycan Pounce - Dashes and damages.",
            skill2: "Human: Hunter's Steps - Gains attack speed. Wolf: Bloodthirsty Howl - Gains attack speed and lifesteal.",
            ultimate: "Wolf Transformation - Transforms between human and wolf form, dealing damage in the process."
        },
        gameplay: "Roger is currently the best jungler in the game. In human form, poke enemies and slow them with S1 while gaining attack speed from S2. When enemies drop below 40% HP, transform into wolf form to execute them with enhanced damage. The transformation itself deals damage, so use it as part of your burst combo. Great Dragon Spear reduces your ultimate cooldown, allowing more frequent transformations."
    },
    "Mathilda": {
        role: "Support/Assassin",
        difficulty: "Medium",
        emblem: "Support - Focusing Mark",
        spell: "Flicker",
        items: ["Rapid Boots", "Fleeting Time", "Dominance Ice", "Athena's Shield", "Antique Cuirass", "Immortality"],
        tips: "Ult attaches to ally for gap close. S1 poke stacks soul. S2 gives ally movement speed. Best aggressive roamer.",
        counters: ["Immobile backline", "Solo targets"],
        counteredBy: ["CC chains", "Grouped enemies"],
        lore: "Mathilda is the Swift Plume, a guardian angel who protects her allies with incredible speed and the power of wind.",
        skills: {
            passive: "Ancestral Guidance - Moving charges Mathilda's Soul. At full charge, her next basic attack deals bonus damage.",
            skill1: "Soul Bloom - Releases wisps that circle around Mathilda, damaging nearby enemies.",
            skill2: "Guiding Wind - Blesses an ally with a movement speed boost and shield.",
            ultimate: "Circling Eagle - Mathilda attaches to an ally, then dashes to a target location dealing damage."
        },
        gameplay: "Mathilda is the most aggressive roamer in the current meta. Constantly roam between lanes to apply pressure. Use S1 while moving to stack soul and poke enemies. S2 on your carry helps them chase or escape. Your ultimate is incredibly versatile - attach to your fighter or assassin to dive the backline together. Fleeting Time reduces your ult cooldown on kills, enabling back-to-back engages."
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
        lore: "Beatrix is the Gun Maniac, a weapons expert who carries four different firearms into battle, each suited for different situations.",
        skills: {
            passive: "Mechanical Genius - Beatrix carries 4 weapons with unique abilities. Switch weapons to adapt to situations.",
            skill1: "Varies by weapon - Each weapon has a unique primary fire.",
            skill2: "Varies by weapon - Each weapon has a unique secondary ability.",
            ultimate: "Varies by weapon - Each weapon has a unique ultimate."
        },
        gameplay: "Beatrix requires knowledge of all four weapons. Renner (sniper) for long-range picks - one-shot squishies with Sky Piercer. Nibiru (SMGs) for team fight DPS. Bennett (shotgun) for close-range burst. Wesker (grenade launcher) for area denial. In most situations, start with Renner for picks, switch to Nibiru for sustained fights. Always position safely as Beatrix has no escape."
    }
};

const ROLE_ICONS = {
    "Tank": "🛡️",
    "Fighter": "⚔️",
    "Fighter/Roam": "⚔️",
    "Fighter/Assassin": "⚔️",
    "Fighter/Mage": "⚔️",
    "Fighter/Tank": "⚔️",
    "Assassin": "🗡️",
    "Assassin/Support": "🗡️",
    "Marksman": "🏹",
    "Marksman/Fighter": "🏹",
    "Marksman/Mage": "🏹",
    "Mage": "🔮",
    "Mage/Tank": "🔮",
    "Mage/Support": "🔮",
    "Support": "💚",
    "Support/Assassin": "💚",
    "Support/Tank": "💚",
    "Support/Fighter": "💚"
};

function slugify(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function generateHeroPage(hero, roleId, build) {
    const slug = slugify(hero.name);
    const tierClass = hero.tier.toLowerCase().replace('+', '-plus');
    const roleIcon = ROLE_ICONS[build?.role] || ROLE_ICONS[roleId.charAt(0).toUpperCase() + roleId.slice(1, -1)] || "🦸";
    const roleName = build?.role || roleId.charAt(0).toUpperCase() + roleId.slice(1, -1);
    
    const defaultBuild = build || {
        role: roleName,
        difficulty: "Medium",
        emblem: "Standard Emblem",
        spell: "Flicker",
        items: ["Tough Boots", "War Axe", "Brute Force Breastplate", "Oracle", "Dominance Ice", "Immortality"],
        tips: `Master ${hero.name}'s abilities to maximize your impact in team fights. Focus on positioning and timing.`,
        counters: ["Squishy targets", "Immobile enemies"],
        counteredBy: ["Heavy CC", "Burst damage"],
        lore: `${hero.name} is a powerful ${roleName} in Mobile Legends: Bang Bang, known for their unique abilities and impact on the battlefield.`,
        skills: {
            passive: "Unique passive ability that enhances combat effectiveness.",
            skill1: "Primary damage or utility ability.",
            skill2: "Secondary ability for damage or crowd control.",
            ultimate: "Powerful ultimate ability that can turn team fights."
        },
        gameplay: `${hero.name} excels in ${roleName.toLowerCase()} situations. Focus on positioning correctly in team fights and using abilities at the right moment. Coordinate with your team and communicate before engaging. Practice combos in custom games to improve execution.`
    };

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>${hero.name} Build Guide Season 35 - Best Items, Emblem & Tips | MLBB Pro</title>
    <meta name="description" content="Complete ${hero.name} guide for MLBB Season 35. Best build, emblem setup, counters, and pro tips. ${hero.tier} tier with ${hero.winRate}% win rate.">
    <meta name="keywords" content="${hero.name} build, ${hero.name} guide, ${hero.name} MLBB, ${hero.name} Mobile Legends, ${hero.name} emblem, ${hero.name} counter, best ${hero.name} build 2025">
    <link rel="canonical" href="https://mlbb-guides.github.io/hero/${slug}.html">
    
    <meta property="og:title" content="${hero.name} Build Guide - MLBB Pro">
    <meta property="og:description" content="Complete ${hero.name} guide with best build, emblem, and counters. ${hero.tier} tier.">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://mlbb-guides.github.io/hero/${slug}.html">
    <meta property="og:image" content="https://mlbb-guides.github.io/images/og-banner.png">
    
    <meta name="theme-color" content="${hero.color || '#6366f1'}">
    <link rel="icon" type="image/png" href="/avatar.png">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles.css">
    
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6564476231402717" crossorigin="anonymous"></script>
    
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "${hero.name} Build Guide - Mobile Legends Season 35",
        "description": "Complete ${hero.name} guide with best build, emblem setup, counters and pro tips",
        "author": {"@type": "Organization", "name": "MLBB Pro Guides"},
        "publisher": {"@type": "Organization", "name": "MLBB Pro Guides"},
        "datePublished": "2025-01-12",
        "dateModified": "2025-01-12"
    }
    </script>
</head>
<body>
    <div class="bg-animation">
        <div class="bg-gradient"></div>
    </div>
    
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="../index.html" class="logo"><span>⚔️</span><span class="logo-text">MLBB<span class="accent">PRO</span></span></a>
            <ul class="nav-menu">
                <li><a href="../index.html" class="nav-link">Home</a></li>
                <li><a href="../tier-list.html" class="nav-link">Tier List</a></li>
                <li><a href="../heroes.html" class="nav-link">Heroes</a></li>
                <li><a href="../blog.html" class="nav-link">Guides</a></li>
            </ul>
            <a href="../about.html" class="btn btn-glow">📧 Contact</a>
        </div>
    </nav>

    <main class="container" style="padding-top: 120px; padding-bottom: 60px;">
        <nav style="margin-bottom: 24px; font-size: 0.9rem; color: var(--text-muted);">
            <a href="../index.html" style="color: var(--primary);">Home</a> / 
            <a href="../heroes.html" style="color: var(--primary);">Heroes</a> / 
            <span>${hero.name}</span>
        </nav>

        <header style="display: flex; gap: 24px; align-items: flex-start; margin-bottom: 40px; flex-wrap: wrap;">
            <div style="width: 120px; height: 120px; background: linear-gradient(135deg, ${hero.color || '#6366f1'}44, ${hero.color || '#6366f1'}11); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 4rem;">
                ${roleIcon}
            </div>
            <div style="flex: 1; min-width: 280px;">
                <h1 style="font-family: 'Orbitron', sans-serif; font-size: clamp(2rem, 5vw, 3rem); margin-bottom: 12px;">${hero.name}</h1>
                <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 16px;">
                    <span style="background: rgba(255,255,255,0.1); padding: 6px 14px; border-radius: 20px; font-size: 0.9rem;">${roleIcon} ${defaultBuild.role}</span>
                    <span class="tier ${tierClass}" style="padding: 6px 14px;">${hero.tier} Tier</span>
                    <span style="background: rgba(34,197,94,0.2); color: #22c55e; padding: 6px 14px; border-radius: 20px; font-size: 0.9rem;">📊 ${hero.winRate}% Win Rate</span>
                    <span style="background: rgba(255,255,255,0.1); padding: 6px 14px; border-radius: 20px; font-size: 0.9rem;">⭐ ${defaultBuild.difficulty}</span>
                </div>
                <p style="color: var(--text-muted); line-height: 1.6;">${defaultBuild.lore}</p>
            </div>
        </header>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
            
            <section style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 24px;">
                <h2 style="font-size: 1.3rem; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">🛠️ Best Build</h2>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    ${defaultBuild.items.map((item, i) => `
                    <div style="display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.05); padding: 12px; border-radius: 10px;">
                        <span style="background: var(--primary); color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold;">${i + 1}</span>
                        <span style="font-weight: 500;">${item}</span>
                    </div>`).join('')}
                </div>
            </section>

            <section style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 24px;">
                <h2 style="font-size: 1.3rem; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">⚙️ Setup</h2>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 10px;">
                        <div style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 4px;">Emblem</div>
                        <div style="font-weight: 600;">${defaultBuild.emblem}</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 10px;">
                        <div style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 4px;">Battle Spell</div>
                        <div style="font-weight: 600;">${defaultBuild.spell}</div>
                    </div>
                </div>
            </section>

            <section style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 24px;">
                <h2 style="font-size: 1.3rem; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">✅ Strong Against</h2>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${defaultBuild.counters.map(c => `<span style="background: rgba(34,197,94,0.15); color: #22c55e; padding: 8px 14px; border-radius: 20px; font-size: 0.9rem;">${c}</span>`).join('')}
                </div>
            </section>

            <section style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 24px;">
                <h2 style="font-size: 1.3rem; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">❌ Weak Against</h2>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${defaultBuild.counteredBy.map(c => `<span style="background: rgba(239,68,68,0.15); color: #ef4444; padding: 8px 14px; border-radius: 20px; font-size: 0.9rem;">${c}</span>`).join('')}
                </div>
            </section>
        </div>

        <section style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 24px; margin-top: 24px;">
            <h2 style="font-size: 1.3rem; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">⚡ Skills Overview</h2>
            <div style="display: grid; gap: 16px;">
                <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 10px;">
                    <div style="color: var(--primary); font-weight: 600; margin-bottom: 6px;">Passive</div>
                    <p style="color: var(--text-muted); line-height: 1.6;">${defaultBuild.skills.passive}</p>
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 10px;">
                    <div style="color: #22c55e; font-weight: 600; margin-bottom: 6px;">Skill 1</div>
                    <p style="color: var(--text-muted); line-height: 1.6;">${defaultBuild.skills.skill1}</p>
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 10px;">
                    <div style="color: #f59e0b; font-weight: 600; margin-bottom: 6px;">Skill 2</div>
                    <p style="color: var(--text-muted); line-height: 1.6;">${defaultBuild.skills.skill2}</p>
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 10px;">
                    <div style="color: #ef4444; font-weight: 600; margin-bottom: 6px;">Ultimate</div>
                    <p style="color: var(--text-muted); line-height: 1.6;">${defaultBuild.skills.ultimate}</p>
                </div>
            </div>
        </section>

        <section style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 24px; margin-top: 24px;">
            <h2 style="font-size: 1.3rem; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">💡 Pro Tips & Gameplay Guide</h2>
            <p style="color: var(--text-muted); line-height: 1.8; font-size: 1.05rem;">${defaultBuild.gameplay}</p>
            <div style="margin-top: 20px; padding: 16px; background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05)); border-radius: 10px; border-left: 4px solid var(--primary);">
                <strong style="color: var(--primary);">Quick Tip:</strong>
                <span style="color: var(--text-muted);"> ${defaultBuild.tips}</span>
            </div>
        </section>

        <div style="text-align: center; margin-top: 40px;">
            <a href="../heroes.html" class="btn btn-secondary" style="margin-right: 10px;">← All Heroes</a>
            <a href="../tier-list.html" class="btn btn-primary">📊 Tier List</a>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand"><span>⚔️</span> MLBB<span class="accent">PRO</span>
                    <p>Made with ❤️ in the Philippines</p>
                </div>
                <div class="footer-links">
                    <a href="../tier-list.html">Tier List</a>
                    <a href="../heroes.html">Heroes</a>
                    <a href="../blog.html">Guides</a>
                    <a href="../about.html">About</a>
                </div>
            </div>
            <p class="copyright">© 2025 MLBB Pro Guides. Not affiliated with Moonton.</p>
        </div>
    </footer>
    
    <script src="../script.js"></script>
</body>
</html>`;
}

let generatedCount = 0;
const heroDir = path.join(__dirname, 'hero');

Object.entries(HEROES_DATA).forEach(([roleId, heroes]) => {
    heroes.forEach(hero => {
        const slug = slugify(hero.name);
        const build = BUILDS_DATA[hero.name];
        const html = generateHeroPage(hero, roleId, build);
        const filePath = path.join(heroDir, `${slug}.html`);
        fs.writeFileSync(filePath, html);
        generatedCount++;
        console.log(`Generated: hero/${slug}.html`);
    });
});

console.log(`\n✅ Generated ${generatedCount} hero pages!`);
