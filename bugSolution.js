```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Using isNaN() to check for NaN
    if (!isNaN(count)) {
      console.log('Count is a number:', count);
    } else {
      console.log('Count is NaN');
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