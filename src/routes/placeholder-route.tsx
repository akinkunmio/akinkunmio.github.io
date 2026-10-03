import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_404")({
  component: NotFoundRoute,
});
