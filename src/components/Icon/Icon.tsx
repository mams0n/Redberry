import { FC } from 'react'
import SVG from 'react-inlinesvg'

interface Props {
  filename: string
  className?: string
  onClick?: any
}

const CIcon: FC<Props> = ({ filename, ...rest }) => (
  <SVG src={`/svg/${filename}.svg`} {...rest} />
)

export default CIcon