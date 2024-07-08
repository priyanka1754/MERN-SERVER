const User = require('./model/userSchema');

const resolvers = {
    Query: {
        getUser: async (_, { id }) => {
            return await User.findById(id);
        },
        getUsers: async () => {
            return await User.find();
        }
    },
    Mutation: {
        createUser: async (_, { input }) => {
            try {
                const { name, email, password } = input;
                if (!name || !email || !password) {
                    throw new Error('Enter all fields');
                }
                const newUser = new User({ name, email, password });
                return await newUser.save();
            } catch (err) {
                throw new Error(err);
            }
        },
        changePass: async (_, { id, password }) => {
            try {
                const userNew = await User.findByIdAndUpdate(id, { password: password }, { new: true });
                if (!userNew) {
                    throw new Error('User not found');
                }
                return userNew;
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    User: { 
        email: (parent) => parent.email || '',
        name: (parent) => parent.name || '',
        password: (parent) => parent.password || '',
    }
};

module.exports = resolvers;
