const assert = require('assert');

const hello = require('../asyncfn');

//测试同步函数
// it('test sync function', function(){
//     assert(true)
// })
// describe('#async hello', () => {
//     describe('#asyncCalculate()', () => {
//         // function(done) {}
//         it('#async with done', (done) => {
//             (async function () {
//                 try {
//                     let r = await hello();
//                     assert.strictEqual(r, 15);
//                     done();
//                 } catch (err) {
//                     done(err);
//                 }
//             })();
//         });

//         it('#async function', async () => {
//             let r = await hello();
//             assert.strictEqual(r, 15);
//         });

//         it('#sync function', () => {
//             assert(true);
//         });
//     });
// });