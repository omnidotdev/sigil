import { TreeView as ArkTreeView } from "@ark-ui/react/tree-view";
import {
  FiCheckSquare,
  FiChevronRight,
  FiFile,
  FiFolder,
} from "react-icons/fi";

import { styled } from "generated/panda/jsx";
import { treeView } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { TreeNode as ArkTreeNode } from "@ark-ui/react/tree-view";
import type { StyledComponent } from "generated/panda/jsx";
import type {
  TreeViewRecipe,
  TreeViewVariantProps,
} from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";
import type { ComponentVariants } from "lib/util/createStyleContext";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(treeView);

export interface TreeViewNode {
  /** Human-readable label. */
  label: string;
  /** Unique value. */
  value: string;
  /** Recursive child nodes. */
  children?: TreeViewNode[];
}

// TODO remove explicit type annotation, used currently due to type inference issue (non-portable type)
export const TreeViewRoot: ComponentVariants<
  StyledComponent<typeof ArkTreeView.Root<TreeViewNode>, {}>,
  TreeViewRecipe
> = withProvider(styled(ArkTreeView.Root), "root");
export interface TreeViewRootProps
  extends AssignJSXStyleProps<ArkTreeView.RootProps<TreeViewNode>>,
    TreeViewVariantProps {}

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

export const TreeViewNodeProvider = withContext(
  styled(ArkTreeView.NodeProvider),
  // @ts-ignore upstream type issue (TODO resolve)
  "nodeProvider",
);
export interface TreeViewNodeProviderProps<T extends ArkTreeNode>
  extends AssignJSXStyleProps<ArkTreeView.NodeProviderProps<T>> {}

export const TreeViewBranchIndentGuide = withContext(
  styled(ArkTreeView.BranchIndentGuide),
  // @ts-ignore upstream type issue (TODO resolve)
  "branchIndentGuide",
);
export interface TreeViewBranchIndentGuideProps
  extends AssignJSXStyleProps<ArkTreeView.BranchIndentGuideProps> {}

interface TreeNodeProps extends TreeViewNodeProviderProps<TreeViewNode> {
  /** Branch props. */
  branchProps?: TreeViewBranchProps;
  /** Branch control props. */
  branchControlProps?: TreeViewBranchControlProps;
  /** Branch indicator props. */
  branchIndicatorProps?: TreeViewBranchIndicatorProps;
  /** Branch text props. */
  branchTextProps?: TreeViewBranchTextProps;
  /** Branch content props. */
  branchContentProps?: TreeViewBranchContentProps;
  /** Branch trigger props. */
  branchTriggerProps?: TreeViewBranchTriggerProps;
  /** Branch indent guide props. */
  branchIndentGuideProps?: TreeViewBranchIndentGuideProps;
  /** Item props. */
  itemProps?: TreeViewItemProps;
  /** Item indicator props. */
  itemIndicatorProps?: TreeViewItemIndicatorProps;
  /** Item text props. */
  itemTextProps?: TreeViewItemTextProps;
}

// TODO make more dynamic and composable, e.g. dynamic icons
/**
 * Individual tree node.
 */
const TreeNode = ({
  node,
  indexPath,
  branchProps,
  branchControlProps,
  branchIndicatorProps,
  branchTextProps,
  branchContentProps,
  // TODO use, see note above
  // branchTriggerProps,
  branchIndentGuideProps,
  itemProps,
  itemIndicatorProps,
  itemTextProps,
  ...rest
}: TreeNodeProps) => (
  <TreeViewNodeProvider
    key={node.value}
    node={node}
    indexPath={indexPath}
    {...rest}
  >
    {node.children ? (
      <TreeViewBranch {...branchProps}>
        <TreeViewBranchControl {...branchControlProps}>
          <TreeViewBranchText {...branchTextProps}>
            <FiFolder /> {node.label}
          </TreeViewBranchText>

          <TreeViewBranchIndicator {...branchIndicatorProps}>
            <FiChevronRight />
          </TreeViewBranchIndicator>
        </TreeViewBranchControl>

        <TreeViewBranchContent {...branchContentProps}>
          <TreeViewBranchIndentGuide {...branchIndentGuideProps} />

          {node.children.map((child, index) => (
            <TreeNode
              key={child.value}
              node={child}
              indexPath={[...indexPath, index]}
              {...rest}
            />
          ))}
        </TreeViewBranchContent>
      </TreeViewBranch>
    ) : (
      <TreeViewItem {...itemProps}>
        <TreeViewItemIndicator {...itemIndicatorProps}>
          <FiCheckSquare />
        </TreeViewItemIndicator>

        <TreeViewItemText {...itemTextProps}>
          <FiFile />
          {node.label}
        </TreeViewItemText>
      </TreeViewItem>
    )}
  </TreeViewNodeProvider>
);

export interface TreeViewProps extends TreeViewRootProps {
  /** Label for the tree view content. */
  label?: ReactNode;
  /** Tree props. */
  treeProps?: TreeViewTreeProps;
  /** Node props. */
  nodeProps?: TreeNodeProps;
}

/**
 * Tree view for displaying hierarchical data.
 */
const TreeView = ({
  label,
  collection,
  treeProps,
  nodeProps,
  ...rest
}: TreeViewProps) => (
  <TreeViewRoot
    collection={collection}
    aria-label={typeof label === "string" ? label : undefined}
    {...rest}
  >
    {label && <TreeViewLabel>{label}</TreeViewLabel>}

    <TreeViewTree {...treeProps}>
      {collection.rootNode.children?.map((node, index) => (
        <TreeNode
          key={node.value}
          node={node}
          indexPath={[index]}
          {...nodeProps}
        />
      ))}
    </TreeViewTree>
  </TreeViewRoot>
);

export default TreeView;
