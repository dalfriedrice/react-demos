import { useEffect, useRef, useState } from "react";
import axios from "axios";

export const InfiniteScroll = () => {
  const [page, setPage] = useState(0);
  console.log("Page", page);
  const [items, setItems] = useState([]);
  console.log("Items", items);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef(null);

  const fetchItems = async (pageNo) => {
    setLoading(true);
    // Example API
    const { data } = await axios.get(
      //   `https://jsonplaceholder.typicode.com/posts?_page=${pageNo}&_limit=10`
      `https://dummyjson.com/users?skip=${pageNo}&limit=10`
    );
    const { users } = data;
    console.log("Users", users);
    if (users.length) {
      setItems((prev) => [...prev, ...users]);
    } else {
      setHasMore(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchItems(page);
  }, [page]);

  useEffect(() => {
    if (!hasMore || loading) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage((prev) => prev + 10);
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    );
    const ele = loaderRef.current;
    if (ele) {
      observer.observe(ele);
    }
    // return {
    //   if(ele) {
    //     observer.unobserve(ele);
    //   },
    // };
  }, [loading]);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id + item.title}
          style={{
            padding: "16px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h4>{item.firstName}</h4>
          <p>{item.email}</p>
        </div>
      ))}
      {hasMore && (
        <div ref={loaderRef} style={{ padding: "20px", textAlign: "center" }}>
          {loading ? "Loading..." : "Scroll down to load more"}
        </div>
      )}
      {!hasMore && <p>No more data</p>}
    </div>
  );
};
