const { Markup, Composer, Scenes, Telegraf } = require('telegraf');

const yesUndefined = name => typeof name === 'undefined' ? '' : name;

const data = [];
const startStep = new Composer();
startStep.on('text', async (ctx) => {
    try {
        ctx.wizard.state.data = {}
        ctx.wizard.state.userName = ctx.message.from.username
        ctx.wizard.state.firstName = ctx.message.from.first_name
        ctx.wizard.state.lastName = ctx.message.from.last_name
        await ctx.replyWithHTML(`
        <b>Яке число вас цікавить ?</b>
<i>Наприклад 10 жовтня 2022р</i>
        `)

        return ctx.wizard.next()
    } catch (er) {
        console.log(er);
    }
})


const timeStep = new Composer()

timeStep.on('text', async (ctx) => {
    try {
        ctx.wizard.state.data.time = ctx.message.text
        await ctx.replyWithHTML(`
        <b>Оберіть час</b>
<i>Наприклад 15:00</i>
<b>Зверніть увагу,ми працюємо з 13:00 год</b>
        `)
        return ctx.wizard.next()

    } catch (er) {
        console.log(er);
    }
})
const countStep = new Composer()

countStep.on('text', async (ctx) => {
    try {
        ctx.wizard.state.data.count = ctx.message.text
        await ctx.replyWithHTML(`
        <b>Кількість осіб</b>
<i>Наприклад 1-2,3-6,6-12</i>
        `)
        return ctx.wizard.next()

    } catch (er) {
        console.log(er);
    }
})
const contactStep = new Composer()

contactStep.on('text', async (ctx) => {
    try {
        ctx.wizard.state.data.title = ctx.message.text
        await ctx.replyWithHTML(`
        <b>Вкажіть ваші контактні дані(моб.тел)</b>
<i>Наприклад +380***********</i>
        `)
        return ctx.wizard.leave()

    } catch (er) {
        console.log(er);
    }
})
// const resultStep = new Composer()

// resultStep.leave(async (ctx) => {
//     ctx.replyWithHTML('hello')
// })



const birthdayScene = new Scenes.WizardScene('birthdayWizard', startStep, timeStep, countStep, contactStep,)

module.exports = birthdayScene