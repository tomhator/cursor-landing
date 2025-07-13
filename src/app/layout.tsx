import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "러닝크루 - 함께 달리는 즐거움",
  description: "혼자가 아닌 함께라서 더 즐거운 러닝. 매주 정기 러닝과 다양한 이벤트로 건강한 라이프스타일을 만들어보세요.",
  keywords: "러닝, 러닝크루, 마라톤, 조깅, 러닝커뮤니티, 한강공원, 러닝그룹",
  authors: [{ name: "러닝크루" }],
  openGraph: {
    title: "러닝크루 - 함께 달리는 즐거움",
    description: "혼자가 아닌 함께라서 더 즐거운 러닝. 매주 정기 러닝과 다양한 이벤트로 건강한 라이프스타일을 만들어보세요.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
