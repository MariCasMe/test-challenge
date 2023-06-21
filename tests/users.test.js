// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');


// Make a test to verify if the method getUser(id) works correctly
test ('Get user information by ID', ()=>{
    expect(getUser(4)).toMatchObject( {
        id: 4,
        username: "unsurejudy",
        email: "babariley77@gmail.com",
        password: "Kashmir1970"
    });
})
// Verify any data of the resulting object you want
test('Verifying password',()=>{
    expect(getUser(2).password).toBe("2D$aLzX9(_2");
})

// READ documentation