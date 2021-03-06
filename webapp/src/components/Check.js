import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../animations/check.json'

export default ({play, isReturn}) => {
    const options = {
        loop: false,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const style = {
        textAlign: "center"
    }

    return (
        <div style={style}>
            <Lottie
                options={options}
                width={150}
                isStopped={!play}
                isPaused={false}
                isClickToPauseDisabled={true}
            />
            <h1>{isReturn ? "The robot is now ready for your items to be returned" : "Your items are now ready to collect"}</h1>
            <h5>{isReturn ? "Please head over to the robot with your items and press the button when ready" : "Precede to the robot collection point and then press collect"}</h5>
        </div>
    )
}