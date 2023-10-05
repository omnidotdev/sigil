import { useState, useCallback } from "react";

export interface Options {
  /** Open state. */
  isOpen?: boolean;
  /** Callback triggered for opening. */
  onOpen?: () => void;
  /** Callback triggered for closing. */
  onClose?: () => void;
  /** Default open state. Defaults to `false`. */
  defaultIsOpen?: boolean;
}

/**
 * Manage boolean disclosure state. Useful for modals, dropdowns, tooltips, and other components that can be toggled open/closed. Can be used as a controlled or uncontrolled component. To use as a controlled component, pass options to the hook.
 */
const useDisclosure = ({
  isOpen: isOpenControlled,
  onOpen: onOpenControlled,
  onClose: onCloseControlled,
  defaultIsOpen = false,
}: Options = {}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const isControlled = isOpenControlled;

  const onClose = useCallback(() => {
    !isControlled && setIsOpen(false);
    onCloseControlled?.();
  }, [isControlled, onCloseControlled]);

  const onOpen = useCallback(() => {
    !isControlled && setIsOpen(true);
    onOpenControlled?.();
  }, [isControlled, onOpenControlled]);

  const onToggle = useCallback(() => {
    !isControlled
      ? setIsOpen(!isOpen)
      : isOpenControlled
      ? onClose()
      : onOpen();
  }, [isControlled, isOpen, isOpenControlled, onClose, onOpen]);

  return {
    isOpen: isControlled ? isOpenControlled : isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};

export default useDisclosure;
