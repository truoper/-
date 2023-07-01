const net = require('net');

// Создаем сервер и прослушиваем порт, указанный в первом аргументе командной строки
const server = net.createServer((socket) => {
  const date = new Date();

  // Функция для форматирования даты и времени в заданный формат
  function formatDate(date) {
    const year = date.getFullYear();
    const month = zeroPad(date.getMonth() + 1);
    const day = zeroPad(date.getDate());
    const hours = zeroPad(date.getHours());
    const minutes = zeroPad(date.getMinutes());

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  // Функция для добавления нулей к числу, если оно меньше 10
  function zeroPad(number) {
    return number < 10 ? '0' + number : number.toString();
  }

  // Отправляем клиенту текущую дату и время в заданном формате
  socket.write(formatDate(date) + '\n');
  // Закрываем соединение с клиентом
  socket.end();
});

// Запускаем сервер на указанном порту (порт берется из первого аргумента командной строки)
server.listen(Number(process.argv[2]));
