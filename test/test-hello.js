const assert = require('assert');
const hello = require('../hello');

describe('#hello.js', () => {
    describe('#hello.getSum()', () => {
        
        before(function () {
            console.log('before:');
        });

        after(function () {
            console.log('after.');
        });

        beforeEach(function () {
            console.log('  beforeEach:');
        });

        afterEach(function () {
            console.log('  afterEach.');
        });
        
        it('hello.getSum() should return 0', () => {
            assert.strictEqual(hello.getSum(), 0);
        });
    
        it('hello.getSum(1) should return 1', () => {
            assert.strictEqual(hello.getSum(1), 1);
        });
    
        it('hello.getSum(1, 2) should return 3', () => {
            assert.strictEqual(hello.getSum(1, 2), 3);
        });
    
        it('hello.getSum(1, 2, 3) should return 6', () => {
            assert.strictEqual(hello.getSum(1, 2, 3), 6);
        });
    })
})
