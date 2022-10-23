import { Message } from "touchguild";

module.exports = {
    name: 'reply',
    altname: 'repl',
    description: "Repeat after me.. wooho, wooho!",
    execute: (message: Message) => {
        var args = message.content?.split(' ');
        if (args?.length as number < 2) return message.createMessage({content: "can't reply nothing", replyMessageIds: [message.id]});
        delete args?.[0];
        var msg = args?.join(' ');

        message.createMessage({ content: msg, replyMessageIds: [message.id] });
    }
}