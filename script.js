document.addEventListener('DOMContentLoaded', () => {
    const toolsGrid = document.getElementById('toolsGrid');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const tagFilterBtns = document.querySelectorAll('.tag-filter-btn');
    const toolsCount = document.getElementById('toolsCount');
    const sortSelect = document.getElementById('sortSelect');

    let toolsData = [];
    let totalCount = 0;

    // State
    let activeCategory = 'all';
    let activeTag = null;
    let searchTerm = '';
    let sortMode = 'default';

    // i18n helper — safe wrapper in case i18n.js isn't loaded yet
    function t(key) {
        return (window.i18n && window.i18n.t) ? window.i18n.t(key) : key;
    }

    // Get localized text for a tool field
    function getLocalized(tool, field) {
        const lang = window.i18n ? window.i18n.getLang() : 'en';
        return tool[field + '_' + lang] || tool[field] || '';
    }

    // Load data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            toolsData = data;
            totalCount = data.length;
            applyFilters();
        })
        .catch(err => {
            console.error('Error loading data:', err);
            toolsGrid.innerHTML = `<p style="text-align:center;width:100%;">${t('error_loading')}</p>`;
        });

    // Re-render when language changes
    document.addEventListener('langchange', () => {
        // Update select options text
        sortSelect.querySelectorAll('option').forEach(opt => {
            const key = opt.getAttribute('data-i18n');
            if (key) opt.textContent = t(key);
        });
        applyFilters();
    });

    // ========================
    // RENDER
    // ========================
    function renderTools(tools) {
        toolsGrid.innerHTML = '';

        // Update counter
        const showing = t('showing');
        const of = t('of');
        const word = t('tools_word');
        toolsCount.innerHTML = `${showing}: <strong>${tools.length}</strong> ${of} ${totalCount} ${word}`;

        if (tools.length === 0) {
            toolsGrid.innerHTML = `<p style="text-align:center;width:100%;color:#8b949e;">${t('nothing_found')}</p>`;
            return;
        }

        tools.forEach((tool, index) => {
            const localizedTags = getLocalized(tool, 'tags');
            const tagsArray = Array.isArray(localizedTags) ? localizedTags : (tool.tags || []);

            const tagsHtml = tagsArray.length > 0
                ? tagsArray.map(tag => `<span class="category-tag tag-${tag.toLowerCase().replace(/[^a-z0-9]/g, '')}">${tag}</span>`).join(' ')
                : `<span class="category-tag">${tool.category}</span>`;

            const desc = getLocalized(tool, 'description');
            const visitLabel = t('visit');
            const copyTitle = t('copy_link');
            const link = tool.affiliateLink || tool.url;

            const card = document.createElement('div');
            card.className = 'card';
            card.style.setProperty('--i', index);
            card.innerHTML = `
                <div class="card-header">
                    <h3>${tool.name}</h3>
                    <div class="tags-container">
                        ${tagsHtml}
                    </div>
                </div>
                <p>${desc}</p>
                <div class="card-actions">
                    <a href="${link}" target="_blank" class="card-link" rel="nofollow noopener">${visitLabel}</a>
                    <button class="copy-btn" title="${copyTitle}" data-url="${link}">
                        📋
                        <span class="tooltip">${t('copied')}</span>
                    </button>
                </div>
            `;

            // Copy button logic
            const copyBtn = card.querySelector('.copy-btn');
            copyBtn.addEventListener('click', () => {
                const url = copyBtn.dataset.url;
                navigator.clipboard.writeText(url).then(() => {
                    copyBtn.classList.add('copied');
                    setTimeout(() => copyBtn.classList.remove('copied'), 2000);
                });
            });

            toolsGrid.appendChild(card);
        });
    }

    // ========================
    // FILTERING + SORTING
    // ========================
    function applyFilters() {
        let result = [...toolsData];

        // Category
        if (activeCategory !== 'all') {
            result = result.filter(t => t.category === activeCategory);
        }

        // Tag — filter against the base (English) tags array
        if (activeTag) {
            result = result.filter(tool => tool.tags && tool.tags.includes(activeTag));
        }

        // Search — search in localized description + name
        if (searchTerm) {
            result = result.filter(tool => {
                const desc = getLocalized(tool, 'description').toLowerCase();
                return tool.name.toLowerCase().includes(searchTerm) || desc.includes(searchTerm);
            });
        }

        // Sort
        if (sortMode === 'az') {
            result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortMode === 'za') {
            result.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortMode === 'top') {
            const priority = tool => {
                if (tool.tags && tool.tags.includes('Top 10')) return 0;
                if (tool.tags && tool.tags.includes('Top 20')) return 1;
                return 2;
            };
            result.sort((a, b) => priority(a) - priority(b));
        }

        renderTools(result);
    }

    // ========================
    // EVENT LISTENERS
    // ========================

    // Search
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        applyFilters();
    });

    // Category filter
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.dataset.category;
            applyFilters();
        });
    });

    // Tag filter
    tagFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tag = btn.dataset.tag;
            if (activeTag === tag) {
                activeTag = null;
                btn.classList.remove('active');
            } else {
                tagFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeTag = tag;
            }
            applyFilters();
        });
    });

    // Sort
    sortSelect.addEventListener('change', (e) => {
        sortMode = e.target.value;
        applyFilters();
    });
});
