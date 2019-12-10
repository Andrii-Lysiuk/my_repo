import { Injectable } from '@angular/core';

export interface Courses {
  id: number;
  name: string;
  description: string;
  lessons: Array<string>;
  img: string;
  sertificate: string;
}
@Injectable()
export class CoursesService {
  courses: Courses[] = [
    {
      id: 1,
      name: 'HTML5 и CSS3 Starter',
      description: 'Курс состоит из восьми логически взаимосвязанных уроков, на которых слушатель ознакомится с языком разметки гипертекста HTML, научится создавать html страницы. Познакомится с каскадными таблицами стилей – CSS, предназначенных для оформления веб страниц.',

      lessons: [
        'Введение в HTML5',
        'Работа с изображениями, таблицами и списками',
        'Каскадные таблицы стилей CSS3 часть 1',
        'Каскадные таблицы стилей CSS3 часть 2',
        'Позиционирование элементов. Виды верстки.',
        'Семантика HTML5. Новые теги.',
        'Формы. Метатеги.',
        'Макет страницы. Практика'
      ],
      img: 'assets/html5css3.jpg',
      sertificate: 'https://testprovider.com/ru/Certificate/Search/TP61512044'
    },

    {
      id: 2,
      name: 'JavaScript Essential',
      description: 'Этот курс содержит уроки, которые помогут начинающим разработчикам с нуля разобраться в JavaScript.',

      lessons: [
        'Введение в JavaScript',
        'Логические структуры',
        'Массивы',
        'Функции',
        'Объекты',
        'Практика',
        'Практика',
      ],
      img: 'assets/JS.png',
      sertificate: 'https://testprovider.com/ru/Certificate/Search/TP52332701'
    },

    {
      id: 3,
      name: 'JavaScript Advanced',
      description: 'Курс JavaScript для профессионалов будет полезным веб разработчикам и программистам, которые имеют основные навыки разработки веб приложений. Вы научитесь работать с объектами, создавать функции-конструкторы, работать с DOM деревом страницы и обрабатывать события элементов документа. Этот видеокурс поможет Вам перейти на новый уровень владения самым распространенным скриптовым языком программирования.',

      lessons: [
        'Конструкторы и прототипы',
        'Работа с документами',
        'Window. Регулярные выражения',
        'CSS и JavaScript',
        'События и обработка событий (Часть 1)',
        'События и обработка событий (Часть 2)',
        'Формы и элементы форм',
        'Cookies и механизмы сохранения данных на клиенте',
        'Работа с графикой на стороне клиента',
        'Ajax и работа с HTTP протоколами'
      ],
      img: 'assets/JS2.png',
      sertificate: 'https://testprovider.com/ru/Certificate/Search/TP86712042'
    },

    {
      id: 4,
      name: 'Twitter Bootstrap 4',
      description: 'Bootstrap 4 – это HTML, CSS, JS фреймворк для разработки кроссбраузерных веб ориентированных интерфейсов. Bootstrap представляет набор инструментов от Twitter, созданный для облегчения разработки web-приложений и сайтов, использует CSS и HTML для типографии, форм, кнопок, таблиц, сеток, навигации и т.д., а также дополнительные расширения JavaScript, упрощающие работу веб разработчика.',

      lessons: [
        'Знакомство с Bootstrap 4',
        'Типографика Bootstrap 4',
        'Компоненты Bootstrap 4',
        'JavaScript Bootstrap 4',
        'Утилиты Bootstrap 4',
      ],
      img: 'assets/bootstrap.jpg',
      sertificate: 'https://testprovider.com/ru/Certificate/Search/TP79699152'
    },

    {
      id: 5,
      name: 'HTML5&CSS3 Advanced',
      description: 'Курс состоит из уроков, на которых учащиеся смогут ознакомиться с новыми функциями HTML5 & CSS3. Студенты рассмотрят возможность использования гибкой верстки, реализации анимации, использование хранилищ браузера и многопоточности, а также подключения препроцессора и сборщика для отображения кроссбраузерности веб-страницы на различных устройствах.',

      lessons: [
        'Введение, микроданные и пользовательские данные. Геолокация',
        'Canvas',
        'Хранение данных на стороне клиента. Audio, Video',
        'Принципы построения разметки, Flex, Grid, Шаблоны сайтов',
        'Анимации и градиенты',
        'SASS основы',
        'Практика'
      ],
      img: 'assets/html5&css3adv.jpg',
      sertificate: 'https://testprovider.com/ru/Certificate/Search/TP93776881'
    },

    {
      id: 6,
      name: 'TypeScript fundamentals',
      description: 'В этом курсе Вы узнаете все, что необходимо для начала использования этого языка программирования. На протяжении данных уроков, Вы научитесь пользоваться инструментами для разработки и компиляции кода и освоите синтаксические конструкции, которые есть в TypeScript. Для успешного прохождения данного видео курса, Вам не нужны глубокие знания JavaScript, достаточно понимания базового синтаксиса.',

      lessons: [
        'Variables and Functions',
        'Classes and Interfaces',
        'Generics',
        'Modules and Namespaces',
        'Практика'
      ],
      img: 'assets/typescript.png',
      sertificate: 'https://testprovider.com/ru/Certificate/Search/TP92139441'
    },

    {
      id: 7,
      name: 'Angular essential',
      description: 'Курс Angular Essential создан для изучения Angular, который является переработанной и улучшенной версией популярного фреймворка AngularJS.',

      lessons: [
        'Введение',
        'Components',
        'Directives',
        'Services',
        'Routing',
        'Forms',
        'HTTP'
      ],
      img: 'assets/Angular.png',
      sertificate: 'https://testprovider.com/ru/Certificate/Search/TP15359543'
    },
  ];
  getAll(): Courses[] {
    return this.courses;
  }
  getOne(id: number): Courses {
    return this.courses.find((elem) => elem.id === id);
  }
}