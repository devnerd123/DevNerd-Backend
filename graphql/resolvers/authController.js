const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

module.exports = {
    users: async () => {
        try {
            const users = await User.find();
            return users.map(user => ({ ...user._doc, _id: user.id }));
        } catch (err) {
            throw err;
        }
    },
    createUser: async (values) => {
        const userInput = values.userInput;
        try {
            const existingUser = await User.findOne({ email: userInput.email });
            if (existingUser) {
                throw new Error("User Already Exists");
            }

            const hashedPassword = await bcrypt.hash(userInput.password, 12);

            const user = new User({
                name: userInput.name,
                email: userInput.email,
                password: hashedPassword,
                is_admin: userInput.is_admin,
            });

            const savedUser = await user.save();
            console.log(savedUser);
            return { ...savedUser._doc, password: null, _id: savedUser.id };
        } catch (err) {
            throw err;
        }
    },
    login: async ({email, password})=>{
        const user = await User.findOne({email:email})
        if(!user){
            throw new Error("User Doesn't Exist!")
        }
        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if(!isCorrectPassword){
            throw new Error("Password Is Wrong!")
        }
        const token = jwt.sign({userId: user.id, email:user.email}, "DevNerdSuperSecureTokenKisiKoNhiBatanaKyaHSamjhGyeNa",{
            expiresIn: "24hr"
        });
        return {userId:user.id, token:token, tokenexp:24}
    }
};
