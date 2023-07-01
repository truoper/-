const http = require('http');

// Массив для хранения полученных данных
const results = [];
// Счетчик для отслеживания завершенных запросов
let count = 0;

// Функция для вывода результатов
function printResults() {
  for (let i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

// Функция для выполнения HTTP GET запроса и сбора данных
function httpGet(index) {
  http.get(process.argv[2 + index], (response) => {
    let content = '';
    response.setEncoding('utf8');

    response.on('data', (data) => {
      content += data;
    });

    response.on('end', () => {
      results[index] = content;
      count++;

      if (count === 3) {
        // Все запросы выполнены, выводим результаты
        printResults();
      }
    });

    response.on('error', (err) => {
      console.error('Error:', err);
    });
  });
}

// Выполняем HTTP GET запрос для каждого URL
for (let i = 0; i < 3; i++) {
  httpGet(i);
}
