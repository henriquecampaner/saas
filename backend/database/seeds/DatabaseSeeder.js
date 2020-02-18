'use strict'

const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Henrique',
      email: 'henrique@campaner.me',
      password: '123456'
    })

    await user.teams().create({
      name: 'TeamCampaner',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
