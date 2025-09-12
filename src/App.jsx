
import 'animate.css'

import {Badge,Card,Tag,Select, Modal,Form,Input,Button, DatePicker} from "antd"

import {Plus} from "lucide-react"
import { useEffect, useState } from 'react';

function App(){
  const[open,setOpen]=useState(false)
  const[timer,setTimer]=useState(new Date().toLocaleTimeString())

  const createTask = (value)=>{ // here no need to use onchange as u get all the form value store in value
    console.log(value);
    

  }
  


  const handleClose =()=>{
     setOpen(false)
  }
useEffect(()=>{
const interval=  setInterval(()=>[
    setTimer(new Date().toLocaleTimeString())
  ],1000)
  return ()=>{
    clearInterval(interval)
  }
})

  return (
    <div className="bg-gray-200 h-screen overflow-hidden">
      <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 text-white  h-[60px] fixed top-0 left-0 w-full flex justify-between items-center px-8">
        <div className="flex items-center">
          <button className="h-8 w-8 lg:w-10  lg:h-10 bg-[radial-gradient(circle_at_center,_#00c6ff_0%,_#0072ff_100%)] rounded-full text-white font-bold">
            PL
          </button>
          <h1 className=" text-lg lg:text-2xl font-bold ">anner</h1>
        </div>
        <div className="flex items-center gap-4 ">
          <DatePicker />
          <h1 className=" text-2xs lg:text-2xl font-bold">{timer}</h1>
        </div>
      </nav>

      <section className=" fixed top-[60px] left-0 h-[calc(100%-120px)] w-full w-full overflow-x-auto overflow-y-visible grid lg:grid-cols-3 gap-8 p-8">
        <div className="lg:h-full lg:min-h-0 h-[400px]">
          <Badge.Ribbon
            text="Highest"
            className="!bg-gradient-to-br !from-rose-500 !via-pink-500 !to-rose-500 !font-medium !z-[20000]"
          />
          <div className="bg-white overflow-auto rounded-lg h-full min-h-0 p-6 space-y-8">
            <button
              onClick={() => setOpen(true)}
              className=" focus:shadow-lg hover:scale-105 transition-translate durtion-300 py-2 px-3 rounded bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-600 text-white flex gap-1 font-medium items-center text-sm cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Add task
            </button>
            <div className="flex flex-col gap-8">
              {Array(10)
                .fill(0)
                .map((item, index) => (
                  <Card hoverable key={index}>
                    <Card.Meta
                      title="Upload new video on youtube"
                      description="Lorem ipsum dolor, sit amet consectetur adipisicing.
                    "
                    />
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <Tag>Pending</Tag>
                        <Tag className="!bg-rose-500 !border-rose-500 !text-white">
                          Delete
                        </Tag>
                      </div>

                      <Select size="small" placeholder="Change Status">
                        <Select.Option value="pending">Pending</Select.Option>
                        <Select.Option value="inProgress">
                          inProgress
                        </Select.Option>
                        <Select.Option value="completed">
                          Completed
                        </Select.Option>
                      </Select>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
        <div className="lg:h-full lg:min-h-0 h-[400px]">
          <Badge.Ribbon
            text="Medium"
            className="!bg-gradient-to-br !from-indigo-500 !via-blue-500 !to-indigo-500 !font-medium !z-[20000]"
          />
          <div className="bg-white overflow-auto rounded-lg h-full min-h-0">
            <div className="bg-white overflow-auto rounded-lg h-full min-h-0 p-6 space-y-8">
              <button
                onClick={() => setOpen(true)}
                className=" focus:shadow-lg hover:scale-105 transition-translate durtion-300 py-2 px-3 rounded bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-600 text-white flex gap-1 font-medium items-center text-sm cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Add task
              </button>
              <div className="flex flex-col gap-8">
                {Array(10)
                  .fill(0)
                  .map((item, index) => (
                    <Card hoverable key={index}>
                      <Card.Meta
                        title="Upload new video on youtube"
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing.
                    "
                      />
                      <div className="mt-4 flex justify-between items-center">
                        <div>
                          <Tag>Pending</Tag>
                          <Tag className="!bg-rose-500 !border-rose-500 !text-white">
                            Delete
                          </Tag>
                        </div>

                        <Select size="small" placeholder="Change Status">
                          <Select.Option value="pending">Pending</Select.Option>
                          <Select.Option value="inProgress">
                            inProgress
                          </Select.Option>
                          <Select.Option value="completed">
                            Completed
                          </Select.Option>
                        </Select>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:h-full lg:min-h-0 h-[400px]">
          <Badge.Ribbon
            text="Lowest"
            className="!bg-gradient-to-br !from-amber-500 !via-orange-500 !to-amber-500 !font-medium !z-[20000]"
          />
          <div className="bg-white overflow-auto rounded-lg h-full min-h-0">
            <div className="bg-white overflow-auto rounded-lg h-full min-h-0 p-6 space-y-8">
              <button
                onClick={() => setOpen(true)}
                className=" focus:shadow-lg hover:scale-105 transition-translate durtion-300 py-2 px-3 rounded bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-600 text-white flex gap-1 font-medium items-center text-sm cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Add task
              </button>
              <div className="flex flex-col gap-8">
                {Array(10)
                  .fill(0)
                  .map((item, index) => (
                    <Card hoverable key={index}>
                      <Card.Meta
                        title="Upload new video on youtube"
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing.
                    "
                      />
                      <div className="mt-4 flex justify-between items-center">
                        <div>
                          <Tag>Pending</Tag>
                          <Tag className="!bg-rose-500 !border-rose-500 !text-white">
                            Delete
                          </Tag>
                        </div>

                        <Select size="small" placeholder="Change Status">
                          <Select.Option value="pending">Pending</Select.Option>
                          <Select.Option value="inProgress">
                            inProgress
                          </Select.Option>
                          <Select.Option value="completed">
                            Completed
                          </Select.Option>
                        </Select>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 text-white  h-[20px]  lg:h-[60px] fixed bottom-0 left-0 w-full  gap-8 lg:justify-between flex items-center p-8">
        <h1 className=" text-md lg:text-2xl font-bold"> Total task-22</h1>
        <h1 className=" hover:underline cursor-pointer">©CreatedByTauseef</h1>
      </footer>

      {/* maskclosable ka use h cross par click krne se form close hoga issey pehle cross k bahar click krne se hota h */}
      <Modal
        open={open}
        footer={null}
        onCancel={handleClose}
        maskClosable={false}
      >
        <h1 className="text-lg font-medium pb-3">New task</h1>
        <Form onFinish={createTask}>
          <Form.Item name="title" rules={[{ required: true }]}>
            <Input size="large" placeholder="Task name" />
          </Form.Item>
          <Form.Item name="description" rules={[{ required: true }]}>
            <Input.TextArea rows={5} placeholder="Task description goes here" />
          </Form.Item>
          <Form.Item name="priority" rules={[{ required: true }]}>
            <Select size="large" placeholder="Choose ">
              <Select.Option value="highest">Highest</Select.Option>
              <Select.Option value="medium">Medium</Select.Option>
              <Select.Option value="lowest">Lowest</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" size="large" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default App;