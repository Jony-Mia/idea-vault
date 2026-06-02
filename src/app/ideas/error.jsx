"use client"

const error = () => {
    setTimeout(() =>{ window.location.reload()}, 1000);
    return (
        <div>
            reloading...
        </div>
    );
};

export default error;