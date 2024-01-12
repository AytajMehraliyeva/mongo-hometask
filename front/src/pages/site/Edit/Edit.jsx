import { useFormik } from 'formik'
import React, { useContext, useEffect } from 'react'
import MainContext from '../../../context';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import './Edit.scss'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Edit = () => {
    const{updatedItem,setUpdateItem}=useContext(MainContext)
    useEffect(()=>{
formik.setValues({
  name:updatedItem?.name ,
          price: updatedItem?.price ,
          img: updatedItem.img,
})
    },[])
    const formik = useFormik({
        initialValues: {
          name:'' ,
          price: '' ,
          img: '',
        },
        onSubmit: (values) => {
          if (updatedItem) {
            axios.put(`https://mongo-practise-task.onrender.com/datas/${updatedItem._id}`, values)
              .then((res) => {
                console.log(res);
                toast.success('Product updated successfully!');
                setUpdateItem(null);
              })
              .catch((error) => {
                console.error(error);
                toast.error('An error occurred while updating the product.');
              });
          }
        },
      });
  return (
    <>
<Helmet>
  <title>Edit</title>
</Helmet>

    <div className='headerEdit'>
      <Link to={"/"}>Home</Link>
      <p>About</p>
      <p>Contact us</p>
      <p>Map</p>
      <p>Blogs</p>
    </div>
    <form className='formEdit' onSubmit={formik.handleSubmit}>
    <label htmlFor='name' className='editLabel'>Name</label> <br />
    <input 
    className='editInput'
      id='name'
      name='name'
      type='text'
      onChange={formik.handleChange}
      value={formik.values.name}
    />  <br />
    <label htmlFor='price'className='editLabel'>Price</label> <br />
    <input
    className='editInput'
      id='price'
      name='price'
      type='text'
      onChange={formik.handleChange}
      value={formik.values.price}
    /> <br />
    <label htmlFor='img' className='editLabel'>Image</label> <br />
    <input
    className='editInput'
      id='img'
      name='img'
      type='text'
      onChange={formik.handleChange}
      value={formik.values.img}
    /> <br />
    <button type='submit' className='editSubmit'>Submit</button>
    <Toaster/>
  </form></>
  )
}

export default Edit