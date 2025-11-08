import { Splitter as ArkSplitter } from "@ark-ui/react/splitter";
import { match } from "ts-pattern";

import { styled } from "generated/panda/jsx";
import { splitter } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { SplitterPanelData } from "@ark-ui/react/splitter";
import type { SplitterVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(splitter);

export const SplitterRoot = withProvider(styled(ArkSplitter.Root), "root");
export interface SplitterRootProps
  extends AssignJSXStyleProps<ArkSplitter.RootProps>,
    SplitterVariantProps {}

export const SplitterPanel = withContext(styled(ArkSplitter.Panel), "panel");
export interface SplitterPanelProps
  extends AssignJSXStyleProps<ArkSplitter.PanelProps> {}

export const SplitterResizeTrigger = withContext(
  styled(ArkSplitter.ResizeTrigger),
  "resizeTrigger",
);
export interface SplitterResizeTriggerProps
  extends AssignJSXStyleProps<ArkSplitter.ResizeTriggerProps> {}

// TODO make more generic to easily handle multiple panels and splitters of various orientations, as in https://ark-ui.com/docs/react/components/splitter

interface PanelSection extends SplitterPanelData {
  sectionType: "panel";
  content: ReactNode;
  asChild?: boolean;
}

interface ResizeTriggerSection extends SplitterResizeTriggerProps {
  sectionType: "resizeTrigger";
}

type Section = PanelSection | ResizeTriggerSection;

export interface SplitterProps extends Omit<SplitterRootProps, "panels"> {
  sections: Section[];
}

/**
 * Splitter.
 */
export const Splitter = ({ sections, ...rest }: SplitterProps) => (
  <SplitterRoot
    panels={sections.filter((section) => section.sectionType === "panel")}
    {...rest}
  >
    {sections.map((section) =>
      match(section)
        .with({ sectionType: "panel" }, ({ content, id, asChild }) => (
          <SplitterPanel key={id} id={id} asChild={asChild}>
            {content}
          </SplitterPanel>
        ))
        .with(
          { sectionType: "resizeTrigger" },
          ({ id, sectionType: _sectionType, ...rest }) => (
            <SplitterResizeTrigger key={id} id={id} {...rest} />
          ),
        )
        .exhaustive(),
    )}
  </SplitterRoot>
);
