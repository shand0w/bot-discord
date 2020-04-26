var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var prefix = '!'
const ytdl = require('ytdl-core');
var song
let sleep = require('util').promisify(setTimeout);
var songInfo
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', async function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
		var arg = args[1];
		var args2 = args[2];
		
        args = args.splice(1);
        switch(cmd) {
			case 'stop' :
				bot.sendMessage({
				to: channelID,
				message: "Nah, naaah.... :musical_note: :musical_note:"
				});
				await sleep(2500)
				bot.sendMessage({
				to: channelID,
				message: "Huh?"
				});
				await sleep(2000)
				bot.sendMessage({
				to: channelID,
				message: "Why did you stop the music?"
				});
				await sleep(2000)
				bot.sendMessage({
				to: channelID,
				message: "Play music again, please. :pleading_face:"
				});
				await sleep(2000)
				bot.sendMessage({
				to: channelID,
				message: "I will sing more quietly, but please, play music again. :pleading_face:"
				});
				break;
			case 'skip' :
				bot.sendMessage({
				to: channelID,
				message: "Why are you skipping this song? Don't you like it?"
				});
				break;
			case 'join' :
				bot.sendMessage({
				to: channelID,
				message: 'Wanna listen to music? Me too... but unfortunately I can not do it. :worried:'
				});
				break;
			case 'p' :
				bot.sendMessage({
				to: channelID,
				message: 'Happy listening to music!'
				});
				break;
			case 'play' :
				bot.sendMessage({
				to: channelID,
				message: 'Happy listening to music!'
				});
				break;
			case 'mymood':
				bot.sendMessage({
				to: channelID,
				message: 'I am fine, thanks :slight_smile: .'
				});
				break;
			case 'mycuteness':
				bot.sendMessage({
				to: channelID,
				message: 'I am as cute as you can see :slight_smile: .'
				});
				break;
			case 'whatcaniaskyou':
				bot.sendMessage({
				to: channelID,
				message: 'mycuteness - I see you wanna know how cute i am. UWU. :hearts:\naboutme - I will tell you something myself.\nmymood - It is nice to ask someone about his mood\ncharacterinfo + character name - Let me tell you what do i think about specified character.'
				});
				break;
			case 'aboutme':
				bot.sendMessage({
				to: channelID,
				message: 'Hi. I am Sonic the Hedgehog. Ask me whatever you want to.'
				});
				break;
			case 'hi':
				bot.sendMessage({
				to: channelID,
				message: 'Hi.'
				});
				break;
			default:
				bot.sendMessage({
				to: channelID,
				message: 'Hi. I am sorry, but i can not understand you'
				});
				break;
			case 'ihateyou':
				bot.sendMessage({
				to: channelID,
				message: 'Well... maybe next time... :broken_heart: .'
				});
				break;
			case 'whatdoyouthinkof':
				switch(arg) {
					case 'ships':
					bot.sendMessage({
					to: channelID,
					message: 'Some like "sonamy" are normal. Such as "sonichu" are already strange to me. I like "sonadow" the most.\nMore generally, every ship is nice, but for me "sonadow" is the best. "sontails" is my second most favorite ship.'
					});
					break;
				default:
					bot.sendMessage({
					to: channelID,
					message: ':musical_note::musical_note: What i am think of now? :musical_note::musical_note:'
					});
					break;
				}
				break;
			case 'character':
				switch(arg) {
					case 'Panika':
						bot.sendMessage({
						to: channelID,
						message: 'Do not panic'
						});
						break;
					case 'panika':
						bot.sendMessage({
						to: channelID,
						message: 'Do not panic'
						});
						break;
					case 'Shadow':
						bot.sendMessage({
						to: channelID,
						message: 'I love him. :heart:'
						});
						break;
					case 'sonadow':
						switch(args2) {
							case 'forever':
								bot.sendMessage({
								to: channelID,
								message: 'Sonic and Shadow... Forever? Yaay! :smile:'
								});
								break;
							default:
								bot.sendMessage({
								to: channelID,
								message: 'Sonic and Shadow... Forever? Yaay! :smile:'
								});
								break;
						}
						break;
					case 'Sonadow':
						switch(args2) {
							case 'Forever':
								bot.sendMessage({
								to: channelID,
								message: 'Sonic and Shadow... Forever? Yaay! :smile:'
								});
								break;
							default:
								bot.sendMessage({
								to: channelID,
								message: 'Sonic and Shadow... Forever? Yaay! :smile:'
								});
								break;
						}
						break;
					case 'shadow':
						bot.sendMessage({
						to: channelID,
						message: 'I love him. :heart:'
						});
						break;
					case 'MyBoyfriend':
						bot.sendMessage({
						to: channelID,
						message: 'I love him so much... He is really nice :heart:'
						});
						break;
					case 'myBoyfriend':
						bot.sendMessage({
						to: channelID,
						message: 'I love him so much... He is really nice :heart:'
						});
						break;
					case 'mybf':
						bot.sendMessage({
						to: channelID,
						message: 'I love him so much... He is really nice :heart:'
						});
						break;
					case 'bf':
						bot.sendMessage({
						to: channelID,
						message: 'I love him so much... He is really nice :heart:'
						});
						break;
					case 'Amy':
						switch(args2) {
							default:
								bot.sendMessage({
								to: channelID,
								message: 'Amy-who?'
								});
								break;
						}
						break;
					case 'amy':
						switch(args2) {
							default:
								bot.sendMessage({
								to: channelID,
								message: 'Amy-who?'
								});
								break;
						}
						break;
					case 'Sonic.exe':
						bot.sendMessage({
						to: channelID,
						message: 'Strange guy...'
						});
						break;
					case 'wiktorq1337':
						bot.sendMessage({
						to: channelID,
						message: 'Nice man. :smile:'
						});
						break;
					case 'Wiktorq1337':
						bot.sendMessage({
						to: channelID,
						message: 'Nice man. :smile:'
						});
						break;
					case 'wiktorq':
						bot.sendMessage({
						to: channelID,
						message: 'Nice man. :smile:'
						});
						break;
					case 'Wiktorq':
						bot.sendMessage({
						to: channelID,
						message: 'Nice man. :smile:'
						});
						break;
					case 'sonic.exe':
						bot.sendMessage({
						to: channelID,
						message: 'Strange guy...'
						});
						break;
					case 'Tails':
						bot.sendMessage({
						to: channelID,
						message: 'One of the best and the cutest :yellow_heart: sidekick in the whole world. :yellow_heart:'
						});
						break;
					case 'tails':
						bot.sendMessage({
						to: channelID,
						message: 'One of the best and the cutest :yellow_heart: sidekick in the whole world. :yellow_heart:'
						});
						break;
					case 'Ashley':
						switch(args2) {
							default:
								bot.sendMessage({
								to: channelID,
								message: 'Another new friend? :smile:'
								});
								break;
						}
						break;
					case 'Mj':
						switch(args2) {
							case 'hedgehog':
								bot.sendMessage({
								to: channelID,
								message: 'Oh. New hedgehog.'
								});
								break;
							default:
								bot.sendMessage({
								to: channelID,
								message: 'Oh. New hedgehog.'
								});
								break;
						}
						break;
					case 'mj':
						switch(args2) {
							case 'hedgehog':
								bot.sendMessage({
								to: channelID,
								message: 'Oh. New hedgehog.'
								});
								break;
							default:
								bot.sendMessage({
								to: channelID,
								message: 'Oh. New hedgehog.'
								});
								break;
						}
						break;
					case 'Leo':
						switch(args2) {
							case '_the_neo':
								bot.sendMessage({
								to: channelID,
								message: 'Veeeeeery nice guy. Trust me.'
								});
								break;
							default:
								bot.sendMessage({
								to: channelID,
								message: 'Veeeeeery nice guy. Trust me.'
								});
								break;
						}
						break;
					case 'leo':
						switch(args2) {
							case '_the_neo':
								bot.sendMessage({
								to: channelID,
								message: 'Veeeeeery nice guy. Trust me.'
								});
								break;
							default:
								bot.sendMessage({
								to: channelID,
								message: 'Veeeeeery nice guy. Trust me.'
								});
								break;
						}
						break;
					case 'Tails.exe':
						bot.sendMessage({
						to: channelID,
						message: 'Veeeeeery nice guy. Trust me.'
						});
						break;
					case 'tails.exe':
						bot.sendMessage({
						to: channelID,
						message: 'Veeeeeery nice guy. Trust me.'
						});
						break;
					case 'UF!SANS':
						bot.sendMessage({
						to: channelID,
						message: 'Veeeeeery nice guy. Trust me.'
						});
						break;
					case 'Yourself':
						bot.sendMessage({
						to: channelID,
						message: 'I am a lonely, lovely hedgehog. :heart:\n\nI also like Shadow (UWU) and speed. Oh yeah. Shadow (UUWWUU) and speed... :heart:'
						});
						break;
					case 'yourself':
						bot.sendMessage({
						to: channelID,
						message: 'I am a lonely, lovely hedgehog. :heart:\n\nI also like Shadow (UWU) and speed. Oh yeah. Shadow (UUWWUU) and speed... :heart:'
						});
						break;
					case 'Diogenes':
						bot.sendMessage({
						to: channelID,
						message: 'Nice guy.'
						});
						break;
					case 'diogenes':
						bot.sendMessage({
						to: channelID,
						message: 'Nice guy.'
						});
						break;
					case 'Baby':
						switch(args2) {
							case 'Sonadow':
								bot.sendMessage({
								to: channelID,
								message: 'He is cutest piece of Sonadow world. I love Him :heart:'
								});
								break;
						}
						break;
					case 'baby':
						switch(args2) {
							case 'sonadow':
								bot.sendMessage({
								to: channelID,
								message: 'He is cutest piece of Sonadow world. I love Him :heart:'
								});
								break;
						}
						break;
					case 'Big':
						switch(args2) {
							case 'Sonadow':
								bot.sendMessage({
								to: channelID,
								message: 'The biggest sonadow fan here.'
								});
								break;
						}
						break;
					case 'big':
						switch(args2) {
							case 'sonadow':
								bot.sendMessage({
								to: channelID,
								message: 'The biggest sonadow fan here.'
								});
								break;
						}
						break;
					case 'Crossdressing':
						switch(args2) {
							case 'Fan':
								bot.sendMessage({
								to: channelID,
								message: 'She likes crossdressing.'
								});
								break;
						}
						break;
					case 'crossdressing':
						switch(args2) {
							case 'fan':
								bot.sendMessage({
								to: channelID,
								message: 'She likes crossdressing.'
								});
								break;
						}
						break;
					case 'ThisIsWizardhog':
						bot.sendMessage({
						to: channelID,
						message: 'He masterfully uses the magic of the elements (Ice, Fire, Lightning) as well as Arcane.'
						});
						break;
					case 'Wizardhog':
						bot.sendMessage({
						to: channelID,
						message: 'He masterfully uses the magic of the elements (Ice, Fire, Lightning) as well as Arcane.'
						});
						break;
					case 'wizardhog':
						bot.sendMessage({
						to: channelID,
						message: 'He masterfully uses the magic of the elements (Ice, Fire, Lightning) as well as Arcane.'
						});
						break;
					case 'Wizard':
						bot.sendMessage({
						to: channelID,
						message: 'He masterfully uses the magic of the elements (Ice, Fire, Lightning) as well as Arcane.'
						});
						break;
					case 'wizard':
						bot.sendMessage({
						to: channelID,
						message: 'He masterfully uses the magic of the elements (Ice, Fire, Lightning) as well as Arcane.'
						});
						break;
					
					case 'Sonic':
						bot.sendMessage({
						to: channelID,
						message: 'He? Nice guy.'
						});
						break;
					case 'sonic':
						bot.sendMessage({
						to: channelID,
						message: 'He? Nice guy.'
						});
						break;
					case 'Szwejo':
						bot.sendMessage({
						to: channelID,
						message: 'He? He is nice and smart.'
						});
						break;
					case 'szwejo':
						bot.sendMessage({
						to: channelID,
						message: 'He? He is nice and smart.'
						});
						break;
					default:
						bot.sendMessage({
						to: channelID,
						message: 'Which of my friends would you like to know what I think about?'
						});
						break;
				}
		break;
            // Just add any case commands if you want to..
        }
    }
});