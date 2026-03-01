const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');

// Це симуляція парсингу нових інструментів. 
// В реальності тут міг би бути fetch до API ProductHunt, Futurepedia тощо.
// Велика база інструментів з тегами для SEO та зручності
const newTools = [
    {
        id: "claude35", name: "Claude 3.5 Sonnet", category: "text",
        description: "Швидка і розумна мовна модель від Anthropic. Ідеально для програмування та аналізу великих текстів.",
        url: "https://claude.ai", affiliateLink: "https://claude.ai",
        tags: ["Топ 10", "Програмування", "Безкоштовно (обмежено)"]
    },
    {
        id: "v0dev", name: "v0.dev", category: "code",
        description: "ШІ-генератор інтерфейсів від Vercel. Створює React-компоненти за текстовим описом.",
        url: "https://v0.dev", affiliateLink: "https://v0.dev",
        tags: ["Топ 10", "Дизайн", "Код"]
    },
    {
        id: "runway", name: "Runway Gen-2", category: "video",
        description: "Генерація відео з тексту або зображень. Найкращий вибір для кріейторів.",
        url: "https://runwayml.com", affiliateLink: "https://runwayml.com",
        tags: ["Топ 10", "Відео"]
    },
    {
        id: "perplexity", name: "Perplexity AI", category: "text",
        description: "Пошуковик на базі ШІ з реальними посиланнями на джерела.",
        url: "https://perplexity.ai", affiliateLink: "https://perplexity.ai",
        tags: ["Топ 10", "Пошук", "Безкоштовно"]
    },
    {
        id: "canva", name: "Canva Magic Studio", category: "image",
        description: "Набір ШІ-інструментів для графічного дизайну: генерація картинок, магічне розширення та зміна розмірів.",
        url: "https://canva.com", affiliateLink: "https://canva.com",
        tags: ["Топ 20", "Дизайн"]
    },
    {
        id: "elevenlabs-new", name: "ElevenLabs", category: "audio",
        description: "Найкращий у світі синтез голосу та клонування зі збереженням інтонацій.",
        url: "https://elevenlabs.io", affiliateLink: "https://elevenlabs.io",
        tags: ["Топ 10", "Голос"]
    },
    {
        id: "suno", name: "Suno AI", category: "audio",
        description: "Створює повноцінні пісні (з вокалом та музикою) за вашим описом.",
        url: "https://suno.com", affiliateLink: "https://suno.com",
        tags: ["Топ 20", "Музика", "Розваги"]
    },
    {
        id: "notion-ai", name: "Notion AI", category: "text",
        description: "Інтегрований ШІ для створення конспекту, написання текстів та брейнштормінгу прямо в Notion.",
        url: "https://notion.so/product/ai", affiliateLink: "https://notion.so/product/ai",
        tags: ["Топ 20", "Продуктивність"]
    },
    {
        id: "cursor", name: "Cursor", category: "code",
        description: "Редактор коду з вбудованим надпотужним ШІ. Пише цілі файли та розуміє контекст проєкту.",
        url: "https://cursor.com", affiliateLink: "https://cursor.com",
        tags: ["Топ 10", "Програмування"]
    },
    {
        id: "gamma", name: "Gamma", category: "text",
        description: "Автоматична генерація красивих презентацій, документів та вебсайтів за хвилину.",
        url: "https://gamma.app", affiliateLink: "https://gamma.app",
        tags: ["Топ 20", "Презентації"]
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
