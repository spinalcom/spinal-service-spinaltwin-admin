import {
  SpinalGraphService,
  SpinalGraph,
  SpinalContext,
  SpinalNode,
} from 'spinal-env-viewer-graph-service';
import {
  CANNOT_CREATE_INTERNAL_ERROR,
  SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST,
  SPINALTWIN_ADMIN_SERVICE_USER_PROFILE_RELATION_NAME,
  USER_PROFILE_LIST,
} from '../constant';
import { SpinalTwinUserProfile } from '../models/SpinalTwinUserProfile.model';
import { SpinalTwinAdminGraph } from './spinalTwinAdminGraph.service';
let spinalTwinGraph = new SpinalTwinAdminGraph();
/**
 *
 * @export
 * @class SpinalTwinAdminUserProfile
 */
export class SpinalTwinAdminUserProfile {
  constructor() {}

  /**
   * @param {SpinalTwinUserProfile | string} spinalTwinUserProfile
   * @returns {Promise<string>}
   * @memberof SpinalTwinAdminUserProfile
   */
  public async createUserProfile(
    spinalTwinUserProfile: SpinalTwinUserProfile | string,
    graphContext: SpinalGraph<any>
  ): Promise<SpinalNode<any>> {
    if (typeof spinalTwinUserProfile === 'string')
      spinalTwinUserProfile = { name: spinalTwinUserProfile };

    const groupId = SpinalGraphService.createNode(
      spinalTwinUserProfile,
      graphContext
    );

    let context = await spinalTwinGraph.getContext(USER_PROFILE_LIST);
    const result = SpinalGraphService.addChildInContext(
      context.info.id.get(),
      groupId,
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
   * @param {string} userProfileId
   * @returns {void}
   * @memberof SpinalTwinAdminUserProfile
   */
  public getUserProfile(userProfileId: string): any {
    return SpinalGraphService.findNode(userProfileId).then((node) => {
      return node;
    });
  }

  /**
   * @param {string} contextId
   * @returns {void}
   * @memberof SpinalTwinAdminUserProfile
   */
  public async getAllUserProfile() {
    let context = await spinalTwinGraph.getContext(USER_PROFILE_LIST);
    return SpinalGraphService.getChildrenInContext(
      context.info.id.get(),
      context.info.id.get()
    );
  }

  /**
   * @param {string} userProfileId
   * @param {string} roleId
   * @returns {void}
   * @memberof SpinalTwinAdminUserProfile
   */
  public removeRoleToUserProfile(userProfileId: string, roleId: string) {}

  /**
   * @param {string} userProfileId
   * @param {SpinalTwinUserProfile} userProfile
   * @returns {void}
   * @memberof SpinalTwinAdminUserProfile
   */
  public updateUserProfile(
    userProfile: SpinalTwinUserProfile,
    userProfileId: string
  ): SpinalNode<any> {
    if (
      typeof userProfileId === 'undefined' ||
      typeof userProfile === 'undefined'
    ) {
      return;
    }
    const node = SpinalGraphService.getRealNode(userProfileId);
    if (node) {
      node.info.name.set(userProfile.name);
      node.info.appList.set(userProfile.appList);
      node.info.buildContextList.set(userProfile.buildContextList);
    }
    return node;
  }

  /**
   * @param {string} userProfileId
   * @param {string} roleId
   * @returns {void}
   * @memberof SpinalTwinAdminUserProfile
   */
  public deleteUserProfile(userProfileId: string) {}
}
