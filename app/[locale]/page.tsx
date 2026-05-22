import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function HomePage() {
  const t = useTranslations('home');
  const tNav = useTranslations('nav');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600">
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-8">
              <a href={`/${tNav('home').toLowerCase()}`} className="text-white hover:text-purple-200 transition-colors">
                {tNav('home')}
              </a>
              <a href={`/${tNav('lessons').toLowerCase()}`} className="text-white hover:text-purple-200 transition-colors">
                {tNav('lessons')}
              </a>
              <a href={`/${tNav('about').toLowerCase()}`} className="text-white hover:text-purple-200 transition-colors">
                {tNav('about')}
              </a>
              <a href={`/${tNav('contact').toLowerCase()}`} className="text-white hover:text-purple-200 transition-colors">
                {tNav('contact')}
              </a>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            {t('subtitle')}
          </p>
          <p className="text-lg text-white mb-12">
            {t('welcome')}
          </p>
          <p className="text-lg text-purple-100 mb-12">
            {t('description')}
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-100 transition-colors text-lg">
            {t('getStarted')}
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-2">
              {t('features.interactive')}
            </h3>
            <p className="text-purple-100">
              Interactive lessons with exercises
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-2">
              {t('features.native')}
            </h3>
            <p className="text-purple-100">
              Learn from native Arabic speakers
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-2">
              {t('features.flexible')}
            </h3>
            <p className="text-purple-100">
              Learn at your own pace
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-2">
              {t('features.certificate')}
            </h3>
            <p className="text-purple-100">
              Get accredited certificates
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
