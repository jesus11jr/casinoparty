export function Dialog({ open, children }) {
  return open ? <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">{children}</div> : null;
}

export function DialogContent({ children, className = '' }) {
  return <div className={`bg-gray-900 p-6 rounded-lg ${className}`}>{children}</div>;
}

export function DialogTitle({ children }) {
  return <h2 className="text-xl font-bold mb-4">{children}</h2>;
}