import { SpinalGraphService } from "spinal-env-viewer-graph-service";
import { CANNOT_CREATE_INTERNAL_ERROR, SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST, SPINALTWIN_ADMIN_SERVICE_USER_PROFILE_RELATION_NAME } from "../constant";
import { SpinalTwinRole } from "../models/SpinalTwinRole";

export class ServiceRole {

    constructor() { }

  public createRole(spinalTwinRole: SpinalTwinRole | string, contextId: string): Promise<string> {
    if (typeof spinalTwinRole === "string") spinalTwinRole = { name: spinalTwinRole };

      const roleId = SpinalGraphService.createNode(spinalTwinRole, undefined);
      return SpinalGraphService.addChildInContext(
          contextId,
          roleId,
          contextId,
          SPINALTWIN_ADMIN_SERVICE_USER_PROFILE_RELATION_NAME,
          SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST,
      ).then(async () => {
          return roleId;
      })
          .catch((e) => {
              console.error(e);
              return Promise.reject(Error(CANNOT_CREATE_INTERNAL_ERROR));
          });
  };

  public getRoleNode(roleId: string) {
    const realNode = SpinalGraphService.getRealNode(roleId);
    if (realNode) {
        return realNode.contextIds._attribute_names.find(id => {
            const node = SpinalGraphService.getRealNode(id);
            if (!node) return false;
            return node.getType().get();
        })
    }
  };

  public getRole(roleId: string): any {
    return SpinalGraphService.findNode(roleId)
            .then(node => {
                return node;
            });
  };
  

  public updateRole(role: SpinalTwinRole | string, roleId: string) {
      if (typeof roleId === 'undefined') {
        return;
    }
    return SpinalGraphService.modifyNode(roleId, <any>role);
  };

  public deleteRole(roleId: string) {

  };

}