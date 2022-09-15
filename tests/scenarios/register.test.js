import chai, { assert, expect} from 'chai';
import jsonSchema from 'chai-json-schema';
import ReqresAPI from '$root/pages/reqres.api';
import * as data from '$root/data/user.data';
import * as schema from '$root/schema/register.schema';

chai.use(jsonSchema)

// kalau ingin menjalankan hanya 1 it, maka gunakan it.only
// kalau hanya it saja, maka semua it akan dijalankan
describe('As a guest, i want to register', () => {
    it.only('Should successfully register using valid account', async() => {
        const response = await ReqresAPI.register(data.VALID_REGISTER);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["id", "token"]);
        assert.isNumber(response.data.id);
        assert.isString(response.data.token);
        expect(response.data).to.be.jsonSchema(schema.VALID_REGISTER_SCHEMA)
    });
});