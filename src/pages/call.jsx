import { Card } from 'antd';
import { PhoneOutlined } from '@ant-design/icons'

const Call = () => {
    return (
        <>
            <Card style={{
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
            }}>
                <div className='w-full text-2xl'>
                    Call banner
                    <button className='float-right' type='success'><PhoneOutlined /></button>
                </div>
               
            </Card>
        </>
    )
};
export default Call;