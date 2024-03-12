// Done
import './scss/Footer.scss';
export default function Footer() {
    return (
      <footer className="Footer">
        <div className="Footer_Div_Left">
        <h4 className="Footer_Name" onClick={()=>{window.location.href = "/"}}>Gizmo Gaming</h4>
        </div>

        <div className="Footer_Div_Right">
        <button className="Footer_Logo" onClick={()=>{window.location.href = "/aboutus"}}>GG</button>
        </div>
      </footer>
    );
  }