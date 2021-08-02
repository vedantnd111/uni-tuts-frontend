import React from 'react'

function Contactus() {
    return (
        <div className="container" style={{ border: "2px solid black", borderRadius: "5px", alignContent: "center", justifyContent: "center", marginTop: "10px", padding: "20px" }}>
            <h3 style={{ textAlign: "center" }}>Contact Us</h3>
            <div>
                <form>
                    <div className="form-group">
                        <label className="text-muted">Name</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Issue</label>
                        <input type="text" className="form-control" />
                        {/* <text className="form-control" /> */}
                    </div>
                    <button className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contactus
