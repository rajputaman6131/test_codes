import React from 'react'

const Component3 = ({ name, age, ...rest }) => {

    // condition ? true condition : false condition

    return (
        <div>
            Hi my name is {name} and my age is {age} and my hobby is {rest.hobby}
            and my phoneNumber is {rest.phoneNumber}
        </div>
    )
}

export default Component3;