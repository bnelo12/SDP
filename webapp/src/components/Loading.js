import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../animations/loading.json'

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
                <h1>You are in the queue</h1>
                <h5>Your items will be ready to collect shortly</h5>
            </div>
        )
    })();
}