import React from "react";

export default function SearchResults({ result }) {
    if (!result) {
    return null;
  }
    return (
        <div className="result">
        <p>{result}</p>
    </div>
    )
}