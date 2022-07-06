import {Space, Table, Tag} from 'antd';

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

// TODO Integrate with backend when ready
const eventData = [
    {
        key: 1,
        title: 'Worship band for Sunday night service',
        date: 'Sunday, July 3rd 5pm.',
        description: 'List of people called to serve on the band.'
    },
    {
        key: 2,
        title: 'Bible study at Jonh\'s house',
        date: 'Tuesday, July 5th 7pm.',
        description: 'We are going to meet at Jonh\'s house this Tuesday to have a Bible study led by our pastor Roberto. After the study we will have our traditional tea time! Let us know you are coming so we can plan accordingly.'
    },
    {
        key: 3,
        title: 'Summer camp',
        date: 'Friday, July 8th.',
        description: 'We are going to have out annual summer camp starting this Friday. Please, confirm you are coming with us!'
    }
]

export default function Events() {
    return (
        <div data-testid='embedded_events_wrapper'>
            <h3>Current Events</h3>
            <Table columns={columns} dataSource={eventData} />
        </div>
    );
}
