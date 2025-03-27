import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import { IndexPage } from "../pages/IndexPage";
import { QueryProvider } from "./providers/query-provider";
import { queryClient } from "../shared/api/query-client";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { worker } = await import("../mocks/browser");
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryProvider client={queryClient}>
        <IndexPage />
      </QueryProvider>
    </StrictMode>
  );
});
