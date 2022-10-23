import * as TouchGuild from 'touchguild';
import * as config from './config.json';
import fs from 'fs';

const client = new TouchGuild.Client({ token:  config.TOKEN })

import { Message } from "touchguild";

const files = fs.readdirSync("./commands").filter((file:any) => file.endsWith(".ts"));

for (const file of files) {
 const commandName = file.split(".")[0];
 const command = require(`./commands/${file}`);
 const listener = client.on('messageCreate', (message: Message)=> {
    if (message.content?.startsWith(`${config.PREFIX}${command.name}`) || message.content?.startsWith(`${config.PREFIX}${command.altname}`)){
        command.execute(message);
    }
 });
}

client.connect();