import { assert, expect, should } from 'chai';
import { describe } from 'mocha';
import { Directory } from 'spinal-core-connectorjs_type';
import { SpinalTwinRole } from '../src/models/SpinalTwinRole.model';
import { SpinalTwinAdminRole } from '../src/services/spinalTwinAdminRole.service';
import { SpinalTwinAdminGraph } from '../src/services/spinalTwinAdminGraph.service';

let spinalRoleService = new SpinalTwinAdminRole();
let spinalTwinGraph = new SpinalTwinAdminGraph();

describe('Spinal Service Role', async function () {
  // Make an it for initialize graph
  try {
    let directory = new Directory();
    let filename = 'TestGraph';
    await spinalTwinGraph.init(directory, filename);
  } catch (e) {
    console.log(e);
  }
  // Function pour initialiser le graph ou un simple describe
  describe('CreateRole', function () {
    it('should create a new role', async function (done) {
      try {
        const context = await spinalTwinGraph.getContext('RoleList');
        const testObj: SpinalTwinRole = {
          name: 'Access to DataRoom',
          nodeAccessId: 36458964,
        };
        const data = await spinalRoleService.createRole(testObj);
        assert.equal(data.info.name.get(), testObj.name);
        assert.equal(data.info.nodeAccessId.get(), testObj.nodeAccessId);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  describe('GetRoleNode', function () {
    it('should get a role', async function (done) {
      try {
        let roleId = '2547896';
        const data = await spinalRoleService.getRoleNode(roleId);
        assert.exists(data);
        done();
      } catch (e) {
        done(e);
      }
    });
    it('get a role with roleId null', async function (done) {
      try {
        let roleId = undefined;
        const data = await spinalRoleService.getRoleNode(roleId);
        assert.isUndefined(roleId);
        assert.notExists(data);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  describe('UpdateRole', function () {
    it('should update a role', async function (done) {
      try {
        const testObj: SpinalTwinRole = {
          name: 'Access to DataRoom',
          nodeAccessId: 36458964,
        };
        let roleId = '25478965';
        const data = await spinalRoleService.updateRole(testObj, roleId);
        assert.isDefined(testObj);
        assert.isDefined(roleId);
        assert.isTrue(data);
        done();
      } catch (e) {
        done(e);
      }
    });
    it('should update a role ', async function (done) {
      try {
        const testObj: SpinalTwinRole = {
          name: 'Access to DataRoom',
          nodeAccessId: 36458964,
        };
        let roleId = null;
        const data = await spinalRoleService.updateRole(testObj, roleId);
        assert.isDefined(testObj);
        assert.isDefined(roleId);
        assert.isBoolean(data);
        assert.isFalse(data);
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
