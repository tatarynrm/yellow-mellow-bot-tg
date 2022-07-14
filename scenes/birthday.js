const { Markup, Composer, Scenes, Telegraf } = require('telegraf');

const yesUndefined = name => typeof name === 'undefined' ? '' : name;

const startStep = new Composer();
startStep.on('text', async (ctx) => {
    try {
        ctx.wizard.state.data = {}
        ctx.wizard.state.userName = ctx.message.from.username
        ctx.wizard.state.firstName = ctx.message.from.first_name
        ctx.wizard.state.lastName = ctx.message.from.last_name
        await ctx.replyWithHTML('<b>Яке число вас цікавить ?</b>')

        return ctx.wizard.next()
    } catch (er) {
        console.log(er);
    }
})


const dateStep = new Composer()

dateStep.on('text', async (ctx) => {
    try {
        ctx.wizard.state.data.title = ctx.message.text
        await ctx.replyWithHTML('<b>Оберіть час</b>')
        return ctx.wizard.next()
    } catch (er) {
        console.log(er);
    }
})
const birthdayScene = new Scenes.WizardScene('birthdayWizard', startStep, dateStep)
module.exports = birthdayScene