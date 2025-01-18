```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Using a direct comparison with NaN
    if (count !== NaN) {
      console.log('Count is not NaN');
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(NaN)}>Set Count to NaN</button>
    </div>
  );
}
```