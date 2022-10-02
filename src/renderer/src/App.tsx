import Versions from './components/Versions'
import icons from './assets/icons.svg'
import { useState } from 'react'
import { LocalImage } from './components/Image'

function App(): JSX.Element {
  const [images, setImages] = useState<string[]>([])
  const handleBrowse = (): void => {
    console.log('Browse')
    // @ts-expect-error bla
    api.browse('message').then((imagePaths) => {
      setImages(imagePaths)
    })
  }
  return (
    <div className="container">
      <Versions></Versions>
      <button onClick={handleBrowse}>Browse</button>
      <div className="list">
        {images.map((image, index) => (
          <LocalImage key={`image-${index}`} image={image} />
        ))}
      </div>
    </div>
  )
}

export default App
