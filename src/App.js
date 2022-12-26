import React from 'react'
import Header from './components/Header/Header'
import FirstSection from './components/pages/Ui/FirstSection'
import Profile from './components/pages/Ui/Profile'
import DeveloperInfo from './components/pages/Ui/DeveloperInfo'
import Enterprise from './components/pages/Ui/Enterprise'
import Footer from './components/pages/Ui/Footer'
import { SnackbarProvider } from 'notistack';
import 'aos/dist/aos.css'
// Gq8vw585~

function App() {
  return (
  <>
  <section>
    <Header />
    <SnackbarProvider maxSnack={5} autoHideDuration={5000}>
    <FirstSection />
    </SnackbarProvider>
    
    <Profile />
    <DeveloperInfo />
    <Enterprise />
    <Footer />
    
  </section>
  </>
    
  )
}

export default App