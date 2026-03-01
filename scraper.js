const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');

// Це симуляція парсингу нових інструментів. 
// В реальності тут міг би бути fetch до API ProductHunt, Futurepedia тощо.
const newTools = [
    {
        id: "claude" + Date.now(),
        name: "Claude 3.5 Sonnet",
        category: "text",
        description: "[Нове] Потужна і швидка мовна модель від Anthropic, ідеально для програмування.",
        url: "https://claude.ai",
        affiliateLink: "https://claude.ai" // Тут буде ваше партнерське посилання
    }
];

async function updateData() {
    try {
        console.log('Запуск автономного оновлення каталогу...');

        let existingData = [];
        if (fs.existsSync(DATA_FILE)) {
            existingData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        }

        // Додаємо нові інструменти на початок масиву
        const updatedData = [...newTools, ...existingData];

        // Зберігаємо оновлений файл
        fs.writeFileSync(DATA_FILE, JSON.stringify(updatedData, null, 4));
        console.log('Базу успішно оновлено! Додано ' + newTools.length + ' інструментів.');

    } catch (error) {
        console.error('Помилка оновлення:', error);
        process.exit(1);
    }
}

updateData();
