// E-commerce store
import React from 'react'
import '../index.css'

function Home() {
  return (
    <div style={{ fontFamily: "'Alexandria', sans-serif" }} className="container pt-5">
      <div className="row pt-5">
        <div className="col-md-12">

          <div className="card" style={{
            backgroundColor: "rgb(6, 95, 70)",
            borderRadius: "23px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
            overflow: "hidden"
          }}>

            <div style={{
              position: "absolute",
              width: "110px",
              height: "110px",
              top: "-20px",
              left: "-20px",
              backgroundColor: "rgb(48, 100, 57)",
              borderRadius: "50%",
              pointerEvents: "none"
            }}></div>
            <div style={{
              position: "absolute",
              width: "140px",
              height: "140px",
              top: "-30px",
              left: "200px",
              backgroundColor: "rgba(60, 108, 77, 0.69)",
              borderRadius: "50%",
              pointerEvents: "none"
            }}></div>

            <div style={{
              position: "absolute",
              width: "210px",
              height: "210px",
              bottom: "-60px",
              left: "-40px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "50%",
              pointerEvents: "none"
            }}></div>

            <div className="" style={{
              paddingRight: "50px",
              paddingLeft: "50px",
              paddingTop: "30px",
              paddingBottom: "20px",
              position: "relative",
              zIndex: 1,
              textAlign: "right"
            }}>
              <p style={{ color: "rgb(126, 177, 162)" }} className="p-0 m-0">مرحباً بك في</p>
              <h1 className='fw-bold' style={{ fontSize: "3.5rem" }}>
                <span className='fw-bold text-white ' >متجرك المفضل</span>
                <br />
                <span style={{ color: "rgb(217, 119, 6)" }} className='fw-bold ' >للتسوق السريع</span>
              </h1>
              <p className='mt-4' style={{ color: "rgb(126, 177, 162)", fontSize: "1rem" }}>
                اكتشف أفضل المنتجات بأسعار تنافسية. شحن سريع <br /> وضمان استرجاع 30 يوم.
              </p>
            </div>

          </div>

        </div>
      </div>

      <div className="row mt-4 g-2" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>

        <div className="col-6 col-md-3">
          <div className="card p-2 d-flex flex-row align-items-center" style={{ borderRadius: "12px", border: "0.5px solid rgba(210, 210, 210, 0.51)" }}>
            <div className="d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "#e8f2ee", color: "#145346" }}>
              <i className="fas fa-truck-moving" style={{ fontSize: "0.9rem" }}></i>
            </div>
            <div className="me-2">
              <p className="fw-bold p-0 m-0" style={{ fontSize: "0.9rem" }}>شحن مجاني</p>
              <p className='p-0 m-0' style={{ fontSize: "0.7rem", color: "rgb(107, 107, 107)" }}>فوق 500 ر.س</p>
            </div>

          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card p-2 d-flex flex-row align-items-center   " style={{ borderRadius: "12px", border: "0.5px solid rgba(210, 210, 210, 0.51)" }}>
            <div className="d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "#e8f2ee", color: "#145346" }}>
              <i className="fas fa-check-circle" style={{ fontSize: "0.9rem" }}></i>
            </div>
            <div className="me-2">
              <p className="fw-bold p-0 m-0" style={{ fontSize: "0.9rem" }}>ضمان الأصالة</p>
              <p className='p-0 m-0' style={{ fontSize: "0.7rem", color: "rgb(107, 107, 107)" }}>منتجات أصلية 100%</p>
            </div>

          </div>
        </div>

        <div className="col-6 col-md-3">

          <div className="card p-2 d-flex flex-row align-items-center  " style={{ borderRadius: "12px", border: "0.5px solid rgba(210, 210, 210, 0.51)" }}>
            <div className="d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "#e8f2ee", color: "#145346" }}>
              <i className="fas fa-undo-alt" style={{ fontSize: "0.9rem" }}></i>
            </div>
            <div className="me-2">
              <p className="fw-bold p-0 m-0" style={{ fontSize: "0.9rem" }}>إرجاع مجاني</p>
              <p className='p-0 m-0' style={{ fontSize: "0.7rem", color: "rgb(107, 107, 107)" }}>خلال 30 يوم</p>
            </div>

          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card p-2 d-flex flex-row align-items-center " style={{ borderRadius: "12px", border: "0.5px solid rgba(210, 210, 210, 0.51)" }}>
            <div className="d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "#e8f2ee", color: "#145346" }}>
              <i className="fas fa-box" style={{ fontSize: "0.9rem" }}></i>
            </div>
            <div className="me-2">
              <p className="fw-bold p-0 m-0" style={{ fontSize: "0.9rem" }}>تغليف آمن</p>
              <p className='p-0 m-0' style={{ fontSize: "0.7rem", color: "rgb(107, 107, 107)" }}>حماية كاملة</p>
            </div>

          </div>
        </div>

      </div>
    </div >

  )
}

export default Home