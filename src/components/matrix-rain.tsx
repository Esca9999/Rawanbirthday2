import { useEffect, useState } from "react";

export default function MatrixRain() {
  const [columns, setColumns] = useState<Array<{ id: number; left: number; duration: number; delay: number; text: string }>>([]);

  useEffect(() => {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    let nextId = 0;

    const createColumn = () => {
      const length = Math.floor(Math.random() * 20 + 10);
      let text = '';
      for (let i = 0; i < length; i++) {
        text += characters.charAt(Math.floor(Math.random() * characters.length));
        if (i < length - 1) text += '\n';
      }

      const newColumn = {
        id: nextId++,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        text: text
      };

      setColumns(prev => [...prev, newColumn]);

      // Remove column after animation completes
      setTimeout(() => {
        setColumns(prev => prev.filter(col => col.id !== newColumn.id));
      }, (newColumn.duration + newColumn.delay) * 1000);
    };

    // Create initial columns
    for (let i = 0; i < 50; i++) {
      setTimeout(createColumn, Math.random() * 5000);
    }

    // Continue creating columns
    const interval = setInterval(createColumn, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {columns.map((column) => (
        <div
          key={column.id}
          className="matrix-rain-column absolute whitespace-pre-line"
          style={{
            left: `${column.left}%`,
            animation: `matrix-rain ${column.duration}s linear ${column.delay}s infinite`,
            top: '-100vh'
          }}
        >
          {column.text}
        </div>
      ))}
    </div>
  );
}