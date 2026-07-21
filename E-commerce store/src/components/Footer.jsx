// E-commerce store
import React from 'react'
import '../index.css'
function Footer() {

  return (

    <footer className="bg-white text-dark py-4 mt-auto" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <div className="container text-center">
        <p>Khaled Store للتسوق الإلكتروني</p>
        <p className="mb-0"> جميع الحقوق محفوظة. &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
