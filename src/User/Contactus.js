// import React from 'react';

// const Contactus = () => {
//     return (
// <div>
//     <h3>Contactus</h3>
//     <div>
//         <form>
//             <div className="form-group">
//                 <label className="text-muted">Name</label>
//                 <input type="text" className="form-control" />
//             </div>

//             <div className="form-group">
//                 <label className="text-muted">Email</label>
//                 <input type="email" className="form-control" />
//             </div>

//             <div className="form-group">
//                 <label className="text-muted">Password</label>
//                 <input type="password" className="form-control" />
//             </div>
//             <button className="btn btn-primary">
//                 Submit
//             </button>
//         </form>
//     </div>
// </div>
// );
// }

// export default Contactus;

import React from 'react'

function Contactus() {
    return (
        <div className="container">
            <h3 style={{ textAlign: "center" }}>Contactus</h3>
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
