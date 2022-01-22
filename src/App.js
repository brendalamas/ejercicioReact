import "./App.scss"
import Nav from "./components/Nav";
import Principal from "./components/Principal";
import Footer from "./components/Footer";


const App =()=>{
  return (
    <div>
      <Nav/>
      <Principal
      titulo="ZOE"
      subtitulo="zoe tiene 6 años y cumple el 27/01/2015"
      imagen="https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2021/06/09/2592367.jpg"
      />
      <Footer/>
    </div>
  )
}

export default App;
