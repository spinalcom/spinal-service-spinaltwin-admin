import {
  SpinalGraphService,
  SpinalGraph,
  SpinalContext,
  SpinalNode,
} from 'spinal-env-viewer-graph-service';
import {
  SPINALTWIN_ADMIN_SERVICE_ROLE_RELATION_NAME,
  SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST,
} from '../constant';

/**
 *
 * @export
 * @class SpinalTwinAdminGraph
 */
export class SpinalTwinAdminGraph {
  constructor() {}

  /**
   * @param {spinal.Directory<any>} directory
   * @param {string} filename
   * @returns {void}
   * @memberof SpinalTwinAdminGraph
   */
  init(
    directory: spinal.Directory<any>,
    filename: string
  ): Promise<SpinalGraph<any>> {
    let promises = [];
    const graph = new SpinalGraph('BosConfig');

    const DataListContext = new SpinalContext('DigitalTwin');
    const SpinaltwinDescContext = new SpinalContext('SpinalTwinDescription');
    const UserProfileContext = new SpinalContext('UserProfileList');
    const AppProfileContext = new SpinalContext('AppProfileList');
    const ApiContext = new SpinalContext('ApiList');
    const OrganContext = new SpinalContext('OrganList');
    const RoleListContext = new SpinalContext('RoleList');
    const RegisterAdminContext = new SpinalContext('RegisterAdmin');
    const CredentialBosToAdminContext = new SpinalContext('CredentialBosAdmin');
    const CredentialAdminToBosContext = new SpinalContext('CredentialAdminBos');

    promises.push(
      graph.addContext(DataListContext),
      graph.addContext(SpinaltwinDescContext),
      graph.addContext(AppProfileContext),
      graph.addContext(UserProfileContext),
      graph.addContext(RoleListContext),
      graph.addContext(RegisterAdminContext),
      graph.addContext(ApiContext),
      graph.addContext(OrganContext),
      graph.addContext(CredentialBosToAdminContext),
      graph.addContext(CredentialAdminToBosContext)
    );
    const read = new SpinalNode('Lecture');
    const write = new SpinalNode('Ecriture');
    const deleted = new SpinalNode('Suppression');

    promises.push(
      RoleListContext.addChildInContext(
        read,
        SPINALTWIN_ADMIN_SERVICE_ROLE_RELATION_NAME,
        SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST
      ),
      RoleListContext.addChildInContext(
        write,
        SPINALTWIN_ADMIN_SERVICE_ROLE_RELATION_NAME,
        SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST
      ),
      RoleListContext.addChildInContext(
        deleted,
        SPINALTWIN_ADMIN_SERVICE_ROLE_RELATION_NAME,
        SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST
      )
    );

    const dataRoomNode = new SpinalNode('DataRoom');
    const maintenanceBookNode = new SpinalNode('MaintenanceBook');
    const operationCenterNode = new SpinalNode('OperationCenter');

    promises.push(
      SpinaltwinDescContext.addChildInContext(
        dataRoomNode,
        'hasGroupApplication',
        'PtrLst'
      ),
      SpinaltwinDescContext.addChildInContext(
        maintenanceBookNode,
        'hasGroupApplication',
        'PtrLst'
      ),
      SpinaltwinDescContext.addChildInContext(
        operationCenterNode,
        'hasGroupApplication',
        'PtrLst'
      )
    );
    // App for DataRoom
    const EquipmentCenter = new SpinalNode('Equipment');
    EquipmentCenter.info.add_attr({ typeContext: ['BIMObjectGroupContext'] });
    const DescriptionCenter = new SpinalNode('Description');
    DescriptionCenter.info.add_attr({ typeContext: ['geographicContext'] });
    const SpaceCenter = new SpinalNode('Space');

    promises.push(
      dataRoomNode.addChildInContext(
        EquipmentCenter,
        'hasApplicationDataRoom',
        'PtrLst',
        SpinaltwinDescContext
      ),
      dataRoomNode.addChildInContext(
        DescriptionCenter,
        'hasApplicationDataRoom',
        'PtrLst',
        SpinaltwinDescContext
      ),
      dataRoomNode.addChildInContext(
        SpaceCenter,
        'hasApplicationDataRoom',
        'PtrLst',
        SpinaltwinDescContext
      )
    );
    // App for MaintenanceBook
    const TicketCenter = new SpinalNode('Ticket');
    TicketCenter.info.add_attr({ typeContext: ['SpinalSystemServiceTicket'] });
    const NoteCenter = new SpinalNode('Note');
    const AgendaCenter = new SpinalNode('Agenda');

    promises.push(
      maintenanceBookNode.addChildInContext(
        TicketCenter,
        'hasApplicationMaintenanceBook',
        'PtrLst',
        SpinaltwinDescContext
      ),
      maintenanceBookNode.addChildInContext(
        NoteCenter,
        'hasApplicationMaintenanceBook',
        'PtrLst',
        SpinaltwinDescContext
      ),
      maintenanceBookNode.addChildInContext(
        AgendaCenter,
        'hasApplicationMaintenanceBook',
        'PtrLst',
        SpinaltwinDescContext
      )
    );
    // App for OperationCenter
    const InsightCenter = new SpinalNode('Insight');
    InsightCenter.info.add_attr({
      typeContext: ['SpinalControlPointGroupContext', 'geographicContext'],
    });
    const ControlCenter = new SpinalNode('Control');
    const AlarmCenter = new SpinalNode('Alarm');
    const EnergyCenter = new SpinalNode('Energy');

    promises.push(
      operationCenterNode.addChildInContext(
        InsightCenter,
        'hasApplicationOperation',
        'PtrLst',
        SpinaltwinDescContext
      ),
      operationCenterNode.addChildInContext(
        ControlCenter,
        'hasApplicationOperation',
        'PtrLst',
        SpinaltwinDescContext
      ),
      operationCenterNode.addChildInContext(
        AlarmCenter,
        'hasApplicationOperation',
        'PtrLst',
        SpinaltwinDescContext
      ),
      operationCenterNode.addChildInContext(
        EnergyCenter,
        'hasApplicationOperation',
        'PtrLst',
        SpinaltwinDescContext
      )
    );

    directory.force_add_file(filename, graph, {
      model_type: 'Configuration Bos',
    });

    return Promise.all(promises).then(() => {
      return graph;
    });
  }

  public async getContext(name?: string): Promise<SpinalNode<any>> {
    const graph = SpinalGraphService.getGraph();
    const contexts = await graph.getContext(name);
    /*if (name && name.trim().length > 0) {
            const found: any = contexts.filter(el => el.getName().get() === name);
            return found ? found.info.get() : undefined;
        }*/
    return contexts;
  }
}
