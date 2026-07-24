import React from 'react'
import { Link } from 'react-router-dom'

function CheckOut({ cartItems, updateQuantity, removeFromCart, clearCart }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const zaribe = subtotal * 0.15
  const total = subtotal + zaribe



  if (cartItems.length === 0) {
    return (
      <div
        className="d-flex flex-column align-items-center justify-content-center min-vh-100"
        style={{ backgroundColor: "#f8f9fa", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
      >
        <i className="fa-solid fa-cart-shopping text-secondary mb-3" style={{ fontSize: "4rem" }}></i>
        <h2 className="fw-bold mb-2">سلتك فارغة</h2>
        <p className="text-muted mb-4">لم تضف أي منتجات بعد. ابدأ التسوق الآن!</p>
        <Link
          to="/"
          className="btn text-white px-4 py-2 fw-bold"
          style={{ backgroundColor: "#065f46", borderRadius: "12px" }}
        >
          تصفح المنتجات
        </Link>
      </div>
    )
  }

  else {

    return (
      <div
        className="container-fluid pt-5 mt-4 min-vh-100"
      >
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold m-0" style={{ color: "#111" }}>
              سلة المشتريات ({cartItems.length} منتج)
            </h2>
            <button
              onClick={clearCart}
              className="btn text-danger fw-bold border-0 bg-transparent p-0"
            >
              <i className="fa-solid fa-trash-can ms-1"></i> تفريغ السلة
            </button>
          </div>

          <div className="row g-4">
            <div className="col-lg-8">
              <div className="d-flex flex-column gap-3">
                {cartItems.map(item => (
                  <div
                    key={item.id}
                    className="card border-0 shadow-sm p-3 rounded-4 position-relative"
                  >
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn-close position-absolute top-0 start-0 m-3"
                      style={{ fontSize: "0.8rem" }}
                    ></button>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-3"
                        style={{ width: "90px", height: "90px", objectFit: "cover" }}
                      />
                      <div className="flex-grow-1 text-end">
                        <span className="text-muted fs-7">{item.category}</span>
                        <h5 className="fw-bold my-1 fs-6">{item.name}</h5>
                        <div className="fw-bold mb-2" style={{ color: "#065f46" }}>
                          {item.price} USD
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center bg-light rounded-pill px-2 py-1">
                            <button
                              onClick={() => updateQuantity(item.id, +1)}
                              className="btn btn-sm border-0 fw-bold px-2"
                            >
                              +
                            </button>
                            <span className="px-2 fw-bold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="btn btn-sm border-0 fw-bold px-2"
                            >
                              -
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm p-4 rounded-4">
                <h4 className="fw-bold mb-4 text-end">ملخص الطلب</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">المجموع الفرعي</span>
                  <span className="fw-bold">{subtotal} USD</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">ضريبة القيمة المضافة (15%)</span>
                  <span className="fw-bold">{zaribe} USD</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">الشحن</span>
                  <span className="fw-bold text-success">مجاني</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4 fs-5 fw-bold">
                  <span>الإجمالي</span>
                  <span style={{ color: "#065f46" }}>{total} USD</span>
                </div>
                <Link
                  to="/checkout"
                  className="btn text-white w-100 py-3 fw-bold rounded-3 text-center text-decoration-none"
                  style={{ backgroundColor: "#065f46" }}
                >
                  إتمام الطلب <i className="fa-solid fa-chevron-left mr-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckOut