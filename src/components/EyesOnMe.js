// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

    onFocusMethod() {
        console.log('Good!')
    }
    onBlurMethod() {
        console.log('Hey! Eyes on me!')
    }

    render(){
        return (
            <div>
                < button onFocus = {this.onFocusMethod} onBlur = {this.onBlurMethod} />
            </div>
        )
    }
}

export default EyesOnMe;