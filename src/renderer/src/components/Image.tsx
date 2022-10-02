import { FC } from 'react'

type LocalImageProps = {
  image: string
}

export const LocalImage: FC<LocalImageProps> = ({ image }) => {
  return <img src={`file://${image}`} className="image" loading="lazy" />
}
