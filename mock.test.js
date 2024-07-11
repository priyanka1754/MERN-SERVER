const {getData,getRaw} = require('./test/utils');
const {processData,processRaw} = require('./test/processData');

// Mock the module './test/utils'
jest.mock('./test/utils', () => ({
    getData: jest.fn(),
    getRaw:jest.fn()
}));

test('mock the process data', () => {
    // Mock the return value of getData
    getData.mockReturnValue('mocked data');
    

    const result = processData();
    expect(result).toBe('processed:mocked data');
});


test('Mocked raw data',()=>{
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true);
})
