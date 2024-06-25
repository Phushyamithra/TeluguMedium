import '../styles/Arrow.css'

export const LeftArrow = ({handleLeftClick}) => {
    return (
    <div className="center-con" onClick={handleLeftClick} >
        <div className="roundLeft">
            <span className="arrow primera next "></span>
            <span className="arrow segunda next "></span>
        </div>
    </div>
  )
}
export const RightArrow = ({handleRightClick}) => {
    return (
    <div className="center-con" onClick={handleRightClick} >
        <div className="round">
            <span className="arrow primera next "></span>
            <span className="arrow segunda next "></span>
        </div>
    </div>
  )
}

export default RightArrow;