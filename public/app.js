function App() {
  const [progress, setProgress] = React.useState(0);
  const [processing, setProcessing] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const startProcessing = () => {
    if (processing) return;
    setDone(false);
    setProcessing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setProcessing(false);
          setDone(true);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
  };

  return (
    <div className="container">
      <h1>Basketball Highlight Reel</h1>
      {!processing && !done && (
        <button className="action" onClick={startProcessing}>
          Generate Highlight Reel
        </button>
      )}
      {processing && (
        <div className="progress-wrapper">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
          <div className="progress-text">Processing... {progress}%</div>
        </div>
      )}
      {done && (
        <div className="complete" onClick={() => setDone(false)}>
          Highlight Reel Ready! Click to generate again.
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
