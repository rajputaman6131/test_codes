import React, { useEffect } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router'

const About = () => {
    const { meetCode } = useParams();
    let navigate = useNavigate();
    const isLogin = true;
    let [searchParams] = useSearchParams();

    console.log(searchParams)

    useEffect(() => {
        if (!isLogin) {
            navigate('/products');
        }
    }, [])

    return (
        <div>About<br />
            {meetCode}
            <Link to="/products">Products again</Link>
            <br />
            {searchParams}
            <br />

            <form method='get'>
                <input
                    name='keyword'
                />
                <button
                    type='submit'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default About