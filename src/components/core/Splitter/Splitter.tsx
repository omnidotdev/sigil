import * as Ark from "@ark-ui/react/splitter";

import { styled } from "generated/panda/jsx";
import { splitter, type SplitterVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps, ReactNode } from "react";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/splitter";

const { withProvider, withContext } = createStyleContext(splitter);

export interface SplitterProps extends Ark.SplitterProps, SplitterVariantProps {
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

export const SplitterRoot = withProvider(styled(Ark.Splitter.Root), "root");

export const SplitterPanel = withContext(styled(Ark.Splitter.Panel), "panel");

export const SplitterResizeTrigger = withContext(
  styled(Ark.Splitter.ResizeTrigger),
  "resizeTrigger",
);

// TODO make more generic to easily handle multiple panels and splitters of various orientations, as in https://ark-ui.com/docs/react/components/splitter

/**
 * Splitter.
 */
const Splitter = ({ sections, ...rest }: SplitterProps) => (
  <SplitterRoot size={sections.map(({ id, size }) => ({ id, size }))} {...rest}>
    {sections.map(({ type, id, content }) => {
      switch (type) {
        case "panel":
          return (
            <SplitterPanel key={id} id={id}>
              {content}
            </SplitterPanel>
          );
        case "resizeTrigger":
          return (
            <SplitterResizeTrigger
              key={id}
              id={id as ComponentProps<typeof SplitterResizeTrigger>["id"]}
            />
          );
      }
    })}
  </SplitterRoot>
);

export default Splitter;
