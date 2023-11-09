import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

export const Home = () => {

  const navigate=useNavigate();

  const [students, setStudent] = useState([
    { id: 1, Name: 'Aaaaa', description: 'IT' },
    { id: 2, Name: 'Bbbb', description: 'IT' },
    { id: 3, Name: 'Cccc', description: 'IT' },
    { id: 4, Name: 'Ddddd', description: 'IT' },
    { id: 5, Name: 'Eeeee', description: 'IT' },
  ]);
  const [selected, setSelected] = useState({});

  return (
    <div>
      <h1>
        Home
      </h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          {
            students.map((value) => {
              return (
                <h1 key={value.id}>{value.id}. {value.Name} {value.description}                
                <button onClick={() => navigate(`/home/:${value.id}`)}>select</button>
                </h1>

              )
            })
          }
        </div>
        <div style={{ flex: 1 }}>
          <h1>Selected: </h1>
          <h1>{selected?.id}. {selected?.Name} {selected?.description}
          </h1>
        </div>
      </div>
    </div>
  )
}
export default Home;
