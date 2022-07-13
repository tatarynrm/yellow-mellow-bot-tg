const { Telegraf, Markup } = require('telegraf')
require('dotenv').config();
const fs = require('fs')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
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
                    { text: 'Ми на Google Maps 🗺️' }

                ]

            ],
            resize_keyboard: true,
        }
    })
    ctx.replyWithPhoto({ source: fs.createReadStream('img/main.jpg') })
})
bot.hears('Замовити столик 🪑', (ctx) => {
    ctx.replyWithHTML(`Телефон для замовлень:
    
📱 <b><code>+380637444337</code></b>
`);
})

bot.hears('Ми на Google Maps 🗺️', (ctx) => {
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

    setTimeout(secondPhoto, 1000);

})
bot.hears('Напої 🧋', (ctx) => {
    ctx.replyWithPhoto({ source: fs.createReadStream('img/drinks.jpg') })
})
bot.hears('Напої 🧋', (ctx) => {
    ctx.replyWithPhoto({ source: fs.createReadStream('img/drinks.jpg') })
})
// bot.command('stream', (ctx) => ctx.replyWithPhoto({ source: fs.createReadStream('/cats/cat2.jpeg') }))


// кальян

// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))