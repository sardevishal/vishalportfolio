export function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex-grow flex flex-col justify-center items-center gap-6 text-center my-20">
      <div className="size-14 flex items-center justify-center">
        <div className="w-full h-full rounded-none bg-accent/20 flex items-center justify-center border border-accent/30">
          <span className="text-2xl font-serif font-bold text-accent">!</span>
        </div>
      </div>

      <h1 className="text-3xl font-serif text-foreground">Oops! Something went wrong.</h1>

      <div className="max-w-md">
        <p className="text-sm text-muted mb-6">
          An unexpected error occurred. Please try refreshing the page or contact me if the problem persists.
        </p>
        
        <details className="text-left">
          <summary className="cursor-pointer text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors">
            Error Details
          </summary>
          <pre className="mt-4 text-[10px] border border-destructive/20 bg-destructive/5 p-4 text-destructive overflow-auto rounded-none">
            {error.message && <code>{error.message}</code>}
          </pre>
        </details>
      </div>

      <button
        onClick={reset}
        className="px-8 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-medium rounded-none hover:bg-accent hover:text-accent-foreground transition-all duration-300"
      >
        Try Again
      </button>
    </div>
  );
}
