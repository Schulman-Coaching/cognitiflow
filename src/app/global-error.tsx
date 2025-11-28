'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Something went wrong!</h2>
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
