const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');
const resolvers = require('./resolver');
const typeDefs = require('./schema');
const userApiFromRouter=require('./routes/userRoutes')
const cors=require('cors')
const app = express();
const port = process.env.PORT || 3001;



app.use(express.json());
app.use('/users', userApiFromRouter);
app.use(cors())
mongoose.connect('mongodb://mongo:27017/e-commerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Could not connect to MongoDB', err);
  });

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
    await server.start();
    server.applyMiddleware({ app }); // Apply Apollo Server middleware to Express app
    app.listen(port, () => {
        console.log(`Server live at http://localhost:${port}${server.graphqlPath}`);
      
    });
  }

// beforeAll(async()=>{
//     await startServer();
// })

//test my graphQl server
//well run or test cases before server starts
// test('Grpahql serve started and running',async()=>{
//     const res=await request(app)
//     .post('/graphql').send({
//         query:`
//         query{

//         _schema{

//          queryType{
//             name
         
//            }
        
//             }
         
//          }`
//     });
//     expect(res.statusCode).toBe(200);
// })


function TESTING(){
    return 1;
}
TESTING()
startServer();

function add(a,b){
    return a+b;
}
module.exports=add
