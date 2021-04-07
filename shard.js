const {ShardingManager} = require ('discord.js');
const manager = new ShardingManager ('./index.js', {totalShards: 'auto', token: 'ODI2NDM0ODU2NTM5MjU4OTAw.YGMbcA.OFBqgoy0oWoOnjkHSH9Fo79X-Js'}); // TOKEN discord.com/developers Alabilirsiniz!

manager.on ('shardCreate', shard => console.log (`Shardlar Başlatılıyor!`));
manager.spawn ();