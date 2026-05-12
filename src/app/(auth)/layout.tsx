import { AuthLayout } from "@/components/(auth)/layout";

export const metadata = {
  title: "Auth | My App",
  description: "Authentication pages",
};

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
