
import 'animate.css'
import "@ant-design/v5-patch-for-react-19";
import {Badge,Card,Tag,Select, Modal,Form,Input,Button, DatePicker,Empty, Popconfirm} from "antd"
import moment from "moment";
import {Delete, Plus} from "lucide-react"
import { useEffect, useState } from 'react';
import { usePlanner } from './store/usePlanner';

function App(){
  const [form] = Form.useForm() // to reset form here is a hook which is explained below
  const[open,setOpen]=useState(false)
  const[timer,setTimer]=useState(new Date().toLocaleTimeString())
 
 
  const {tasks,addTask,deleteTask,updateStatus,deleteAllTask}=usePlanner()

 const highestTasks= tasks.filter((item)=> item.priority === "highest");
 const mediumTasks= tasks.filter((item)=> item.priority === "medium");
 const lowestTasks= tasks.filter((item)=> item.priority === "lowest");
   

 
 
 const createTask = (value)=>{ // here no need to use onchange as u get all the form value store in value
  value.status="pending"
  value.id=Date.now() // to delete we generate a unique id
  value.createdAt=new Date()
  addTask(value)
  
   // console.log(tasks); // it will give what will u submit to add it we create addTask
   handleClose() // after submitting the form will close openly
    
    

  }
  


  const handleClose =()=>{
     setOpen(false)
     form.resetFields() // it will reset form  we can do by using a hook Form.useForm() by ant design with form component and pass as props form={form} like this where we use i simply write in comment like this form={form}
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
          <button className="w-10  h-10 bg-[radial-gradient(circle_at_center,_#00c6ff_0%,_#0072ff_100%)] rounded-full text-white font-bold">
            PL
          </button>
          <h1 className=" lg:text-2xl font-bold ">anner </h1>
        </div>
        <div className="flex  items-center lg:gap-4  gap-5">
          <h1 className=" text-xs 
          lg:text-2xl font-bold">{timer}</h1>
          <DatePicker className='!hidden lg-block'/>
          <button
            onClick={() => setOpen(true)}
            className=" focus:shadow-lg hover:scale-105 transition-translate durtion-300 py-2 px-3 rounded bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-600 text-white flex gap-1 font-medium items-center text-sm cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
          <Popconfirm
            title="Do you want to delete all tasks"
            onConfirm={() => deleteAllTask()}
          >
            <button className=" focus:shadow-lg hover:scale-105 transition-translate durtion-300 py-2 px-3 rounded bg-gradient-to-tr from-rose-600 via-red-500 to-rose-600 text-white flex gap-1 font-medium items-center text-sm cursor-pointer">
              <Delete className="w-4 h-4" />
              Delete
            </button>
          </Popconfirm>
        </div>
      </nav>

      <section className=" fixed top-[60px] left-0 h-[calc(100%-120px)] w-full w-full overflow-x-auto overflow-y-visible grid lg:grid-cols-3 gap-8 p-8">
        <div className="lg:h-full lg:min-h-0 h-[400px]">
          <Badge.Ribbon
            text="Highest"
            className="!bg-gradient-to-br !from-rose-500 !via-pink-500 !to-rose-500 !font-medium !z-[20000]"
          />
          <div className="bg-white overflow-auto rounded-lg h-full min-h-0 p-6 space-y-8">
            {/* <button
              onClick={() => setOpen(true)}
              className=" focus:shadow-lg hover:scale-105 transition-translate durtion-300 py-2 px-3 rounded bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-600 text-white flex gap-1 font-medium items-center text-sm cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Add task
            </button> */}

            <div className="flex flex-col gap-8">
              {highestTasks.length === 0 && (
                <>
                  <Empty description="There is no task added as highest priority" />
                  <button
                    onClick={() => setOpen(true)}
                    className=" w-fit mx-auto
                    focus:shadow-lg hover:scale-105 transition-translate durtion-300 py-2 px-3 rounded bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-600 text-white flex gap-1 font-medium items-center text-sm cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    Add task
                  </button>
                </>
              )}
              {highestTasks.map((item, index) => (
                <Card hoverable key={index}>
                  <Card.Meta
                    title={item.title}
                    description={item.description}
                  />
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      {item.status === "pending" && (
                        <Tag className="capitalize">{item.status}</Tag>
                      )}
                      {item.status === "completed" && (
                        <Tag className="capitalize" color="geekblue">
                          {item.status}
                        </Tag>
                      )}
                      {item.status === "inProgress" && (
                        <Tag className="capitalize" color="green">
                          {item.status}
                        </Tag>
                      )}

                      <Popconfirm
                        title="Do you want to delete all tasks"
                        onConfirm={() => deleteTask(item.id)}
                      >
                        <Tag className="!bg-rose-500 !border-rose-500 !text-white">
                          Delete
                        </Tag>
                      </Popconfirm>
                    </div>

                    <Select
                      size="small"
                      placeholder="Change Status"
                      onChange={(status) => updateStatus(item.id, status)}
                    >
                      <Select.Option value="pending">Pending</Select.Option>
                      <Select.Option value="inProgress">
                        inProgress
                      </Select.Option>
                      <Select.Option value="completed">Completed</Select.Option>
                    </Select>
                  </div>
                  <label className="text-xs  mt-3 text-slate-600">
                    {moment(item.createdAt).format("DD MMM YYYY hh:mm")}
                  </label>
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
              {/* <button
                onClick={() => setOpen(true)}
                className=" focus:shadow-lg hover:scale-105 transition-translate durtion-300 py-2 px-3 rounded bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-600 text-white flex gap-1 font-medium items-center text-sm cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Add task
              </button> */}
              <div className="flex flex-col gap-8">
                {mediumTasks.length === 0 && (
                  <>
                    <Empty description="There is no task added as medium priority" />
                    <button
                      onClick={() => setOpen(true)}
                      className=" w-fit mx-auto
                    focus:shadow-lg hover:scale-105 transition-translate durtion-300 py-2 px-3 rounded bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-600 text-white flex gap-1 font-medium items-center text-sm cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      Add task
                    </button>
                  </>
                )}
                {mediumTasks.map((item, index) => (
                  <Card hoverable key={index}>
                    <Card.Meta
                      title={item.title}
                      description={item.description}
                    />
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        {item.status === "pending" && (
                          <Tag className="capitalize">{item.status}</Tag>
                        )}
                        {item.status === "completed" && (
                          <Tag className="capitalize" color="geekblue">
                            {item.status}
                          </Tag>
                        )}
                        {item.status === "inProgress" && (
                          <Tag className="capitalize" color="green">
                            {item.status}
                          </Tag>
                        )}

                        <Popconfirm
                          title="Do you want to delete all tasks"
                          onConfirm={() => deleteTask(item.id)}
                        >
                          <Tag className="!bg-rose-500 !border-rose-500 !text-white">
                            Delete
                          </Tag>
                        </Popconfirm>
                      </div>

                      <Select
                        size="small"
                        placeholder="Change Status"
                        onChange={(status) => updateStatus(item.id, status)}
                      >
                        <Select.Option value="pending">Pending</Select.Option>
                        <Select.Option value="inProgress">
                          inProgress
                        </Select.Option>
                        <Select.Option value="completed">
                          Completed
                        </Select.Option>
                      </Select>
                    </div>
                    <label className="text-xs  mt-3 text-slate-600">
                      {moment(item.createdAt).format("DD MMM YYYY hh:mm")}
                    </label>
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
              {/* <button
                onClick={() => setOpen(true)}
                className=" focus:shadow-lg hover:scale-105 transition-translate durtion-300 py-2 px-3 rounded bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-600 text-white flex gap-1 font-medium items-center text-sm cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Add task
              </button> */}
              <div className="flex flex-col gap-8">
                {lowestTasks.length === 0 && (
                  <>
                    <Empty description="There is no task added as lowest priority" />
                    <button
                      onClick={() => setOpen(true)}
                      className=" w-fit mx-auto
                    focus:shadow-lg hover:scale-105 transition-translate durtion-300 py-2 px-3 rounded bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-600 text-white flex gap-1 font-medium items-center text-sm cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      Add task
                    </button>
                  </>
                )}
                {lowestTasks.map((item, index) => (
                  <Card hoverable key={index}>
                    <Card.Meta
                      title={item.title}
                      description={item.description}
                    />
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        {item.status === "pending" && (
                          <Tag className="capitalize">{item.status}</Tag>
                        )}
                        {item.status === "completed" && (
                          <Tag className="capitalize" color="geekblue">
                            {item.status}
                          </Tag>
                        )}
                        {item.status === "inProgress" && (
                          <Tag className="capitalize" color="green">
                            {item.status}
                          </Tag>
                        )}

                        <Popconfirm
                          title="Do you want to delete all tasks"
                          onConfirm={() => deleteTask(item.id)}
                        >
                          <Tag className="!bg-rose-500 !border-rose-500 !text-white">
                            Delete
                          </Tag>
                        </Popconfirm>
                      </div>

                      <Select
                        size="small"
                        placeholder="Change Status"
                        onChange={(status) => updateStatus(item.id, status)}
                      >
                        <Select.Option value="pending">Pending</Select.Option>
                        <Select.Option value="inProgress">
                          inProgress
                        </Select.Option>
                        <Select.Option value="completed">
                          Completed
                        </Select.Option>
                      </Select>
                    </div>
                    <label className="text-xs  mt-3 text-slate-600">
                      {moment(item.createdAt).format("DD MMM YYYY hh:mm")}
                    </label>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 text-white  h-[20px]  lg:h-[60px] fixed bottom-0 left-0 w-full  gap-8 lg:justify-between flex items-center p-8">
        <h1 className=" text-md lg:text-2xl font-bold">
          {" "}
          Total tasks-{tasks.length}
        </h1>
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
        <Form onFinish={createTask} form={form}>
          {/* like this */}
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