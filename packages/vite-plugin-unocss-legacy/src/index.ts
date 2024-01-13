import presetUno from '@unocss/preset-uno'
import type { Plugin } from 'vite'
import type { VitePluginConfig } from './vite-plugin'
import VitePlugin from './vite-plugin'

export * from './vite-plugin'

export default function UnocssVitePlugin<Theme extends object>(
  configOrPath?: VitePluginConfig<Theme> | string,
): Plugin[] {
  return VitePlugin(
    configOrPath,
    {
      presets: [
        presetUno(),
      ],
    },
  )
}
