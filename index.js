const TelegramBot = require("node-telegram-bot-api");

const token = '7221705347:AAHxI7UheCmN2lGtMz_-BJsYQvlwAz569QU';

const bot = new TelegramBot(token, { polling: true });
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


bot.onText(/\/start/, (msg) => {
    // console.log(msg);
    const opt = {
        reply_to_message_id: msg.message_id,
        reply_markup: JSON.stringify({
            keyboard: [
                ["Ahvoling qanday?"],
                ["Ishlaring joydami?"],
                ["Isming nima?"],
                ["Bugungi sana?"]
            ],
            "one_time_keyboard": true
        })
    }
    if (msg.chat.type === "private") {
        bot.sendMessage(msg.chat.id, "Salom Men bot man", opt)
    }
})
bot.onText(/Ahvoling qanday ?/, (msg) => {
    setTimeout(() => {
        bot.sendMessage(msg.chat.id, " Zo'r ヾ(•ω•`)o")
    }, [2000])
})
bot.onText(/Ishlaring joydami ?/, (msg) => {
    setTimeout(() => {
        bot.sendMessage(msg.chat.id, " Yaxshi \(￣︶￣*\))")
    }, [2000])
})
bot.onText(/Isming nima ?/, (msg) => {
    setTimeout(() => {
        bot.sendMessage(msg.chat.id, " Bot （＾∀＾●）ﾉｼ")
    }, [2000])
})
bot.onText(/Bugungi sana ?/, (msg) => {
    const date = new Date();
    setTimeout(() => {
        bot.sendMessage(msg.chat.id, " Kalendarga qara " + date.getDate().toString() + " o(*°▽°*)o")
    }, [1000])
})