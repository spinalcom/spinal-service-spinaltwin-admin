import {
  SpinalGraphService,
  SpinalNode,
} from 'spinal-env-viewer-graph-service';
import {
  CANNOT_CREATE_INTERNAL_ERROR,
  ROLE_LIST,
  SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST,
  SPINALTWIN_ADMIN_SERVICE_USER_PROFILE_RELATION_NAME,
} from '../constant';
import { SpinalTwinRole } from '../models/SpinalTwinRole.model';
import { SpinalTwinAdminGraph } from './spinalTwinAdminGraph.service';
let spinalTwinGraph = new SpinalTwinAdminGraph();
/**
 *
 * @export
 * @class SpinalTwinAdminRole
 */
export class SpinalTwinAdminRole {
  /**
   * @param {SpinalTwinRole|string} spinalTwinRole
   * @returns {Promise<string>}
   * @memberof SpinalTwinAdminRole
   */
  async createRole(
    spinalTwinRole: SpinalTwinRole | string
  ): Promise<SpinalNode<any>> {
    if (typeof spinalTwinRole === 'string')
      spinalTwinRole = { name: spinalTwinRole };

    const roleId = SpinalGraphService.createNode(spinalTwinRole, undefined);
    let context = await spinalTwinGraph.getContext(ROLE_LIST);
    const result = SpinalGraphService.addChildInContext(
      context.info.id.get(),
      roleId,
      context.info.id.get(),
      SPINALTWIN_ADMIN_SERVICE_USER_PROFILE_RELATION_NAME,
      SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST
    )
      .then(async (res) => {
        return res;
      })
      .catch((e) => {
        console.error(e);
        return Promise.reject(Error(CANNOT_CREATE_INTERNAL_ERROR));
      });
    return result;
  }

  /**
   * @param {string} roleId
   * @returns {void}
   * @memberof SpinalTwinAdminRole
   */
  getRoleNode(roleId: string) {
    const realNode = SpinalGraphService.getRealNode(roleId);
    if (realNode) {
      return realNode.contextIds._attribute_names.find((id) => {
        const node = SpinalGraphService.getRealNode(id);
        if (!node) return false;
        return node.getType().get();
      });
    }
  }

  /**
   * @param {string} roleId
   * @returns {void}
   * @memberof SpinalTwinAdminRole
   */
  async getAllRole(): Promise<any[]> {
    let context = await spinalTwinGraph.getContext('RoleList');
    return SpinalGraphService.getChildrenInContext(
      context.info.id.get(),
      context.info.id.get()
    ).then((node) => {
      return node;
    });
  }

  /**
   * @param {string} roleId
   * @returns {void}
   * @memberof SpinalTwinAdminRole
   */
  getRole(roleId: string): any {
    return SpinalGraphService.findNode(roleId).then((node) => {
      return node;
    });
  }

  /**
   * @param {SpinalTwinRole} spinalTwinRole
   * @param {string} roleId
   * @returns {void}
   * @memberof SpinalTwinAdminRole
   */
  async updateRole(
    spinalTwinRole: SpinalTwinRole | string,
    roleId: string
  ): Promise<any> {
    if (
      typeof roleId === 'undefined' ||
      typeof spinalTwinRole === 'undefined'
    ) {
      return;
    }
    const node = SpinalGraphService.getRealNode(roleId);
    const res = await SpinalGraphService.modifyNode(node.info.id.get(), <any>{
      name: spinalTwinRole,
    });
    return res;
  }

  /**
   * @param {string} roleId
   * @returns {void}
   * @memberof SpinalTwinAdminRole
   */
  deleteRole(roleId: string) {}
}
