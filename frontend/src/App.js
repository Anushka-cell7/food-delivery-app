import { useEffect, useState } from "react";

function App() {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/food")
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);

  // ✅ Reliable working images
  const foodImages = {
    Burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    Pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    Momos: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800"
  };

  const addToCart = (food) => {
    const existing = cart.find(item => item.id === food.id);

    if (existing) {
      setCart(cart.map(item =>
        item.id === food.id
          ? { ...item, qty: item.qty + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...food, qty: 1 }]);
    }
  };

  const increase = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decrease = (id) => {
    setCart(cart
      .map(item =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter(item => item.qty > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const placeOrder = () => {
    fetch("http://localhost:8080/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        items: JSON.stringify(cart),
        total: total
      })
    })
      .then(res => res.json())
      .then(() => {
        alert("Order placed successfully ✅");
        setCart([]);
      });
  };

  return (
    <div style={{
      minHeight: "100vh",
      fontFamily: "Poppins, sans-serif",
      background: "linear-gradient(135deg, #fdfbfb, #ebedee)"
    }}>

      {/* HEADER */}
      <div style={{
        background: "linear-gradient(90deg, #ff4d4f, #ff7a18)",
        padding: "18px",
        color: "white",
        textAlign: "center",
        fontSize: "26px",
        fontWeight: "bold",
        borderRadius: "0 0 15px 15px"
      }}>
        🍔 Foodie Express
      </div>

      <div style={{ display: "flex", padding: "20px", gap: "20px" }}>

        {/* MENU */}
        <div style={{ flex: 2 }}>
          <h2>Menu</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "20px"
          }}>
            {foods.map(food => (
              <div
                key={food.id}
                style={{
                  background: "white",
                  borderRadius: "15px",
                  padding: "15px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >

                {/* IMAGE with fallback */}
                <img
                  src={foodImages[food.name]}
                  alt={food.name}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300?text=Food";
                  }}
                  style={{
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    marginBottom: "10px"
                  }}
                />

                <h3>{food.name}</h3>
                <p style={{ fontWeight: "bold", color: "#444" }}>
                  ₹{food.price}
                </p>

                <button
                  onClick={() => addToCart(food)}
                  style={{
                    marginTop: "auto",
                    padding: "10px",
                    background: "linear-gradient(90deg, #ff4d4f, #ff7a18)",
                    border: "none",
                    color: "white",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "0.3s"
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = "0.85"}
                  onMouseLeave={(e) => e.target.style.opacity = "1"}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CART */}
        <div style={{
          flex: 1,
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          height: "fit-content"
        }}>
          <h2>Cart 🛒</h2>

          {cart.length === 0 ? (
            <p>No items added</p>
          ) : (
            cart.map(item => (
              <div key={item.id} style={{
                borderBottom: "1px solid #eee",
                marginBottom: "10px",
                paddingBottom: "10px"
              }}>
                <strong>{item.name}</strong><br />
                ₹{item.price} × {item.qty}

                <div style={{ marginTop: "5px" }}>
                  <button onClick={() => increase(item.id)}>+</button>
                  <button
                    onClick={() => decrease(item.id)}
                    style={{ marginLeft: "5px" }}
                  >
                    -
                  </button>
                </div>
              </div>
            ))
          )}

          <h3>Total: ₹{total}</h3>

          {cart.length > 0 && (
            <button
              onClick={placeOrder}
              style={{
                width: "100%",
                padding: "12px",
                background: "green",
                color: "white",
                border: "none",
                borderRadius: "8px",
                marginTop: "10px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Place Order
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;