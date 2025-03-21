export function Card({ children, className = '' }) {
  return <div className={`rounded-lg shadow-lg p-4 bg-gray-800 ${className}`}>{children}</div>;
};

export function CardContent({ children }) {
  return <div>{children}</div>;
};