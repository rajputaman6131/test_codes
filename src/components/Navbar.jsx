import React from 'react'

const Navbar = ({ name, setName }) => {

  const onChangeText = (e) => {
    // const {  value } = e.target;
    const value = e.target.value;
    setName(value)

  }


  return (
    <div>
      <input
        onChange={onChangeText}
        placeholder='Enter your text here'
        name='searchText'
      />

      {name}
    </div>
  )
}

export default Navbar