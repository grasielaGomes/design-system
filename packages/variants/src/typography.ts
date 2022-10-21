import {
  fontFamily,
  fontWeight,
  fontSize,
  palette,
  lineHeight,
} from '@woovi-ui/tokens'

export const typography = {
  fontFamily,
  fontWeight: fontWeight.regular,
  lineHeight: lineHeight.short,
  color: palette.neutral[500],
  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  h5: undefined,
  h6: undefined,
  subtitle1: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
  },
  subtitle2: {
    fontSize: fontSize.lg,
  },
  body1: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
  },
  body2: {
    fontSize: fontSize.md,
  },
  button: {
    fontSize: fontSize.lg,
  },
  caption: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.bold,
  },
  overline: undefined,
  heading1: {
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.bold,
  },
  heading2: {
    fontSize: fontSize['2xl'],
  },
}
