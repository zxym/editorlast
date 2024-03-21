import { Attrs, Node, NodeType, Schema } from "@tiptap/pm/model";
import { PageOptions } from "@/components/educationEditor/extension/page/core";
import { SplitContext } from "@/components/educationEditor/extension/page/computed";

export type NodesComputed = Record<string, (splitContex: SplitContext, node: Node, pos: number, parent: Node | null, dom: HTMLElement) => boolean>;
export type PluginState = {
  bodyOptions: PageOptions | null;
  deleting: boolean;
  inserting: boolean;
  checkNode: boolean;
  splitPage: boolean;
};
export type SplitParams = {
  pos: number;
  depth?: number;
  typesAfter?: ({ type: NodeType; attrs?: Attrs | null } | null)[];
  schema: Schema<any, any>;
};
