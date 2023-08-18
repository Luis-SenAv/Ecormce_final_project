const User = require("../models/User")

const createUser=async()=>{

    await User.create(
        {
            firstName: "Shayra Camila",
            lastName: "Seña",
            email: "luchito721@outlook.com",
            password:"1234",
            phone: "+573244702548"
        }       
    )
}

module.exports={
    createUser
}