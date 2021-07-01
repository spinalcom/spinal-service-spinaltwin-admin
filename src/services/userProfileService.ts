import { SpinalGraphService,
    SpinalGraph,
    SpinalContext,
    SpinalNode } from "spinal-env-viewer-graph-service";
import { CANNOT_CREATE_INTERNAL_ERROR, SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST, SPINALTWIN_ADMIN_SERVICE_USER_PROFILE_RELATION_NAME } from "../constant";
import { SpinalTwinUserProfile } from "../models/SpinalTwinUserProfile";

export class ServiceUserProfile {

    constructor() { }

  public createUserProfile(spinalTwinUserProfile: SpinalTwinUserProfile | string, contextId: string): Promise<string>{
      if (typeof spinalTwinUserProfile === "string") spinalTwinUserProfile = { name: spinalTwinUserProfile };

      const groupId = SpinalGraphService.createNode(spinalTwinUserProfile, undefined);
      return SpinalGraphService.addChildInContext(
          contextId,
          groupId,
          contextId,
          SPINALTWIN_ADMIN_SERVICE_USER_PROFILE_RELATION_NAME,
          SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST,
      ).then(async () => {
          return groupId;
      })
          .catch((e) => {
              console.error(e);
              return Promise.reject(Error(CANNOT_CREATE_INTERNAL_ERROR));
          });
  };
  

  public getUserProfile(userProfileId: string): any {
    return SpinalGraphService.findNode(userProfileId)
            .then(node => {
                return node;
            });
  };

  public getAllUserProfile(contextId: string) {
    return SpinalGraphService.getChildrenInContext(contextId, contextId);
  };

  public async addRoleToUserProfile(userProfileId: string, roleId: string) {
    if (typeof userProfileId === 'undefined') {
        return;
    }
    const userProfile = await SpinalGraphService.getRealNode(userProfileId);
    userProfile.roleList.push(roleId); //comment accéder à un attribut une fois qu'on a get son node.
    return SpinalGraphService.modifyNode(userProfileId, <any>userProfile);
  };

  public removeRoleToUserProfile(userProfileId: string, roleId: string) {};

  public updateUserProfile(userProfileId: string) {};

  public deleteUserProfile(userProfileId: string) {};


}
