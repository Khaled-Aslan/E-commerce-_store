// E-commerce store
import React from 'react'
import '../index.css'
import products from './Product'


function Home() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", direction: 'rtl' }} className="container-fluid pt-5 mb-5 pb-2">

      <div className="row pt-5">
        <div className="col-md-12">
          <div className="card" style={{
            backgroundColor: "rgb(6, 95, 70)",
            borderRadius: "23px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{ position: "absolute", width: "110px", height: "110px", top: "-20px", left: "-20px", backgroundColor: "rgb(48, 100, 57)", borderRadius: "50%", pointerEvents: "none" }}></div>
            <div style={{ position: "absolute", width: "140px", height: "140px", top: "-30px", left: "200px", backgroundColor: "rgba(60, 108, 77, 0.69)", borderRadius: "50%", pointerEvents: "none" }}></div>
            <div style={{ position: "absolute", width: "210px", height: "210px", bottom: "-60px", left: "-40px", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "50%", pointerEvents: "none" }}></div>

            <div style={{ paddingRight: "50px", paddingLeft: "50px", paddingTop: "30px", paddingBottom: "20px", position: "relative", zIndex: 1, textAlign: "right" }}>
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
          <div className="card p-2 d-flex flex-row align-items-center" style={{ borderRadius: "12px", border: "0.5px solid rgba(210, 210, 210, 0.51)" }}>
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
          <div className="card p-2 d-flex flex-row align-items-center" style={{ borderRadius: "12px", border: "0.5px solid rgba(210, 210, 210, 0.51)" }}>
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
          <div className="card p-2 d-flex flex-row align-items-center" style={{ borderRadius: "12px", border: "0.5px solid rgba(210, 210, 210, 0.51)" }}>
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

      <h3 className="fw-bold mt-5 mb-4 text-end" style={{ color: "#145346" }}>أحدث المنتجات</h3>

      <div className="row g-4 mb-5 text-end">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-md-4 col-lg-3">
            <div className="card hover-card h-100 position-relative" style={{ borderRadius: "16px", overflow: "hidden" }}>

              {product.tag && (
                <span className="position-absolute badge" style={{
                  top: "12px",
                  left: "12px",
                  backgroundColor: "rgb(217, 119, 6)",
                  color: "#fff",
                  zIndex: 2,
                  borderRadius: "6px",
                  padding: "6px 10px",
                  fontSize: "0.75rem"
                }}>
                  {product.tag}
                </span>
              )}

              <div style={{ backgroundColor: "#f8f9fa", height: "220px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" , overflow: "hidden"}}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid card-image"
                  style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover", width: "100%", height: "100%" }}
                />

                {!product.Stock && (
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                    <span className="badge bg-danger px-3 py-2 fs-6" style={{ borderRadius: "8px" }}>نفد المخزون</span>
                  </div>
                )}
              </div>

              <div className="card-body d-flex flex-column justify-content-between p-3">
                <div>
                  <span className="text-muted d-block mb-1" style={{ fontSize: "0.75rem" }}>{product.category}</span>

                  <h6 className="fw-bold mb-2" style={{ fontSize: "0.95rem", color: "#333", minHeight: "40px" }}>{product.name}</h6>

                  <div className="d-flex align-items-center mb-3">

                    <span className="text-muted me-2" style={{ fontSize: "0.8rem" }}>({product.rating})</span>

                    <div className="text-warning" style={{ fontSize: "0.8rem" }}>

                      {Array(5 - Math.ceil(product.rating)).fill().map((_, i) => (
                        <i key={`empty-${i}`} className="far fa-star ms-1"></i>
                      ))}
                      {product.rating % 1 !== 0 && (
                        <i className="fas fa-star-half-alt ms-1"></i>
                      )}
                      {Array(Math.floor(product.rating)).fill().map((_, i) => (
                        <i key={`full-${i}`} className="fas fa-star ms-1"></i>
                      ))}




                    </div>

                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-between pt-2 border-top">
                  <span className="fw-bold fs-5" style={{ color: "#145346" }}>
                    {product.price.toLocaleString()} <span style={{ fontSize: "1.0rem" }}>USD</span>
                  </span>

                  {product.Stock ? (
                    <button className="btn d-flex align-items-center justify-content-center px-2 py-1" style={{
                      backgroundColor: "rgb(6, 95, 70)",
                      color: "#fff",
                      borderRadius: "8px",
                      fontSize: "0.85rem"
                    }}>
                      <i className="fas fa-plus ms-1" style={{ fontSize: "0.75rem" }}></i> إضافة
                    </button>
                  ) : (
                    <button className="btn btn-light disabled px-2 py-1" style={{ borderRadius: "8px", fontSize: "0.85rem" }}>
                      إضافة
                    </button>
                  )}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Home