import { colors } from '@ds-ui/tokens'
import { getContrast } from 'polished'

export const ColorsGrid = () => {
  const handleColorContrast = (color: string): string => {
    return getContrast(color, colors.white) < 3.5 ? colors.black : colors.white
  }

  return Object.entries(colors).map(([key, color]) => {
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
