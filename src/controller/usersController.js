const UsersModel = require('../models/usersModel')

const getAllUsers = async (req, res) => {
    try {
        const data = await UsersModel.getAllUsers();
        res.json({
            message: 'GET all users success',
            data
    })
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        res.status(500).json({
            message: 'Terjadi kesalahan saat mengambil data.',
            error: error.message,
        });
    }
   
}

const createNewUsers = async (req, res) =>{
    try {
        const newUser = req.body
        const user = await UsersModel.createUser({
            data:{
                name: newUser.name,
                email: newUser.email,
                addres: newUser.address
            }
        });
        console.log(user)
        res.json({
        message: 'CREATE new user success',
        data: user
        })
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        res.status(500).json({
            message: 'Terjadi kesalahan saat mengambil data.',
            error: error.message,
        });
    }
    
}

const updateUser = (req, res) =>{
    const {id} = req.params
    console.log(`idUser : ${id}`);
    res.json({
        message: 'UPDATE user success',
        data: req.body
    })
}

const deleteUser = ((req , res) =>{
    const {id} = req.params;
    console.log(`delete id: ${id}`);
    res.json({
        message: 'Delete user success',
        data: {
            id: id,
            name : "andika",
            email: "andika@gmail.com"
        }
    })
})

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser
}