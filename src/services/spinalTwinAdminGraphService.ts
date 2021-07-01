import { SpinalGraphService,
    SpinalGraph,
    SpinalContext,
    SpinalNode } from "spinal-env-viewer-graph-service";
import { SPINAL_TWIN_ADMIN } from '../constant';

export class ServiceSpinalAdminGraph {

    constructor() { }

    public init(directory: spinal.Directory<any>, filename: string) {

        const graph = new SpinalGraph("SpinalTwinAdmin");
        const DataListContext = new SpinalContext("DataList");

        const SpinaltwinDescContext = new SpinalContext("SpinalTwinDescription");
        const UserProfileContext = new SpinalContext("UserProfile");
        const UserListContext = new SpinalContext("UserList");
        const RoleListContext = new SpinalContext("RoleList");
        graph.addContext(DataListContext);
        graph.addContext(SpinaltwinDescContext);
        graph.addContext(UserProfileContext);
        graph.addContext(UserListContext);
        graph.addContext(RoleListContext);
        directory.force_add_file(filename, graph, {
            model_type: SPINAL_TWIN_ADMIN,
        });
        
    }
}
