/**
 *
 * @export
 * @class SpinalTwinAdminGraph
 */
export declare class SpinalTwinAdminGraph {
    constructor();
    /**
     * @param {spinal.Directory<any>} directory
     * @param {string} filename
     * @returns {void}
     * @memberof SpinalTwinAdminGraph
     */
    init(directory: spinal.Directory<any>, filename: string): Promise<void>;
}
