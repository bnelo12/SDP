import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../animations/gears.json'

export default () => {
    return (() => {
        const options = {
            loop: true,
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
                    isStopped={false}
                    isPaused={false}
                    isClickToPauseDisabled={true}
                />
            </div>
        )
    })();
}