import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom';
import '../style.css';

function GoBack() {
    let history = new useHistory();
    return (
        <Fragment>
            <button className="btn btn-primary btn-xl m-3"
            style={{fontSize:"1.5rem"}}
                onClick={() => history.goBack()}>
                <i class="material-icons large">keyboard_arrow_left</i>
  Back
                {/* <i class="tiny material-icons mt-2 pr-2" style={{ fontSize: "30px" }}>arrow_back</i> */}
            </button>

        </Fragment>
    )
}

export default GoBack