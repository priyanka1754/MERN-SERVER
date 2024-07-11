    const mongoose=require('mongoose')

    describe("MongoDB connected",()=>{
        beforeAll(async()=>{
            const url="mongodb://localhost:27017/mydb"
            await mongoose.connect(url)
        })
        test('mongodb connected to server',()=>{
            expect(mongoose.connection.readyState).toBe(1)
        })
    })

  