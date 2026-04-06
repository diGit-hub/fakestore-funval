export default function ErrorMessage({ message, onRetry }) {
    return (
        <div className="flex flex-col items-center justify-center h-64 gap-4">
            <p className="text-red-500 text-lg">{message}</p>
            {onRetry && (
                <button 
                    onClick={onRetry}
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90"
                >
                    Try Again
                </button>
            )}
        </div>
    )
}
