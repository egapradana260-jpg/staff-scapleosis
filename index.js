const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Scapleois.aternos.me', // GANTI dengan IP server Aternos kamu
    port: 17760,                         // GANTI dengan Port server Aternos kamu
    username: 'STAFF SCAPLEOSIS',            // Nama bot di Minecraft
    version: spesifik
  });

  bot.on('spawn', () => {
    console.log('Bot berhasil masuk ke server!');
    
    // Gerakan acak dan melompat tiap 15 detik biar gak kena kick AFK
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);

      const controls = ['forward', 'back', 'left', 'right'];
      const randomControl = controls[Math.floor(Math.random() * controls.length)];
      
      bot.setControlState(randomControl, true);
      setTimeout(() => bot.setControlState(randomControl, false), 1000);
    }, 15000);
  });

  bot.on('end', () => {
    console.log('Bot terputus, mencoba masuk lagi dalam 30 detik...');
    setTimeout(createBot, 30000);
  });

  bot.on('error', err => console.log('Error:', err));
}

createBot();

