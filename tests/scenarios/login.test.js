import { assert } from 'chai';
import ReqresAPI from '$root/pages/reqres.api';
import * as data from '$root/data/user.data';

describe('As a user, I want to login', () => {

    it('Should successfully login using registered account', async () => {
        const response = await ReqresAPI.login(data.VALID_LOGIN);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["token"]);
        assert.isString(response.data.token);
    });
});

describe('As a user, I can not login without password', () => {

    it('User can not login without password', async () => {
        const response = await ReqresAPI.login(data.INVALID_LOGIN);

        assert.equal(response.status, 400);
        assert.containsAllKeys(response.data, ["error"]);
        assert.isString(response.data.error);
    });
});