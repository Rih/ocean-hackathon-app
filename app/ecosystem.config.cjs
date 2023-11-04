module.exports = {
  apps : [{
    name: "svelte_app_server",
    script: "./build/index.js",
    instances: 1,
    autorestart: true,
    watch: false,
    ignore_watch: ["node_modules"],
    max_memory_restart: "1G",
    exec_mode: "fork",
    restart_delay: 30000,
    cwd: "./",
    env: {
        NODE_ENV: "development",
        NODE_PORT: 3000,
        PORT: 3000,
        IP: "localhost",
    },
    env_production: {
      NODE_ENV: "production",
      NODE_PORT: 4000,
      PORT: 4000,
      IP: "localhost",
    }
  }, 
],

  deploy : {
    production : {
      user : "rodrihgo",
      host : "localhost",
      ref  : "origin/main",
      repo : "https://github.com/Rih/ocean-hackathon-app.git",
      path : "/app",
      "pre-deploy-local": "",
      "post-deploy" : "pnpm install && pm2-runtime reload ecosystem.config.js --env production",
      "pre-setup": ""
    }
  }
};
