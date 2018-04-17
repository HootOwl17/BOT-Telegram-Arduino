const TelegramBot = require('node-telegram-bot-api');
const SerialPort = require('serialport');

// replace the value below with the Telegram token you receive from @BotFather
const token = '517895758:AAHo_YwJVayge-P6GiYYw2ybe8xtwRCGbZQ';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

var IdMiChat = HOOTOWLBOT;//cambiar por tu ID del chat

var SerialPort = require('serialport');
var MiPuerto = new SerialPort('/dev/ttyUSB0', {
  baudRate: 9600,
  autoOpen: true
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("El ID del char" + chatId);
  var Mensaje = msg.text;
  if (Mensaje == "Contador") {
    console.log("Iniciando Contador");
    console.log("Detenerlo con Boton");
    bot.sendMessage(chatId, 'Iniciando Contador');
    bot.sendMessage(chatId, 'Detenerlo con Boton');
    MiPuerto.write("H");
  }
});

MiPuerto.setEncoding('utf8');

MiPuerto.on('data', function(data) {
  console.log("Lo que entro es " + data);
  if (data[0] == 'H') {
    console.log("Boton Precionado");
    bot.sendMessage(IdMiChat, "Contador Detenido");
  }
});
