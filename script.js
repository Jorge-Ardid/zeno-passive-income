document.addEventListener('DOMContentLoaded', () => {
    const toolsGrid = document.getElementById('toolsGrid');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let toolsData = [];

    // Завантаження даних з JSON
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            toolsData = data;
            renderTools(toolsData);
        })
        .catch(err => {
            console.error('Помилка завантаження даних:', err);
            toolsGrid.innerHTML = '<p style="text-align:center;width:100%;">Не вдалося завантажити інструменти.</p>';
        });

    function renderTools(tools) {
        toolsGrid.innerHTML = '';
        if (tools.length === 0) {
            toolsGrid.innerHTML = '<p style="text-align:center;width:100%;color:#8b949e;">Нічого не знайдено.</p>';
            return;
        }

        tools.forEach(tool => {
            // Генеруємо HTML для тегів, якщо вони є. Інакше показуємо просто категорію.
            const tagsHtml = tool.tags && tool.tags.length > 0
                ? tool.tags.map(t => `<span class="category-tag tag-${t.toLowerCase().replace(/[^a-z0-9]/g, '')}">${t}</span>`).join(' ')
                : `<span class="category-tag">${tool.category}</span>`;

            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-header">
                    <h3>${tool.name}</h3>
                    <div class="tags-container">
                        ${tagsHtml}
                    </div>
                </div>
                <p>${tool.description}</p>
                <a href="${tool.affiliateLink || tool.url}" target="_blank" class="card-link" rel="nofollow noopener">Перейти</a>
            `;
            toolsGrid.appendChild(card);
        });
    }

    // Пошук
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;

        let filtered = toolsData.filter(tool =>
            tool.name.toLowerCase().includes(term) ||
            tool.description.toLowerCase().includes(term)
        );

        if (activeCategory !== 'all') {
            filtered = filtered.filter(tool => tool.category === activeCategory);
        }

        renderTools(filtered);
    });

    // Фільтрація
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;
            const term = searchInput.value.toLowerCase();

            let filtered = toolsData;

            if (category !== 'all') {
                filtered = filtered.filter(tool => tool.category === category);
            }

            if (term) {
                filtered = filtered.filter(tool =>
                    tool.name.toLowerCase().includes(term) ||
                    tool.description.toLowerCase().includes(term)
                );
            }

            renderTools(filtered);
        });
    });
});
