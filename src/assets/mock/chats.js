const simpleChats = [
  {
    id: 1,
    name: 'Анна Петрова',
    avatar: 'https://via.placeholder.com/40x40/7366FF/FFFFFF?text=A',
    lastMessage: 'Привет! Как дела?',
    time: '14:25',
    unread: 0,
    online: true,
    messagesAfterClose: [],
    messages: [
      {
        id: 101,

        text: 'Привет! Как дела?',
        time: '14:25',
        sender: 'anna',
        status: 'read',
      },
      {
        id: 102,

        text: 'Привет! Всё отлично, работаю над новым проектом. А у тебя как?',
        time: '14:26',
        sender: 'me',
        status: 'read',
      },
      {
        id: 103,

        text: 'Тоже хорошо! Завтра будешь на совещании?',
        time: '14:27',
        sender: 'anna',
        status: 'read',
      },
      {
        id: 104,

        text: 'Привет! Как дела?',
        time: '14:25',
        sender: 'anna',
        status: 'read',
      },
      {
        id: 105,

        text: 'Привет! Всё отлично, работаю над новым проектом. А у тебя как?',
        time: '14:26',
        sender: 'me',
        status: 'read',
      },
      {
        id: 106,

        text: 'Тоже хорошо! Завтра будешь на совещании?',
        time: '14:27',
        sender: 'anna',
        status: 'read',
      },
      {
        id: 107,

        text: 'Тоже хорошо! Завтра будешь на совещании?',
        time: '14:27',
        sender: 'anna',
        status: 'read',
      },
      {
        id: 108,

        text: 'Тоже хорошо! Завтра будешь на совещании?',
        time: '14:27',
        sender: 'anna',
        status: 'read',
      },
      {
        id: 109,

        text: 'Тоже хорошо! Завтра будешь на совещании?',
        time: '14:27',
        sender: 'anna',
        status: 'read',
      },
    ],
  },
  {
    id: 2,
    name: 'Петр Сидоров',
    avatar: 'https://via.placeholder.com/40x40/67C23A/FFFFFF?text=P',
    lastMessage: 'Завтра в 10:00 на совещании',
    time: '13:45',
    unread: 3,
    online: false,
    messagesAfterClose: [],
    messages: [
      {
        id: 201,

        text: 'Привет! Нужно обсудить новый проект',
        time: '13:30',
        sender: 'peter',
        status: 'read',
      },
      {
        id: 202,

        text: 'Конечно, когда удобно встретиться?',
        time: '13:35',
        sender: 'me',
        status: 'read',
      },
      {
        id: 203,

        text: 'Завтра в 10:00 на совещании в конференц-зале',
        time: '13:45',
        sender: 'peter',
        status: 'delivered',
      },
      {
        id: 204,

        text: 'Не забудь взять с собой отчет по прошлому кварталу',
        time: '13:46',
        sender: 'peter',
        status: 'delivered',
      },
      {
        id: 205,

        text: 'И презентацию для клиента',
        time: '13:47',
        sender: 'peter',
        status: 'unread',
      },
    ],
  },
  {
    id: 5,
    name: 'Мария Иванова',
    avatar: 'https://via.placeholder.com/40x40/F56C6C/FFFFFF?text=M',
    lastMessage: '👋',
    time: '16:20',
    unread: 0,
    online: true,
    messagesAfterClose: [],
    messages: [
      {
        id: 501,

        text: 'Привет! Как твой отпуск?',
        time: '16:15',
        sender: 'me',
        status: 'read',
      },
      {
        id: 502,

        text: '👋',
        time: '16:20',
        sender: 'maria',
        status: 'read',
      },
      {
        id: 503,

        text: 'Отлично провожу время! Вернусь в понедельник',
        time: '16:21',
        sender: 'maria',
        status: 'read',
      },
    ],
  },
  {
    id: 6,
    name: 'Алексей Козлов',
    avatar: 'https://via.placeholder.com/40x40/409EFF/FFFFFF?text=А',
    lastMessage: 'Отправил тебе файл с отчетом',
    time: '10:30',
    unread: 1,
    online: true,
    messagesAfterClose: [],
    messages: [
      {
        id: 601,

        text: 'Доброе утро! Нужен отчет по проекту',
        time: '10:15',
        sender: 'alexey',
        status: 'read',
      },
      {
        id: 602,

        text: 'Уже готовлю, через 15 минут отправлю',
        time: '10:20',
        sender: 'me',
        status: 'read',
      },
      {
        id: 603,

        text: 'Отправил тебе файл с отчетом на почту',
        time: '10:30',
        sender: 'alexey',
        status: 'unread',
      },
    ],
  },
  {
    id: 8,
    name: 'Екатерина Смирнова',
    avatar: 'https://via.placeholder.com/40x40/FF6B6B/FFFFFF?text=Е',
    lastMessage: 'Спасибо за помощь с проектом!',
    time: 'Вчера',
    unread: 0,
    online: false,
    messagesAfterClose: [],
    messages: [
      {
        id: 801,

        text: 'Привет! Не могу разобраться с Vue Router',
        time: '15.01 14:00',
        sender: 'ekaterina',
        status: 'read',
      },
      {
        id: 802,

        text: 'Конечно, помогу! В чем именно проблема?',
        time: '15.01 14:15',
        sender: 'me',
        status: 'read',
      },
      {
        id: 803,

        text: 'Не работают вложенные маршруты',
        time: '15.01 14:20',
        sender: 'ekaterina',
        status: 'read',
      },
      {
        id: 804,

        text: 'Попробуй добавить <router-view> в родительский компонент',
        time: '15.01 14:25',
        sender: 'me',
        status: 'read',
      },
      {
        id: 805,

        text: 'Спасибо за помощь с проектом! Заработало! 🎉',
        time: '15.01 16:30',
        sender: 'ekaterina',
        status: 'read',
      },
    ],
  },
  {
    id: 10,
    name: 'Дмитрий Волков',
    avatar: 'https://via.placeholder.com/40x40/26A69A/FFFFFF?text=Д',
    lastMessage: 'Давай созвонимся в понедельник',
    time: '15.01',
    unread: 2,
    online: true,
    messagesAfterClose: [],
    messages: [
      {
        id: 1001,

        text: 'Привет! Есть новости по нашему проекту?',
        time: '14.01 16:00',
        sender: 'dmitry',
        status: 'read',
      },
      {
        id: 1002,

        text: 'Да, готовлю финальный отчет',
        time: '14.01 16:15',
        sender: 'me',
        status: 'read',
      },
      {
        id: 1003,

        text: 'Отлично! Давай созвонимся в понедельник чтобы обсудить детали',
        time: '15.01 10:00',
        sender: 'dmitry',
        status: 'unread',
      },
      {
        id: 1004,

        text: 'В 11:00 удобно?',
        time: '15.01 10:05',
        sender: 'dmitry',
        status: 'unread',
      },
    ],
  },
  {
    id: 11,
    name: 'Ольга Новикова',
    avatar: 'https://via.placeholder.com/40x40/7E57C2/FFFFFF?text=О',
    lastMessage: 'Жду тебя на встрече в конференц-зале',
    time: '15.01',
    unread: 0,
    online: false,
    messagesAfterClose: [],
    messages: [
      {
        id: 1101,

        text: 'Привет! Напоминаю о встрече в 15:00',
        time: '15.01 14:30',
        sender: 'olga',
        status: 'read',
      },
      {
        id: 1102,

        text: 'Спасибо! Буду вовремя',
        time: '15.01 14:35',
        sender: 'me',
        status: 'read',
      },
      {
        id: 1103,

        text: 'Жду тебя на встрече в конференц-зале',
        time: '15.01 14:55',
        sender: 'olga',
        status: 'read',
      },
    ],
  },
  {
    id: 13,
    name: 'Сергей Павлов',
    avatar: 'https://via.placeholder.com/40x40/5C6BC0/FFFFFF?text=C',
    lastMessage: 'Готов протестировать новую функциональность когда будет готово',
    time: '14.01',
    unread: 0,
    online: true,
    messagesAfterClose: [],
    messages: [
      {
        id: 1301,

        text: 'Привет! Как продвигается работа над новым модулем?',
        time: '13.01 17:00',
        sender: 'sergey',
        status: 'read',
      },
      {
        id: 1302,

        text: 'Заканчиваю, к пятнице будет готово',
        time: '13.01 17:15',
        sender: 'me',
        status: 'read',
      },
      {
        id: 1303,

        text: 'Отлично! Готов протестировать новую функциональность когда будет готово',
        time: '14.01 11:00',
        sender: 'sergey',
        status: 'read',
      },
    ],
  },
  {
    id: 15,
    name: 'Ирина Федорова',
    avatar: 'https://via.placeholder.com/40x40/FF7043/FFFFFF?text=И',
    lastMessage: 'Скинула тебе ссылку на полезный ресурс по изучению Vue.js',
    time: '13.01',
    unread: 1,
    online: false,
    messagesAfterClose: [],
    messages: [
      {
        id: 1501,

        text: 'Привет! Изучаешь Vue.js?',
        time: '13.01 14:00',
        sender: 'irina',
        status: 'read',
      },
      {
        id: 1502,

        text: 'Да, как раз начал недавно',
        time: '13.01 14:10',
        sender: 'me',
        status: 'read',
      },
      {
        id: 1503,

        text: 'Скинула тебе ссылку на полезный ресурс по изучению Vue.js',
        time: '13.01 14:20',
        sender: 'irina',
        status: 'unread',
      },
    ],
  },
]

export default simpleChats
