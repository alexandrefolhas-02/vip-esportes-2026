import { redirect } from "next/navigation";

// The Sanity Studio runs on the hosted URL (seu-projeto.sanity.studio)
// This route redirects admins to the correct location
export default function StudioPage() {
  redirect("/");
}
