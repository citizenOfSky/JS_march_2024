// Масиви та об'єкти:
// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
    let modules = ['html',
                          'css',
                          'js',
                          'mysql',
                          'mongodb',
                          'angular',
                          'aws',
                          'docker',
                          'python core',
                          'python advanced']

    console.log(modules[0]);
    console.log(modules[1]);
    console.log(modules[2]);
    console.log(modules[3]);
    console.log(modules[4]);
    console.log(modules[5]);
    console.log(modules[6]);
    console.log(modules[7]);
    console.log(modules[8]);
    console.log(modules[9]);

    c.log(modules);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
{
    let book_1 = {
        title: 'The Secret History',
        pageCount: 640,
        genre: "Modern thriller"
    }

    let book_2 = {
        title: 'We Were Liars',
        pageCount: 257,
        genre: "Modern thriller"
    }

    let book_3 = {
        title: 'Misery',
        pageCount: 384,
        genre: "Modern thriller"
    }
    console.log(book_1, book_2, book_3);
}

    // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
    //  Поле "автори" - являється  масивом. Кожен автор має поля name та age.
    let book_1 = {
        title: 'The Secret History',
        pageCount: 640,
        genre: "Modern thriller",
        author: [
            {name: 'Donna Tartt'},
            {age: 74}
        ]
    }

    let book_2 = {
        title: 'We Were Liars',
        pageCount: 257,
        genre: "Modern thriller",
        author: [
            {name: 'E. Lockhart',
             age: 65
            }
        ]
    }

    let book_3 = {
        title: 'Misery',
        pageCount: 384,
        genre: "Modern thriller",
        author: [
            {name: 'Stephen King',
             age: 78
            }
        ]
    }
    console.log(book_1, book_2, book_3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
    let users = [
        {name: 'Aleks', username: 'halk', password: 1234},
        {name: 'Oleg', username: 'bober', password: 5648},
        {name: 'Lesya', username: 'kvitka', password: 8469},
        {name: 'Oleksa', username: 'nikita', password: 7842},
        {name: 'Mykyta', username: 'cowboy', password: 5493},
        {name: 'Karyna', username: 'vyskochka', password: 4836},
        {name: 'Olga', username: 'queen', password: 9618},
        {name: 'Victor', username: 'driver', password: 8210},
        {name: 'Victoria', username: 'malina', password: 6928},
        {name: 'Albina', username: 'volonter', password: 8106},
    ]

    console.log(users[0]);
    console.log(users[1]);
    console.log(users[2]);
    console.log(users[3]);
    console.log(users[4]);
    console.log(users[5]);
    console.log(users[6]);
    console.log(users[7]);
    console.log(users[8]);
    console.log(users[9]);

console.log(users);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері
// за термін в 7 днів. Як зробити цей масив - вам потрібно подумати.
// Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
    let temperature_of_week = [
    {
        Monday: [
        {
         morning: 9,
         afternoon: 15,
         evening: 12}
        ]
    },
    //  Не знаю як краще, в рядках чи "гарно"?
    {Tuesday: [{morning: 8,afternoon: 16,evening: 11}]},
    {Wednesday: [{morning: 6,afternoon: 11,evening: 12}]},
    {Thursday: [{morning: 5,afternoon: 10,evening: 13}]},
    {Friday: [{morning: 7,afternoon: 12,evening: 11}]},
    {Saturday: [{morning: 3,afternoon: 14,evening: 14}]},
    {Sunday: [{morning: 4,afternoon: 10,evening: 13}]},
    ]
    console.log(temperature_of_week);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
    let x = 0
        if (x !== 0){
            console.log(true);
        }
        else{
            console.log(false);
        }

// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
    let time = 29;
        if (time >= 0 && time <= 14) {
            document.write('<h1>first quarter</h1>');
        }
        else if (time > 14 && time <= 29) {
            document.write('<h1>second quarter</h1>');
        }
        else if (time > 29 && time <= 44) {
            document.write('<h1>third quarter</h1>');
        }
        else if (time > 44 && time <= 59) {
            document.write('<h1>quater quarter</h1>');
        }

    // - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
    let day = 31;
        if (day >=1 && day <=10) {
            document.write('<h1>first decade</h1>');
        }
        else if (day >10 && day <=20) {
            document.write('<h1>second decade</h1>');
        }
        else if (day >20 && day <=31) {
            document.write('<h1>third decade</h1>');
        }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
    let day_of_week = 5;
        switch (day_of_week) {
            case day_of_week = 1:
                console.log('Monday');
                break;
            case day_of_week = 2:
                console.log('Tuesday');
                break;
            case day_of_week = 3:
                console.log('Wednesday')
                break;
            case day_of_week = 4:
                console.log('Thursday');
                break;
            case day_of_week = 5:
                console.log('Friday');
                break;
            case day_of_week = 6:
                console.log('Saturday')
                break;
            case day_of_week = 7:
                console.log('Sunday')
                break;
            default:
                console.log(false)
        }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
    let number_1 = 77;
    let number_2 = 77;
        if (number_1 < number_2) {
            console.log(number_2);
        }
        else if (number_1 > number_2) {
            console.log(number_1);
        }
        else if (number_1 === number_2) {
            console.log('These numbers are equal');
        }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який, буде присвоювати змінній х значення "default"
//     якщо ви намагаєтесь присвоїти в неї falsy-значення
//     (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
{
    let x = 0;
    if (x === true) {
        console.log(true)
    }
    else x = false
        console.log(false || 'default')
}

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
        if (coursesAndDurationArray[0].monthDuration >5) {
            console.log('Супер')
        }else if (coursesAndDurationArray[1].monthDuration >5) {
                console.log('Супер')
        }else if (coursesAndDurationArray[2].monthDuration >5) {
                console.log('Супер')
        }else if (coursesAndDurationArray[3].monthDuration >5) {
                console.log('Супер')
        }else if (coursesAndDurationArray[4].monthDuration >5) {
                console.log('Супер')
        }else if (coursesAndDurationArray[5].monthDuration >5) {
                console.log('Супер')
        }else {
            console.log('')
        }