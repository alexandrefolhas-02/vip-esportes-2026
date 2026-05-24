import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import Home from "./pages/Home";
import ModalidadePage from "./pages/ModalidadePage";
import UnidadePage from "./pages/UnidadePage";
import Unidades from "./pages/Unidades";
import Metodologia from "./pages/Metodologia";
import ParaEscolasClubesCondominios from "./pages/ParaEscolasClubesCondominios";
import Sobre from "./pages/Sobre";
import Blog from "./pages/Blog";
import EscolaVoleiPaulaPequenoPage from "./pages/EscolaVoleiPaulaPequenoPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/modalidades/:slug" component={ModalidadePage} />
      <Route path="/unidades/:id" component={UnidadePage} />
      <Route path="/unidades" component={Unidades} />
      <Route path="/metodologia" component={Metodologia} />
      <Route path="/para-escolas-clubes-condominios" component={ParaEscolasClubesCondominios} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/blog" component={Blog} />
      <Route path="/escola-de-volei-paula-pequeno" component={EscolaVoleiPaulaPequenoPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Header />
          <main>
            <Router />
          </main>
          <Footer />
          <WhatsAppButton />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
