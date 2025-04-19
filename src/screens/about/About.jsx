import React, { useEffect } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router'

const About = () => {
    const { meetCode } = useParams();
    const navigate = useNavigate();
    const isLogin = true;
    let [searchParams] = useSearchParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        // actions
        navigate('/cart')
    }


    return (
        <div>About<br />
            {meetCode}
            <Link to="/products">Products again</Link>
            <br />
            {searchParams}
            <br />

            <form onSubmit={handleSubmit} method='post'>
                <input
                    name='keyword'
                />
                <button
                    type='submit'
                >
                    Submit
                </button>
            </form>
            <br />
            <button onClick={() => {
                navigate('/')
            }}>
                Home
            </button>
        </div>
    )
}

export default About