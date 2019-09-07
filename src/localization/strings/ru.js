import Constants from '../../utils/Constants';

const STRINGS = {
  LANDING_PAGE: {
    TITLE: '4stream - оповещения о пожертвованиях на стриме',
    DESCRIPTION: '4stream - оповещения о пожертвованиях (донате) на Вашем стриме. Сервис ориентирован на платформу twitch. ' +
    'Виджеты для удобной интеграции в OBS и XSplit.',
    SERVICE_DESCRIPTION: 'Оповещения о пожертвованиях (донате) во время прямой трансляции',
    QUESTION_1: 'Ты начинающий или состоявшийся стример?',
    QUESTION_2: 'Хочешь, чтобы на твоем стриме были оповещения о донате с озвучиванием сообщения?',
    QUESTION_3: 'Значит, ты зашел по адресу!',
    RATES_CARD_TITLE: 'Выгода',
    RATES_CARD_TEXT: 'Низкая комиссия. Прозрачные тарифы, которые учитывают все накладные расходы. ' +
    'Мгновенное зачисление средств на электронный кошелек стримера. ' +
    'Разнообразные способы оплаты для зрителей.',
    TTS_CARD_TITLE: 'Синтез речи',
    TTS_CARD_TEXT: 'Текст сообщения пожертвования может быть прочитан диктором. ' +
    'На выбор доступны три русскоязычных голоса.',
    DASHBOARD_CARD_TITLE: 'Удобная панель управления',
    DASHBOARD_CARD_TEXT: 'Панель управления позволяет настраивать внешний вид оповещения, ' +
    'просматривать полученные пожертвования, получать графическую статистику и многое другое.',
    LOGIN_BUTTON: 'Создать аккаунт / Войти',
    NEWS: 'Новости'
  },
  NEWS_PAGE: {
    TITLE: '4stream - Новости',
    DESCRIPTION: 'Новости 4stream. О главных нововведениях.',
    HEADER: 'Новости'
  },
  MODAL_DIALOG: {
    CONTROLS: {
      YES: 'Да',
      NO: 'Нет',
      CANCEL: 'Отмена',
      CLOSE: 'Закрыть',
      OKAY: 'Хорошо',
      CONFIRM: 'Подтвердить',
      SAVE: 'Сохранить'
    }
  },
  DASHBOARD_CHART: {
    TIME_INTERVAL: 'с %s по %s',
    YEAR_LABEL: 'год',
    DONATION_TOTAL_NUMBER: {
      ONE: 'пожертвование',
      SEVERAL: 'пожертвования',
      MANY: 'пожертвований'
    },
    DONATION_TOTAL_AMOUNT_RUBLES: {
      ONE: 'рубль',
      SEVERAL: 'рубля',
      MANY: 'рублей'
    },
    TOOLTIP_DAY: '-го',
    TOOLTIP_NUMBER: 'шт.',
    TOOLTIP_RUBLE: Constants.RUBLE
  },
  SESSION_EXPIRED_DIALOG: {
    TITLE: 'Войти в систему',
    TEXT: 'Для продолжения работы необходимо войти в систему. Хотите сделать это сейчас?'
  },
  PAYMENT_DIALOG: {
    TITLE: 'Выберите способ оплаты',
    MORE_PAYMENT_OPTIONS: '(больше способов оплаты)',
    CATEGORIES: {
      DIRECT: 'Прямые платежи',
      E_WALLET: 'Электронные деньги',
      CARD: 'Безналичный расчет',
      MOBILE: 'Мобильный телефон',
      DIRECT_DESC: 'Без использования платежного агрегатора',
      E_WALLET_DESC: 'С электронного кошелька',
      CARD_DESC: 'С карты или через интернет-банк',
      MOBILE_DESC: 'С помощью мобильного оператора'
    },
    UNSUPPORTED_PAYMENT_TYPE: 'Получатель не активировал этот метод оплаты',
    MC_MIN_AMOUNT: 'Для этого метода оплаты мин. сумма %d %s',
    FEE_ESTIMATION: 'К отправлению: %f %s, к получению с учетом комиссии: %f %s'
  },
  DONATION_FORM: {
    TTS_ENABLED: 'Синтез речи c %s %s.',
    TTS_DISABLED: 'Синтез речи отключен.',
    MIN_DONATION_AMOUNT: 'Мин. - %s %s.',
    SEND_DONATION_LABEL: 'Отправить пожертвование',
    SENDER: 'От кого',
    AMOUNT: 'Сумма в рублях',
    MESSAGE: 'Сообщение',
    MESSAGE_REMARK: 'Совет: для ручной постановки ударения используйте "+" перед ударной гласной.',
    SEND: 'Отправить',
    TTS_PREVIEW: 'Озвучить',
    TTS_PREVIEW_STOP: 'Остановить',
    MANUAL_DONATION_REMARK: '*Пожертвования, добавленные вручную, не отображаются в виджете оповещений',
    SIGN_TOOLTIP: 'Авторизоваться через twitch, чтобы отправить пожертвование от имени Вашего twitch-аккаунта (необязательно)',
    SIGN_CONFIRM: 'Подтвердить',
    SIGN_CANCEL: 'Отменить',
  },
  REMOVE_DONATION_DIALOG: {
    TITLE: 'Удаление пожертвования',
    TEXT: 'Вы уверены, что хотите удалить пожертвование от "%s" на сумму %s %s?'
  },
  DONATION_INFO_DIALOG: {
    TITLE: 'Информация о пожертвовании',
    TYPE: {
      MANUAL: 'Добавлено вручную',
      WEBMONEY: 'Отправлено через WebMoney',
      YANDEX_WALLET: 'Отправлено с Yandex кошелька',
      YANDEX_CREDIT_CARD: 'Отправлено с банковской карты',
      UNITPAY: 'Отправлено с помощью Unitpay',
      UNITPAY_MC: 'Отправлено с помощью Unitpay (мобильный платеж)',
      UNITPAY_SMS: 'Отправлено с помощью Unitpay (SMS-оплата)',
      UNITPAY_CARD: 'Отправлено с помощью Unitpay (банковская карта)',
      UNITPAY_WEBMONEY: 'Отправлено с помощью Unitpay (WebMoney)',
      UNITPAY_YANDEX: 'Отправлено с помощью Unitpay (Яндекс.Деньги)',
      UNITPAY_QIWI: 'Отправлено с помощью Unitpay (QIWI)',
      UNITPAY_ALFACLICK: 'Отправлено с помощью Unitpay (Альфа-Клик)',
      UNITPAY_CASH: 'Отправлено с помощью Unitpay (наличные)'
    },
    NO_SPEECH: 'Отсутствует',
    DONATION_ID: 'Идентификатор',
    DATE: 'Дата',
    TYPE_LABEL: 'Тип',
    SENDER: 'Отправитель',
    AMOUNT: 'Сумма',
    MESSAGE: 'Сообщение',
    SPEECH: 'Синтезированная речь'
  },
  DONATION_TABLE: {
    HEADER: {
      DATE: 'Дата',
      SENDER: 'Отправитель',
      AMOUNT: 'Сумма',
      TYPE: 'Тип',
      MESSAGE: 'Сообщение'
    },
    DONATION_TYPE: {
      MANUAL: 'Вручную',
      WEBMONEY: 'WebMoney',
      YANDEX_WALLET: 'Yandex',
      YANDEX_CREDIT_CARD: 'С карты',
      UNITPAY: 'Unitpay'
    }
  },
  FILE_UPLOAD: {
    CURRENT_FILE_LABEL: 'Текущий',
    NEW_FILE_LABEL: 'Загрузить новый',
    NO_FILE_CHOSEN: 'Не выбран',
    DEFAULT_FILE: 'По умолчанию',
    HUGE_FILE: 'Максимальный размер файла %dMB',
    FILE_NAME_TOO_LONG: 'Слишком длинное имя файла',
    UNSUPPORTED_IMAGE: 'Поддерживаются форматы PNG, JPEG и GIF',
    UNSUPPORTED_AUDIO: 'Не является аудиофайлом'
  },
  INPUT: {
    REQUIRED_FIELD: 'Поле должно быть заполнено'
  },
  SIDEBAR: {
    NEWS: 'Новости',
    DONATIONS: 'Мои пожертвования',
    SETTINGS: 'Настройки',
    WIDGETS: 'Виджеты',
    PROMO_ACTION: 'Промоакция',
    SUPPORT_SERVICE: 'Поддержать сервис'
  },
  TEXTAREA: {
    USED_CHARS: 'Использовано %d/%d символов'
  },
  TIMEZONES: {
    AUTO: 'Автоматически',
    GMT_PLUS_2: '(GMT+02:00) Москва -01 – Калининград',
    GMT_PLUS_3: '(GMT+03:00) Москва +00',
    GMT_PLUS_4: '(GMT+04:00) Москва +01 – Самара',
    GMT_PLUS_5: '(GMT+05:00) Москва +02 – Екатеринбург',
    GMT_PLUS_6: '(GMT+06:00) Москва +03 – Омск',
    GMT_PLUS_7: '(GMT+07:00) Москва +04 – Красноярск',
    GMT_PLUS_8: '(GMT+08:00) Москва +05 – Иркутск',
    GMT_PLUS_9: '(GMT+09:00) Москва +06 – Якутск',
    GMT_PLUS_10: '(GMT+10:00) Москва +07 – Южно-Сахалинск',
    GMT_PLUS_11: '(GMT+11:00) Москва +08 – Магадан',
    GMT_PLUS_12: '(GMT+12:00) Москва +09 – Петропавловск'
  },
  FOOTER: {
    USEFUL_LINKS: 'Полезные ссылки',
    LANDING: 'Главная',
    NEWS: 'Новости',
    GUIDES: 'Инструкции',
    TARIFFS: 'Тарифы',
    CONTACTS: 'Контакты',
    HELP: 'Справка',
    VK_GROUP: 'Группа ВКонтакте',
    TWITTER_ACCOUNT: 'Твиттер аккаунт'
  },
  HEADER: {
    LOGIN: 'Войти',
    DASHBOARD: 'Панель управления',
    DONATION_PAGE: 'Страница пожертвований',
    DONATION_WIDGET: 'Виджет оповещений',
    LOGOUT: 'Выйти'
  },
  SERVICE_DESCRIPTION_PAGE: {
    HEADER: 'О сервисе',
    TEXT: 'Текст',
    DESCRIPTION_PART_1: 'Сервис предназначен для стримеров и их зрителей. Стример - это геймер, транслирующий процесс ' +
    'видеоигры в прямом эфире. Стример может войти в 4stream, используя аккаунт twitch. Для зрителей регистрация не требуется.',
    DESCRIPTION_PART_2: '4stream предоставляет услугу интерактивного взаимодействия между стримером и зрителями с ' +
    'помощью пожертвований. Пожертвование - это сообщение стримеру от зрителя, сопровождающееся передачей средств. ' +
    'Сервис предоставляет зрителю удобный способ отправки средств, а стримеру - получения, а также отображает ' +
    'оповещение о пожертвовании стримеру и зрителям.'
  },
  TARIFFS_PAGE: {
    TITLE: '4stream - Тарифы',
    DESCRIPTION: 'Описание комиссий 4stream в зависимости от способа оплаты.',
    HEADER: 'Тарифы',
    PROMO_REMARK: 'Для участников промоакции нижеуказанные комиссии снижены на 0.3 %s!',
    OVERVIEW: 'Каждое пожертвование облагается комиссиями, поэтому стримеру на электронный кошелек доходит неполная сумма. ' +
    'Данная страница определяет величину комиссии, а также дает возможность оценить комиссию для произвольной суммы пожертвования. ' +
    'Обратите внимание, что комиссия сервиса 4stream включена в представленные цифры.',
    DIRECT_PAYMENTS_HEADER: 'Прямые платежи',
    DIRECT_PAYMENTS_CONTENT: 'Прямой платеж осуществляется в том случае, если в диалоге "%s" выбрана ' +
    'категория "Прямые платежи".',
    AGGREGATOR_PAYMENTS_HEADER: 'Платежи через платежный агрегатор',
    AGGREGATOR_PAYMENTS_CONTENT: 'Если в диалоге "%s" выбрана категория отличная от "Прямые платежи", ' +
    'то комиссии следующие:',
    AGGREGATOR_PAYMENTS_WITHDRAW: 'Обратите внимание, что в случае оплаты через платежный агрегатор, при выводе ' +
    'средств на электронный кошелек взимается дополнительная комиссия в зависимости от способа вывода:',
    WITHDRAW_HEADER: 'Вывод средств',
    PAYMENT_TYPE: {
      'PAYMENT_WEBMONEY': 'WebMoney',
      'PAYMENT_YANDEX_WALLET': 'Яндекс.Деньги',
      'PAYMENT_YANDEX_CREDIT_CARD': 'Банковская карта',
      'PAYMENT_UNITPAY_WEBMONEY': 'WebMoney',
      'PAYMENT_UNITPAY_QIWI': 'QIWI',
      'PAYMENT_UNITPAY_YANDEX': 'Яндекс.Деньги',
      'PAYMENT_UNITPAY_CARD': 'Банковская карта',
      'PAYMENT_UNITPAY_ALFACLICK': 'Альфа-Клик',
      'PAYMENT_UNITPAY_UNITPAY_MC_MTS': 'МТС',
      'PAYMENT_UNITPAY_UNITPAY_MC_MEGAFON': 'Мегафон',
      'PAYMENT_UNITPAY_UNITPAY_MC_BEELINE': 'Билайн',
      'PAYMENT_UNITPAY_UNITPAY_MC_TELE_2': 'Теле2'
    },
    PAYMENT_TYPE_DETAILED: {
      DIRECT: '%s (прямой платеж)',
      AGGREGATOR: '%s (платежный агрегатор)'
    },
    FEE_CALCULATOR_HEADER: 'Калькулятор комиссии',
    FEE_CALCULATOR_CONTENT: 'Калькулятор комиссии может посчитать сумму к получению в зависимости от способа оплаты.',
    FEE_CALCULATOR_AMOUNT: 'Сумма пожертвования:',
    FEE_CALCULATOR_PAYMENT_TYPE: 'Тип платежа:',
    FEE_CALCULATOR_DIRECT_PAYMENT: 'Прямой платеж',
    FEE_CALCULATOR_AGGREGATOR_PAYMENT: 'Платеж через агрегатор',
    FEE_CALCULATOR_ESTIMATE_1: 'К зачислению на кошелек',
    FEE_CALCULATOR_ESTIMATE_2: '%s:',
    FEE_CALCULATOR_ESTIMATE_3: '%s %s',
    FEE_CALCULATOR_WALLET_WEBMONEY: 'WebMoney',
    FEE_CALCULATOR_WALLET_YANDEX: 'Yandex',
    FEE_CALCULATOR_WALLET_QIWI: 'QIWI',
    TARIFFS_TABLE: {
      PAYMENT_TYPE: 'Тип платежа',
      COMMISSION: 'Комиссия'
    }
  },
  GUIDE_PAGE: {
    TITLE: '4stream - Инструкции',
    DESCRIPTION: 'Подробные инструкции по пользованию сервисом для стримеров и зрителей.',
    HEADER: {
      GENERAL: 'Инструкции',
      VIEWER: 'Зрителям',
      STREAMER: 'Стримерам'
    },
    VIEWER: {
      HEADER: 'Инструкция для зрителей',
      CONTENT_1: 'Чтобы отправить стримеру пожертвование, необходимо выполнить следующие действия:',
      CONTENT_2: `1. Перейдите на сайт 4stream по ссылке, предоставленной стримером. Убедитесь, что адрес сайта, на ` +
      `котором Вы находитесь, начинается с ${Constants.BASE_URL} и содержит псевдоним стримера.`,
      CONTENT_3: '2. Ознакомьтесь с информацией на данной странице. Обратите внимание на указанную минимальную сумму ' +
      'пожертвования и на минимальную сумму пожертвования для активации синтеза речи. Также обратите внимание на ' +
      'статус виджета оповещений. Если виджет оповещений НЕ запущен, то Ваше сообщение не будет отображено в прямом эфире, ' +
      'тем не менее стример получит переведенные средства и сможет прочитать сообщение позднее. ' +
      'Если виджет оповещений запушен, то ' +
      'сообщение отобразится стримеру в течение нескольких секунд, а затем в зависимости от задержки на стриме ' +
      'всем остальным зрителям.',
      CONTENT_4: '3. Заполните форму, введя псевдоним, сумму пожертвования и сообщение (опционально). Нажмите на кнопку ' +
      '"Отправить".',
      CONTENT_5: '4. В открывшемся диалоге выберите удобный способ оплаты. ' +
      'При оплате со счета мобильного телефона минимальная сумма платежа - 10 рублей, в остальных случаях - 3 рубля.',
      CONTENT_6: '5. После этого произойдет перенаправление на сайт платежного сервиса, на котором нужно пройти стандартные ' +
      'процедуры авторизации и подтверждения транзакции.',
      CONTENT_7: 'После того, как шаги из данной инструкции успешно выполнены, написанное Вами сообщение ' +
      'будет отображено на канале трансляции, а средства будут перечислены стримеру настолько быстро, насколько позволяет ' +
      'выбранный способ оплаты. Необходимым условием для отображения оповещения также является корректная настройка виджета со ' +
      'стороны стримера.'
    },
    STREAMER: {
      HEADER_VIDEO_GUIDES: 'Видеоинструкции',
      HEADER: 'Краткая инструкция для стримеров',
      CONTENT_1: 'Чтобы принимать пожертвования во время прямого эфира:',
      CONTENT_2: '1. Войдите в панель управления, используя аккаунт twitch.',
      CONTENT_3_1: '2. Зайдите в ',
      CONTENT_3_2: 'Настройки платежей',
      CONTENT_3_3: '. Ознакомьтесь с информацией на данной странице и введите идентификаторы Ваших электронных кошельков. Кнопка "Сохранить" подтверждает изменение настроек.',
      CONTENT_4_1: '3. Встройте ссылку на ',
      CONTENT_4_2: 'Виджет оповещений',
      CONTENT_4_3: ' как web-контент в программе, которая используется для видеостриминга (OBS, XSplit). Если ' +
      'Вы используете OBS, то убедитесь, что установлена актуальная версия OBS Studio. На момент написания данной инструкции последняя версия была 0.15.2.',
      CONTENT_5_1: '4. Поделитесь со зрителями ссылкой на Вашу ',
      CONTENT_5_2: 'Страницу пожертвований',
      CONTENT_5_3: '.',
      CONTENT_6: 'Готово. Теперь Вы можете принимать пожертвования, а сообщения будут отображены в прямом эфире!',
      OBS: 'OBS Studio',
      XSPLIT: 'XSplit'
    },
  },
  DONATION_PAGE: {
    WIDGET_STATUS: 'Виджет оповещений%s запущен',
    WIDGET_STATUS_NEGATION: ' НЕ',
    CURRENT_GAME: 'Играет в %s',
    CURRENT_VIEWERS: ', зрителей %d',
    USER_NOT_FOUND: 'Пользователь не найден'    
  },
  PAGE_NOT_FOUND: {
    TEXT: 'Запрошенная страница не существует'
  },
  RESOURCE_NOT_FOUND: {
    LANDING_BUTTON: 'На главную'
  },
  DASHBOARD: {
    HEADER: 'Панель управления',
    LOGIN_INVITATION_PART_1: 'Вам необходимо',
    LOGIN_INVITATION_PART_2: ' войти ',
    LOGIN_INVITATION_PART_3: 'в систему',
    REMARK_GENERAL: 'Вам рекомендуется:',
    REMARK_UNIT_PAY: '%d) Ввести номер кошелька QIWI, чтобы принимать пожертвования многими способами.',
    REMARK_WEBMONEY: '%d) Ввести номер кошелька WebMoney, чтобы принимать пожертвования с R-кошельков WebMoney ' +
    'с низкой комиссией.',
    REMARK_YANDEX: '%d) Ввести номер кошелька Yandex.Money, чтобы принимать пожертвования с кошельков ' +
    'Yandex и с банковских карт с низкой комиссией.',
  },
  DASHBOARD_DONATIONS: {
    TITLE: 'Пожертвования',
    NO_DONATIONS: 'Нет пожертвований',
    DONATION_INDEXES: 'Показаны пожертвования %d-%d из %d',
    ADD: 'Добавить'
  },
  ADD_MANUAL_DONATION_DIALOG: {
    TITLE: 'Добавление пожертвования вручную'
  },
  DASHBOARD_NEWS: {
    TITLE: 'Новости',
    NO_NEWS: 'Нет новостей',
    NO_TITLE: '(Без заголовка)'
  },
  DASHBOARD_SETTINGS: {
    TITLE: 'Настройки',
    SAVE_BUTTON: 'Сохранить'
  },
  DASHBOARD_SETTINGS_GENERAL: {
    SHORT_TITLE: 'Основные',
    TITLE: 'Основные настройки',
    TTS_TOOLTIP: 'Если включен, то текст сообщения зачитывается. Для активации синтеза речи<br>' +
    'сумма пожертвования должна быть не меньше минимальной',
    TTS_VOICE_TOOLTIP: 'Голос, который зачитывает текст сообщения, если синтез речи включен',
    MIN_AMOUNT_TOOLTIP: 'Минимальная сумма пожертвования, которую Вы можете получить',
    MIN_TTS_AMOUNT_TOOLTIP: 'Минимальная сумма пожертвования, при которой текст сообщения будет зачитан',
    TIME_ZONE_TOOLTIP: 'Часовой пояс, в котором отображается дата новостей, пожертвований, и происходит подсчет статистики',
    TWITCH_CHAT_NOTIFICATIONS_TOOLTIP: 'Отображать ли пожертвования в чате Вашего twitch канала. Внимание: не ' +
    'распространяется на<br>пробные и добавленные вручную пожертвования, они не будут отображены в чате.',
    READ_DONATION_META_TOOLTIP: 'Режим чтения пожертвования:<br>1) сумма, отправитель и сообщение<br>2) только сообщение',
    TTS_LABEL: 'Синтез речи',
    TTS_VOICE_LABEL: 'Голос синтеза речи',
    MIN_AMOUNT_LABEL: 'Мин. сумма пожертвования',
    MIN_TTS_AMOUNT_LABEL: 'Мин. сумма для синтеза',
    TIME_ZONE_LABEL: 'Часовой пояс',
    TWITCH_CHAT_NOTIFICATIONS_LABEL: 'Оповещения в twitch чате',
    READ_DONATION_META_LABEL: 'Режим синтеза речи',
    TTS_ENABLED: 'Включен',
    TTS_DISABLED: 'Отключен',
    TWITCH_CHAT_NOTIFICATIONS_ENABLED: 'Да',
    TWITCH_CHAT_NOTIFICATIONS_DISABLED: 'Нет',
    TTS_MODE_MESSAGE_AND_META: 'Сообщение и заголовок',
    TTS_MODE_MESSAGE: 'Только сообщение',
    TITLE_SECURITY: 'Безопасность',
    TOKEN_REMARK: 'Персональный токен содержится в ссылках на виджеты и позволяет получать доступ к информации о ' +
    'Ваших пожертвованиях. Никому не сообщайте данный токен. Если по каким-то причинам токен оказался в чужих руках, ' +
    'используйте ссылку ниже, чтобы сбросить его (не забудьте после этого обновить ссылки на виджеты).',
    TOKEN_LABEL: 'Персональный токен',
    TOKEN_RESET_LABEL: 'Сбросить'
  },
  DASHBOARD_SETTINGS_PAYMENTS: {
    SHORT_TITLE: 'Прием платежей',
    TITLE_AGGREGATOR: 'Настройки платежного агрегатора',
    TITLE_DIRECT: 'Настройки прямых платежей',
    WEBMONEY_WALLET_TOOLTIP: 'Номер R-кошелька WebMoney. Пример: R123456789012',
    YANDEX_WALLET_TOOLTIP: 'Номер кошелька Яндекс. Пример: 410010123456789',
    QIWI_WALLET_TOOLTIP: 'Номер кошелька QIWI. Пример: +79130123456',
    WEBMONEY_WALLET_LABEL: 'Номер R-кошелька WM',
    YANDEX_WALLET_LABEL: 'Номер кошелька Яндекс',
    QIWI_WALLET_LABEL: 'Номер кошелька QIWI',
    AGGREGATOR_REMARK: 'Введите номер кошелька QIWI, чтобы получать пожертвования с помощью платежного агрегатора. ' +
    'Это позволит принимать платежи многими способами: через электронные кошельки (WebMoney, QIWI, Yandex.Money), ' +
    'с банковских карт, со счета мобильного телефона. Комиссия в этом случае зависит от конкретного способа оплаты.',
    YANDEX_REMARK: 'Введите номер кошелька Yandex.Money, чтобы принимать платежи с кошельков Yandex.Money и с ' +
    'банковских карт с низкой комиссией.',
    WEBMONEY_REMARK: 'Введите номер R-кошелька WebMoney, чтобы принимать платежи с других R-кошельков WebMoney ' +
    'с низкой комиссией.'
  },
  DASHBOARD_SETTINGS_DONATION_PAGE: {
    SHORT_TITLE: 'Страница пожертвований',
    TITLE: 'Настройки страницы пожертвований',
    STREAM_STATUS_TOOLTIP: 'Отображать ли статус twitch-трансляции (онлайн/офлайн, текущая игра и количество зрителей)?',
    SHOW_TWITCH_STREAM_STATUS_YES: 'Да',
    SHOW_TWITCH_STREAM_STATUS_NO: 'Нет',
    DONATION_PAGE_TOOLTIP: 'Ваш текст на странице пожертвований',
    DONATION_PAGE_LABEL: 'Ссылка',
    STREAM_STATUS_LABEL: 'Отображать twitch-статус',
    DONATION_PAGE_TEXT_LABEL: 'Текст на странице'
  },
  DASHBOARD_WIDGETS: {
    TITLE: 'Виджеты',
    LINK_REMARK: 'Используйте ссылку на виджет в программе для проведения видеотрансляций. ' +
    'Ссылка содержит персональный токен, поэтому ее не следует никому сообщать для безопасности ' +
        'Вашего аккаунта.'
  },
  DASHBOARD_LINK_INPUT: {
    COPY_LINK: 'Скопировать',
    LINK_LABEL: 'Ссылка',
  },
  DASHBOARD_WIDGETS_ALERTS: {
    SHORT_TITLE: 'Виджет оповещений',
    TITLE_GENERAL: 'Основные настройки виджета оповещений',
    TITLE_MEDIA: 'Звук и изображение оповещения',
    TITLE_FONTS: 'Настройки шрифтов',
    LAUNCH_TEST_DONATION: 'Отправить',
    LAUNCH_TEST_DONATION_SHOW: 'Отправить и показать',
    CUSTOMIZE_FONT: 'Настроить',
    TEST_DONATION_TOOLTIP: 'Отправить пробное пожертвование<br>' +
    '"Отправить" - только отправить<br>' +
    '"Отправить и показать" - отправить и отобразить во всплывающем окне',
    DONATION_TITLE_TOOLTIP: 'Шаблон заголовка оповещения. Cодержит параметры %(pSender)s и %(pAmount)s.<br>' +
    'Параметр %(pSender)s будет заменен на имя отправителя.<br>' +
    'Параметр %(pAmount)s будет заменен на сумму пожертвования.<br>' +
    'Оба параметра должны присутствовать в шаблоне, причем ровно один раз.<br>' +
    'Значение по умолчанию: "%(defaultValue)s"',
    SOUND_VOLUME_TOOLTIP: 'Громкость звукового оповещения при проигрывании пожертвования.<br>' +
    'Целое число от 0 (минимальная) до 100 (максимальная)',
    SPEECH_VOLUME_TOOLTIP: 'Громкость прочитанного сообщения при проигрывании пожертвования.<br>' +
    'Целое число от 0 (минимальная) до 100 (максимальная)',
    START_ANIMATION_TOOLTIP: 'Анимация оповещения при появлении',
    END_ANIMATION_TOOLTIP: 'Анимация оповещения при исчезновении',
    TEST_DONATION_LABEL: 'Пробное пожертвование',
    TITLE_TEMPLATE_LABEL: 'Шаблон заголовка',
    DONATION_SOUND_VOLUME_LABEL: 'Громкость звука',
    DONATION_SPEECH_VOLUME_LABEL: 'Громкость речи',
    START_ANIMATION_LABEL: 'Анимация появления',
    END_ANIMATION_LABEL: 'Анимация исчезновения',
    TITLE_FONT_LABEL: 'Шрифт заголовка',
    MESSAGE_FONT_LABEL: 'Шрифт текста сообщения',
    SAMPLE_TEXT: 'Текст',
    DONATION_AUDIO: 'Звук пожертвования',
    DONATION_IMAGE: 'Изображение пожертвования'
  },
  DASHBOARD_WIDGETS_DONATION_GOAL: {
    SHORT_TITLE: 'Сбор средств',
    TITLE_GENERAL: 'Настройки виджета сбора средств',
    TITLE_MANAGEMENT: 'Настройки целей',
    BAR_THICKNESS_LABEL: 'Толщина индикатора',
    BAR_THICKNESS_TOOLTIP: 'Толщина индикатора прогресса сбора средств',
    TEXT_COLOR_LABEL: 'Шрифт заголовка цели',
    BAR_TEXT_COLOR_LABEL: 'Шрифт теста индикатора',
    REMAINING_TEXT_LABEL: 'Шрифт обратного отсчета',
    TOTAL_TEXT_LABEL: 'Шрифт требуемой суммы',
    TEXT_COLOR_TOOLTIP: 'Цвет текста вне индикатора прогресса сбора средств',
    BAR_COLOR_LABEL: 'Цвет индикатора',
    BAR_COLOR_TOOLTIP: 'Цвет индикатора прогресса сбора средств',
    BAR_TEXT_COLOR_TOOLTIP: 'Цвет текста внутри индикатора прогресса сбора средств',
    BAR_BACKGROUND_COLOR_LABEL: 'Цвет фона индикатора',
    BAR_BACKGROUND_COLOR_TOOLTIP: 'Цвет фона индикатора прогресса сбора средств',
    EXAMPLE_TEXT: 'Образец сбора средств',
    ADD: 'Добавить',
    DAYS_LEFT: 'Осталось дней: %s'
  },
  DONATION_GOAL_DIALOG: {
    TITLE_ADD: 'Добавление новой цели',
    UNABLE_TEXT: 'Максимальное количество целей - %d',
    TITLE_EDIT: 'Редактировать цель',
    TITLE_PLACEHOLDER: 'Заголовок',
    GOAL_AMOUNT_PLACEHOLDER: 'Требуемая сумма',
    CURRENT_AMOUNT_PLACEHOLDER: 'Начальная сумма',
    END_DATE_PLACEHOLDER: 'Дата окончания',
  },
  DONATION_GOAL_DELETE_DIALOG: {
    TITLE: 'Удаление цели',
    TEXT: 'Вы уверены, что хотите удалить цель "%s"?',
    UNABLE_TEXT: 'Деактивируйте цель перед удалением'
  },
  TEST_DONATION_DIALOG: {
    TITLE: 'Пробное пожертвование'
  },
  FONT_DIALOG: {
    ALERT_TITLE_TITLE: 'Настройка шрифта заголовка',
    ALERT_MESSAGE_TITLE: 'Настройка шрифта текста сообщения',
    SAMPLE_TEXT: 'Образец текста',
    FONT_FAMILY_LABEL: 'Шрифт',
    FONT_SIZE_LABEL: 'Размер шрифта',
    FONT_COLOR_LABEL: 'Цвет шрифта',
    SHADOW_SIZE_LABEL: 'Размер тени',
    SHADOW_COLOR_LABEL: 'Цвет тени',
    ANIMATION_LABEL: 'Анимация',
    BACKGROUND_COLOR_LABEL: 'Цвет фона',
    BACKGROUND_OPACITY_LABEL: 'Непрозрачность фона'
  },
  DASHBOARD_STATISTICS: {
    TITLE: 'Статистика',
    TIME_INTERVALS: {
      DAY: 'За день',
      WEEK: 'За неделю',
      MONTH: 'За месяц',
      YEAR: 'За год'
    },
    STATISTICS_TYPE: {
      DONATION_AMOUNT: 'По сумме',
      DONATION_COUNT: 'По количеству'
    },
    TIME_INTERVALS_CURRENT: {
      DAY: 'За сегодня',
      WEEK: 'На этой неделе',
      MONTH: 'В этом месяце',
      YEAR: 'В этом году'
    },
    CONSIDER_REMOVED_DONATIONS: 'Учитывать удаленные'
  },
  DASHBOARD_PROMO: {
    TITLE: 'Промоакция',
    TEXT: 'В честь недавнего запуска сервиса объявляется промоакция!',
    TEXT_2: 'Что дает участие в промоакции во время ее проведения?',
    TEXT_3: 'Скидку на все принимаемые пожертвования 0,3 рубля',
    TEXT_4: 'Ваш twitch логин будет указан на этой странице в виде ссылки на канал',
    TEXT_5: 'Как участвовать в промоакции?',
    TEXT_6: 'Зарегистрироваться на сайте 4stream ("Войти" в панель управления)',
    TEXT_7: 'Вступить в группу в ',
    TEXT_8: 'VK',
    TEXT_9: 'Написать комментарий в ',
    TEXT_10: 'дискуссии',
    TEXT_11: 'группы, указав свой twitch логин',
    TEXT_12: 'Как долго продлится промоакция?',
    TEXT_13: 'До 31 января 2017 года',
    TEXT_PARTICIPANTS: 'Участники промоакции:'
  },
  DASHBOARD_SUPPORT_SERVICE: {
    TITLE: 'Поддержать сервис',
    VK_GROUP_1: 'Вступите в группу в',
    VK_GROUP_2: 'VK',
    VK_GROUP_3: 'и оставайтесь в курсе новостей',
    TWITTER_1: 'Подпишитесь на нас в',
    TWITTER_2: 'твиттере',
    SHARE_1: 'Расскажите о 4stream в социальных сетях, на Вашем сайте/блоге',
    DONATE_1: 'Поддержите сервис напрямую с помощью',
    DONATE_2: 'пожертвования'
  },
  NOTIFICATIONS: {
    DONATION_REMOVAL: {
      TITLE: 'Удаление пожертвования',
      SUCCESS: 'Пожертвование успешно удалено',
      ERROR: 'Произошла ошибка'
    },
    DONATION_SEND: {
      TITLE: 'Отправка пожертвования',
      SUCCESS: 'Пожертвование успешно отправлено',
      ERROR: 'Произошла ошибка'
    },
    AUTH_ERROR: {
      TITLE: 'Авторизация',
      TEXT: 'Произошла ошибка',
      COMBINED: 'Ошибка при авторизации'
    },
    SAVE_SETTINGS: {
      TITLE: 'Сохранение настроек',
      SUCCESS: 'Настройки успешно сохранены',
      ERROR: 'Произошла ошибка'
    },
    SAVE_FILE: {
      TITLE: 'Сохранение файла',
      SUCCESS: 'Файл успешно обновлен',
      ERROR: 'Произошла ошибка'
    },
    REMOVE_FILE: {
      TITLE: 'Удаление файла',
      SUCCESS: 'Файл успешно удален',
      ERROR: 'Произошла ошибка'
    },
    DONATION_GOAL_CREATION: {
      TITLE: 'Создание цели',
      SUCCESS: 'Цель успешно создана',
      ERROR: 'Произошла ошибка'
    },
    DONATION_GOAL_UPDATE: {
      TITLE: 'Редактирование цели',
      SUCCESS: 'Цель успешно отредактирована',
      ERROR: 'Произошла ошибка'
    },
    DONATION_GOAL_DELETE: {
      TITLE: 'Удаление цели',
      SUCCESS: 'Цель успешно удалена',
      ERROR: 'Произошла ошибка'
    }
  },
  DATE_UTILS: {
    DAYS_OF_WEEK: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    DAYS_OF_WEEK_SHORT: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    MONTHS_OF_YEAR: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    MONTHS_OF_YEAR_SHORT: ['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт.', 'Ноя.', 'Дек.']
  },
  VALIDATIONS: {
    MOCK: 'Заполненное поле',
    INCORRECT_AMOUNT: 'Некорректная сумма',
    INCORRECT_TTS_AMOUNT: 'Не может быть меньше, чем мин. сумма пожертвования',
    MIN_AMOUNT: 'Минимальная сумма - %d %s',
    MAX_AMOUNT: 'Максимальная сумма - %d %s',
    WEBMONEY_WALLET: 'Введите номер R-кошелька WebMoney. Пример: R123456789012',
    YANDEX_WALLET: 'Номер кошелька Яндекс. Пример: 410010123456789',
    QIWI_WALLET: 'Номер кошелька QIWI. Пример: +79130123456',
    INTEGER_VALUE: 'Должно принимать целое значение от %d до %d',
    INCORRECT_TEMPLATE: 'Некорректный шаблон',
    INCORRECT_COLOR: 'Некорректный цвет'
  },
  HELP_PAGE_NAVIGATION: {
    ABOUT_SERVICE: {
      TITLE: 'О сервисе',
      ABOUT: 'О сервисе',
      CONTACTS: 'Контакты',
      TARIFFS: 'Тарифы'
    },
    HOWTO: {
      TITLE: 'Инструкции',
      VIEWERS: 'Зрителям',
      STREAMERS: 'Стримерам'
    }
  },
  DONATION_WIDGET: {
    REMARK: 'Это демонстрационная версия сервиса'
  },
  DONATION_GOAL_WIDGET: {
    NO_ACTIVE: 'Сбор средств: цель не создана или не активирована'
  },
  NEWS_ITEM: {
    TRY: 'Попробовать'
  },
  VIDEO_GUIDES: {
    QUICK_START: {
      TITLE: 'Начальная настройка'
    },
    DONATION_GOAL: {
      TITLE: 'Виджет сбора средств'
    }
  },
  NO_ANIMATION: 'Отсутствует',
  WELCOME_DIALOG: {
    GREETING: 'Добро пожаловать, %s!',
    CONTENT_1: 'Похоже, что Вы новый пользователь этого сервиса. ',
    CONTENT_2: 'Пользовались ли Вы другими сервисами оповещений о пожертвованиях ранее?',
    CONTENT_3_1: 'Если ',
    CONTENT_3_2: 'нет',
    CONTENT_3_3: ' , то предлагаем посмотреть ',
    CONTENT_4: 'видеоинструкцию',
    CONTENT_5: ' по начальной настройке.',
    CONTENT_6_1: 'Если ',
    CONTENT_6_2: 'да',
    CONTENT_6_3: ' , то посмотрите ',
    CONTENT_7: 'презентацию',
    CONTENT_8: ' с описанием преимуществ данного сервиса по сравнению с аналогами.'
  },
  TTS_VOICE: {
    MAXIM: 'Максим',
    TATYANA: 'Татьяна',
    ALEKSANDR: 'Александр'
  }
};

export default STRINGS;