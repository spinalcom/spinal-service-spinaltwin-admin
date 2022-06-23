import {
  SpinalGraph,
  SpinalGraphService,
  SpinalNode,
} from 'spinal-env-viewer-graph-service';
import {
  CANNOT_CREATE_INTERNAL_ERROR,
  SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST,
  SPINALTWIN_ADMIN_SERVICE_USER_PROFILE_RELATION_NAME,
  APP_PROFILE_LIST,
} from '../constant';
import { SpinalTwinAppProfile } from '../models/SpinalTwinAppProfile.model';
import { SpinalTwinAdminGraph } from './spinalTwinAdminGraph.service';
let spinalTwinGraph = new SpinalTwinAdminGraph();
/**
 *
 * @export
 * @class SpinalTwinAdminAppProfile
 */
export class SpinalTwinAdminAppProfile {
  constructor() {}

  /**
   * @param {SpinalTwinAppProfile | string} spinalTwinAppProfile
   * @returns {Promise<string>}
   * @memberof SpinalTwinAppProfile
   */
  public async createAppProfile(
    spinalTwinAppProfile: SpinalTwinAppProfile | string,
    graphContext: SpinalGraph<any>
  ): Promise<SpinalNode<any>> {
    if (typeof spinalTwinAppProfile === 'string')
      spinalTwinAppProfile = { name: spinalTwinAppProfile };

    const appId = SpinalGraphService.createNode(
      spinalTwinAppProfile,
      graphContext
    );
    let context = await spinalTwinGraph.getContext(APP_PROFILE_LIST);
    const result = SpinalGraphService.addChildInContext(
      context.info.id.get(),
      appId,
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
   * @param {string} appProfileId
   * @returns {void}
   * @memberof SpinalTwinAppProfile
   */
  public getAppProfile(appProfileId: string): any {
    return SpinalGraphService.findNode(appProfileId).then((node) => {
      return node;
    });
  }

  /**
   * @param {string} contextId
   * @returns {void}
   * @memberof SpinalTwinAppProfile
   */
  public async getAllAppProfile() {
    let context = await spinalTwinGraph.getContext(APP_PROFILE_LIST);
    return SpinalGraphService.getChildrenInContext(
      context.info.id.get(),
      context.info.id.get()
    );
  }

  /**
   * @param {string} appProfileId
   * @param {SpinalTwinAppProfile} userProfile
   * @returns {void}
   * @memberof SpinalTwinAppProfile
   */
  public updateAppProfile(
    appProfile: SpinalTwinAppProfile,
    appProfileId: string,
    graphContext: SpinalGraph<any>
  ): SpinalNode<any> {
    if (
      typeof appProfileId === 'undefined' ||
      typeof appProfile === 'undefined'
    ) {
      return;
    }
    const node = SpinalGraphService.getRealNode(appProfileId);
    if (node) {
      console.log(node);
      node.info.name.set(appProfile.name);
      node.info.contextList.set(appProfile.contextList);
      node.info.tagsList.set(appProfile.tagsList);
      node.element.setElement(graphContext);
    }
    return node;
  }

  /**
   * @param {string} appProfileId
   * @param {string} roleId
   * @returns {void}
   * @memberof SpinalTwinAppProfile
   */
  public deleteAppProfile(appProfileId: string) {}
}
