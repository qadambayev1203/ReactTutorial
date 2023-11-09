import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const data = [
  { id: 1, Name: 'Aaaaa', description: 'IT' },
  { id: 2, Name: 'Bbbb', description: 'IT' },
  { id: 3, Name: 'Cccc', description: 'IT' },
  { id: 4, Name: 'Ddddd', description: 'IT' },
  { id: 5, Name: 'Eeeee', description: 'IT' },
];

export const Home = () => {

  const navigate = useNavigate();

  const [selected, setSelected] = useState({});
  const params = useParams()

  useEffect(() => {
    let res = data.filter(item => item.id === Number(params.id.replace(':', '')))
    console.log(res);
    setSelected(...res)
  }, [params?.id])


  return (

    <div style={{ display: 'flex' }}>
      <h1 key={selected.id}>
        {selected.id}. {selected.Name} {selected.description}
      </h1>
    </div>
  )
}
export default Home;
