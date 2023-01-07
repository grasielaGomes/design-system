import { palette } from '@ds-ui/tokens'
import { getContrast } from 'polished'

export const PaletteGrid = () => {
  const handleColorContrast = (color: string): string => {
    return getContrast(color, palette.defaultGray100) < 3.5
      ? palette.defaultGray900
      : palette.defaultGray100
  }

  return Object.entries(palette).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: handleColorContrast(color),
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
