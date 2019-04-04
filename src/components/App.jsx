import React, { Component } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class App extends Component {
  async onSearchSubmit(userInput) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: userInput },
      headers: {
        Authorization: `Client-ID 8f47b1f99137bf893d8dcb10f27906e9ddc6f4e1f8d0382d404a0ee3370cdef1`
      }
    });
    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
