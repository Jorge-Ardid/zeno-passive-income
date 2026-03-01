const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');

// Це симуляція парсингу нових інструментів. 
// В реальності тут міг би бути fetch до API ProductHunt, Futurepedia тощо.
// Велика база інструментів з тегами для SEO та зручності
const newTools = [
    {
        id: "chatgpt", name: "ChatGPT (OpenAI)", category: "text",
        description: "Універсальний і найвідоміший чат-бот у світі. Ідеально підходить для текстів, програмування та аналізу даних.",
        url: "https://chat.openai.com", affiliateLink: "https://chat.openai.com",
        tags: ["Топ 10", "Універсальний", "Безкоштовно (обмежено)"]
    },
    {
        id: "claude35", name: "Claude 3.5 Sonnet", category: "text",
        description: "Швидка і розумна мовна модель від Anthropic. Найкращий вибір для програмування та аналізу великих документів.",
        url: "https://claude.ai", affiliateLink: "https://claude.ai",
        tags: ["Топ 10", "Програмування", "Аналіз текстів"]
    },
    {
        id: "gemini", name: "Google Gemini", category: "text",
        description: "Потужна екосистема ШІ від Google з доступом до інтернету та інтеграцією з Google Workspace.",
        url: "https://gemini.google.com", affiliateLink: "https://gemini.google.com",
        tags: ["Топ 10", "Пошук", "Google Ecosystem"]
    },
    {
        id: "deepseek", name: "DeepSeek Coder", category: "code",
        description: "Відкрита та надефективна модель, спеціально натренована для написання високоякісного коду та математики.",
        url: "https://chat.deepseek.com", affiliateLink: "https://chat.deepseek.com",
        tags: ["Топ 10", "Код", "Open source"]
    },
    {
        id: "grok", name: "Grok (xAI)", category: "text",
        description: "ШІ від Ілона Маска, інтегрований в X (Twitter). Має доступ до інформації в реальному часі та відчуття гумору.",
        url: "https://grok.x.ai", affiliateLink: "https://grok.x.ai",
        tags: ["Топ 20", "Real-time", "Без цензури"]
    },
    {
        id: "perplexity", name: "Perplexity AI", category: "text",
        description: "Революційний пошуковик, який дає прямі відповіді з реальними посиланнями на першоджерела.",
        url: "https://perplexity.ai", affiliateLink: "https://perplexity.ai",
        tags: ["Топ 10", "Пошук", "Дослідження"]
    },
    {
        id: "midjourney", name: "Midjourney", category: "image",
        description: "Неперевершений генератор художніх та фотореалістичних зображень через інтерфейс Discord.",
        url: "https://midjourney.com", affiliateLink: "https://midjourney.com",
        tags: ["Топ 10", "Мистецтво", "Дизайн"]
    },
    {
        id: "dalle3", name: "DALL-E 3", category: "image",
        description: "Генератор зображень від OpenAI, що ідеально розуміє складні промпти та інтегрований у ChatGPT.",
        url: "https://openai.com/dall-e-3", affiliateLink: "https://openai.com/dall-e-3",
        tags: ["Топ 20", "Ілюстрації"]
    },
    {
        id: "leonardo", name: "Leonardo AI", category: "image",
        description: "Потужна платформа для створення ігрових ассетів та дизайну з великим контролем над генерацією.",
        url: "https://leonardo.ai", affiliateLink: "https://leonardo.ai",
        tags: ["Топ 20", "Геймдев", "Безкоштовно"]
    },
    {
        id: "runway", name: "Runway Gen-2", category: "video",
        description: "Лідери в генерації відео з тексту або зображень. Найкращий вибір для відео-кріейторів.",
        url: "https://runwayml.com", affiliateLink: "https://runwayml.com",
        tags: ["Топ 10", "Відео", "Кіно"]
    },
    {
        id: "sora", name: "Sora (OpenAI)", category: "video",
        description: "Генерація неймовірно реалістичних та фізично коректних відеороликів тривалістю до хвилини.",
        url: "https://openai.com/sora", affiliateLink: "https://openai.com/sora",
        tags: ["Топ 10", "Відео", "Анімація"]
    },
    {
        id: "heygen", name: "HeyGen", category: "video",
        description: "Створення професійних відео з реалістичними AI-аватарами та клонуванням голосу за лічені хвилини.",
        url: "https://heygen.com", affiliateLink: "https://heygen.com",
        tags: ["Топ 20", "Аватари", "Маркетинг"]
    },
    {
        id: "elevenlabs", name: "ElevenLabs", category: "audio",
        description: "Найкращий у світі синтез голосу та клонування зі збереженням інтонацій.",
        url: "https://elevenlabs.io", affiliateLink: "https://elevenlabs.io",
        tags: ["Топ 10", "Голос", "Озвучка"]
    },
    {
        id: "suno", name: "Suno AI", category: "audio",
        description: "Генерує повноцінні пісні (з вокалом та музикою) у будь-якому жанрі за вашим текстовим описом.",
        url: "https://suno.com", affiliateLink: "https://suno.com",
        tags: ["Топ 10", "Музика", "Розваги"]
    },
    {
        id: "udio", name: "Udio", category: "audio",
        description: "Вбивця Suno з неймовірною якістю звучання та високим контролем над структурою треку.",
        url: "https://udio.com", affiliateLink: "https://udio.com",
        tags: ["Топ 20", "Музика"]
    },
    {
        id: "cursor", name: "Cursor", category: "code",
        description: "Надсучасний форк VS Code з глибокою інтеграцією ШІ. Розуміє весь контекст проєкту та сам вносить зміни.",
        url: "https://cursor.com", affiliateLink: "https://cursor.com",
        tags: ["Топ 10", "Програмування", "Редактор"]
    },
    {
        id: "githubcopilot", name: "GitHub Copilot", category: "code",
        description: "AI-помічник для програмування від Microsoft. Пише код швидше та допомагає з відладкою у вашому редакторі.",
        url: "https://github.com/features/copilot", affiliateLink: "https://github.com/features/copilot",
        tags: ["Топ 10", "Код", "Популярне"]
    },
    {
        id: "notion-ai", name: "Notion AI", category: "text",
        description: "Інтегрований ШІ для створення конспекту, написання текстів та брейнштормінгу прямо у вашому робочому просторі.",
        url: "https://notion.so/product/ai", affiliateLink: "https://notion.so/product/ai",
        tags: ["Топ 20", "Продуктивність", "Нотатки"]
    }
];

async function updateData() {
    try {
        console.log('Запуск автономного оновлення каталогу...');

        let existingData = [];
        if (fs.existsSync(DATA_FILE)) {
            existingData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        }

        // Запобігання дублюванню: фільтруємо existingData
        const existingIds = new Set(newTools.map(t => t.id));
        const filteredExisting = existingData.filter(t => !existingIds.has(t.id));

        // Оновлюємо старі записи, додаючи порожній масив тегів, якщо їх немає
        const normalizedExisting = filteredExisting.map(tool => ({
            ...tool,
            tags: tool.tags || ["Популярне"]
        }));

        // Додаємо нові інструменти на початок масиву
        const updatedData = [...newTools, ...normalizedExisting];

        // Зберігаємо оновлений файл
        fs.writeFileSync(DATA_FILE, JSON.stringify(updatedData, null, 4));
        console.log('Базу успішно оновлено! Всього інструментів: ' + updatedData.length);

    } catch (error) {
        console.error('Помилка оновлення:', error);
        process.exit(1);
    }
}

updateData();
