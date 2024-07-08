// const express=require('express')
// const router=express.Router()
// const typeDefs=require('../schema')
// const resolvers=require('../resolver')
// const {ApolloServer,gql}=require('apollo-server-express')
// const { graphql } = require('graphql')
// const server=new ApolloServer({typeDefs,resolvers})
// //:3001/users/register
// router.post('/register',async(req,res)=>{
//     try{
//         const {name,email,password}=req.body
//         const {data,error}=await server.executeOperation({
//             query:gql`
//                 mutation{
//                     createUser(input:{name:"${name}",
//                     email:"${email}",password:"${password}"}{
//                     id name email password
                
//                 }
//             }`
//         })
//         if(error){return res.status(500).send({message:err})}
//         res.send(201).send(data)
//     }catch(err){
//         res.status(500).send({message:err})
//     }
// })


const express = require('express');
const router = express.Router();
const typeDefs = require('../schema');
const resolvers = require('../resolver');
const { ApolloServer, gql } = require('apollo-server-express');

const server = new ApolloServer({ typeDefs, resolvers });

async function startApolloServer() {
    await server.start();
    server.applyMiddleware({ app: router });
}

startApolloServer(); // Start Apollo server and apply middleware

// :3001/users/register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const { data, errors } = await server.executeOperation({
            query: gql`
                mutation CreateUser($input: CreateUserInput!) {
                    createUser(input: $input) {
                        id
                        name
                        email
                        password
                    }
                }
            `,
            variables: {
                input: { name, email, password }
            }
        });

        if (errors) {
            return res.status(500).send({ message: errors[0].message });
        }

        res.status(201).send(data.createUser);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router;
