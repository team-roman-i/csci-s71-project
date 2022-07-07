import React from 'react'
import {Space, Table, Tag} from 'antd';
import useFetch from 'use-http'
import useAxios from 'axios-hooks'

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title'
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date'
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
    }
]

export default function Events() {
    const [{ data, loading, error }] = useAxios(
        'http://18.223.133.80:8080/api/events'
    )
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.log(error)
        return <div>Failed to load event data</div>
    }

    const eventData = data.map(item => {
        const obj = Object.assign({}, item)
        obj.key = item.id

        return obj
    })

    console.log(data)

    return (
        <div data-testid='embedded_events_wrapper'>
            <h3>Current Events</h3>
            <Table columns={columns} dataSource={eventData} />
        </div>
    );
}
