import { assert, expect, should } from 'chai';
import { describe } from 'mocha';
import { SpinalTwinUserProfile } from '../src/models/SpinalTwinUserProfile.model';
import { SpinalTwinAdminUserProfile } from '../src/services/spinalTwinAdminUserProfile.service';
import { SpinalTwinAdminGraph } from '../src/services/spinalTwinAdminGraph.service';
import { Directory } from 'spinal-core-connectorjs_type';

let spinalUserProfileService = new SpinalTwinAdminUserProfile();
let spinalTwinGraph = new SpinalTwinAdminGraph();

describe('Spinal Service User Profile', async function () {
  try {
    let directory = new Directory();
    let filename = 'TestGraph';
    await spinalTwinGraph.init(directory, filename);
  } catch (e) {
    console.log(e);
  }
  describe('CreateUserProfile', function () {
    it('should create a new user profile', async function (done) {
      try {
        const context = await spinalTwinGraph.getContext('UserProfileList');
        const Obj: SpinalTwinUserProfile = {
          name: 'Administrateur',
          level: 50,
          roleList: [56326536, 56895623],
        };
        const data = await spinalUserProfileService.createUserProfile(Obj);
        assert.exists(data);
        assert.equal(data.info.name.get(), Obj.name);
        assert.equal(data.info.level.get(), Obj.level);
        assert.equal(data.info.roleList.get(), Obj.roleList);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  describe('GetUserProfile', function () {
    it('should get a User Profile', async function (done) {
      try {
        let userProfileId = '2547896';
        const data = await spinalUserProfileService.getUserProfile(
          userProfileId
        );
        assert.exists(data);
        done();
      } catch (e) {
        done(e);
      }
    });
    it('get a role with userProfileId null', async function (done) {
      try {
        let userProfileId = undefined;
        const data = await spinalUserProfileService.getUserProfile(
          userProfileId
        );
        assert.isUndefined(userProfileId);
        assert.notExists(data);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  describe('UpdateUserProfile', function () {
    it('should update a user profile', async function (done) {
      try {
        const testObj: SpinalTwinUserProfile = {
          name: 'Super Administrateur',
          level: 150,
          roleList: [56326536, 56895623],
        };
        let userProfile = '25478965';
        const data = await spinalUserProfileService.updateUserProfile(
          testObj,
          userProfile
        );
        assert.isDefined(testObj);
        assert.isDefined(userProfile);
        assert.isTrue(data);
        done();
      } catch (e) {
        done(e);
      }
    });
    it('should update a user profile ', async function (done) {
      try {
        const testObj: SpinalTwinUserProfile = {
          name: 'Super Administrateur',
          level: 150,
          roleList: [56326536, 56895623],
        };
        let userProfile = null;
        const data = await spinalUserProfileService.updateUserProfile(
          testObj,
          userProfile
        );
        assert.isDefined(testObj);
        assert.isDefined(userProfile);
        assert.isBoolean(data);
        assert.isFalse(data);
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
