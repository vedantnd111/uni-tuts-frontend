import React from 'react';
import Layout from '../core/Layout';
import {API} from '../configure';
function Home() {
    return (
        <div>
            <Layout title="Home" description="this is a home page">
                {API}
    </Layout>
        </div>
    )
}

export default Home
