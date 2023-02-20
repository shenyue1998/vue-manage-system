import { Dag, LayeringOperator, DagNode } from "d3-dag";
// interface CustomNode{

// }
export type CustomOperator = LayeringOperator<unknown, unknown>;

/**
 * assgin layer in data source.
 */
export function customLayout(...args: never[]): CustomOperator {
    if (args.length) {
        throw new Error(
            `got arguments to custom layout(${args}), but constructor takes no arguments.`
        );
    }

    function customLayoutCall(dag: Dag): void {
        dag.descendants().forEach((node:any )=> {
            node.value = Number(node.data.rank)-1;
        });
    }
    return customLayoutCall;
}