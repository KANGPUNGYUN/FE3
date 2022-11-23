import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function Product() {
    useEffect(()=>{

        // axios로 받아오기

        // - axios.get(url, conf)
        // - axios.delete(url, conf)
        // - axios.post(url, data, conf)
        // - axios.put(url, data, conf)
        // - axios.patch(url, data, conf)

        axios.get('http://test.api.weniv.co.kr/mall')
            .then(res => {
                console.log('axios')
                console.log(res)
                console.log(res.data)
            })

        // fetch로 받아오기

        fetch('http://test.api.weniv.co.kr/mall')
            .then(res => {
                console.log('fetch')
                console.log(res)
                // console.log(res.json()) // pending됩니다.
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
    },[])
    return (
        <div>Product</div>
    )
}