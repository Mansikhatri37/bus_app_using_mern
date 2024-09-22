import React from 'react'

export default function NotFound({ error, code }) {
    return (
        <div className="middle-box text-center animated fadeInDown">
            <h1>404</h1>
            <h3 className="font-bold">Page Not Found</h3>
            <div className="error-desc">
                <p>
                    Sorry, but the page you are looking for has not been found. Try checking
                    the URL for error, then hit the refresh button on your browser.
                </p>

                <a href="/" className="btn btn-primary my-5">
                    Take me Home
                </a>
            </div>
        </div>
    )
}
