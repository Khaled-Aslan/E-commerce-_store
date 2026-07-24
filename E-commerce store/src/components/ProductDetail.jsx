import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "./Product";

function ProductDetail({ addToCart, cartItems, updateQuantity }) {
    const { id } = useParams();

    const product = products.find((item) => String(item.id) === String(id));
    const cartItem = cartItems.find((item) => String(item.id) === String(id));

    if (!product) {
        return (
            <div className="container text-center py-5" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
                <h2 className="text-danger mb-3">المنتج غير موجود</h2>
                <Link to="/" className="btn btn-success px-4 py-2 rounded-pill">العودة للرئيسية</Link>
            </div>
        );
    }

    const currentQtyInCart = cartItem ? cartItem.quantity : 0;
    const isMaxStockReached = currentQtyInCart >= product.Stock;

    return (
        <div
            style={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                backgroundColor: "#f9f9f9",
                minHeight: "100vh",
            }}
            className="container-fluid mt-5 py-5"
        >
            <div className="container py-4">
                <div className="d-flex mb-4">
                    <Link
                        to="/"
                        className="hoverProMax text-decoration-none fs-6 d-flex align-items-center gap-2"
                    >
                        <i className="arrow fas fa-arrow-right"></i>

                        <span className=" fw-bold">العودة للمنتجات</span>
                    </Link>
                </div>

                <div className="row g-5 align-items-center">
                    <div className="col-md-6 text-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid rounded-4 shadow-sm"
                            style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-md-6 text-end">
                        <span
                            style={{ color: "#065f46", fontSize: "0.9rem", fontWeight: "600" }}
                        >
                            {product.category}
                        </span>

                        <h2 className="fw-bold my-2" style={{ color: "#111", fontSize: "2rem" }}>
                            {product.name}
                        </h2>

                        <div className="d-flex gap-2 mb-3">
                            <span className="text-muted" style={{ fontSize: "0.85rem" }}>
                                (تقييم العملاء)
                            </span>
                            <span className="fw-bold" style={{ fontSize: "0.9rem" }}>
                                {product.rating}
                            </span>
                            <div className="text-warning" style={{ fontSize: "0.85rem" }}>
                                <i className="fas fa-star ms-1"></i>
                            </div>
                        </div>

                        <div className="mb-3">
                            <span
                                className="fw-bold fs-2"
                                style={{ color: "#065f46", fontFamily: "sans-serif" }}
                            >
                                {product.price?.toLocaleString()} <span className="fs-4">USD</span>
                            </span>
                        </div>

                        <div className="mb-4">
                            {product.Stock > 0 ? (
                                <div className="d-flex align-items-center gap-2">
                                    <span className="badge bg-light text-dark border px-3 py-2 fs-6" style={{ borderRadius: "8px" }}>
                                        الكمية المتوفرة: <strong style={{ color: "#065f46" }}>{product.Stock}</strong> قطع
                                    </span>
                                    {product.Stock <= 5 && (
                                        <span className="badge bg-warning text-dark px-3 py-2 fs-6" style={{ borderRadius: "8px" }}>
                                            اخر {product.Stock} قطع
                                        </span>
                                    )}
                                </div>
                            ) : (
                                <span className="badge bg-danger px-3 py-2 fs-6" style={{ borderRadius: "8px" }}>
                                    غير متوفر في المخزون
                                </span>
                            )}
                        </div>

                        <div className="d-flex flex-column gap-3 mb-4" style={{ maxWidth: "450px" }}>
                            {product.Stock > 0 ? (
                                <>
                                    {isMaxStockReached && (
                                        <div className="text-danger small text-center fw-bold">
                                            وصلت للحد الأقصى للمخزون
                                        </div>
                                    )}
                                    {cartItem ? (

                                        <div className=" row ">

                                            <div className="col-md-7 ms-3 d-flex align-items-center justify-content-between border rounded-pill p-1 bg-white">
                                                <button
                                                    onClick={() => updateQuantity(product.id, 1)}
                                                    className="btn btn-light rounded-circle fw-bold"
                                                    style={{ width: "40px", height: "40px" }}
                                                    disabled={isMaxStockReached}
                                                >
                                                    +
                                                </button>
                                                <span className="fw-bold fs-5">{cartItem.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(product.id, -1)}
                                                    className="btn btn-light rounded-circle fw-bold"
                                                    style={{ width: "40px", height: "40px" }}
                                                >
                                                    -
                                                </button>
                                            </div>

                                            <Link
                                                to="/CheckOut"
                                                className="col-md-3 btn me-3 py-2 fw-bold text-decoration-none text-center"
                                                style={{
                                                    backgroundColor: "#065f46",
                                                    color: "#fff",
                                                    borderRadius: "25px",
                                                    fontSize: "1rem",
                                                }}
                                            >
                                                الذهاب إلى السلة
                                            </Link>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="btn w-100 py-2 fw-bold d-flex align-items-center justify-content-center gap-2"
                                            style={{
                                                backgroundColor: "#065f46",
                                                color: "#fff",
                                                borderRadius: "25px",
                                                fontSize: "1rem",
                                            }}
                                        >
                                            <i className="fas fa-plus fs-6"></i>
                                            <span>أضف للسلة</span>
                                        </button>
                                    )}
                                </>
                            ) : (
                                <button className="btn btn-secondary w-100 py-2 fw-bold" disabled>
                                    نفد المخزون
                                </button>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductDetail;