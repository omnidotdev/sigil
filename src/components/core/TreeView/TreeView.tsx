import { TreeView as ArkTreeView } from "@ark-ui/react/tree-view";
import { FiChevronRight } from "react-icons/fi";

import { styled } from "generated/panda/jsx";
import { treeView } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(treeView);

export const TreeViewRoot = withProvider(styled(ArkTreeView.Root), "root");
export interface TreeViewRootProps
  extends ComponentProps<typeof TreeViewRoot> {}

export const TreeViewBranch = withContext(styled(ArkTreeView.Branch), "branch");
export interface TreeViewBranchProps
  extends ComponentProps<typeof TreeViewBranch> {}

export const TreeViewBranchContent = withContext(
  styled(ArkTreeView.BranchContent),
  "branchContent",
);
export interface TreeViewBranchContentProps
  extends ComponentProps<typeof TreeViewBranchContent> {}

export const TreeViewBranchControl = withContext(
  styled(ArkTreeView.BranchControl),
  "branchControl",
);
export interface TreeViewBranchControlProps
  extends ComponentProps<typeof TreeViewBranchControl> {}

export const TreeViewBranchIndicator = withContext(
  styled(ArkTreeView.BranchIndicator),
  "branchIndicator",
);
export interface TreeViewBranchIndicatorProps
  extends ComponentProps<typeof TreeViewBranchIndicator> {}

export const TreeViewBranchText = withContext(
  styled(ArkTreeView.BranchText),
  "branchText",
);
export interface TreeViewBranchTextProps
  extends ComponentProps<typeof TreeViewBranchText> {}

// TODO use
export const TreeViewBranchTrigger = withContext(
  styled(ArkTreeView.BranchTrigger),
  "branchTrigger",
);
export interface TreeViewBranchTriggerProps
  extends ComponentProps<typeof TreeViewBranchTrigger> {}

export const TreeViewItem = withContext(styled(ArkTreeView.Item), "item");
export interface TreeViewItemProps
  extends ComponentProps<typeof TreeViewItem> {}

// TODO use
export const TreeViewItemIndicator = withContext(
  styled(ArkTreeView.ItemIndicator),
  "itemIndicator",
);
export interface TreeViewItemIndicatorProps
  extends ComponentProps<typeof TreeViewItemIndicator> {}

export const TreeViewItemText = withContext(
  styled(ArkTreeView.ItemText),
  "itemText",
);
export interface TreeViewItemTextProps
  extends ComponentProps<typeof TreeViewItemText> {}

export const TreeViewLabel = withContext(styled(ArkTreeView.Label), "label");
export interface TreeViewLabelProps
  extends ComponentProps<typeof TreeViewLabel> {}

export const TreeViewTree = withContext(styled(ArkTreeView.Tree), "tree");
export interface TreeViewTreeProps
  extends ComponentProps<typeof TreeViewTree> {}

interface TreeChild {
  id: string;
  name: string;
  children?: TreeChild[];
}

export interface TreeData {
  children: TreeChild[];
}

export interface TreeViewProps extends TreeViewRootProps {
  /** Label for the tree view content. */
  label?: ReactNode;
  /** Data to be displayed in the tree view. */
  data: TreeData;
  treeProps?: TreeViewTreeProps;
  branchProps?: TreeViewBranchProps;
  branchControlProps?: TreeViewBranchControlProps;
  branchIndicatorProps?: TreeViewBranchIndicatorProps;
  branchTextProps?: TreeViewBranchTextProps;
  branchContentProps?: TreeViewBranchContentProps;
  branchTriggerProps?: TreeViewBranchTriggerProps;
  itemProps?: TreeViewItemProps;
  itemIndicatorProps?: TreeViewItemIndicatorProps;
  itemTextProps?: TreeViewItemTextProps;
}

/**
 * Tree view for displaying hierarchical data.
 */
const TreeView = ({
  label,
  data,
  treeProps,
  branchProps,
  branchControlProps,
  branchIndicatorProps,
  branchTextProps,
  branchContentProps,
  // branchTriggerProps,
  itemProps,
  // itemIndicatorProps,
  itemTextProps,
  ...rest
}: TreeViewProps) => {
  /**
   * Render child node.
   */
  const renderChild = ({ id, name, children }: TreeChild) =>
    children ? (
      <TreeViewBranch key={id} id={id} {...branchProps}>
        <TreeViewBranchControl {...branchControlProps}>
          <TreeViewBranchIndicator {...branchIndicatorProps}>
            <FiChevronRight />
          </TreeViewBranchIndicator>

          <TreeViewBranchText {...branchTextProps}>{name}</TreeViewBranchText>
        </TreeViewBranchControl>

        <TreeViewBranchContent {...branchContentProps}>
          {children.map(renderChild)}
        </TreeViewBranchContent>
      </TreeViewBranch>
    ) : (
      <TreeViewItem key={id} id={id} {...itemProps}>
        <TreeViewItemText {...itemTextProps}>{name}</TreeViewItemText>
      </TreeViewItem>
    );

  return (
    <TreeViewRoot
      aria-label={typeof label === "string" ? label : undefined}
      {...rest}
    >
      {label && <TreeViewLabel>{label}</TreeViewLabel>}

      <TreeViewTree {...treeProps}>
        {data.children.map((child) =>
          child.children ? (
            // recursively render child nodes
            renderChild(child)
          ) : (
            <TreeViewItem key={child.id} id={child.id} {...itemProps}>
              <TreeViewItemText {...itemTextProps}>
                {child.name}
              </TreeViewItemText>
            </TreeViewItem>
          ),
        )}
      </TreeViewTree>
    </TreeViewRoot>
  );
};

export default TreeView;
