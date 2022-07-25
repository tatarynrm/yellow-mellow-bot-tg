const { Telegraf, Scenes, Markup, session } = require('telegraf');

const fs = require('fs');
const axios = require('axios')
const dataBase = fs.readFileSync('database.json')

// const RuslanTelegramId = '1060839254';
// const RuslanTelegramId = '184015320';
require('dotenv').config();




const bot = new Telegraf(process.env.BOT_TOKEN)

const birthdayScene = require('./scenes/birthday.js');
const { query, response } = require('express');

const stage = new Scenes.Stage([birthdayScene])
bot.use(session())
bot.use(stage.middleware())

bot.hears('text', (ctx) => {
    console.log(ctx);
})
bot.hears('Замовити столик', (ctx) => {

    bot.telegram.sendContact(ctx.chat.id, '+380637444337', 'Yellow Mellow');
    console.log(ctx.chat.id);
})

bot.start(async (ctx) => {

    // const chatID = '1060839254';
    // const chatID = ctx.chat.id;
    // const chatName = ctx.chat.first_name;
    // const chatLastName = ctx.chat.last_name;
    // const chatUserName = ctx.chat.username;

    // const user = {
    //     chatID,
    //     chatName,
    //     chatLastName,
    //     chatUserName
    // }
    // const url = 'https://62a376a85bd3609cee6a9eae.mockapi.io/telegramUsers';
    // const addUser = async () => {
    //     const options = {
    //         url,
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json;charset=UTF-8'
    //         },
    //         data: {
    //             chatID,
    //             chatName,
    //             chatLastName,
    //             chatUserName
    //         }
    //     };

    //     axios(options)
    //         .then(response => {
    //             console.log(response);
    //         });
    // }
    // addUser()


    bot.telegram.sendMessage(ctx.chat.id,
        `Привіт ${ctx.message.from.username} 
цей телеграм бот - твій ЄГЕРЬ 
в кальян - барі "Yellow Mellow"!😊`, {
        reply_markup: {
            keyboard: [
                [
                    { text: 'Замовити столик 🪑' }

                ],
                [
                    {
                        text: `Кальянна карта
😗🚬🌬` },
                    { text: `Коктейлі 🍹` }

                ],
                [
                    { text: 'Пиво 🍺😵🥴' },
                    { text: `Cети 🍸🍻🥂🍷🥃` },

                ],
                [
                    { text: 'Short Drinks 🍸' },
                    { text: `Напої 🧋` },

                ],
                [
                    { text: 'Місцезнаходження🎯' }

                ],
                // [
                //     { text: 'Хочу відсвяткувати ДР у вас!' }

                // ]

            ],
            resize_keyboard: true,
        }
    })
    ctx.replyWithPhoto({ source: fs.createReadStream('img/main.jpg') })
})
// bot.hears('Замовити столик 🪑', (ctx) => {
//     ctx.replyWithHTML(`Телефон для замовлень:

// 📱 <b><code>+380637444337</code></b>
// `);
// })



bot.hears('Замовити столик 🪑', (ctx) => {
    ctx.reply('Ви можете замовити столик онлайн або зателефонувати нашому менеджеру')
    bot.telegram.sendContact(ctx.chat.id, '+380637444337', 'Yellow Mellow');
    console.log(this);
})


bot.hears('Місцезнаходження🎯', (ctx) => {
    bot.telegram.sendLocation(ctx.chat.id, latitude = '49.83870331057144', longitude = '24.027840313759', { proximity_alert_radius: 10 });
})


bot.hears(`Кальянна карта
😗🚬🌬`, (ctx) => {
    ctx.replyWithPhoto({ source: fs.createReadStream('img/hookah.jpg') })
    // ctx.reply('Оберіть тип кальяну', Markup.inlineKeyboard(
    //     [
    //         [Markup.button.callback('330 грн ТАНЖ', '330')],
    //         [Markup.button.callback('270 грн Darkside', '270')],
    //         [Markup.button.callback(`240 грн Гуавнооо`, '240')]
    //     ]
    // ))
})

bot.hears('Пиво 🍺😵🥴', (ctx) => {
    ctx.replyWithPhoto({ source: fs.createReadStream('img/beer.jpg') })
})
bot.hears('Cети 🍸🍻🥂🍷🥃', (ctx) => {
    ctx.replyWithPhoto({ source: fs.createReadStream('img/sets.jpg') })
})
bot.hears('Short Drinks 🍸', (ctx) => {
    ctx.replyWithPhoto({ source: fs.createReadStream('img/short.jpg') })
})
bot.hears('Коктейлі 🍹', (ctx) => {
    ctx.replyWithPhoto({ source: fs.createReadStream('img/cocktails.jpg') })

    const secondPhoto = () => {
        return ctx.replyWithPhoto({ source: fs.createReadStream('img/cocktails2.jpg') })
    }

    setTimeout(secondPhoto, 300);

})
bot.hears('Напої 🧋', (ctx) => {
    ctx.replyWithPhoto({ source: fs.createReadStream('img/drinks.jpg') })
})
bot.hears('Напої 🧋', (ctx) => {
    ctx.replyWithPhoto({ source: fs.createReadStream('img/drinks.jpg') })
})
// bot.hears('Хочу відсвяткувати ДР у вас!', ctx => ctx.scene.enter('birthdayWizard'))

// bot.hears('h', ctx => {
//     for (let i = 0; i < 100; i++) {
//         bot.telegram.sendMessage(chat.id, 'Не буду я тебе спамити')
//     }
// })
// кальян

// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch()



// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))


const array = [1, 2, 3, 4, 43430, 434343];



