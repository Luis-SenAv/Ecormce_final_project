const { createUser } = require('../createData/userCreate');
const sequelize = require('../utils/connection');
require('../models')

const testMigrate = async () => {

    try {
        await sequelize.sync({ force: true })
        console.log('DB reset ✅');
        await createUser()
        process.exit()
    } catch (error) {
        console.error(error);
    }
}

testMigrate()