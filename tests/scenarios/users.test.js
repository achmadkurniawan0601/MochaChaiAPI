import { assert } from 'chai';
import ReqresAPI from '$root/pages/reqres.api';
import * as data from '$root/data/user.data';

describe('As a user, I want to check my profile ', () => {

    it('Should successfully check specified user', async () => {
        const response = await ReqresAPI.users();

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["data", "support"]);
    });
});

describe('As a user, I want to update my profile', () => {

    it('Should successfully update user profile', async () => {
        const response = await ReqresAPI.putUsers(data.USERS_UPDATE);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["name", "job", "updatedAt"]);
        assert.isString(response.data.name);
        assert.isString(response.data.job);
        assert.isString(response.data.updatedAt);
    });
});

describe('As a user, I want to partial update my profile', () => {

    it('Should successfully partial update user profile', async () => {
        const response = await ReqresAPI.patchUsers(data.USERS_UPDATE);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["name", "job", "updatedAt"]);
        assert.isString(response.data.name);
        assert.isString(response.data.job);
        assert.isString(response.data.updatedAt);
    });
});

describe('As a user, I want to delete my account', () => {

    it('Should successfully delete account', async () => {
        const response = await ReqresAPI.deleteUsers();

        assert.equal(response.status, 204);
    });
});

describe('As a user, I want to view Single User', () => {

    it('Should successfully view Single User account', async () => {
        const response = await ReqresAPI.usersSingle();

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["data"]);
    });
})