import Navigation from './Navigation.js';


function Header(props) {

  return (
    <div className="header">
      <Navigation setPage={props.setPage} currentPage={props.currentPage}/>
      <h1 className="title">Gil Young</h1>
    </div>
  );
  
}

export default Header;
