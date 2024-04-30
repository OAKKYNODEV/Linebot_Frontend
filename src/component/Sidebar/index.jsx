import Btnav1 from '../../assets/Btnav1.png'
import Btnav2 from '../../assets/Btnav2.png'
import Btnav3 from '../../assets/Btnav3.jpg'
import { Link } from 'react-router-dom'
import Menuicon from '../../assets/Menuicon.png'
import Smile from '../../assets/Smile.png'
import Menu from '../../assets/Menu.png'
import Cart from '../../assets/Cart.png'

export default function Sidebar () {
    const navigateToCake = () => {
        window.location.href = '/cake';
      };

      const navigateToHome= () => {
        window.location.href = '/';
      };  
    
    return (
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200  ">
      <div className="grid h-full max-w-lg grid-cols-2 mx-auto font-medium  ">
        <Link to="/">      
          <button type="button" className="inline-flex flex-col items-center justify-center px-24 ">
          <img src={Menu} alt="Home Icon" className="w-8 h-8 mb-0 mt-2 " />
              <span className="text-sm font-bold  text-black  ">เมนู</span>
          </button>
          </Link>    
          <Link to="/cart">
          <button type="button" class="inline-flex flex-col items-center justify-center px-20">
          <img src={Cart} alt="Home Icon" className="w-7 h-7 mb-0 mt-2" />
              <span className="text-sm font-bold  text-black">ตะกร้า</span>
          </button>
          </Link>
     </div>       
    </div>
    )
}
    