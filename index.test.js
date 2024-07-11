const add=require('./test/sum');
test('add 1+2  to 3',()=>{
    expect(add(1,2)).toBe(3)
})
test('add 1+4  to 5',()=>{
    expect(add(1,4)).toBe(5)
})

test('Object in array',()=>{
    const data={one:1}
    data['two']=2;
    expect(data).toEqual({one:1,two:2})
})

test('value is null',()=>{
    const n=null
    expect(n).toBeNull()
})

test('value is defined',()=>{
    const a='priyanka';
    expect(a).toBeDefined()
})

//toBeTruthy -> the received values should be truth
test('value to be truth',()=>{
    const bool='true'
    expect(bool).toBeTruthy()
})


//to test for async functions
const {fetchdata,myData }= require('./test/async');

test('the data expected is admin', (done) => {
    function callback(data) {
        try {
            expect(data).toBe('admin');
            done(); // Indicate the test is done
        } catch (error) {
            done(error); // Indicate the test failed with an error
        }
    }

    fetchdata(callback);
}, 10000); // Increased timeout to 10000ms if needed


// test('callback my data', (done) => {
//     function callback(data) {
//         try {
//             expect(data).toEqual({ id: 10001 }); // Changed to toEqual for deep equality
//             done();
//         } catch (error) {
//             done(error);
//         }
//     }

//     myData(callback);
// }, 10000);


//mock function
test('mocking callback function', (done) => {
    const mockFunction = jest.fn(data => {
        expect(data).toBe('admin');
        done();
    });
    
    fetchdata(mockFunction);
});