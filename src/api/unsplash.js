import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID 8f47b1f99137bf893d8dcb10f27906e9ddc6f4e1f8d0382d404a0ee3370cdef1`
  }
});
