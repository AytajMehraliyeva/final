import axios from 'axios'
import React, { useContext } from 'react'
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import Helmet from 'react-helmet'
import './Add.scss'
import MainContext from '../../context';
const Add = () => {
    const { item, setItem,search,setSearch,searchItem,sort,sortData,sortByDesc,sortByAsc} = useContext(MainContext)
    const formik = useFormik({
        initialValues: {
            name: '',
            img: '',
            price: '',
            desc: ''
        },
        onSubmit: async(values) => {
            if (!values.name || !values.price || !values.img || !values.desc) {
                toast.error("Please full fill out all fields")
                return
            }

            await axios.post('http://localhost:3020/cards', values)
                .then((res) => {
                    setItem([...item, res.data])
                    toast.success("Product added!")
                }).catch(err => {
                    toast.error("Product can't added")
                    console.log(err)
                })
            formik.resetForm()
        }

    });
    
  
    const deleteHandle = (id) => {
        axios.delete(`http://localhost:3020/cards/${id}`)
            .then(() => {
                const deleteAdd = item.filter(product => product._id !== id)
                setItem(deleteAdd)
                toast.success("Product deleted")
            }).catch(err => {
                toast.error("An occures while deleting item")
                console.log(err)
            })
    }

    return (
        <>
            <Helmet>
                <title>Add</title>
            </Helmet>
            <form className='formAdd' onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label> <br />
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder='Enter name ...'
                /> <br />
                <label htmlFor="price">Price</label> <br />
                <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    placeholder='Enter price ...'
                /><br />
                <label htmlFor="img">Image</label>  <br />
                <input
                    id="img"
                    name="img"
                    type="img"
                    onChange={formik.handleChange}
                    value={formik.values.img}
                    placeholder='Enter img URL ...'
                /><br />
                <label htmlFor="desc">Description</label>  <br />
                <input
                    id="desc"
                    name="desc"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.desc}
                    placeholder='Enter description ...'
                /> <br />

                <button className='formAdd_btn' type="submit">Submit</button>
                <Toaster />
            </form>
            <input
            className='searchInput'
        type="text"
        value={search}
        placeholder='Search product'
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className='artan' onClick={() => sortData(sort === 'asc' ? 'desc' : 'asc')}>
        {sort === 'asc' ? 'DESC' : 'ASC'}
      </button>
      <button className='sortAsc' onClick={sortByAsc}>A-Z</button>
      <button className='sortDesc' onClick={sortByDesc}>Z-A</button>
           <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Detail</th>
                    
                </tr>
            </thead>
            <tbody>
                {searchItem.map((data,index)=>(
                    <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.price} Azn</td>
                        <td><button className='delete' onClick={()=>deleteHandle(data._id)}>Delete</button></td>
                       
                    </tr>
                ))}
            </tbody>
           </table>
        </>
    )
}

export default Add