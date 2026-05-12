import { PublicLayout } from "@/components/(public)/layout";

export const metadata = {
  title: "Public | My App",
  description: "Public pages",
};

export default function PublicRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PublicLayout>{children}</PublicLayout>;
}
