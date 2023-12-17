import './Totop.css';

export default function Totop() {
  function toTopClickhandle(){
    window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  }

	return  <div class="totop" onClick={toTopClickhandle}></div>
}