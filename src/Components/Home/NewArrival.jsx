"use client";
import React, { useContext, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Image from "next/image";
import Title from "@/Components/Share/Title";
import Link from "next/link";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "@/redux/apiSlice/Product/getProductListSlice";
import { makeWish } from "@/redux/apiSlice/Wish/makeWishSlice";
import toast from "react-hot-toast";
import { makeCart } from "@/redux/apiSlice/Cart/makeCartSlice";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { ImageConfig } from "@/Config";
import useLoginModal from "@/hooks/useLoginModal";
import { UserContext } from "@/provider/User";


const NewArrival = () => {

  const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button {...props} className="prev">
      <BiChevronLeft size={24} color="#B7B8B9" style={{ margin: "0 auto" }} />
    </button>
  );

  const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button {...props} className="next">
      <BiChevronRight size={24} color="#B7B8B9" style={{ margin: "0 auto" }} />
    </button>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  const { products } = useSelector(state=> state.getProducts);
  const dispatch= useDispatch();
  const loginModal = useLoginModal();
  const {user} = useContext(UserContext);

  useEffect(()=>{
    dispatch(getProductList({}))
  }, [dispatch])



  
  const handleWish=(e, id)=>{
    e.stopPropagation();
    e.preventDefault();

    if(!user?.email){
      loginModal.onOpen()
    }else{
      dispatch(makeWish(id)).then((response)=>{
        if(response?.type === "makeWish/fulfilled"){
          dispatch(getProductList({}))
          toast.success(response?.payload?.message)
        }
      })
    }
  }

  const handleCart = (e, id) => {
    e.stopPropagation();
    e.preventDefault();

    if(!user?.email){
      loginModal.onOpen()
    }else{
      dispatch(makeCart({product: id, quantity: 1})).then((response)=>{
        if(response?.type === "makeCart/fulfilled"){
          dispatch(getProductList({}))
          toast.success(response?.payload?.message)
        }
      })
    }
  };



  return (
    <div className="container my-20">
      <div className="flex items-center justify-between  border-b-2  border-[#EDEDED]  ">
        <Title className="border-b-[3px] border-[#7CC84E]"> New Arrival </Title>
        <Link href={"/shop"}>
          <p className="text-[12px] leading-[18px] font-medium text-[#5B52A3] underline">
            {" "}
            View All{" "}
          </p>
        </Link>
      </div>

      <div className="mt-16 relative">
        <div>
          <Slider {...settings}>
            {
              products.map((product, index) => (
                <Link key={index} href={`/productDetails/${product?._id}`}>
                <div className=" mx-auto pl-3 ">
                  <div className="bg-gray-100 shadow-sm rounded  p-2 relative ">
                  <div className="relative w-full h-[150px] sm:h-[180px] md:h-[220px] overflow-hidden rounded" >
                      <Image 
                          src={`${ImageConfig}${product?.productImage[0]}`} 
                          alt="offer image"
                          layout="fill"
                          objectFit="cover"
                      />
                    </div>


                    <div
                                        className="
                                            absolute  top-4 right-4
                                            hover:opacity-80
                                            transition
                                            cursor-pointer
                                        "
                                        onClick={(e) => handleWish(e, product?._id)}
                                    >
                                        <AiOutlineHeart
                                            size={28}
                                            className="
                                                fill-white
                                                absolute
                                                -top-[2px]
                                                -right-[2px]
                                            "
                                        />
                                        <AiFillHeart
                                            size={24}
                                            className={
                                                `${ product?.favorite ? "fill-primary " : "fill-neutral-500/70" }`
                                            }
                                        />
                    </div>



                    <div className="">
                      <div className="flex justify-between px-1 pt-3">
                        <h3 className="text-[555656] font-medium text-[14px] sm:text-[16px] md:text-xl tracking-tight ">
                          {product?.productName}
                        </h3>
                        <p className="text-[#929394] text-sm "> {product?.store} pc</p>
                      </div>

                      <div className="flex items-center justify-between  py-2">
                        <p className="text-[18px] leading-6 font-semibold text-primary">
                          ${product?.discountPrice ? product?.discountPrice: product?.price }
                          <sub 
                            style={{display: product?.discountPrice ? "block" : "none" }}
                            className="text-[12px] font-medium text-red-600 line-through"
                          > 
                            ${ product?.price}
                          </sub>
                        </p>
                        

                        <p onClick={(e)=>handleCart(e, product?._id)} className="text-[#7CC84E] bg-white  font-semibold rounded-lg text-2xl p-1 md:px-4 py-1 md:py-2 text-center">
                          <MdOutlineAddShoppingCart />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
