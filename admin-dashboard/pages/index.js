import Table, { AvatarCell, SelectColumnFilter } from '../components/Table'
import React, { useEffect } from 'react'
import { Button } from '../components/Button'
import supabase from '../client/SuperbaseClient'
import Link from 'next/link'

// const getData = () => {
//   const data = [
//     {
//       id: 1,
//       name: 'Jane Cooper',
//       description: 'jane.cooper@example.com',
//       title: 'Regional Paradigm Technician',
//       department: 'Optimization',
//       discount: 'Admin',
//       price: 27,
//       imgUrl:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     },
//     {
//       id: 2,
//       name: 'Cody Fisher',
//       description: 'cody.fisher@example.com',
//       title: 'Product Directives Officer',
//       department: 'Intranet',
//       discount: 'Owner',
//       price: 43,
//       imgUrl:
//         'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     },
//     {
//       id: 3,
//       name: 'Esther Howard',
//       description: 'esther.howard@example.com',
//       title: 'Forward Response Developer',
//       department: 'Directives',
//       discount: 'Member',
//       price: 32,
//       imgUrl:
//         'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     },
//     {
//       id: 4,
//       name: 'Jenny Wilson',
//       description: 'jenny.wilson@example.com',
//       title: 'Central Security Manager',
//       department: 'Program',
//       discount: 'Member',
//       price: 29,
//       imgUrl:
//         'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     },
//     {
//       id: 5,
//       name: 'Kristin Watson',
//       description: 'kristin.watson@example.com',
//       title: 'Lean Implementation Liaison',
//       department: 'Mobility',
//       discount: 'Admin',
//       price: 36,
//       imgUrl:
//         'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     },
//     {
//       id: 6,
//       name: 'Cameron Williamson',
//       description: 'cameron.williamson@example.com',
//       title: 'Internal Applications Engineer',
//       department: 'Security',
//       discount: 'Member',
//       price: 24,
//       imgUrl:
//         'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     },
//   ]
//   return [...data, ...data, ...data]
// }

export default function Home() {
  const [products, setProducts] = React.useState([])

  const handleDelete = async (row) => {
    confirm('Are you sure you want to delete this product?')
    if (!confirm) return

    const { data, error } = await supabase
      .from('products')
      .delete()
      .eq('id', row.original.id)

    if (error) {
      console.log(error)
      return
    }

    const updatedProducts = products.filter(
      (product) => product.id !== row.original.id,
    )
    setProducts(updatedProducts)
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*')

      if (error) {
        console.log(error)
        return
      }

      const updatedProducts = data.map((product) => {
        // calculate discount percentage
        const discountPer = parseFloat(
          (1 - product.sale_price / product.price).toFixed(2) * 100,
        )

        const { data } = supabase.storage
          .from('images')
          .getPublicUrl(product.thumbnail_image)
        return {
          ...product,
          discounted_price: discountPer,
          imgUrl: data.publicUrl,
        }
      })

      setProducts(updatedProducts)
    }
    fetchProducts()
  }, [])

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Product Name',
        accessor: 'name',
        Cell: AvatarCell,
        imgAccessor: 'imgUrl',
      },
      {
        Header: 'Desciption',
        accessor: 'description',
      },
      {
        Header: 'Price',
        accessor: (row) => `${row.price} VND`,
      },
      {
        Header: 'Discount',
        accessor: 'discounted_price',
        Filter: SelectColumnFilter,
        filter: 'includes',
        Cell: ({ value }) => `${value}%`,
      },
      {
        Header: 'Delete',
        accessor: 'delete',
        Cell: ({ row }) => (
          <Button onClick={() => handleDelete(row)} className={`text-red-500`}>
            Delete
          </Button>
        ),
      },
    ],
    [products],
  )

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <Link href="/products">
          <Button className="text-blue-500">Add New Product</Button>
        </Link>
      </div>
      <Table columns={columns} data={products} />
    </>
  )
}
