import { Message } from "touchguild"

module.exports = {
    name: 'bruh',
    altname: 'bruhh',
    description: 'just a big bruh',
    execute: (message: Message) => {
        message.createMessage({content: 'yes bruh'});
    }
}