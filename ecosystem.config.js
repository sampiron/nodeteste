module.exports = {
  apps: [{
    name: process.env.PM2_APP_NAME || 'meu-app-default', 
    script: 'backend/server.js',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    // Não precisa definir env aqui, vai ler do .env
    env_file: '.env'  // PM2 carrega o .env automaticamente                                                                     
  }]
};