module.exports = {                                                                                                      
  apps: [{                                                                                                              
    name: 'nodetest',                                                                                                   
    script: 'backend/server.js',                                                                                        
    exec_mode: 'fork',                                                                                                  
    instances: 1,                                                                                                       
    autorestart: true,                                                                                                  
    watch: false,                                                                                                       
    max_memory_restart: '1G'                                                                                            
    // Não precisa definir env aqui, vai ler do .env                                                                    
  }]                                                                                                                    
};  