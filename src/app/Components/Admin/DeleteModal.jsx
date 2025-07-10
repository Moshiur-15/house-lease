"use client";

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-lg p-5 animate-slide-down">
        <h2 className="text-xl font-bold text-red-600 text-center uppercase">Are You Sure?</h2>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-4 py-1 bg-gray-200 hover:bg-gray-300 text-black dark:bg-gray-700 dark:text-white transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-1 bg-red-600 hover:bg-red-700 text-white transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
