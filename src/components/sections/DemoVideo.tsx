import React, { useState, useRef } from 'react';
import { Play, Pause, Shield, Mic, Image, Link, UserCheck, Maximize, Minimize } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';

const DemoVideo: React.FC = () => {
  const { language, isHebrew } = useLanguage();
  const t = translations[language];
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!isFullscreen) {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        } else if ((containerRef.current as any).webkitRequestFullscreen) {
          await (containerRef.current as any).webkitRequestFullscreen();
        } else if ((containerRef.current as any).msRequestFullscreen) {
          await (containerRef.current as any).msRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (error) {
      console.log('Fullscreen not supported or failed');
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setShowControls(false);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  // Handle click on the "Click to play" button
  const handleClickToPlayButton = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    togglePlay();
  };

  // Listen for fullscreen changes
  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
            {t.demoTitle}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
            {t.demoDescription}
          </p>
        </div>

        {/* Video Container - Reduced by 10% more */}
        <div className="flex justify-center">
          <div className="w-full max-w-[270px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]">
            <div 
              ref={containerRef}
              className={`relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group ${
                isFullscreen 
                  ? 'fixed inset-0 z-50 rounded-none flex items-center justify-center bg-black' 
                  : 'aspect-[9/16]'
              }`}
            >
              <video
                ref={videoRef}
                src="/public/Demo.mp4"
                className={`cursor-pointer ${
                  isFullscreen 
                    ? 'max-w-full max-h-full object-contain' 
                    : 'w-full h-full object-cover'
                }`}
                onClick={handleVideoClick}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onEnded={handleVideoEnded}
                controls={false}
                preload="metadata"
              >
                {isHebrew ? 'הדפדפן שלך אינו תומך בתגית הוידאו.' : 'Your browser does not support the video tag.'}
              </video>

              {/* Custom Play/Pause Button Overlay - Black themed for white video background */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  showControls ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                <button
                  onClick={togglePlay}
                  className="bg-black/70 backdrop-blur-sm hover:bg-black/80 rounded-full p-3 sm:p-4 md:p-5 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-black/30 shadow-lg"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? (
                    <Pause className={`text-white ${isFullscreen ? 'h-16 w-16' : 'h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14'}`} />
                  ) : (
                    <Play className={`text-white ml-1 ${isFullscreen ? 'h-16 w-16' : 'h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14'}`} />
                  )}
                </button>
              </div>

              {/* Fullscreen Button */}
              <div className={`absolute ${isFullscreen ? 'top-6 left-6' : 'top-3 left-3 sm:top-4 sm:left-4'} transition-all duration-300 ${
                showControls ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}>
                <button
                  onClick={toggleFullscreen}
                  className="bg-black/70 backdrop-blur-sm hover:bg-black/80 rounded-lg p-2 transition-colors duration-200 shadow-lg"
                  aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                >
                  {isFullscreen ? (
                    <Minimize className="h-6 w-6 text-white" />
                  ) : (
                    <Maximize className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  )}
                </button>
              </div>

              {/* Video Title Overlay */}
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent transition-all duration-300 ${
                isFullscreen ? 'p-6' : 'p-3 sm:p-4 md:p-5'
              } ${
                showControls ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}>
                <h3 className={`text-white font-semibold mb-1 sm:mb-2 ${
                  isFullscreen ? 'text-2xl mb-3' : 'text-sm sm:text-base md:text-lg'
                } ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                  {isHebrew ? 'דמו מגןצ\'אט - הגנה בזמן אמת' : 'MagenChat Demo - Real-time Protection'}
                </h3>
                <p className={`text-white/80 ${
                  isFullscreen ? 'text-lg' : 'text-xs sm:text-sm'
                } ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                  {isHebrew ? 'צפו כיצד המערכת מגנה על הילדים שלכם' : 'See how the system protects your children'}
                </p>
              </div>

              {/* Click to Play Button - Now functional with black theme */}
              {!isPlaying && !isFullscreen && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <button
                    onClick={handleClickToPlayButton}
                    className="bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 sm:py-1 hover:bg-black/80 transition-colors duration-200 cursor-pointer shadow-lg"
                  >
                    <span className={`text-white text-xs sm:text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                      {isHebrew ? 'לחץ לניגון' : 'Click to play'}
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* Video Controls Bar - Hide in fullscreen */}
            {!isFullscreen && (
              <div className="mt-4 flex items-center justify-center space-x-3 rtl:space-x-reverse">
                <button
                  onClick={togglePlay}
                  className={`flex items-center space-x-2 rtl:space-x-reverse bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base ${isHebrew ? 'font-heebo' : 'font-inter'}`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="hidden sm:inline">{isHebrew ? 'השהה' : 'Pause'}</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="hidden sm:inline">{isHebrew ? 'נגן' : 'Play'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                      setIsPlaying(false);
                      setShowControls(true);
                    }
                  }}
                  className={`flex items-center space-x-2 rtl:space-x-reverse bg-gray-600 hover:bg-gray-700 text-white px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base ${isHebrew ? 'font-heebo' : 'font-inter'}`}
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16l12-8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 4v16" />
                  </svg>
                  <span className="hidden sm:inline">{isHebrew ? 'התחל מחדש' : 'Restart'}</span>
                </button>

                <button
                  onClick={toggleFullscreen}
                  className={`flex items-center space-x-2 rtl:space-x-reverse bg-purple-600 hover:bg-purple-700 text-white px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base ${isHebrew ? 'font-heebo' : 'font-inter'}`}
                >
                  <Maximize className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">{isHebrew ? 'מסך מלא' : 'Fullscreen'}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Demo Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-16">
          <div className="text-center">
            <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'זיהוי מיידי על ידי בינה מלאכותית' : 'Instant Detection by AI'}
            </h3>
            <p className={`text-gray-600 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'המערכת מזהה תוכן לא מתאים תוך שניות' : 'System detects inappropriate content within seconds'}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'הסרה אוטומטית' : 'Automatic Removal'}
            </h3>
            <p className={`text-gray-600 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'הודעות בעייתיות נמחקות באופן אוטומטי' : 'Problematic messages are automatically deleted'}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Mic className="h-8 w-8 text-green-600" />
            </div>
            <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'סינון קולי' : 'Voice Filtering'}
            </h3>
            <p className={`text-gray-600 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'ניתוח הקלטות קוליות לזיהוי תוכן בעייתי' : 'Analysis of voice recordings to detect problematic content'}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Image className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'בדיקת תמונות' : 'Image Checking'}
            </h3>
            <p className={`text-gray-600 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'זיהוי אוטומטי של תמונות לא מתאימות' : 'Automatic detection of inappropriate images'}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Link className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'סינון קישורים' : 'Link Filtering'}
            </h3>
            <p className={`text-gray-600 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'בדיקה וחסימת קישורים מסוכנים' : 'Checking and blocking dangerous links'}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-violet-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <UserCheck className="h-8 w-8 text-violet-600" />
            </div>
            <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'דיווח לאחראי' : 'Admin Reporting'}
            </h3>
            <p className={`text-gray-600 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'העברת התוכן המסונן לאחראי הקבוצה' : 'Forwarding filtered content to group administrator'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;