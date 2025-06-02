import React from 'react'
import error from '../../assets/images/404.jpg'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <>
    <section id="404-page" className="bg-white py-16 flex items-center justify-center min-h-screen">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
            <div className="grid gap-8 sm:grid-cols-2">
                {/* <!-- content - start --> */}
                <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
                    <h1 className="text-4xl font-bold text-primary mb-5">404 - Page Not Found</h1>
                    <p className="text-gray-txt mb-5">The page you are looking for might have been removed, renamed, or is temporarily unavailable.</p>
                        <Link to ="/" className="bg-primary hover:bg-transparent border border-transparent hover:border-primary text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block">Go back</Link>
                </div>
                {/* <!-- content - end -->
                <!-- image - start --> */}
                <div className="relative h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                    <img src={error} alt="Image" className="w-full h-auto"/>
                </div>
                {/* <!-- image - end --> */}
            </div>
        </div>
    </section>
    </>
  )
}

export default ErrorPage