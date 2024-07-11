let dataSets = [];

// Set up the environment before all tests
beforeAll(() => {
    dataSets = ['raju', 'ram'];
});

// Log a message before each test
beforeEach(() => {
    console.log('before each setup is called');
});

// Log a message after all tests
afterAll(() => {
    console.log('hello');
});

// Reset the dataSets array after each test
afterEach(() => {
    dataSets = ['raju', 'ram'];
});

test('test env', () => {
    expect(dataSets.length).toBe(2);
});

test('dataset contains', () => {
    expect(dataSets).toContain('ram');
});
