import Logo from '../../assets/Logo.png';
import { ToastContainer,toast } from "react-toastify";
import Book1 from "./Book1.json";
import { useState,useContext,useEffect } from "react";
import { AppContext } from '../Context';
import liff from "@line/liff"


export default function Menu() {

    
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([])
    const bestFoodUrl = "https://script.google.com/macros/s/AKfycby6yRMAXDjFbjcSKkCxSQRH5iRV1L8hd81xt1KIJi8ctEHyBl1T9YCwxu6Yp4yZfHo/exec";
      

    useEffect(() => {
        
        fetch(bestFoodUrl)
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          setItems(data);
        })
        .catch((err) => console.log(err));
    }, []);
    
    const globalContext = useContext(AppContext)
    const dispatch = globalContext.dispatch;
    const imageOnError = (event) => {
         event.currentTarget.src = Logo;
         };

    const addNotification = () => toast.success("เพิ่มสินค้าลงตระกร้าเรียบร้อย" ,{
        position: "top-right",
        autoClose: 2000});

     if (isLoading) {
        return (
          <div className="loading">
            <div className="loader"> <img src={Logo} alt="loader"/> </div>
            <div className="loader-shadow"></div>
                <h2>Loading, please wait...</h2>
          </div>
        );
      }
    
      
   
    const logout = async () => {
      liff.logout()
    }
      
    console.log()
      return (
        
        <div className='container mx-auto'>
          <div className='text-center mb-8 mt-10'>
            <h1 className='text-4xl leading-10 font-bold font-head text-[#241916]'>
              Menu
            </h1>
            
            
            
            <ToastContainer className='notification' />
          </div>
          <div className='container mx-auto max-w-screen-xl'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
              {items.map((item, index) => {
                item.quantity = 1;
                return (
                  <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg mx-auto bg-white">
                    <img className="h-80 w-80 object-cover rounded-t-xl" src={item.img} onError={imageOnError} alt={item.name} />
                    <div className="px-6 py-2 my-auto">
                      <div className="text-lg font-bold text-black truncate block capitalize mb-1 text-[#784C32]">
                        {item.name} 
                      </div>
                      <p className=" text-base font-semibold text-black mb-2">
                        ราคา : {item.price} บาท
                      </p>
                      <p className=" text-base font-semibold text-black ">
                        {item.detail} 
                      </p>
                      
                    </div>
    
                    <div className="px-6 pt-0 pb-2 flex justify-end items-center mb-2">
                      
                      <button type='button' className="bg-[#BBAB8C]  text-[#ffff] font-bold py-2 px-4 rounded-xl " onClick={() => {
                        addNotification();
                        dispatch({ type: "ADD", payload: item });
                      }}>
                        ใส่ตระกร้า
                      </button>
                    </div>
                  </div>
                )
              })}
   
            </div>
            
          </div>
          
        </div>
      );
    }


  