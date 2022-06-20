import { useState } from "react"
import styled from "styled-components"

const ToggleSwitch = ({ onClick }) => {
  const [isToggled, setIsToggled] = useState(false)
  const handleToggleSwitch = () => {
    setIsToggled((state) => !state)
    onClick()
  }
  return (
    <Switch onClick={handleToggleSwitch}>
      {isToggled && <span className="on">C</span>}
      {!isToggled && <span className="off">F</span>}
      <Slider isToggled={isToggled} />
    </Switch>
  )
}

export default ToggleSwitch

const Switch = styled.label`
  width: 50px;
  height: 20px;
  cursor: pointer;
  display: inline-block;

  position: relative;
  inset: 0;
  transition: 0.4s;
  border-radius: 55px;
  background-color: ${({ theme }) => theme.temperatureSwitch.backgroundColor};
  .on,
  .off {
    color: ${({ theme }) => theme.temperatureSwitch.textColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    svg {
      width: 20px;
      fill: white;
    }
  }
  .on {
    padding-right: 15px;
  }
  .off {
    padding-left: 15px;
  }
`

const Slider = styled.div`
  position: absolute;
  height: 16px;
  width: 18px;
  left: 2px;
  top: 2px;
  background-color: ${({ theme }) => theme.temperatureSwitch.sliderColor};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 44px;
  transform: ${({ isToggled }) =>
    isToggled ? "translateX(28px)" : "translateX(0)"};
`
