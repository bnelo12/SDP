import React, {Component} from 'react'
import Lottie from 'react-lottie';
import animationData from '../animations/empty-box.json'

export default class EmptyCart extends Component {
    render () {
        const options = {
            loop: false,
            autoplay: true,
            animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        }

        const style = {
            padding: "100px",
            textAlign: "center"
        }

        return (
            <div style={style}>
                <Lottie
                    options={options}
                    height={300}
                    width={300}
                    isStopped={false}
                    isPaused={false}
                />
                <h2>cart is empty</h2>
            </div>
        );
    }
}