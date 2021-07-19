import { assert, expect, should } from 'chai';
import { describe } from 'mocha';
import { SpinalTwinUser } from '../src/models/SpinalTwinUser.model';
import { SpinalTwinAdminUser } from '../src/services/spinalTwinAdminUser.service';
import { SpinalTwinAdminGraph } from '../src/services/spinalTwinAdminGraph.service';
import { Directory } from 'spinal-core-connectorjs_type';

let spinalUserService = new SpinalTwinAdminUser;
let spinalTwinGraph = new SpinalTwinAdminGraph;

describe("Spinal Service User Profile", async function () {
    try {
        let directory = new Directory;
        let filename = "TestGraph";
        await spinalTwinGraph.init(directory, filename);
    } catch ( e ) {
      console.log( e );
    }
      describe("CreateUser", function () {
        it('should create a new user profile', async function (done) {
              try {
                  const Obj: SpinalTwinUser = {
                      name: "Test",
                      firstname: "testeur",
                      email: "testeur@test.com",
                      userProfileId: "25485666"
                  }
                  const data = await spinalUserService.createUser(Obj);
                  assert.exists(data);
                  done()
              } catch (e) {
                  done(e)
              }
          });
      });
      
      describe("GetUser", function () {
          it('should get a User with ID', async function (done) {
                try {
                    let userId = "2547896";
                    const data = await spinalUserService.getUser(userId);
                    assert.exists(data);
                    done()
                } catch (e) {
                    done(e)
                }
            });
            it('get a role with userId null', async function (done) {
              try {
                let userId = null;
                const data = await spinalUserService.getUser(userId);
                  assert.isUndefined(userId);
                  assert.notExists(data);
                  done()
              } catch (e) {
                  done(e)
              }
          });
        });
      
        describe("UpdateUserProfile", function () {
          it('should update a user profile', async function (done) {
                try {
                  const Obj: SpinalTwinUser = {
                    name: "Test Update",
                    firstname: "testeur",
                }
                  let userId = "25478965";
                    const data = await spinalUserService.updateUser(userId);
                    assert.isDefined(Obj);
                    assert.isDefined(userId);
                    assert.isTrue(data);
                    done()
                } catch (e) {
                    done(e)
                }
            });
            it('should update a user profile ', async function (done) {
              try {
                const Obj: SpinalTwinUser = {
                    name: "Test Update",
                    firstname: "testeur",
                }
                let userId = "25478965";
                const data = await spinalUserService.updateUser(userId);
                assert.isDefined(Obj);
                assert.isDefined(userId);
                  assert.isBoolean(data);
                  assert.isFalse(data);
                  done()
              } catch (e) {
                  done(e)
              }
          });
        });
});


   