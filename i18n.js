/**
 * i18n.js — Internationalization system for J.V. AI Index
 * Supported languages: en, uk, de, fr, es, zh
 */

const translations = {
    en: {
        // Meta
        lang_code: 'en',
        dir: 'ltr',
        html_lang: 'en',

        // Header
        site_subtitle: 'A self-updating catalog of the best AI tools.',
        search_placeholder: 'Search tools (e.g., ChatGPT)...',

        // Category filters
        filter_all: 'All',
        filter_text: 'Text & Search',
        filter_image: 'Images & Design',
        filter_video: 'Video',
        filter_audio: 'Audio & Voice',
        filter_code: 'Code',

        // Tag filters
        tag_label: 'Tags:',
        tag_top10: '🔥 Top 10',
        tag_top20: '⭐ Top 20',
        tag_opensource: '🛠️ Open Source',
        tag_free: '💚 Free',
        tag_api: '⚡ API',

        // Toolbar
        sort_default: 'Default',
        sort_az: 'A → Z',
        sort_za: 'Z → A',
        sort_top: 'Top rated first',

        // Dynamic
        loading: 'Loading...',
        showing: 'Showing',
        of: 'of',
        tools_word: 'tools',
        nothing_found: 'Nothing found.',
        error_loading: 'Failed to load tools.',
        visit: 'Visit →',
        copy_link: 'Copy link',
        copied: 'Copied!',

        // SEO section
        seo_h2: 'What is J.V. AI Index?',
        seo_p1: 'J.V. AI Index is a constantly updated catalog of the most advanced artificial intelligence tools and neural networks. Our goal is to gather the best services for text generation, image creation, coding, and video production all in one convenient place.',
        seo_h3: 'How to choose the best AI tool?',
        seo_p2: 'In our catalog you will find both universal solutions (e.g. <strong>ChatGPT</strong>, <strong>Claude</strong>, or <strong>Gemini</strong>) and highly specialized tools for professionals. Use the convenient category filters — <em>Text, Design, Video, Audio, and Code</em> — to find exactly what will help automate your work or creativity.',
        seo_p3: 'All tools have relevant tags that indicate whether a service is fully autonomous, whether it is in the global Top-10 rankings, and whether it is available for free.',

        // Footer
        footer: '© 2026 J.V. AI Index. All rights reserved.',

        // Tags (for sorting logic)
        'tag_val_Top 10': 'Top 10',
        'tag_val_Top 20': 'Top 20',
        'tag_val_Free': 'Free',
        'tag_val_Open Source': 'Open Source',
        'tag_val_API': 'API',
    },
    uk: {
        lang_code: 'uk',
        dir: 'ltr',
        html_lang: 'uk',

        site_subtitle: 'Каталог найкращих ШІ-інструментів, який оновлюється сам.',
        search_placeholder: 'Пошук інструментів (напр., ChatGPT)...',

        filter_all: 'Всі',
        filter_text: 'Текст & Пошук',
        filter_image: 'Ілюстрації & Дизайн',
        filter_video: 'Відео',
        filter_audio: 'Звук & Голос',
        filter_code: 'Код',

        tag_label: 'Теги:',
        tag_top10: '🔥 Топ 10',
        tag_top20: '⭐ Топ 20',
        tag_opensource: '🛠️ Open Source',
        tag_free: '💚 Безкоштовно',
        tag_api: '⚡ API',

        sort_default: 'За замовчуванням',
        sort_az: 'A → Z',
        sort_za: 'Z → A',
        sort_top: 'Топ рейтинг спочатку',

        loading: 'Завантаження...',
        showing: 'Показано',
        of: '/',
        tools_word: 'інструментів',
        nothing_found: 'Нічого не знайдено.',
        error_loading: 'Не вдалося завантажити інструменти.',
        visit: 'Перейти →',
        copy_link: 'Скопіювати посилання',
        copied: 'Скопійовано!',

        seo_h2: 'Що таке J.V. AI Index?',
        seo_p1: 'J.V. AI Index — це постійно оновлюваний каталог найсучасніших інструментів штучного інтелекту та нейромереж. Наша мета — зібрати найкращі сервіси для генерації тексту, створення зображень, написання коду та обробки відео в одному зручному місці.',
        seo_h3: 'Як обрати найкращу нейромережу?',
        seo_p2: 'У нашому каталозі ви знайдете як універсальні рішення (наприклад, <strong>ChatGPT</strong>, <strong>Claude</strong> або <strong>Gemini</strong>), так і вузькоспеціалізовані інструменти для професіоналів. Використовуйте зручні фільтри за категоріями: <em>Текст, Дизайн, Відео, Аудіо та Код</em>, щоб знайти саме те, що допоможе автоматизувати вашу роботу чи творчість.',
        seo_p3: 'Всі інструменти мають відповідні теги, які підкажуть, чи є сервіс повністю автономним, чи входить він до Топ-10 глобальних рейтингів, та чи доступний він безкоштовно.',

        footer: '© 2026 J.V. AI Index. Всі права захищені.',

        'tag_val_Top 10': 'Топ 10',
        'tag_val_Top 20': 'Топ 20',
        'tag_val_Free': 'Безкоштовно',
        'tag_val_Open Source': 'Open Source',
        'tag_val_API': 'API',
    },
    de: {
        lang_code: 'de',
        dir: 'ltr',
        html_lang: 'de',

        site_subtitle: 'Ein sich selbst aktualisierender Katalog der besten KI-Tools.',
        search_placeholder: 'Tools suchen (z.B. ChatGPT)...',

        filter_all: 'Alle',
        filter_text: 'Text & Suche',
        filter_image: 'Bilder & Design',
        filter_video: 'Video',
        filter_audio: 'Audio & Stimme',
        filter_code: 'Code',

        tag_label: 'Tags:',
        tag_top10: '🔥 Top 10',
        tag_top20: '⭐ Top 20',
        tag_opensource: '🛠️ Open Source',
        tag_free: '💚 Kostenlos',
        tag_api: '⚡ API',

        sort_default: 'Standard',
        sort_az: 'A → Z',
        sort_za: 'Z → A',
        sort_top: 'Top-Bewertung zuerst',

        loading: 'Laden...',
        showing: 'Zeige',
        of: 'von',
        tools_word: 'Tools',
        nothing_found: 'Nichts gefunden.',
        error_loading: 'Tools konnten nicht geladen werden.',
        visit: 'Besuchen →',
        copy_link: 'Link kopieren',
        copied: 'Kopiert!',

        seo_h2: 'Was ist J.V. AI Index?',
        seo_p1: 'J.V. AI Index ist ein ständig aktualisierter Katalog der modernsten KI-Tools und neuronalen Netze. Unser Ziel ist es, die besten Dienste für Textgenerierung, Bildgenerierung, Programmierung und Videoproduktion an einem Ort zu sammeln.',
        seo_h3: 'Wie wählt man das beste KI-Tool?',
        seo_p2: 'In unserem Katalog finden Sie sowohl universelle Lösungen (z.B. <strong>ChatGPT</strong>, <strong>Claude</strong> oder <strong>Gemini</strong>) als auch spezialisierte Werkzeuge für Profis. Nutzen Sie die praktischen Kategoriefilter — <em>Text, Design, Video, Audio und Code</em>.',
        seo_p3: 'Alle Tools haben entsprechende Tags, die anzeigen, ob ein Dienst vollständig autonom ist, ob er in den globalen Top-10-Rankings steht und ob er kostenlos verfügbar ist.',

        footer: '© 2026 J.V. AI Index. Alle Rechte vorbehalten.',

        'tag_val_Top 10': 'Top 10',
        'tag_val_Top 20': 'Top 20',
        'tag_val_Free': 'Kostenlos',
        'tag_val_Open Source': 'Open Source',
        'tag_val_API': 'API',
    },
    fr: {
        lang_code: 'fr',
        dir: 'ltr',
        html_lang: 'fr',

        site_subtitle: 'Un catalogue auto-mis à jour des meilleurs outils IA.',
        search_placeholder: 'Rechercher des outils (ex. ChatGPT)...',

        filter_all: 'Tous',
        filter_text: 'Texte & Recherche',
        filter_image: 'Images & Design',
        filter_video: 'Vidéo',
        filter_audio: 'Audio & Voix',
        filter_code: 'Code',

        tag_label: 'Tags :',
        tag_top10: '🔥 Top 10',
        tag_top20: '⭐ Top 20',
        tag_opensource: '🛠️ Open Source',
        tag_free: '💚 Gratuit',
        tag_api: '⚡ API',

        sort_default: 'Par défaut',
        sort_az: 'A → Z',
        sort_za: 'Z → A',
        sort_top: 'Mieux notés en premier',

        loading: 'Chargement...',
        showing: 'Affichage de',
        of: 'sur',
        tools_word: 'outils',
        nothing_found: 'Rien trouvé.',
        error_loading: 'Impossible de charger les outils.',
        visit: 'Visiter →',
        copy_link: 'Copier le lien',
        copied: 'Copié !',

        seo_h2: "Qu'est-ce que J.V. AI Index ?",
        seo_p1: "J.V. AI Index est un catalogue constamment mis à jour des outils d'intelligence artificielle les plus avancés. Notre objectif est de rassembler les meilleurs services pour la génération de texte, la création d'images, la programmation et la production vidéo en un seul endroit.",
        seo_h3: 'Comment choisir le meilleur outil IA ?',
        seo_p2: 'Dans notre catalogue, vous trouverez des solutions universelles (ex. <strong>ChatGPT</strong>, <strong>Claude</strong> ou <strong>Gemini</strong>) et des outils spécialisés. Utilisez les filtres par catégorie — <em>Texte, Design, Vidéo, Audio et Code</em>.',
        seo_p3: "Tous les outils ont des tags indiquant si un service est entièrement autonome, s'il figure dans les classements mondiaux Top-10, et s'il est disponible gratuitement.",

        footer: '© 2026 J.V. AI Index. Tous droits réservés.',

        'tag_val_Top 10': 'Top 10',
        'tag_val_Top 20': 'Top 20',
        'tag_val_Free': 'Gratuit',
        'tag_val_Open Source': 'Open Source',
        'tag_val_API': 'API',
    },
    es: {
        lang_code: 'es',
        dir: 'ltr',
        html_lang: 'es',

        site_subtitle: 'Un catálogo auto-actualizado de las mejores herramientas de IA.',
        search_placeholder: 'Buscar herramientas (ej. ChatGPT)...',

        filter_all: 'Todas',
        filter_text: 'Texto & Búsqueda',
        filter_image: 'Imágenes & Diseño',
        filter_video: 'Video',
        filter_audio: 'Audio & Voz',
        filter_code: 'Código',

        tag_label: 'Etiquetas:',
        tag_top10: '🔥 Top 10',
        tag_top20: '⭐ Top 20',
        tag_opensource: '🛠️ Open Source',
        tag_free: '💚 Gratis',
        tag_api: '⚡ API',

        sort_default: 'Por defecto',
        sort_az: 'A → Z',
        sort_za: 'Z → A',
        sort_top: 'Mejor valorados primero',

        loading: 'Cargando...',
        showing: 'Mostrando',
        of: 'de',
        tools_word: 'herramientas',
        nothing_found: 'Nada encontrado.',
        error_loading: 'No se pudieron cargar las herramientas.',
        visit: 'Visitar →',
        copy_link: 'Copiar enlace',
        copied: '¡Copiado!',

        seo_h2: '¿Qué es J.V. AI Index?',
        seo_p1: 'J.V. AI Index es un catálogo constantemente actualizado de las herramientas de inteligencia artificial más avanzadas. Nuestro objetivo es reunir los mejores servicios para generación de texto, creación de imágenes, programación y producción de video en un solo lugar.',
        seo_h3: '¿Cómo elegir la mejor herramienta de IA?',
        seo_p2: 'En nuestro catálogo encontrará tanto soluciones universales (ej. <strong>ChatGPT</strong>, <strong>Claude</strong> o <strong>Gemini</strong>) como herramientas especializadas. Use los filtros de categoría — <em>Texto, Diseño, Video, Audio y Código</em>.',
        seo_p3: 'Todas las herramientas tienen etiquetas relevantes que indican si un servicio es completamente autónomo, si está en el Top-10 mundial y si está disponible de forma gratuita.',

        footer: '© 2026 J.V. AI Index. Todos los derechos reservados.',

        'tag_val_Top 10': 'Top 10',
        'tag_val_Top 20': 'Top 20',
        'tag_val_Free': 'Gratis',
        'tag_val_Open Source': 'Open Source',
        'tag_val_API': 'API',
    },
    zh: {
        lang_code: 'zh',
        dir: 'ltr',
        html_lang: 'zh',

        site_subtitle: '持续更新的最佳AI工具目录。',
        search_placeholder: '搜索工具（例如 ChatGPT）...',

        filter_all: '全部',
        filter_text: '文本 & 搜索',
        filter_image: '图像 & 设计',
        filter_video: '视频',
        filter_audio: '音频 & 语音',
        filter_code: '代码',

        tag_label: '标签：',
        tag_top10: '🔥 Top 10',
        tag_top20: '⭐ Top 20',
        tag_opensource: '🛠️ 开源',
        tag_free: '💚 免费',
        tag_api: '⚡ API',

        sort_default: '默认',
        sort_az: 'A → Z',
        sort_za: 'Z → A',
        sort_top: '评分最高优先',

        loading: '加载中...',
        showing: '显示',
        of: '/',
        tools_word: '个工具',
        nothing_found: '未找到任何内容。',
        error_loading: '无法加载工具。',
        visit: '访问 →',
        copy_link: '复制链接',
        copied: '已复制！',

        seo_h2: '什么是 J.V. AI Index？',
        seo_p1: 'J.V. AI Index 是一个不断更新的最先进人工智能工具和神经网络目录。我们的目标是将文本生成、图像创作、编程和视频制作的最佳服务汇聚在一个便捷的地方。',
        seo_h3: '如何选择最佳AI工具？',
        seo_p2: '在我们的目录中，您可以找到通用解决方案（例如 <strong>ChatGPT</strong>、<strong>Claude</strong> 或 <strong>Gemini</strong>）和专业工具。使用类别筛选器 — <em>文本、设计、视频、音频和代码</em>。',
        seo_p3: '所有工具都有相关标签，指示服务是否完全自主，是否跻身全球Top-10，以及是否免费提供。',

        footer: '© 2026 J.V. AI Index. 版权所有。',

        'tag_val_Top 10': 'Top 10',
        'tag_val_Top 20': 'Top 20',
        'tag_val_Free': '免费',
        'tag_val_Open Source': '开源',
        'tag_val_API': 'API',
    }
};

const LANG_FLAGS = {
    en: { flag: '🇬🇧', label: 'English' },
    uk: { flag: '🇺🇦', label: 'Українська' },
    de: { flag: '🇩🇪', label: 'Deutsch' },
    fr: { flag: '🇫🇷', label: 'Français' },
    es: { flag: '🇪🇸', label: 'Español' },
    zh: { flag: '🇨🇳', label: '中文' },
};

const DEFAULT_LANG = 'en';

window.i18n = (() => {
    let currentLang = localStorage.getItem('jv_lang') || DEFAULT_LANG;
    if (!translations[currentLang]) currentLang = DEFAULT_LANG;

    function t(key) {
        return (translations[currentLang] && translations[currentLang][key]) ||
            (translations[DEFAULT_LANG] && translations[DEFAULT_LANG][key]) ||
            key;
    }

    function getLang() {
        return currentLang;
    }

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('jv_lang', lang);
        document.documentElement.lang = t('html_lang');
        document.documentElement.dir = t('dir');
        applyTranslations();
        // Notify script.js to re-render tools
        document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
    }

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.innerHTML = t(key);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
        });
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            el.title = t(el.getAttribute('data-i18n-title'));
        });
        // Update active lang button in switcher
        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === currentLang);
        });
        // Update current lang display
        const currentDisplay = document.getElementById('currentLangDisplay');
        if (currentDisplay && LANG_FLAGS[currentLang]) {
            currentDisplay.textContent = `${LANG_FLAGS[currentLang].flag} ${LANG_FLAGS[currentLang].label}`;
        }
    }

    function buildSwitcher() {
        const switcher = document.getElementById('langSwitcher');
        if (!switcher) return;

        const btn = document.createElement('button');
        btn.className = 'lang-toggle-btn';
        btn.id = 'currentLangDisplay';
        btn.setAttribute('aria-label', 'Select language');
        btn.setAttribute('aria-haspopup', 'true');
        btn.setAttribute('aria-expanded', 'false');

        const dropdown = document.createElement('div');
        dropdown.className = 'lang-dropdown';
        dropdown.setAttribute('role', 'menu');

        Object.entries(LANG_FLAGS).forEach(([code, { flag, label }]) => {
            const option = document.createElement('button');
            option.className = 'lang-option' + (code === currentLang ? ' active' : '');
            option.dataset.lang = code;
            option.setAttribute('role', 'menuitem');
            option.innerHTML = `<span class="lang-flag">${flag}</span><span class="lang-label">${label}</span>`;
            option.addEventListener('click', () => {
                setLanguage(code);
                dropdown.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            });
            dropdown.appendChild(option);
        });

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdown.classList.toggle('open');
            btn.setAttribute('aria-expanded', isOpen);
        });

        document.addEventListener('click', () => {
            dropdown.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        });

        switcher.appendChild(btn);
        switcher.appendChild(dropdown);

        // Set initial display text
        btn.textContent = `${LANG_FLAGS[currentLang].flag} ${LANG_FLAGS[currentLang].label}`;
    }

    // Init on DOM ready
    document.addEventListener('DOMContentLoaded', () => {
        buildSwitcher();
        document.documentElement.lang = t('html_lang');
        document.documentElement.dir = t('dir');
        applyTranslations();
    });

    return { t, getLang, setLanguage, applyTranslations };
})();
