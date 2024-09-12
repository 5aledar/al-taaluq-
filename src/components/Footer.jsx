import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
    return (
        <footer className="footer bg-base-300 text-base-content p-10" id='footer'>
            <nav>
                <h6 className="footer-title">Sections</h6>
                <Link to='/services' className="link link-hover">Services</Link>
                <Link to='/' className="link link-hover">Home</Link>
                <Link className="link link-hover">Marketing</Link>
                <Link className="link link-hover">Advertisement</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Contact Us</h6>
                <div className='flex items-center gap-1'><FaPhoneAlt /> 0943366841</div>
                <div className='flex items-center gap-1'><MdEmail /> info@altaaloq.sy</div>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.linkedin.com/company/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D9%84%D8%AA%D8%A3%D9%84%D9%82-%D8%A7%D9%84%D9%85%D8%AD%D8%AF%D9%88%D8%AF%D8%A9-%D8%A7%D9%84%D9%85%D8%B3%D8%A4%D9%88%D9%84%D9%8A%D8%A9-altaaloq/' target='_blanc'>
                        <svg className="w-6 h-6 text-gray-800 dark:text-zinc-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                        </svg>

                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100086502925333&sk=about' target='_blanc'>
                        <svg className="w-6 h-6 text-gray-800 dark:text-zinc-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                        </svg>

                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
