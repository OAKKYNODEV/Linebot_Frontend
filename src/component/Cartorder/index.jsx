import { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context';
import { ToastContainer, toast } from "react-toastify";
import Logo from '../../assets/Logo.png'
import "react-toastify/dist/ReactToastify.css";
import Emptycart from '../../assets/Emptycart.png'
import { DataContext } from '../Context/ContextProfile';
import Qr from '../../assets/Qr.png'
import liff from '@line/liff';
import axios from 'axios'

export default function Cart () {

    const removeNotification = () =>
    toast.error("Item Removed", {
      position: "top-right",
      autoClose: 2000,
    });

    const [loading, setLoading] = useState(false);
    const globalContexts = useContext(AppContext);
    const state = globalContexts.state;
    const navigate = useNavigate();
    const dispatch = globalContexts.dispatch;
    const { userInfo } = useContext(DataContext);

    
        // Function to calculate total price
    const totalPrice = state.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);


    const totalPriceWithShipping = totalPrice + 5;


        // Function to calculate total items
    const totalItem = state.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

   
  const imageOnError = (event) => {
    event.currentTarget.src = Logo;
  };

  if (state.length === 0) {
    return (
      <div className="empty-cart text-center justify-center">
        <img className='h-50 w-80' src={Emptycart} alt="ไม่มีออเดอร์ ณ ขณะนี้" />
        <h1 className='text-xl leading-10 font-bold font-head'>ตอนนี้ ตะกร้าของคุณว่างอยู่</h1>
        <h3>สามารถเลือกเมนูใส่ตะกร้าได้เลยครับ</h3>
      </div>
    );
  }
  console.log(state)

  const sendMessage = async (formDataText) => {
    try {
        if (!formDataText) {
            alert("message not found");
            return false;
        }

        const data = {
            userId: userInfo.userId,
            message: formDataText
        };
        console.log("data", data);

        const response = await axios.post(
            'https://5ffc-2001-44c8-4020-e3c8-1d7a-b346-cd68-4ade.ngrok-free.app/send-message',
            data
        );
        console.log("response", response.data);
    } catch (error) {
        console.log('error', error.message);
    }
};

const sendFlexMessage = async () => {
  try {
      
      const data = {
          userId: userInfo.userId,
          flexMessage: {
            "type": "bubble",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Bakebrown",
                  "weight": "bold",
                  "color": "#765827",
                  "size": "xxl",
                  "margin": "none"
                },
                {
                  "type": "text",
                  "text": "วิธีชำระเงิน",
                  "weight": "bold",
                  "size": "lg",
                  "margin": "md",
                  "color": "#000000"
                },
                {
                  "type": "separator",
                  "margin": "md"
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "สแกน QR Code",
                      "color": "#000000",
                      "decoration": "underline",
                      "size": "md",
                      "weight": "bold"
                    }
                  ],
                  "margin": "sm"
                }
              ]
            },
            "hero": {
              "type": "image",
              "url": "https://img2.pic.in.th/pic/S__11821065eb088c729fc50962.jpeg",
              "margin": "none",
              "align": "center",
              "gravity": "center",
              "size": "3xl",
              "offsetTop": "none"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "separator",
                  "margin": "xs"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "md",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": "โอนจ่าย",
                          "size": "md",
                          "weight": "bold",
                          "style": "normal",
                          "decoration": "underline",
                          "color": "#000000"
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "contents": [
                        {
                          "type": "text",
                          "text": "ชื่อบัญชี:",
                          "weight": "regular",
                          "style": "normal"
                        },
                        {
                          "type": "text",
                          "text": "อิทธิพล ศิริไพศาลประเสริฐ",
                          "size": "md"
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "contents": [
                        {
                          "type": "text",
                          "text": "เลขบัญชี:"
                        },
                        {
                          "type": "text",
                          "text": "0433225333"
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "contents": [
                        {
                          "type": "text",
                          "text": "ธนาคาร:"
                        },
                        {
                          "type": "text",
                          "text": "กสิกรไทย "
                        }
                      ]
                    },
                    {
                      "type": "separator",
                      "margin": "sm"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": "แจ้งชำระเงิน",
                          "size": "md",
                          "color": "#B80000",
                          "flex": 0,
                          "weight": "bold",
                          "decoration": "underline"
                        },
                        {
                          "type": "text",
                          "text": "1.) ส่งสลิปการโอนเงิน (1 รูปเท่านั้น )",
                          "size": "sm",
                          "color": "#B80000"
                        }
                        
                      ]
                    }
                  ]
                },
                {
                  "type": "separator",
                  "margin": "xxl"
                }
              ]
            },
            "styles": {
              "footer": {
                "separator": true
              }
            }
          }
      };
      console.log("data", data);

      const response = await fetch('https://5ffc-2001-44c8-4020-e3c8-1d7a-b346-cd68-4ade.ngrok-free.app/send-flex-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log('Response:', result);
    } catch (error) {
      console.error('Error:', error.message);
    }
};


  
  function Submit(e) {
    e.preventDefault();
    setLoading(true); // เริ่มแสดง Loading
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
  
    // เพิ่มข้อมูลเพิ่มเติม Google Apps Script
    formDatab.append("itemName", state.map(item => `${item.name} x${item.quantity}`).join("\n"));
    formDatab.append("totalItem", totalItem);
    formDatab.append("totalPrice", totalPrice);
    formDatab.append("userId", userInfo.userId);
    formDatab.append("displayName", userInfo.displayName);

      // แปลง ข้อมูล เป็นข้อความ
      const formDataText = `สั่งซื้อสินค้าจ้า
ชื่อลูกค้า: ${userInfo.displayName}
ชื่อสินค้า:
${state.map(item => `- ${item.name} x${item.quantity}`).join("\n")}
จำนวนสินค้า: ${totalItem} ชิ้น
หมายเลขโทรศัพท์: ${formDatab.get("Phone")}
ที่อยู่จัดส่ง: ${formDatab.get("Address")}
รอบส่ง: ${formDatab.get("Round")}
ยอดชำระทั้งหมด: ${totalPrice} บาท `;

      
        console.log(formDataText); // แสดงข้อมูลใน console
      
    
    fetch(
      "https://script.google.com/macros/s/AKfycbznGjBJNZtWnlKFm_xjmSeEuDIWl2KhJcscc3OojJybEFKKNOmbZp2DdxxrwrGScOmjdA/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      
      .then((data) => {
        console.log(data);
        order();
        sendMessage(formDataText);
        sendFlexMessage();
      })
      
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false) // หยุดแสดง Loading ที่สำเร็จหรือไม่สำเร็จ
      })
  }
  
  const order = () => {
    liff.closeWindow();
    alert("ออเดอร์ถูกแจ้งไปยังแอดมินเรียบร้อยแล้วครับ กรุณาแจ้งสรุปโอนเงินที่ Line ได้เลยครับ 🙏🥰");
    state.length = [];
};


  
    return (
        <div className='container mx-auto max-w-screen-xl '>
        <div className='text-center mb-8 mt-10'>
            <h1 className='text-4xl leading-10 font-bold font-head text-[#241916]'>
              รายการอาหารที่สั่ง
            </h1>
            <ul className="steps mb-5 mt-5 ">
                <li className="step step-success text-[#241916] ">สรุปยอด
                </li>
                <li className="step  text-[#241916]">แจ้งที่อยู่จัดส่ง</li>
                
            </ul>
            
            <ToastContainer className='notification' />
          </div>
          
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            {state.map((item, index) => (
            <div key={index} className="rounded-lg md:w-1/2 px-10  "  >
                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start bg-[#F5F5F5]" >
                    <img src={item.img} alt="product-image" className="w-full rounded-lg sm:w-32" />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                            <p className="mt-1 text-xs text-gray-700"></p>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div className="flex items-center border-gray-100">
                                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" type="button" onClick={() =>{
                                    if (item.quantity > 1) {
                                        dispatch({ type: "DECREASE", payload: item });
                                      }
                                }}> - </span>
                                <h3 className="text-lg font-bold text-gray-900">{item.quantity}</h3>
                                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" type="button"
                                 onClick={() => dispatch({ type: "INCREASE", payload: item })} > + </span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <p className="text-sm">ราคา : {item.price * item.quantity}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                onClick={() => {
                                    removeNotification();
                                    dispatch({ type: "REMOVE", payload: item });
                                  }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            ))}
    {state.length > 0 && (
      <div className="mt-6 h-full rounded-lg border  bg-white p-6 shadow-md md:mt-0 md:w-1/3 mb-5">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">จำนวนสินค้า:</p>
          <p className="text-gray-700">{totalItem}</p>
        </div>
        <div className="flex justify-between">
        
          <p className="text-gray-700">ค่าส่ง</p>
          <p className="text-gray-700">5 บาท</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">รวม</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">{totalPriceWithShipping}</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-[#BBAB8C] py-1.5 font-medium text-blue-50 "
        onClick={()=>document.getElementById('my_modal_2').showModal()}>
            ระบุที่อยู่จัดส่ง</button>
            {/* ระบุที่อยู่จัดส่ง */} 
        <dialog id="my_modal_2" className="modal">  
        <div className="modal-box  ">
          <form method="dialog" className="form" onSubmit={(e) => Submit(e)}> 
           
          

            <div className="border-b border-gray-900/10 pb-12">
            <div className='text-center font-semibold' >
            <ul className="steps mb-5 mt-3 ">
                <li className="step step-success text-[#241916] ">สรุปยอด
                </li>
                <li className="step  step-success text-[#241916]">แจ้งที่อยู่จัดส่ง</li>
            </ul>
          <p className=" text-lg font-bold text-center">ยอดสั่งซื้อ</p>
          <ul>
            {state.map((item, index) => (
              <li key={index}>
                <span>{item.name} </span>
                <span>{item.quantity} ชิ้น</span>
              </li>
            ))}
          </ul>
       
            <p className=" text-lg font-bold text-center">ยอดชำระ: {totalPriceWithShipping} บาท</p>
              
            </div>
            
            <div className="mt-0  grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            
              <div className="sm:col-span-3 mt-0">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                  UserID
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    
                    id="customerName"
                    autoComplete="UserID"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={userInfo.userId}
                    readonly
                  />
                </div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  ชื่อลูกค้า (ไม่ต้องแก้ไข)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    
                    id="customerName"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={userInfo.displayName}
                    readonly
                  />
                </div>
                <label  className="block text-sm font-medium leading-6 text-gray-900 mt-3">
                  หมายเลขโทรศัพท์
                </label>
                <div className="mt-2 ">
                  <input
                    type="text"
                    name="Phone"
                    id="last-name"
                    autoComplete="phone-number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <label  className="block text-sm font-medium leading-6 text-gray-900 mt-3">
                  ที่อยู่จัดส่ง
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                
              
            <label for="Select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รอบส่ง</label>
            <select  name="Round" id="Select" className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>กรุณาเลือกรอบส่ง</option>
              <option value="16.30">รอบที่ 1 16.30</option>
              <option value="18.30">รอบที่ 2 18.30</option>
              <option value="19.30">รอบที่ 3 19.30</option>
              
            </select>
             เมื่อกดปุ่มสั่งซื้อ กรุณารอซักครู่ระบบจะนำกลับไปยัง LineChat เพื่อยืนยันออเดอร์ครับ
             <button
                name='Name'
                onClick={Submit}
                className={`mt- w-full mt-5 rounded-md bg-[#BBAB8C] py-1.5 font-medium text-blue-50  ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'กำลังประมวลผล...' : 'สั่งซื้อสินค้า'}
              </button>
              </div>
              </div>
            </div>
            </form>

          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={(e) => {
                if (e.target.tagName.toLowerCase() === 'button') {
                    document.getElementById('my_modal_2').close();
                }
            }}>✕</button>
       </div>
        </dialog>   
           
      </div>
     )} 
    </div>
    
        </div>
    
    
    );
}