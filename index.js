/**
 * Created by zengzhiyong on 17/3/22.
 */
var client = require('redis').createClient('6379','127.0.0.1');
var RedLock = require('redlock-node');
var redlock = new RedLock(client);
var lock;



var fs = require('fs')
// var async = require('async')
var co=  require('co')
var thunkify = require('thunkify');




setTimeout(function () {
    test(1)
},1000)
//
// setTimeout(function () {
//     test(1)
// },4000)
var list=[]

function test(item) {
    redlock.lock('test-resource-lock-promise',3).done(
        function(lock){
           
               redlock.unlock(lock);
        },
        function(){

        }
    )
}

// setTimeout(function () {
//     test_co(1)
// },1000)
// setTimeout(function () {
//     test_co(2)
// },2000)


// test_co()
// test_co()
//
// function test_co() {
//        co.wrap(function *() {
//            console.log(11111)
//            var test1 = yield redlock.lock('test-resource-lock-promise1', 3)
//            redlock.unlock(test1);
//            console.log(2222)
//
//        })();
//
// }



