import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  const convertToPixel = (rem: string) => {
    const remValue = Number(rem)
    const pixelValue = remValue * 16
    return `${pixelValue}px`
  }

  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && <td>{convertToPixel(value)}</td>}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
