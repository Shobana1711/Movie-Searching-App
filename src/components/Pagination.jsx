export default function Pagination({ page, total, onPageChange }) {
  const totalPages = Math.ceil(total / 10);

  return (
    <div className="flex items-center gap-6">

      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="w-12 h-12 rounded-full bg-gradient-to-b from-gray-300 to-gray-600 text-black disabled:opacity-50"
      >
        ←
      </button>

      <span className="text-lg font-semibold">
        {page} / {totalPages}
      </span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="w-12 h-12 rounded-full bg-gradient-to-b from-gray-300 to-gray-600 text-black disabled:opacity-50"
      >
        →
      </button>
    </div>
  );
}