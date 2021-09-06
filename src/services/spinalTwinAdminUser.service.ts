import {
  SpinalGraphService,
  SpinalNode,
} from 'spinal-env-viewer-graph-service';
import 'spinal-core-connectorjs_type';
import {
  SPINALAPP_TYPE,
  SPINALTWIN_ADMIN_SERVICE_USER_RELATION_NAME,
  USER_BASE_EMPTY,
  USER_LIST,
  USER_NOT_FOUND,
} from '../constant';
import { SpinalTwinAdminGraph } from './spinalTwinAdminGraph.service';
import { SpinalTwinUser } from '../models/SpinalTwinUser.model';

let spinalTwinGraph = new SpinalTwinAdminGraph();
/**
 *
 * @export
 * @class SpinalTwinAdminUser
 */
export class SpinalTwinAdminUser {
  /**
   * @param {SpinalTwinUser|string} user
   * @returns {Promise<SpinalTwinUser | string>}
   * @memberof SpinalTwinAdminUser
   */
  public createUser(user: SpinalTwinUser): Promise<SpinalTwinUser | string> {
    return this.findEmail(user.email)
      .then(async (exist: boolean): Promise<any> => {
        if (exist) {
          return Promise.resolve(USER_NOT_FOUND);
        }
        const userId = SpinalGraphService.createNode(user, undefined);
        user.id = userId;
        let context = await spinalTwinGraph.getContext(USER_LIST);

        return SpinalGraphService.addChildInContext(
          context.info.id.get(),
          userId,
          context.info.id.get(),
          SPINALTWIN_ADMIN_SERVICE_USER_RELATION_NAME,
          SPINALAPP_TYPE
        ).then(() => {
          return Promise.resolve(user);
        });
      })
      .catch((e) => {
        return Promise.resolve(e);
      });
  }

  public getUserByID(id: string) {}

  public getAllUser(contextId: string) {}

  /**
   * @param {string} id
   * @param {string} email
   * @param {string} password
   * @returns {Promise<SpinalTwinUser | string>}
   * @memberof SpinalTwinAdminUser
   */
  public async getUser(
    id: string,
    email?: string,
    password?: string
  ): Promise<SpinalTwinUser> {
    let context = await spinalTwinGraph.getContext(USER_LIST);
    if (typeof email === 'string' && typeof password === 'string')
      return this.findUserWithEmailPassword(email, password);
    return SpinalGraphService.getChildren(context.info.id.get(), [
      SPINALTWIN_ADMIN_SERVICE_USER_RELATION_NAME,
    ])
      .then((children: any[]) => {
        if (children.length < 0) {
          return Promise.reject(USER_BASE_EMPTY);
        }

        for (let i = 0; i < children.length; i = i + 1) {
          if (children[i].hasOwnProperty('id') && children[i].id.get() === id) {
            return Promise.resolve(children[i]);
          }
        }
        return Promise.resolve(USER_NOT_FOUND);
      })
      .catch((e) => {
        console.error(e);
        return Promise.resolve(e);
      });
  }

  public addNode(
    userId: string,
    childId: string,
    relationName: string,
    relationType: string
  ) {}

  /**
   * @param {string} email
   * @returns {Promise<boolean>}
   * @memberof SpinalTwinAdminUser
   */
  private async findEmail(email: string): Promise<boolean> {
    let context = await spinalTwinGraph.getContext(USER_LIST);
    return SpinalGraphService.getChildren(context.info.id.get(), [
      SPINALTWIN_ADMIN_SERVICE_USER_RELATION_NAME,
    ]).then((children) => {
      if (children.length < 0) {
        return Promise.resolve(false);
      }
      for (let i = 0; i < children.length; i = i + 1) {
        if (
          children[i].hasOwnProperty('email') &&
          children[i].email.get() === email
        ) {
          return Promise.resolve(true);
        }
      }
      return Promise.resolve(false);
    });
  }

  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<SpinalTwinUser>}
   * @memberof SpinalTwinAdminUser
   */
  private async findUserWithEmailPassword(
    email: string,
    password: string
  ): Promise<SpinalTwinUser> {
    let context = await spinalTwinGraph.getContext(USER_LIST);
    return SpinalGraphService.getChildren(context.info.id.get(), [
      SPINALTWIN_ADMIN_SERVICE_USER_RELATION_NAME,
    ])
      .then((children: any[]) => {
        if (children.length < 0) {
          return Promise.reject(USER_BASE_EMPTY);
        }

        for (let i = 0; i < children.length; i = i + 1) {
          if (
            children[i].hasOwnProperty('email') &&
            children[i].email.get() === email &&
            children[i].hasOwnProperty('password') &&
            children[i].password.get() === password
          ) {
            return Promise.resolve(children[i]);
          }
        }
        return Promise.resolve(USER_NOT_FOUND);
      })
      .catch((e) => {
        console.error(e);
        return Promise.resolve(e);
      });
  }

  public addUserProfileToUser(userId: string, userProfileId: string) {}

  public updateUser(user: SpinalTwinUser, userId: string): SpinalNode<any> {
    if (typeof userId === 'undefined' || typeof user === 'undefined') {
      return;
    }
    const node = SpinalGraphService.getRealNode(userId);
    if (node) {
      node.info.name.set(user.name);
      node.info.email.set(user.email);
      node.info.firstname.set(user.firstname);
      node.info.userProfileId.set(user.userProfileId);
    }

    return node;
  }

  public deleteUser(userId: string) {}
}
