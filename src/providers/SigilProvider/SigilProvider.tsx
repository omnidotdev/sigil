import ToastProvider from "providers/ToastProvider/ToastProvider";

import type { ToastProviderProps } from "providers";
import type { ReactNode } from "react";

export interface SigilProviderProps {
  children: ReactNode;
  toastProviderProps?: ToastProviderProps;
}

/**
 * Sigil global provider.
 */
const SigilProvider = ({
  children,
  toastProviderProps,
}: SigilProviderProps) => (
  <ToastProvider {...toastProviderProps}>{children}</ToastProvider>
);

export default SigilProvider;
