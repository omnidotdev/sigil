import { TreeView as ArkTreeView } from "@ark-ui/react/tree-view";
import { FiChevronRight } from "react-icons/fi";

import { treeView } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(treeView);

export const TreeViewRoot = withProvider(ArkTreeView.Root, "root");
export interface TreeViewRootProps
  extends ComponentProps<typeof TreeViewRoot> {}

export const TreeViewBranch = withContext(ArkTreeView.Branch, "branch");
export interface TreeViewBranchProps
  extends ComponentProps<typeof TreeViewBranch> {}

export const TreeViewBranchContent = withContext(
  ArkTreeView.BranchContent,
  "branchContent",
);
export interface TreeViewBranchContentProps
  extends ComponentProps<typeof TreeViewBranchContent> {}

export const TreeViewBranchControl = withContext(
  ArkTreeView.BranchControl,
  "branchControl",
);
export interface TreeViewBranchControlProps
  extends ComponentProps<typeof TreeViewBranchControl> {}

export const TreeViewBranchIndicator = withContext(
  ArkTreeView.BranchIndicator,
  "branchIndicator",
);
export interface TreeViewBranchIndicatorProps
  extends ComponentProps<typeof TreeViewBranchIndicator> {}

export const TreeViewBranchText = withContext(
  ArkTreeView.BranchText,
  "branchText",
);
export interface TreeViewBranchTextProps
  extends ComponentProps<typeof TreeViewBranchText> {}

// TODO use
export const TreeViewBranchTrigger = withContext(
  ArkTreeView.BranchTrigger,
  "branchTrigger",
);
export interface TreeViewBranchTriggerProps
  extends ComponentProps<typeof TreeViewBranchTrigger> {}

export const TreeViewItem = withContext(ArkTreeView.Item, "item");
export interface TreeViewItemProps
  extends ComponentProps<typeof TreeViewItem> {}

// TODO use
export const TreeViewItemIndicator = withContext(
  ArkTreeView.ItemIndicator,
  "itemIndicator",
);
export interface TreeViewItemIndicatorProps
  extends ComponentProps<typeof TreeViewItemIndicator> {}

export const TreeViewItemText = withContext(ArkTreeView.ItemText, "itemText");
export interface TreeViewItemTextProps
  extends ComponentProps<typeof TreeViewItemText> {}

export const TreeViewLabel = withContext(ArkTreeView.Label, "label");
export interface TreeViewLabelProps
  extends ComponentProps<typeof TreeViewLabel> {}

export const TreeViewTree = withContext(ArkTreeView.Tree, "tree");
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
