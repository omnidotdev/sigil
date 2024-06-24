import { TreeView as ArkTreeView } from "@ark-ui/react/tree-view";
import { FiChevronRight } from "react-icons/fi";

import { Stack, styled } from "generated/panda/jsx";
import { treeView } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(treeView);

export const TreeViewRoot = withProvider(styled(ArkTreeView.Root), "root");
export interface TreeViewRootProps
  extends AssignJSXStyleProps<ArkTreeView.RootProps> {}

export const TreeViewBranch = withContext(styled(ArkTreeView.Branch), "branch");
export interface TreeViewBranchProps
  extends AssignJSXStyleProps<ArkTreeView.BranchProps> {}

export const TreeViewBranchContent = withContext(
  styled(ArkTreeView.BranchContent),
  "branchContent",
);
export interface TreeViewBranchContentProps
  extends AssignJSXStyleProps<ArkTreeView.BranchContentProps> {}

export const TreeViewBranchControl = withContext(
  styled(ArkTreeView.BranchControl),
  "branchControl",
);
export interface TreeViewBranchControlProps
  extends AssignJSXStyleProps<ArkTreeView.BranchControlProps> {}

export const TreeViewBranchIndicator = withContext(
  styled(ArkTreeView.BranchIndicator),
  "branchIndicator",
);
export interface TreeViewBranchIndicatorProps
  extends AssignJSXStyleProps<ArkTreeView.BranchIndicatorProps> {}

export const TreeViewBranchText = withContext(
  styled(ArkTreeView.BranchText),
  "branchText",
);
export interface TreeViewBranchTextProps
  extends AssignJSXStyleProps<ArkTreeView.BranchTextProps> {}

// TODO use
export const TreeViewBranchTrigger = withContext(
  styled(ArkTreeView.BranchTrigger),
  "branchTrigger",
);
export interface TreeViewBranchTriggerProps
  extends AssignJSXStyleProps<ArkTreeView.BranchTriggerProps> {}

export const TreeViewItem = withContext(styled(ArkTreeView.Item), "item");
export interface TreeViewItemProps
  extends AssignJSXStyleProps<ArkTreeView.ItemProps> {}

// TODO use
export const TreeViewItemIndicator = withContext(
  styled(ArkTreeView.ItemIndicator),
  "itemIndicator",
);
export interface TreeViewItemIndicatorProps
  extends AssignJSXStyleProps<ArkTreeView.ItemIndicatorProps> {}

export const TreeViewItemText = withContext(
  styled(ArkTreeView.ItemText),
  "itemText",
);
export interface TreeViewItemTextProps
  extends AssignJSXStyleProps<ArkTreeView.ItemTextProps> {}

export const TreeViewLabel = withContext(styled(ArkTreeView.Label), "label");
export interface TreeViewLabelProps
  extends AssignJSXStyleProps<ArkTreeView.LabelProps> {}

export const TreeViewTree = withContext(styled(ArkTreeView.Tree), "tree");
export interface TreeViewTreeProps
  extends AssignJSXStyleProps<ArkTreeView.TreeProps> {}

interface TreeChild {
  value: string;
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
  const renderChild = ({ value, name, children }: TreeChild) =>
    children ? (
      <TreeViewBranch key={value} value={value} {...branchProps}>
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
      <TreeViewItem key={value} value={value} {...itemProps}>
        <TreeViewItemText {...itemTextProps}>{name}</TreeViewItemText>
      </TreeViewItem>
    );

  return (
    <TreeViewRoot
      aria-label={typeof label === "string" ? label : undefined}
      {...rest}
    >
      <Stack>
        {label && <TreeViewLabel>{label}</TreeViewLabel>}

        <TreeViewTree {...treeProps}>
          {data.children.map((child) =>
            child.children ? (
              // recursively render child nodes
              renderChild(child)
            ) : (
              <TreeViewItem
                key={child.value}
                value={child.value}
                {...itemProps}
              >
                <TreeViewItemText {...itemTextProps}>
                  {child.name}
                </TreeViewItemText>
              </TreeViewItem>
            ),
          )}
        </TreeViewTree>
      </Stack>
    </TreeViewRoot>
  );
};

export default TreeView;
