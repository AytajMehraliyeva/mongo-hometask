import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import './Add.scss'
import { Link } from 'react-router-dom';
const Add = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      img:'',
      desc:''
    },
    onSubmit: values => {
      if (!values.name || !values.price || !values.img) {
        toast.error('Please fill out all fields.');
        return;
      }


      axios.post('https://mongo-task-w6a2.onrender.com/items', { ...values })
        .then(res => {
          console.log(res);
          toast.success('Product added successfully!');

        })
        .catch(error => {
       
          toast.error('An error occurred while adding the product.');
        })
        
    }
  });
  return (
<>
<div className='headerEdit'>
      <Link to={"/"}>Home</Link>
      <p>About</p>
      <p>Contact us</p>
      <p>Map</p>
      <p>Blogs</p>
    </div>

    <form className='formAdd' onSubmit={formik.handleSubmit}>
       <label htmlFor="name">Name</label> <br />
       <input
         id="name"
         name="name"
         placeholder='Name...'
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       /> <br />
        <label htmlFor="price">Price</label> <br />
       <input
         id="price"
         name="price"
         placeholder='Price...'
         type="text"
         onChange={formik.handleChange}
         value={formik.values.price}
       /> <br />
        <label htmlFor="desc">Description</label> <br />
       <input
         id="desc"
         name="desc"
         placeholder='Description...'
         type="text"
         onChange={formik.handleChange}
         value={formik.values.desc}
       /> <br />
  <label htmlFor="img">Image</label> <br />
       <input
         id="img"
         name="img"
         type="text"
         placeholder='Img url...'
         onChange={formik.handleChange}
         value={formik.values.img}
       /> <br />
       <button className='formAdd_btn' type="submit">Submit</button>
       <Toaster/>
     </form></>
  )
}

export default Add
