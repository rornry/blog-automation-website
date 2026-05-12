export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-blue-600">📝</div>
              <span className="text-xl font-bold text-gray-900">블로그 자동화</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600">기능</a>
              <a href="#apps" className="text-gray-600 hover:text-blue-600">앱</a>
              <a href="#blog" className="text-gray-600 hover:text-blue-600">블로그</a>
              <a href="#stats" className="text-gray-600 hover:text-blue-600">통계</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">AI 기반 블로그 자동화 플랫폼</h1>
          <p className="text-xl mb-8 text-blue-100">
            에이전틱 AI로 블로그 콘텐츠를 자동으로 생성하고 관리하세요
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              시작하기
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
              자세히 보기
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">주요 기능</h2>
          <p className="section-subtitle text-center">
            3가지 플랫폼에서 일관된 블로그 자동화 경험을 제공합니다
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI 콘텐츠 생성</h3>
              <p className="text-gray-600">
                OpenAI GPT-4를 활용한 고품질 블로그 포스트 자동 생성
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">다중 플랫폼</h3>
              <p className="text-gray-600">
                데스크톱, 모바일, 웹에서 언제 어디서나 접근 가능
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">통계 분석</h3>
              <p className="text-gray-600">
                포스팅 성과를 실시간으로 추적하고 분석합니다
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-2">자동 스케줄링</h3>
              <p className="text-gray-600">
                포스트 발행 시간을 미리 설정하고 자동으로 게시
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">SEO 최적화</h3>
              <p className="text-gray-600">
                검색 엔진 최적화를 자동으로 적용합니다
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">안전한 저장</h3>
              <p className="text-gray-600">
                로컬 및 클라우드 저장소에 안전하게 보관
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">플랫폼</h2>
          <p className="section-subtitle text-center">
            3가지 플랫폼에서 동일한 기능을 제공합니다
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card border-2 border-blue-600">
              <div className="text-5xl mb-4 text-center">🖥️</div>
              <h3 className="text-2xl font-bold mb-4 text-center">데스크톱 앱</h3>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>✓ Python + PyQt6</li>
                <li>✓ Windows, Mac, Linux</li>
                <li>✓ 오프라인 작업 지원</li>
                <li>✓ 고급 편집 기능</li>
              </ul>
              <button className="w-full btn-primary">
                다운로드
              </button>
            </div>

            <div className="card border-2 border-blue-600">
              <div className="text-5xl mb-4 text-center">📱</div>
              <h3 className="text-2xl font-bold mb-4 text-center">모바일 앱</h3>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>✓ React Native + Expo</li>
                <li>✓ iOS & Android</li>
                <li>✓ 터치 최적화</li>
                <li>✓ 빠른 접근</li>
              </ul>
              <button className="w-full btn-primary">
                설치하기
              </button>
            </div>

            <div className="card border-2 border-blue-600">
              <div className="text-5xl mb-4 text-center">🌐</div>
              <h3 className="text-2xl font-bold mb-4 text-center">웹 앱</h3>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>✓ Next.js + React</li>
                <li>✓ 모든 브라우저 지원</li>
                <li>✓ 즉시 접근</li>
                <li>✓ 클라우드 동기화</li>
              </ul>
              <button className="w-full btn-primary">
                시작하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">최신 블로그</h2>
          <p className="section-subtitle text-center">
            AI와 블로그 자동화에 관한 최신 정보
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  2026년 에이전틱 AI(Agentic AI) 완전 정복
                </h3>
                <p className="text-gray-600 mb-4">
                  2026년 주목받는 에이전틱 AI(Agentic AI)가 자율적으로 업무를 혁신하는 방법과 산업별 적용 사례, 미래 전망을 자세히 알아보세요.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">AI 트렌드</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">2026년</span>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full btn-primary">
            모든 블로그 보기
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">프로젝트 통계</h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">3</div>
              <p className="text-blue-100">플랫폼</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">12+</div>
              <p className="text-blue-100">기능</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-blue-100">오픈소스</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">∞</div>
              <p className="text-blue-100">확장성</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">블로그 자동화</h4>
              <p className="text-gray-400">AI 기반 블로그 자동화 플랫폼</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">제품</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">데스크톱 앱</a></li>
                <li><a href="#" className="hover:text-white">모바일 앱</a></li>
                <li><a href="#" className="hover:text-white">웹 앱</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">리소스</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">문서</a></li>
                <li><a href="#" className="hover:text-white">튜토리얼</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">연락처</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="mailto:info@blogautomation.com" className="hover:text-white">이메일</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 블로그 자동화. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
