import { Message } from "touchguild";

module.exports = {
    name: 'pong',
    altname: 'pong',
    description: 'Pong, ping!',
    execute: (message: Message) => {
        message.createMessage({content: 'Ping!', replyMessageIds: [message.id]});
    }
}