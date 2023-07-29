import React from 'react';
import * as Loader from "react-loader-spinner";

const Loading = () => {
    return (
        <>
            <div className={"loader"}>
                <Loader.Watch
                    height={100}
                    width={100}
                />
            </div>
        </>
    );
};

export default Loading;