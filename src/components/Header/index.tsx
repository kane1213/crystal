import './index.scss'


export default () => {
  function changePage (path: string) {
    // console.log(myNavigate)
    
    // myNavigate('/' + path)
    window.location.href = `/${path}`
  }
  return <div className="nav-header">
    <div className="inner">
      <div onClick={() => {
        changePage('')
      }} className="navigator-button">HOME</div>
      <div onClick={() => {
        changePage('About')
      }}  className="navigator-button">ABOUT</div>

    <div onClick={() => {
        changePage('Contact')
      }}  className="navigator-button">Contact</div>
    
    <div onClick={() => {
        changePage('Products')
      }}  className="navigator-button">Products</div>
    
    </div>

  </div> 
}