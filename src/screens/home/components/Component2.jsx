import React, { useEffect, useState } from 'react'

const Component2 = () => {

    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [selectedButton, setSelectedButton] = useState('+');
    const [calculatedValue, setCalculatedValue] = useState(0);

    useEffect(() => {
        // setCalculatedValue(calculate(selectedButton))
        if (calculatedValue < 3) {
            setCalculatedValue(calculatedValue + 1)
        }
    }, [number1, number2, selectedButton, calculatedValue]);


    useEffect(() => {
        console.log(1)
    }, [])




    const calculate = (button) => {
        switch (button) {
            case '+':
                return (parseFloat(number1 || 0) + parseFloat(number2 || 0))
            case '-':
                return (parseFloat(number1 || 0) - parseFloat(number2 || 0))
            case 'x':
                return (parseFloat(number1 || 0) * parseFloat(number2 || 0))
            case '/':
                return (parseFloat(number1 || 0) / parseFloat(number2 || 1))

            default:
                break;
        }
    }

    if (calculatedValue > 2000) {
        return <>value is greater than 2000</>
    }


    return (
        <div>
            {

            }
            <input
                value={number1}
                onChange={(e) => {
                    setNumber1(e.target.value)
                }}
                placeholder='Enter Number 1'
            />
            <input
                value={number2}
                onChange={(e) => {
                    setNumber2(e.target.value)
                }}
                placeholder='Enter Number 2'
            />

            <button

                onClick={() => {
                    setSelectedButton('+')
                }}
            >
                +
            </button>

            <button

                onClick={() => {
                    setSelectedButton('-')
                }}
            >
                -
            </button>

            <button

                onClick={() => {
                    setSelectedButton('x')
                }}
            >
                x
            </button>

            <button

                onClick={() => {
                    setSelectedButton('/')
                }}
            >
                /
            </button>
            <br />

            selected operation : {selectedButton}
            <br />

            {
                calculatedValue
            }

            <br />
        </div>
    )
}

export default Component2