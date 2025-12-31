// ===== MLBB Pro Guides - Enhanced Script 2025 =====
// Features: Animations, Search, Filters, Mobile Menu, Counters

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initMetaGrid();
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initCounterAnimations();
});

// ===== Floating Particles =====
function initParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    // Create particles dynamically
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;
        particle.style.width = `${3 + Math.random() * 4}px`;
        particle.style.height = particle.style.width;
        particle.style.background = Math.random() > 0.5 ? 'var(--primary)' : 'var(--secondary)';
        particlesContainer.appendChild(particle);
    }
}

// ===== Render Meta Heroes Grid on Homepage =====
function initMetaGrid() {
    const grid = document.getElementById('metaGrid');
    if (!grid) return;

    ROLES.forEach((role, index) => {
        const heroes = HEROES_DATA[role.id].slice(0, 3);
        const card = document.createElement('div');
        card.className = 'role-card fade-in';
        card.style.transitionDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="role-header" style="background: linear-gradient(135deg, ${role.color}22, ${role.color}08);">
                <span class="icon">${role.icon}</span>
                <h3>${role.name}</h3>
            </div>
            <div class="hero-list">
                ${heroes.map(h => `
                    <div class="hero-item" onclick="location.href='builds.html?hero=${encodeURIComponent(h.name)}'" tabindex="0" role="button" aria-label="View ${h.name} build">
                        <img src="${h.img}" alt="${h.name}" class="hero-avatar-img" loading="lazy" onerror="this.outerHTML='<div class=hero-avatar-placeholder style=background:${h.color || role.color}>🦸</div>'">
                        <div class="hero-info">
                            <span class="hero-name">${h.name}</span>
                            <span class="tier ${h.tier.toLowerCase().replace('+', '-plus')}">${h.tier} Tier</span>
                        </div>
                        <span class="winrate ${h.winRate < 50 ? 'low' : ''}">${h.winRate}%</span>
                    </div>
                `).join('')}
            </div>
            <a href="tier-list.html#${role.id}" class="view-all">View All ${role.name}s</a>
        `;
        grid.appendChild(card);
        
        // Add keyboard support
        card.querySelectorAll('.hero-item').forEach(item => {
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    item.click();
                }
            });
        });
    });
}

// ===== Render Tier List =====
function initTierList() {
    const container = document.getElementById('tierListContainer');
    if (!container) return;

    const tiers = { 'S+': [], S: [], A: [], B: [], C: [] };

    Object.values(HEROES_DATA).flat().forEach(hero => {
        const tierKey = hero.tier.toUpperCase();
        if (tiers[tierKey] !== undefined) {
            tiers[tierKey].push(hero);
        } else if (tierKey === 'S+' || tierKey === 'S-PLUS') {
            tiers['S+'].push(hero);
        }
    });

    Object.entries(tiers).forEach(([tier, heroes], index) => {
        if (heroes.length === 0) return;

        const tierClass = tier === 'S+' ? 's-plus' : tier.toLowerCase();
        const row = document.createElement('div');
        row.className = 'tier-row fade-in';
        row.style.transitionDelay = `${index * 0.1}s`;
        row.innerHTML = `
            <div class="tier-label ${tierClass}">${tier}</div>
            <div class="tier-heroes">
                ${heroes.map(h => `
                    <div class="tier-hero" onclick="location.href='builds.html?hero=${encodeURIComponent(h.name)}'" tabindex="0" role="button" aria-label="${h.name} - ${tier} tier">
                        <img src="${h.img}" alt="${h.name}" class="tier-hero-img" loading="lazy" onerror="this.outerHTML='<span class=avatar style=font-size:1.2rem>🦸</span>'">
                        <span>${h.name}</span>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(row);
        
        // Keyboard support for tier heroes
        row.querySelectorAll('.tier-hero').forEach(item => {
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    item.click();
                }
            });
        });
    });
    
    // Trigger animations
    setTimeout(() => initScrollAnimations(), 100);
}

// ===== Render Heroes Grid =====
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

    // Sort by tier then win rate
    const tierOrder = { 'S+': 0, 'S': 1, 'A': 2, 'B': 3, 'C': 4 };
    heroesToShow.sort((a, b) => {
        const tierDiff = (tierOrder[a.tier] || 5) - (tierOrder[b.tier] || 5);
        if (tierDiff !== 0) return tierDiff;
        return b.winRate - a.winRate;
    });

    heroesToShow.forEach((hero, index) => {
        const role = ROLES.find(r => r.id === hero.roleId);
        const card = document.createElement('div');
        card.className = 'hero-card fade-in';
        card.style.transitionDelay = `${Math.min(index * 0.03, 0.5)}s`;
        card.tabIndex = 0;
        card.role = 'button';
        card.setAttribute('aria-label', `View ${hero.name} build - ${role?.name || ''} - ${hero.tier} tier`);
        card.onclick = () => location.href = `builds.html?hero=${encodeURIComponent(hero.name)}`;
        card.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        };
        
        const tierClass = hero.tier.toLowerCase().replace('+', '-plus');
        
        card.innerHTML = `
            <div class="hero-card-img-wrapper">
                <img src="${hero.img}" alt="${hero.name}" class="hero-card-img" loading="lazy" onerror="this.outerHTML='<div class=hero-card-placeholder>🦸</div>'">
            </div>
            <h3>${hero.name}</h3>
            <div class="role">${role?.icon || ''} ${role?.name || ''}</div>
            <span class="tier ${tierClass}">${hero.tier} Tier</span>
            <div class="winrate ${hero.winRate < 50 ? 'low' : ''}">${hero.winRate}% WR</div>
        `;
        grid.appendChild(card);
    });
    
    // Trigger animations
    setTimeout(() => initScrollAnimations(), 100);
}

// ===== Render Build Page =====
function initBuildPage() {
    const container = document.getElementById('buildContainer');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const heroName = params.get('hero');

    if (!heroName) {
        renderNoBuildSelected(container);
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

    const tierClass = heroData?.tier?.toLowerCase().replace('+', '-plus') || 's';

    container.innerHTML = `
        <div class="patch-badge fade-in" style="text-align:center;margin-bottom:24px;padding:14px 20px;background:linear-gradient(135deg,rgba(99,102,241,0.1),rgba(139,92,246,0.05));border:1px solid rgba(99,102,241,0.2);border-radius:var(--radius-full);color:var(--text-muted);font-size:0.9rem;">
            📅 Updated: ${typeof LAST_UPDATED !== 'undefined' ? LAST_UPDATED : 'December 2024'} | Patch ${typeof PATCH_VERSION !== 'undefined' ? PATCH_VERSION : '1.9.42'}
        </div>
        <div class="build-header fade-in">
            <div class="build-hero-img-wrapper">
                <img src="${heroData?.img || build?.img || ''}" alt="${heroName}" class="build-hero-img" onerror="this.outerHTML='<div class=build-hero-placeholder>🦸</div>'">
            </div>
            <div class="build-hero-info">
                <h1>${heroName}</h1>
                <div class="build-meta">
                    ${role ? `<span class="role-badge">${role.icon} ${role.name}</span>` : ''}
                    ${heroData ? `<span class="tier ${tierClass}">${heroData.tier} Tier</span>` : ''}
                    ${heroData ? `<span class="winrate">${heroData.winRate}% Win Rate</span>` : ''}
                </div>
            </div>
        </div>
        ${build ? `
            <div class="build-section fade-in" style="transition-delay:0.1s">
                <h2>📋 Hero Info</h2>
                <div class="build-info">
                    <div class="info-item"><strong>Role</strong>${build.role}</div>
                    <div class="info-item"><strong>Difficulty</strong>${build.difficulty}</div>
                    <div class="info-item"><strong>Emblem</strong>${build.emblem}</div>
                    <div class="info-item"><strong>Battle Spell</strong>${build.spell}</div>
                </div>
            </div>
            <div class="build-section fade-in" style="transition-delay:0.2s">
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
            <div class="build-section fade-in" style="transition-delay:0.3s">
                <h2>⚔️ Counter Picks</h2>
                <div class="counters-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
                    ${build.counters ? `
                    <div class="counter-box" style="padding:20px;background:linear-gradient(135deg,rgba(34,197,94,0.1),rgba(34,197,94,0.03));border-radius:var(--radius);border:1px solid rgba(34,197,94,0.2);">
                        <h3 style="color:#22c55e;margin-bottom:14px;font-size:1rem;display:flex;align-items:center;gap:8px;">✅ Strong Against</h3>
                        <div style="display:flex;flex-wrap:wrap;gap:8px;">
                            ${build.counters.map(c => `<span style="padding:6px 14px;background:rgba(34,197,94,0.15);border-radius:var(--radius-full);font-size:0.9rem;font-weight:600;">${c}</span>`).join('')}
                        </div>
                    </div>
                    ` : ''}
                    ${build.counteredBy ? `
                    <div class="counter-box" style="padding:20px;background:linear-gradient(135deg,rgba(239,68,68,0.1),rgba(239,68,68,0.03));border-radius:var(--radius);border:1px solid rgba(239,68,68,0.2);">
                        <h3 style="color:#ef4444;margin-bottom:14px;font-size:1rem;display:flex;align-items:center;gap:8px;">❌ Weak Against</h3>
                        <div style="display:flex;flex-wrap:wrap;gap:8px;">
                            ${build.counteredBy.map(c => `<span style="padding:6px 14px;background:rgba(239,68,68,0.15);border-radius:var(--radius-full);font-size:0.9rem;font-weight:600;">${c}</span>`).join('')}
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
            ` : ''}
            <div class="build-section fade-in" style="transition-delay:0.4s">
                <h2>💡 Pro Tips</h2>
                <p class="tips-text">${build.tips}</p>
            </div>
        ` : `
            <div class="build-section fade-in">
                <p>Build guide coming soon for ${heroName}!</p>
                <p style="margin-top:10px;">Meanwhile, check out other heroes in our <a href="heroes.html" style="color:var(--primary);">Heroes</a> section.</p>
            </div>
        `}
        
        <div class="fade-in" style="text-align:center;margin-top:32px;transition-delay:0.5s">
            <a href="heroes.html" class="btn btn-secondary">← Browse All Heroes</a>
        </div>
    `;
    
    // Trigger animations
    setTimeout(() => initScrollAnimations(), 100);
}

function renderNoBuildSelected(container) {
    const popularHeroes = ['Chou', 'Ling', 'Beatrix', 'Lancelot', 'Fanny', 'Hayabusa', 'Kagura', 'Tigreal'];
    
    container.innerHTML = `
        <div class="no-hero fade-in" style="text-align:center;padding:60px 20px;">
            <h2 style="margin-bottom:16px;">Select a Hero</h2>
            <p style="color:var(--text-muted);margin-bottom:32px;">Choose a hero from our <a href="heroes.html" style="color:var(--primary)">Heroes page</a> to view their build.</p>
            
            <div class="popular-heroes">
                <h3 style="margin-bottom:16px;color:var(--text-muted);font-size:1rem;">🔥 Popular Builds</h3>
                <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
                    ${popularHeroes.map(hero => `
                        <a href="?hero=${encodeURIComponent(hero)}" class="btn btn-secondary btn-sm">${hero}</a>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    setTimeout(() => initScrollAnimations(), 100);
}

// ===== Filter Handlers =====
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

// ===== Enhanced Search =====
function setupSearch() {
    const searchInput = document.querySelector('.search-box input');
    if (!searchInput) return;

    // Debounce search for performance
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = e.target.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.hero-card');
            
            cards.forEach(card => {
                const name = card.querySelector('h3').textContent.toLowerCase();
                const role = card.querySelector('.role')?.textContent.toLowerCase() || '';
                const matches = name.includes(query) || role.includes(query);
                
                card.style.display = matches ? '' : 'none';
                card.style.opacity = matches ? '1' : '0';
            });
        }, 150);
    });
    
    // Clear search on Escape
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
        }
    });
}

// ===== Enhanced Navbar =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScrollY = 0;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add scrolled class
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });
}

// ===== Mobile Menu =====
function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    
    if (!toggle || !menu) return;
    
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking a link
    menu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('active') && 
            !menu.contains(e.target) && 
            !toggle.contains(e.target)) {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .feature-card, .role-card, .hero-card, .tier-row');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) translateX(0) scale(1)';
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => {
        if (!el.classList.contains('visible')) {
            observer.observe(el);
        }
    });
}

// ===== Animated Counters =====
function initCounterAnimations() {
    const stats = document.querySelectorAll('.stat .num');
    
    const animateCounter = (element) => {
        const text = element.textContent;
        const match = text.match(/(\d+)/);
        
        if (!match) return;
        
        const target = parseInt(match[1]);
        const suffix = text.replace(/\d+/, '');
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let step = 0;
        
        const timer = setInterval(() => {
            step++;
            current = Math.min(Math.round(increment * step), target);
            element.textContent = current + suffix;
            
            if (step >= steps) {
                clearInterval(timer);
                element.textContent = text; // Ensure final value is exact
            }
        }, duration / steps);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

// ===== Utility: Smooth Scroll to Section =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===== Utility: Copy to Clipboard =====
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Failed to copy:', err);
        return false;
    }
}

// ===== Service Worker Registration (for PWA) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker can be added later for offline support
        // navigator.serviceWorker.register('/sw.js');
    });
}

// ===== Console Easter Egg =====
console.log('%c⚔️ MLBB Pro Guides', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cDominate the Land of Dawn!', 'font-size: 14px; color: #8b5cf6;');
console.log('%cBuilt with ❤️ in the Philippines', 'font-size: 12px; color: #94a3b8;');
