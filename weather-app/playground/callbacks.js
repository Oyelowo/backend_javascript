let getUser = (id, callback) => {
    let user = {
        id,
        name: 'Oyelowo'
    };
    callback(user);
};

getUser(31, (userObject) => {
    console.log(userObject);
});