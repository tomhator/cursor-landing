"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Users, 
  Trophy, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  ChevronLeft,
  Instagram,
  MessageCircle,
  Download,
  Menu,
  X
} from "lucide-react";

const RunningCrewLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  // 통계 카운트업 애니메이션
  const [stats, setStats] = useState({
    crews: 0,
    members: 0,
    distance: 0,
    marathons: 0
  });

  useEffect(() => {
    const targetStats = {
      crews: 150,
      members: 2500,
      distance: 15000,
      marathons: 45
    };

    const interval = setInterval(() => {
      setStats(prev => ({
        crews: Math.min(prev.crews + 5, targetStats.crews),
        members: Math.min(prev.members + 100, targetStats.members),
        distance: Math.min(prev.distance + 500, targetStats.distance),
        marathons: Math.min(prev.marathons + 2, targetStats.marathons)
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // 인기 크루 데이터
  const popularCrews = [
    {
      name: "강남 러닝크루",
      location: "강남",
      members: 85,
      schedule: "주 3회, 저녁 7시",
      level: "초급",
      description: "강남에서 함께 달리는 즐거운 크루"
    },
    {
      name: "홍대 러닝크루",
      location: "홍대",
      members: 120,
      schedule: "주 4회, 저녁 8시",
      level: "중급",
      description: "홍대의 젊은 에너지와 함께하는 러닝"
    },
    {
      name: "여의도 러닝크루",
      location: "여의도",
      members: 95,
      schedule: "주 3회, 아침 6시",
      level: "고급",
      description: "한강변에서 즐기는 아침 러닝"
    },
    {
      name: "잠실 러닝크루",
      location: "잠실",
      members: 75,
      schedule: "주 2회, 저녁 7시",
      level: "초급",
      description: "잠실에서 시작하는 러닝 라이프"
    }
  ];

  // 멤버 후기 데이터
  const memberReviews = [
    {
      name: "김민수",
      age: 28,
      job: "회사원",
      review: "혼자서는 절대 못 뛸 거리였는데, 크루와 함께하니 쉽게 완주할 수 있었어요!",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "이지영",
      age: 25,
      job: "디자이너",
      review: "새로운 친구들도 사귀고 건강도 챙길 수 있어서 정말 좋아요!",
      rating: 5,
      avatar: "👩‍🎨"
    },
    {
      name: "박준호",
      age: 32,
      job: "엔지니어",
      review: "마라톤 완주라는 목표를 크루와 함께 달성할 수 있었습니다.",
      rating: 5,
      avatar: "👨‍💻"
    }
  ];

  const handleJoinClick = () => {
    console.log("Join Running Crew clicked");
  };

  const handleCreateCrewClick = () => {
    console.log("Create Crew clicked");
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* 네비게이션 바 */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">RC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">러닝크루</span>
            </div>
            
            {/* 데스크톱 메뉴 */}
            <nav className="hidden md:flex space-x-8">
              <a href="#crews" className="text-gray-700 hover:text-orange-500 transition-colors">크루 찾기</a>
              <a href="#create" className="text-gray-700 hover:text-orange-500 transition-colors">크루 만들기</a>
              <a href="#community" className="text-gray-700 hover:text-orange-500 transition-colors">커뮤니티</a>
              <a href="#events" className="text-gray-700 hover:text-orange-500 transition-colors">이벤트</a>
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-orange-500 transition-colors">
                로그인
              </button>
              <button
                onClick={handleJoinClick}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                회원가입
              </button>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              <a href="#crews" className="block text-gray-700 hover:text-orange-500">크루 찾기</a>
              <a href="#create" className="block text-gray-700 hover:text-orange-500">크루 만들기</a>
              <a href="#community" className="block text-gray-700 hover:text-orange-500">커뮤니티</a>
              <a href="#events" className="block text-gray-700 hover:text-orange-500">이벤트</a>
              <div className="pt-4 border-t border-gray-200">
                <button className="block w-full text-left text-gray-700 hover:text-orange-500 mb-2">
                  로그인
                </button>
                <button
                  onClick={handleJoinClick}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium"
                >
                  회원가입
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* 히어로 섹션 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100"
        />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            함께 달리면
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              더 재미있어!
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            서울 곳곳에서 활동하는 러닝크루와 함께
            <br className="hidden sm:block" />
            건강하고 즐거운 러닝을 시작하세요
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={handleJoinClick}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              크루 찾기
            </button>
            <button
              onClick={handleCreateCrewClick}
              className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-200"
            >
              크루 만들기
            </button>
          </motion.div>
        </div>
      </section>

      {/* 서비스 소개 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              왜 혼자 뛰나요?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              함께라서 더 즐거운 러닝의 세계로 초대합니다
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤝",
                title: "새로운 만남",
                description: "같은 관심사를 가진 사람들과 네트워킹하며 새로운 친구를 만들어보세요"
              },
              {
                icon: "🏃‍♀️",
                title: "동기 부여",
                description: "함께 뛰면 더 오래, 더 재미있게 달릴 수 있어요"
              },
              {
                icon: "🎯",
                title: "목표 달성",
                description: "마라톤 완주부터 다이어트까지 함께 도전해보세요"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-pink-50 border border-orange-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 인기 크루 소개 섹션 */}
      <section id="crews" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              지금 인기 있는 크루들
            </h2>
            <p className="text-xl text-gray-600">
              많은 러너들이 선택한 인기 크루를 만나보세요
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCrews.map((crew, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{crew.name}</h3>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                    {crew.level}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    {crew.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-2" />
                    {crew.members}명
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={16} className="mr-2" />
                    {crew.schedule}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{crew.description}</p>
                <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-200">
                  크루 가입하기
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 크루 활동 스토리 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              우리는 이렇게 달려요
            </h2>
            <p className="text-xl text-gray-600">
              실제 크루 멤버들의 생생한 후기를 들어보세요
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {memberReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 border border-orange-100"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{review.avatar}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.age}세, {review.job}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{review.review}</p>
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 러닝 통계 섹션 */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              우리와 함께 달린 기록
            </h2>
            <p className="text-xl text-orange-100">
              러닝크루와 함께한 멤버들의 놀라운 성과
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "총 크루 수", value: stats.crews, unit: "개" },
              { label: "총 멤버 수", value: stats.members, unit: "명" },
              { label: "이번 달 총 러닝 거리", value: stats.distance, unit: "km" },
              { label: "완주한 마라톤 수", value: stats.marathons, unit: "개" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value.toLocaleString()}
                </div>
                <div className="text-lg">{stat.label}</div>
                <div className="text-sm text-orange-100">{stat.unit}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 크루 만들기/가입하기 섹션 */}
      <section id="create" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              나만의 크루를 만들어보세요
            </h2>
            <p className="text-xl text-gray-600">
              간단한 3단계로 나만의 러닝크루를 시작할 수 있어요
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 border border-orange-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">크루 만들기</h3>
              <p className="text-gray-600 mb-6">나만의 러닝크루를 만들어 멤버들을 모집해보세요</p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                  <span>회원가입</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                  <span>크루 정보 입력</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                  <span>멤버 모집</span>
                </div>
              </div>
              <button
                onClick={handleCreateCrewClick}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-200"
              >
                크루 만들기
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">크루 가입하기</h3>
              <p className="text-gray-600 mb-6">이미 있는 크루에 가입해서 함께 달려보세요</p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                  <span>크루 찾기</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                  <span>크루 정보 확인</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                  <span>가입 신청</span>
                </div>
              </div>
              <button
                onClick={handleJoinClick}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
              >
                크루 가입하기
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-xl text-gray-600">
              궁금한 점들을 미리 확인해보세요
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {[
              {
                question: "러닝 초보도 참여할 수 있나요?",
                answer: "네! 모든 레벨의 러너를 위한 크루가 있어요. 초급부터 고급까지 단계별로 구성되어 있습니다."
              },
              {
                question: "참가비가 있나요?",
                answer: "대부분의 크루는 무료로 운영됩니다. 일부 특별한 이벤트나 장비 대여 시에만 비용이 발생할 수 있어요."
              },
              {
                question: "어떤 장비가 필요한가요?",
                answer: "편안한 러닝화와 운동복만 있으면 됩니다. 처음에는 간단하게 시작하시고, 점차 필요한 장비를 구매하시면 됩니다."
              },
              {
                question: "날씨가 안 좋으면 어떻게 하나요?",
                answer: "대부분의 크루는 날씨 상황에 따라 일정을 조정합니다. 우천 시에는 실내 운동이나 다음 주로 연기하는 경우가 많아요."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RC</span>
                </div>
                <span className="text-xl font-bold">러닝크루</span>
              </div>
              <p className="text-gray-400">
                함께 달리는 즐거움을 만들어가는 러닝 커뮤니티
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">소셜 미디어</h3>
              <div className="space-y-2">
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} className="mr-2" />
                  @runningcrew_kr
                </a>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} className="mr-2" />
                  카카오톡 오픈채팅
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">연락처</h3>
              <div className="space-y-2 text-gray-400">
                <p>📧 info@runningcrew.kr</p>
                <p>📱 010-1234-5678</p>
                <p>🏢 서울특별시 강남구</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">앱 다운로드</h3>
              <button className="flex items-center bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-200">
                <Download size={20} className="mr-2" />
                앱 다운로드
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; 2024 러닝크루. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">이용약관</a>
                <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RunningCrewLanding;
