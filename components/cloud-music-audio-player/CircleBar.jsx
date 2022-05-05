import Circle from 'react-circle'
import {PlayOutline} from 'antd-mobile-icons'

const CircleBar = () => {
  return (
    <div className="circle-wrap">
      <Circle
        animate={true} // Boolean: Animated/Static progress
        animationDuration="1s" //String: Length of animation
        responsive={true} // Boolean: Make SVG adapt to parent size
        lineWidth={15} // Number: Defines the thickness of the circle's stroke.
        progress={40} // Number: Update to change the progress and percentage.
        progressColor="#666" // String: Color of "progress" portion of circle.
        bgColor="#eee" // String: Color of "empty" portion of circle.
        percentSpacing={0} // Number: Adjust spacing of "%" symbol and number.
        roundedStroke={false} // Boolean: Rounded/Flat line ends
        showPercentage={false} // Boolean: Show/hide percentage.
        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
      />
      <PlayOutline className="ply-icos" />
    </div>
  )
}

export default CircleBar
