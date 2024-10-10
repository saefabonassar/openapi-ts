import { defaultConfig } from './config';
import type { PluginConfig, UserConfig } from './types';

export { defaultConfig } from './config';
export type { PluginConfig, UserConfig } from './types';

/**
 * Type helper for Zod plugin, returns {@link PluginConfig} object
 */
export const defineConfig = (config?: UserConfig): PluginConfig => ({
  ...defaultConfig,
  ...config,
});