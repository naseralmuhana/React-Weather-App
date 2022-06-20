import { Dot, LoaderContainer } from "./styled"

const Spinner = () => {
  return (
    <LoaderContainer>
      <div className="sk-chase">
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </div>
    </LoaderContainer>
  )
}

export default Spinner
