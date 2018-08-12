const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');
app.__set__
app.__get__

describe('', () => {
    let db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Oyelowo', 24);
        expect(spy).toHaveBeenCalledWith('Oyelowo', 24);
        //   expect(spy).toHaveBeenCalled();
    });

    it('should call save user with user object', () => {
        let email = 'oyelowooyedayo@gmail.com';
        let password = '1234ggg';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email,
            password
        });
    });
});