```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct way 1: Remove count from dependencies
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Correct way 2: Use functional update to avoid dependency issues
  // useEffect(() => {
  //   setCount(prevCount => prevCount + 1);
  // }, []);

  return <div>Count: {count}</div>;
}
```