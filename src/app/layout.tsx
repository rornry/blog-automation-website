import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '블로그 자동화 - AI 기반 콘텐츠 생성 및 관리',
  description: 'AI 기반 블로그 자동화 플랫폼. 데스크톱 앱, 모바일 앱, 웹 서비스로 블로그 콘텐츠를 자동으로 생성하고 관리합니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
