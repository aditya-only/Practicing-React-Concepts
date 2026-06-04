import { useState, useEffect } from "react";

const UseEffect9 =() => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === "") {
      setResults([]);
      return;
    }

    setLoading(true);

    const timeout = setTimeout(() => {
      // ✅ This is a real search API — searches actual countries
      fetch(`https://restcountries.com/v3.1/name/${query}`)
        .then((res) => res.json())
        .then((data) => {
          // API returns error object if nothing found
          if (data.status === 404) {
            setResults([]);
          } else {
            setResults(data.slice(0, 5)); // show only first 5 results
          }
          setLoading(false);
        })
        .catch(() => {
          setResults([]);
          setLoading(false);
        });
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🌍 Country Search</h2>

      <input
        type="text"
        placeholder="Type a country name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />

      {/* Show loading message */}
      {loading && <p>Searching...</p>}

      {/* Show no results message */}
      {!loading && query !== "" && results.length === 0 && (
        <p>No countries found 😢</p>
      )}

      {/* Show results */}
      {results.map((country) => (
        <div
          key={country.cca3}
          style={{ padding: "10px", borderBottom: "1px solid #eee" }}
        >
          <p>
            {country.flag} {country.name.common}
          </p>
        </div>
      ))}
    </div>
  );
}

export default UseEffect9;