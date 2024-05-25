import { Splitter as ArkSplitter } from "@ark-ui/react/splitter";
import { match } from "ts-pattern";

import { splitter } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps, ReactNode } from "react";

import type {} from "@zag-js/splitter";

const { withProvider, withContext } = createStyleContext(splitter);

export const SplitterRoot = withProvider(ArkSplitter.Root, "root");
export interface SplitterRootProps
  extends ComponentProps<typeof SplitterRoot> {}

export const SplitterPanel = withContext(ArkSplitter.Panel, "panel");
export interface SplitterPanelProps
  extends ComponentProps<typeof SplitterPanel> {}

export const SplitterResizeTrigger = withContext(
  ArkSplitter.ResizeTrigger,
  "resizeTrigger",
);
export interface SplitterResizeTriggerProps
  extends ComponentProps<typeof SplitterResizeTrigger> {}

// TODO make more generic to easily handle multiple panels and splitters of various orientations, as in https://ark-ui.com/docs/react/components/splitter

export interface SplitterProps extends SplitterRootProps {
  sections: {
    type: "panel" | "resizeTrigger";
    // TODO enforce : on resizeTrigger
    /** Unique identifier. */
    id: string;
    // TODO if type is panel
    /** Content. */
    content?: ReactNode;
    // TODO if type is panel
    /** Size by percentage. The total size of all sections cannot exceed 100. */
    size?: number;
  }[];
}

/**
 * Splitter.
 */
const Splitter = ({ sections, ...rest }: SplitterProps) => (
  <SplitterRoot size={sections.map(({ id, size }) => ({ id, size }))} {...rest}>
    {sections.map(({ type, id, content }) =>
      match(type)
        .with("panel", () => (
          <SplitterPanel key={id} id={id}>
            {content}
          </SplitterPanel>
        ))
        .with("resizeTrigger", () => (
          <SplitterResizeTrigger
            key={id}
            id={id as ComponentProps<typeof SplitterResizeTrigger>["id"]}
          />
        ))
        .exhaustive(),
    )}
  </SplitterRoot>
);

export default Splitter;
