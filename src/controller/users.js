const UsersModel = require('../models/users');

const getUsersByid = async (req, res) => {
    const { id } = req.params;
    try {
        const [data] = await UsersModel.getUsersByid(id);
        res.json({
            id: id,
            data: data,
            message: "GET all users success"
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();
        res.json({
            message: "GET all users success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

const createNewUser = async (req, res) => {
    const { body } = req;
    if (!body.email || !body.name || !body.address) {
        return res.status(400).json({
            message: 'Anda Mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: "CREATE News Users Success",
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error.message,
        })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    console.log(id, body)
    try {
        await UsersModel.updateUser(body, id);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: id,
                ...body //di spreed
            },
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error.message,
        })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await UsersModel.deleteUser(id);
        res.json({
            message: "delete User Success",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error.message,
        })
    }
}

module.exports = {
    getUsersByid,
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}