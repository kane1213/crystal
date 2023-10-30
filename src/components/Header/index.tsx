import './index.scss'
import { useNavigate } from 'react-router-dom'


export default () => {
  const myNavigate = useNavigate();
  function changePage (path: string) {
    // console.log(myNavigate)
    
    myNavigate('/' + path)
  }
  return <div className="nav-header">
    <div className="inner">
      <div onClick={() => {
        changePage('home')
      }} className="navigator-button">HOME</div>
      <div onClick={() => {
        changePage('about')
      }}  className="navigator-button">ABOUT</div>

    <div onClick={() => {
        changePage('contact')
      }}  className="navigator-button">Contact</div>
    
    <div onClick={() => {
        changePage('products')
      }}  className="navigator-button">Products</div>
    
    </div>

  </div> 
}