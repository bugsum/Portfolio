import { ContactChannels } from "@/components/sections/contact-channels";
import { buildMetadata } from "@/lib/metadata";
import { contact } from "@/content/contact";

export const metadata = buildMetadata({
  title: "Contact",
  description: contact.description,
  path: "/contact",
});

export default function ContactPage() {
  return <ContactChannels />;
}
