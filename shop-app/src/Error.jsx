import React from 'react'

const ErrorNew = (props) => {
    return(
        <div className="error-page empty-cart">
            <div className="container">
                <div className="error-page__wrapper">
                {props.error==="2" ? 
                    <div>
                        <h2>404</h2>
                        <h2>This page is not exist</h2>
                    </div>
                    :  <h2>This page is in progress</h2>
                }
                </div>
            </div>
        </div>
    )
}

export default ErrorNew;