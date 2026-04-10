import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import SmoothScroll from './components/SmoothScroll'
import CookieBanner from './components/CookieBanner'
import SEOMeta from './components/SEOMeta'
import { ToastProvider } from './components/ToastNotification'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Results from './pages/Results'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Exercises from './pages/Exercises'
import BodyModel from './pages/BodyModel'
import Subscriptions from './pages/Subscriptions'
import SubscriptionDetail from './pages/SubscriptionDetail'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import DisciplinePage from './pages/disciplines/DisciplinePage'
import FAQ from './pages/legal/FAQ'
import Contact from './pages/legal/Contact'
import LegalPage from './pages/legal/LegalPage'
import ClientDashboard from './pages/client/ClientDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import CalculatorPage from './pages/Calculator'
import QuizPage from './pages/Quiz'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

const noFooterRoutes = ['/client', '/admin', '/login']

function AppContent() {
  const location = useLocation()
  const showFooter = !noFooterRoutes.includes(location.pathname)
  const showNavbar = !noFooterRoutes.includes(location.pathname)

  return (
    <>
      <ScrollProgress />
      <SEOMeta path={location.pathname} />

      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {showNavbar && <Navbar />}
        <main style={{ flex: 1 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Routes location={location}>
                {/* Public */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/results" element={<Results />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/exercises" element={<Exercises />} />
                <Route path="/body-model" element={<BodyModel />} />
                <Route path="/subscriptions" element={<Subscriptions />} />
                <Route path="/subscriptions/:id" element={<SubscriptionDetail />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />

                {/* Tools */}
                <Route path="/calculator" element={<CalculatorPage />} />
                <Route path="/quiz" element={<QuizPage />} />

                {/* Disciplines */}
                <Route path="/musculation" element={<DisciplinePage />} />
                <Route path="/running" element={<DisciplinePage />} />
                <Route path="/hybrid-athlete" element={<DisciplinePage />} />
                <Route path="/hyrox" element={<DisciplinePage />} />

                {/* Legal */}
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cgv" element={<LegalPage type="cgv" />} />
                <Route path="/mentions-legales" element={<LegalPage type="mentions-legales" />} />
                <Route path="/confidentialite" element={<LegalPage type="confidentialite" />} />

                {/* Protected */}
                <Route
                  path="/client"
                  element={
                    <ProtectedRoute role="client">
                      <ClientDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute role="coach">
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
        {showFooter && <Footer />}
      </div>

      <CookieBanner />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <SmoothScroll>
            <AppContent />
          </SmoothScroll>
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
