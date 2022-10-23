import { Message } from "touchguild";

module.exports = {
    name: 'ping',
    altname: 'ping',
    description: 'Ping, pong!',
    execute: (message: Message) => {
        message.createMessage({content: 'Pong!', replyMessageIds: [message.id]});
    }
}