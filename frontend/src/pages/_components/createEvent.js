import {Button, Form, Input, DatePicker} from 'antd';
import { history } from 'umi';
import axios from 'axios'

const {TextArea} = Input

const formLayout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 14,
    },
}

export default function CreateEvent() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
        const obj = Object.assign({}, values)
        obj.date = values.date.toISOString()

        axios.post('http://18.223.133.80:8080/api/event', obj)
            .then(function(response) {
            console.log(response);
            history.push('/')
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div data-testid='embedded_create_event_wrapper' style={{maxWidth: '400px'}}>
            <h3>Create new Event</h3>
            <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout={"vertical"}>
                <Form.Item label='Title' name='title' rules={[
                    {
                        required: true,
                        message: 'Please input the event title!',
                    },
                ]}>
                    <Input placeholder='The event title' data-testid='title'/>
                </Form.Item>
                <Form.Item label='Description' name='description' rules={[
                    {
                        required: true,
                        message: 'Please enter the event description!',
                    },
                ]}>
                    <TextArea placeholder='The event description' data-testid='description'/>
                </Form.Item>
                <Form.Item label='Event Date' name='date'>
                    <DatePicker data-testid='datePicker'/>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' data-testid='button'>Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
}
