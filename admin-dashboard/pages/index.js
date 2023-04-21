import Table, {
  AvatarCell,
  SelectColumnFilter,
  StatusPill,
} from '../components/Table'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Button } from '../components/Button'
import UploadForm from '../components/Product/UploadForm'
import supabase from '../client/SuperbaseClient'

const getData = () => {
  const data = [
    {
      id: 1,
      name: 'Jane Cooper',
      description: 'jane.cooper@example.com',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      discount: 'Admin',
      price: 27,
      imgUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 2,
      name: 'Cody Fisher',
      description: 'cody.fisher@example.com',
      title: 'Product Directives Officer',
      department: 'Intranet',
      discount: 'Owner',
      price: 43,
      imgUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 3,
      name: 'Esther Howard',
      description: 'esther.howard@example.com',
      title: 'Forward Response Developer',
      department: 'Directives',
      discount: 'Member',
      price: 32,
      imgUrl:
        'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 4,
      name: 'Jenny Wilson',
      description: 'jenny.wilson@example.com',
      title: 'Central Security Manager',
      department: 'Program',
      discount: 'Member',
      price: 29,
      imgUrl:
        'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 5,
      name: 'Kristin Watson',
      description: 'kristin.watson@example.com',
      title: 'Lean Implementation Liaison',
      department: 'Mobility',
      discount: 'Admin',
      price: 36,
      imgUrl:
        'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 6,
      name: 'Cameron Williamson',
      description: 'cameron.williamson@example.com',
      title: 'Internal Applications Engineer',
      department: 'Security',
      discount: 'Member',
      price: 24,
      imgUrl:
        'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
  ]
  return [...data, ...data, ...data]
}

export default function Home() {
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { result, error } = await supabase
          .from('products')
          .select()

          console.log('result', result)
      }

      console.log('Start calling supabase from index.js')
      fetchData()
      console.log('Success calling supabase from index.js')
    } catch (error) {
      console.error('Fail calling supabase from index.js', error)
    }
    console.log('Stop calling supabase from index.js')
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
        emailAccessor: 'email',
      },
      {
        Header: 'Desciption',
        accessor: 'description',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Discount Percentage',
        accessor: 'discount',
        Filter: SelectColumnFilter, // new
        filter: 'includes',
      },
      {
        Header: 'Edit',
        accessor: 'edit',
        Cell: () => <Button onClick={() => handleEdit(row)}>Edit</Button>,
      },
    ],
    [],
  )

  const data = React.useMemo(() => getData(), [])

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 p-4">
          {/* <Table columns={columns} data={data} /> */}
          <UploadForm />
        </main>
      </div>
    </>
  )
}
