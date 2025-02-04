import { CASSIE_BLOCK_EXTEND } from "../nodeNames";
import { mergeAttributes, Node } from "@tiptap/core";
import { VueNodeViewRenderer } from "@tiptap/vue-3";
import CassieBlockExtComponet from "@/components/educationEditor/extension/node/CassieBlockExtComponet.vue";
import { getId, idAttributes } from "@/components/educationEditor/utils/id";

export const CassieBlockExt = Node.create({
  name: `${CASSIE_BLOCK_EXTEND}`,
  group: "block",
  isolating: true,
  content: "block*",
  addAttributes() {
    return idAttributes;
  },
  parseHTML() {
    return [
      {
        tag: "node-extend"
      }
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    if (HTMLAttributes.id) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      node.attrs.id = HTMLAttributes.id;
    }
    return ["node-extend", HTMLAttributes, 0];
  },
  addNodeView() {
    return VueNodeViewRenderer(CassieBlockExtComponet);
  }
});
