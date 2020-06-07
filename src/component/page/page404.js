import React from 'react';
import {Typography} from "antd";

function Page404(props) {
    return (
        <div style={{textAlign:"center" , marginTop:"30px"}}>
            <Typography>
                <Typography.Title level={2}>Page not found</Typography.Title>
                <Typography.Text style={{color:"red"}}>Error code : 404</Typography.Text>
            </Typography>
        </div>
    );
}

export default Page404;