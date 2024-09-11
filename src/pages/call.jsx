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

                <div className='w-full flex justify-between'>
                    <div className='text-2xl md:text-xl sm:text-lg'>
                        Use Call
                    </div>
                    <div>
                        <span className='text-2xl md:text-xl sm:text-lg mr-6'>
                            +998 (91) 765-43-21
                        </span>
                        <button className='bg-green-500 rounded-full width min-w-28 text-white py-1 text-2xl md:text-xl sm:text-lg' type='success'><PhoneOutlined /></button>
                    </div>
                </div>

            </Card>
        </>
    )
};
export default Call;