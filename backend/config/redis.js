'use strict'

const Env = use('Env')

module.exports = {

  connection: Env.get('REDIS_CONNECTION', 'local'),

  local: {
    host: '192.168.99.100',
    port: 6379,
    password: null,
    db: 0,
    keyPrefix: ''
  },

  cluster: {
    clusters: [{
      host: '192.168.99.100',
      port: 6379,
      password: null,
      db: 0
    },
    {
      host: '192.168.99.100',
      port: 6380,
      password: null,
      db: 0
    }]
  }
}
