import Button from "../public/components/shared/Button";
import SearchBox from "../public/components/SearchBox";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Card from "../public/components/Card";
import axios from "axios";

export default function Home() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function ErrorFallback({ error }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
      </div>
    );
  }

  const fetchData = async () => {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.NEXT_PUBLIC_GIPHY_API}&limit=10&rating=g`
    );

    setFetchedData(res.data.data);
  };

  return (
    // <div className={styles.container}>
    <div className="containerCard">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <SearchBox />
        <Button type="button" name="buscar" />
      </ErrorBoundary>

      <div className="cardWrapper">
        {fetchedData.map((data) => {
          return <Card key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
}
