import React from 'react';

const FitBot = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe 
                src="http://127.0.0.1:7860" 
                title="FitBot"
                style={{ width: '100%', height: '100%', border: 'none' }}
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default FitBot;
