const { userModel } = require('../model/User.model');
const bcrypt = require('bcrypt');

const userController = {
    getAll: async (req, res) => {
        try {
            const target = await userModel.find({});
            res.send(target);
        } catch (error) {
            res.status(500).send('An error occurred while getting items');
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await userModel.findOne({ email });
            if (user && await bcrypt.compare(password, user.password)) {
                return res.status(200).send(user);
            } else {
                return res.status(400).send('Password or email is incorrect');
            }
        } catch (error) {
            res.status(500).send('An error occurred during login');
        }
    },
    register: async (req, res) => {
        const { name, surname, email, password, age } = req.body;
        try {
            let user = await userModel.findOne({ email });
            if (user) {
                return res.status(409).send('Email already exists');
            }
            const salt = await bcrypt.genSalt(10);
            const newPassword = await bcrypt.hash(password, salt);
            const newUser = new userModel({ name, surname, email, password: newPassword, age });
            await newUser.save();
            res.status(201).send(newUser);
        } catch (error) {
            res.status(500).send('An error occurred while registering');
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        try {
            await userModel.findByIdAndDelete(id);
            res.send("User deleted!");
        } catch (error) {
            res.status(500).send('An error occurred while deleting item');
        }
    },
    edit: async (req, res) => {
        const { id } = req.params;
        const { name, surname, email, password, age } = req.body;
        try {
            const salt = await bcrypt.genSalt(10);
            const newPassword = await bcrypt.hash(password, salt);
            const editUser = await userModel.findByIdAndUpdate(id, { name, surname, email, password: newPassword, age }, { new: true });
            if (editUser) {
                res.status(200).send(editUser);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            res.status(500).send('An error occurred while updating user');
        }
    }
};

module.exports = { userController };
