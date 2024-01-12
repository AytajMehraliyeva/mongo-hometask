import React, { useContext, useEffect } from 'react'
import MainContext from '../../../context'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom'
import './Home.scss'
import { Helmet } from 'react-helmet';

const Home = () => {
    const{data,setData,setError,searchProduct,setUpdateItem}=useContext(MainContext)

    const handleEdit = (product) => {
        setUpdateItem(product);
      };
    useEffect(() => {
        axios.get('https://mongo-practise-task.onrender.com/datas')
          .then(res => {
            setData(res.data);
            console.log(res.data);
          })
          .catch(err => {
            setError(err);
          });
      }, []);


      const deleteHandler = (id) => {
        axios.delete(`https://mongo-practise-task.onrender.com/datas/${id}`)
          .then(() => {
            const updatedData = data.filter(product => product._id !== id);
            setData(updatedData);
            toast.success('Product deleted!');
          })
          .catch(err => {
            console.error('Error deleting product:', err);
            toast.error('Error deleting product');
          });
      };
    


  return (
    <>
     <Helmet>
      <title>Home</title>
    </Helmet>
    <div className='homeMain'>
      <a className='services' href="">Services</a>
      <h2>With more than 20 years of <br /> 
      experience we can deliver the <br /> 
      best product design.</h2>

      </div>
    <div className='cards'>
        {searchProduct.map((item,index)=>(
           <div item={item} key={index} className='card'>
            <img src={item.img} alt="" />
            <div className='cardBody'>
            <p> <b>{item.name}</b></p>
            <p>Price: <b>{item.price} Azn</b></p>
        <button className='deleteBtn' onClick={() => deleteHandler(item._id)}>Delete</button>
        <Toaster/>
       <Link to={"edit"}><button className='editBtn' onClick={() => handleEdit(item)}>Edit</button></Link>
       </div>
           </div>
        ))}
    </div>

    <div className='centerContainer'>
      <img src="https://preview.colorlib.com/theme/startup2/img/about/about.png" alt="" />
      <div className='centerContainerBody'>
        <p>About Us</p>
      <h3>Empowering individuals</h3>
      <p className='bigP'>Efficiently unleash cross-media tour function information <br /> without cross action media value. Quickly maximize timely <br /> deliverables for real-time schemas.</p>
      <p className='function'>“Function information without cross action media <br /> value“.</p>
      <button className='about'>About us</button>
      </div>
    </div>

    <div className='homeMain2'>
      <h2 className='our'>Our Creative Team</h2>
      <p>Efficiently unleash cross-media tour function information quickly maximize timely <br /> without cross action </p>
      <div className='cards2'>
      <div className='card2'>
       <img src='https://preview.colorlib.com/theme/startup2/img/team/1.png' alt="" />
            <div className='cardBody'>
          <h3>Brandon Yeald</h3>
          <p>Founder & CEO</p>
           </div>
       </div>
       <div className='card2'>
       <img src='https://preview.colorlib.com/theme/startup2/img/team/2.png' alt="" />
            <div className='cardBody'>
          <h3>Calvin Anderson</h3>
          <p>Graphics Designer</p>
           </div>
       </div>
       <div className='card2'>
       <img src='https://preview.colorlib.com/theme/startup2/img/team/3.png' alt="" />
            <div className='cardBody'>
          <h3>Roman Solo</h3>
          <p>Wordpress Developer</p>
           </div>
       </div>

       <div className='card2'>
       <img src='https://preview.colorlib.com/theme/startup2/img/team/4.png.webp' alt="" />
            <div className='cardBody'>
          <h3>Yeald Kin</h3>
          <p>SoftWare Engineer</p>
           </div>
       </div>
           </div>
      </div>
    </>
  )
}

export default Home