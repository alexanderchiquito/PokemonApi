import { RaceBy } from '@uiball/loaders'

export const Loader = () => {
  return (
    <div className="container-loader">
      <RaceBy size={80} lineWeight={5} speed={1.4} color="black" />
    </div>
  )
}
