import { SpinalGraphService } from "spinal-env-viewer-graph-service";
import { CANNOT_CREATE_INTERNAL_ERROR, SPINALAPP_TYPE, SPINALTWIN_ADMIN_SERVICE_APP_GROUP_RELATION_NAME, SPINALTWIN_ADMIN_SERVICE_APP_RELATION_NAME, SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST, SPINAL_DESCRIPTION } from "../constant";
import { SpinalTwinApp } from "../models/SpinalTwinApp.model";
import { SpinalTwinGroup } from "../models/SpinalTwinGroup.model";
import { SpinalTwinAdminGraph } from "./spinalTwinAdminGraph.service";
let spinalTwinGraph = new SpinalTwinAdminGraph;
/**
 * 
 * @export
 * @class ServiceSpinalTwinApp
 */
export class ServiceSpinalTwinApp {

    constructor() { }

    /**
     * @param {SpinalTwinGroup | string} spinalTwinGroup
     * @param {string} contextId
     * @returns {Promise<string>}
     * @memberof ServiceSpinalTwinApp
     */
  public async  createSpinalTwinGroup(spinalTwinGroup: SpinalTwinGroup | string): Promise<string> {
      if (typeof spinalTwinGroup === "string") spinalTwinGroup = { name: spinalTwinGroup };

      spinalTwinGroup.type = SPINALAPP_TYPE;
      const groupId = SpinalGraphService.createNode(spinalTwinGroup, undefined);
      let context = await spinalTwinGraph.getContext(SPINAL_DESCRIPTION);
      return SpinalGraphService.addChildInContext(
        context.info.id.get(),
          groupId,
          context.info.id.get(),
          SPINALTWIN_ADMIN_SERVICE_APP_GROUP_RELATION_NAME,
          SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST,
      ).then(async () => {
          return groupId;
      })
          .catch((e) => {
              console.error(e);
              return Promise.reject(Error(CANNOT_CREATE_INTERNAL_ERROR));
          });
  };
  

    /**
     * @param {string} spinalTwinGroupId
     * @returns {void}
     * @memberof ServiceSpinalTwinApp
     */
  public getSpinalTwinGroup(spinalTwinGroupId: string) {
    const realNode = SpinalGraphService.getRealNode(spinalTwinGroupId);
    if (realNode) {
        return realNode.contextIds._attribute_names.find(id => {
            const node = SpinalGraphService.getRealNode(id);
            if (!node) return false;
            return node.getType().get();
        })
    }
  };

  /**
     * @param {string} contextId
     * @returns {void}
     * @memberof ServiceSpinalTwinApp
     */
  public async getAllSpinalTwinGroup() {
    let context = await spinalTwinGraph.getContext(SPINAL_DESCRIPTION);
    return SpinalGraphService.getChildrenInContext(context.info.id.get(), context.info.id.get());
  };

  /**
     * @param {string} spinalTwinGroupId
     * @returns {void}
     * @memberof ServiceSpinalTwinApp
     */
  public getAppOfSpinalTwinGroup(spinalTwinGroupId: string) {
    return SpinalGraphService.getChildren(spinalTwinGroupId, [SPINALTWIN_ADMIN_SERVICE_APP_RELATION_NAME]).then(children => children.map(el => el.get()))
  };

  /**
     * @param {string} spinalTwinGroupId
     * @param {string} spinalTwinAppId
     * @param {string} relationType
     * @returns {void}
     * @memberof ServiceSpinalTwinApp
     */
  public addAppToSpinalTwinGroup(spinalTwinGroupId: string, spinalTwinAppId: string): any {
      return SpinalGraphService.addChildInContext(
          spinalTwinGroupId,
          spinalTwinAppId,
          spinalTwinGroupId,
          SPINALTWIN_ADMIN_SERVICE_APP_RELATION_NAME,
          SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST,
      );
  }

    /**
     * @param {SpinalTwinApp | string} spinalTwinApp
     * @returns {void}
     * @memberof ServiceSpinalTwinApp
     */
  public createApp(spinalTwinGroupId: string, spinalTwinApp: SpinalTwinApp | string): string {
    if (typeof spinalTwinApp === "string") spinalTwinApp = { name: spinalTwinApp };

    spinalTwinApp.type = SPINALAPP_TYPE;
    const appId = SpinalGraphService.createNode(spinalTwinApp, undefined);

    return this.addAppToSpinalTwinGroup(spinalTwinGroupId, appId);
}

    /**
     * @param {SpinalTwinGroup | string} spinalTwinGroup
     * @param {string} spinalTwinGroupId
     * @returns {void}
     * @memberof ServiceSpinalTwinApp
     */
public async updateGroupApp(spinalTwinGroup: SpinalTwinGroup | string, spinalTwinGroupId: string): Promise<any> {
    if (typeof spinalTwinGroupId === 'undefined') {
        return;
    }
    return SpinalGraphService.modifyNode(spinalTwinGroupId, <any>spinalTwinGroup);
}

    /**
     * @param {string} spinalTwinGroupId
     * @returns {void}
     * @memberof ServiceSpinalTwinApp
     */
  public deleteGroupApp(spinalTwinGroupId: string) {};

}