// ===== Main Application Script =====

document.addEventListener('DOMContentLoaded', () => {
    initMetaGrid();
    initNavbar();
    initAnimations();
});

// Render Meta Heroes Grid on Homepage
function initMetaGrid() {
    const grid = document.getElementById('metaGrid');
    if (!grid) return;

    ROLES.forEach(role => {
        const heroes = HEROES_DATA[role.id].slice(0, 3);
        const card = document.createElement('div');
        card.className = 'role-card';
        card.innerHTML = `
            <div class="role-header" style="background: linear-gradient(135deg, ${role.color}33, ${role.color}11);">
                <span class="icon">${role.icon}</span>
                <h3>${role.name}</h3>
            </div>
            <div class="hero-list">
                ${heroes.map(h => `
                    <div class="hero-item" onclick="location.href='builds.html?hero=${encodeURIComponent(h.name)}'">
                        <img src="${h.img}" alt="${h.name}" class="hero-avatar-img" onerror="this.style.display='none'">
                        <div class="hero-info">
                            <span class="hero-name">${h.name}</span>
                            <span class="tier ${h.tier.toLowerCase()}">${h.tier} Tier</span>
                        </div>
                        <span class="winrate ${h.winRate < 50 ? 'low' : ''}">${h.winRate}%</span>
                    </div>
                `).join('')}
            </div>
            <a href="tier-list.html#${role.id}" class="view-all">View All ${role.name}s →</a>
        `;
        grid.appendChild(card);
    });
}

// Render Tier List
function initTierList() {
    const container = document.getElementById('tierListContainer');
    if (!container) return;

    const tiers = { S: [], A: [], B: [], C: [] };

    Object.values(HEROES_DATA).flat().forEach(hero => {
        if (tiers[hero.tier]) {
            tiers[hero.tier].push(hero);
        }
    });

    Object.entries(tiers).forEach(([tier, heroes]) => {
        if (heroes.length === 0) return;

        const row = document.createElement('div');
        row.className = 'tier-row';
        row.innerHTML = `
            <div class="tier-label ${tier.toLowerCase()}">${tier}</div>
            <div class="tier-heroes">
                ${heroes.map(h => `
                    <div class="tier-hero" onclick="location.href='builds.html?hero=${encodeURIComponent(h.name)}'">
                        <img src="${h.img}" alt="${h.name}" class="tier-hero-img" onerror="this.outerHTML='<span class=avatar>🦸</span>'">
                        <span>${h.name}</span>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(row);
    });
}

// Render Heroes Grid
function initHeroesGrid(filterRole = 'all') {
    const grid = document.getElementById('heroesGrid');
    if (!grid) return;

    grid.innerHTML = '';

    let heroesToShow = [];
    if (filterRole === 'all') {
        heroesToShow = Object.entries(HEROES_DATA).flatMap(([role, heroes]) =>
            heroes.map(h => ({ ...h, roleId: role }))
        );
    } else {
        heroesToShow = HEROES_DATA[filterRole]?.map(h => ({ ...h, roleId: filterRole })) || [];
    }

    heroesToShow.forEach(hero => {
        const role = ROLES.find(r => r.id === hero.roleId);
        const card = document.createElement('div');
        card.className = 'hero-card';
        card.onclick = () => location.href = `builds.html?hero=${encodeURIComponent(hero.name)}`;
        card.innerHTML = `
            <div class="hero-card-img-wrapper">
                <img src="${hero.img}" alt="${hero.name}" class="hero-card-img" onerror="this.outerHTML='<div class=hero-card-placeholder>🦸</div>'">
            </div>
            <h3>${hero.name}</h3>
            <div class="role">${role?.icon || ''} ${role?.name || ''}</div>
            <span class="tier ${hero.tier.toLowerCase()}">${hero.tier} Tier</span>
            <div class="winrate ${hero.winRate < 50 ? 'low' : ''}">${hero.winRate}% WR</div>
        `;
        grid.appendChild(card);
    });
}

// Render Build Page
function initBuildPage() {
    const container = document.getElementById('buildContainer');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const heroName = params.get('hero');

    if (!heroName) {
        container.innerHTML = '<p>Select a hero from the Heroes page to view their build.</p>';
        return;
    }

    let heroData = null;
    Object.entries(HEROES_DATA).forEach(([roleId, heroes]) => {
        heroes.forEach(h => {
            if (h.name === heroName) heroData = { ...h, roleId };
        });
    });

    const build = BUILDS_DATA[heroName];
    const role = heroData ? ROLES.find(r => r.id === heroData.roleId) : null;

    // Get item icon
    const getItemIcon = (itemName) => {
        return ITEMS && ITEMS[itemName] ? ITEMS[itemName].icon : '📦';
    };

    container.innerHTML = `
        <div class="patch-badge" style="text-align:center;margin-bottom:20px;padding:10px;background:rgba(99,102,241,0.1);border-radius:8px;color:var(--text-muted);font-size:0.9rem;">
            📅 Updated: ${typeof LAST_UPDATED !== 'undefined' ? LAST_UPDATED : 'December 2024'} | Patch ${typeof PATCH_VERSION !== 'undefined' ? PATCH_VERSION : '1.8.44'}
        </div>
        <div class="build-header">
            <div class="build-hero-img-wrapper">
                <img src="${heroData?.img || build?.img || ''}" alt="${heroName}" class="build-hero-img" onerror="this.outerHTML='<div class=build-hero-placeholder>🦸</div>'">
            </div>
            <div class="build-hero-info">
                <h1>${heroName}</h1>
                <div class="build-meta">
                    ${role ? `<span class="role-badge">${role.icon} ${role.name}</span>` : ''}
                    ${heroData ? `<span class="tier ${heroData.tier.toLowerCase()}">${heroData.tier} Tier</span>` : ''}
                    ${heroData ? `<span class="winrate">${heroData.winRate}% Win Rate</span>` : ''}
                </div>
            </div>
        </div>
        ${build ? `
            <div class="build-section">
                <h2>📋 Hero Info</h2>
                <div class="build-info">
                    <div class="info-item"><strong>Role:</strong> ${build.role}</div>
                    <div class="info-item"><strong>Difficulty:</strong> ${build.difficulty}</div>
                    <div class="info-item"><strong>Emblem:</strong> ${build.emblem}</div>
                    <div class="info-item"><strong>Battle Spell:</strong> ${build.spell}</div>
                </div>
            </div>
            <div class="build-section">
                <h2>🛠️ Recommended Build</h2>
                <div class="items-list">
                    ${build.items.map((item, i) => `
                        <div class="item-slot">
                            <span class="slot-num">${i + 1}</span>
                            <span class="item-icon">${getItemIcon(item)}</span>
                            <span class="item-name">${item}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            ${build.counters || build.counteredBy ? `
            <div class="build-section">
                <h2>⚔️ Counter Picks</h2>
                <div class="counters-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
                    ${build.counters ? `
                    <div class="counter-box" style="padding:15px;background:rgba(34,197,94,0.1);border-radius:12px;border-left:3px solid #22c55e;">
                        <h3 style="color:#22c55e;margin-bottom:10px;font-size:1rem;">✅ Strong Against</h3>
                        <div style="display:flex;flex-wrap:wrap;gap:8px;">
                            ${build.counters.map(c => `<span style="padding:5px 12px;background:rgba(34,197,94,0.2);border-radius:20px;font-size:0.85rem;">${c}</span>`).join('')}
                        </div>
                    </div>
                    ` : ''}
                    ${build.counteredBy ? `
                    <div class="counter-box" style="padding:15px;background:rgba(239,68,68,0.1);border-radius:12px;border-left:3px solid #ef4444;">
                        <h3 style="color:#ef4444;margin-bottom:10px;font-size:1rem;">❌ Weak Against</h3>
                        <div style="display:flex;flex-wrap:wrap;gap:8px;">
                            ${build.counteredBy.map(c => `<span style="padding:5px 12px;background:rgba(239,68,68,0.2);border-radius:20px;font-size:0.85rem;">${c}</span>`).join('')}
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
            ` : ''}
            <div class="build-section">
                <h2>💡 Pro Tips</h2>
                <p class="tips-text">${build.tips}</p>
            </div>
        ` : `
            <div class="build-section">
                <p>Build guide coming soon for ${heroName}!</p>
                <p>Meanwhile, check out other heroes in our <a href="heroes.html">Heroes</a> section.</p>
            </div>
        `}
    `;
}

// Filter handlers
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            initHeroesGrid(btn.dataset.role);
        });
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-box input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.hero-card');
        cards.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = name.includes(query) ? '' : 'none';
        });
    });
}

// Navbar scroll effect
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        navbar.style.background = window.scrollY > 50 ? 'rgba(10,10,15,0.95)' : 'rgba(10,10,15,0.8)';
    });
}

// Animations
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .role-card, .hero-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });
}
