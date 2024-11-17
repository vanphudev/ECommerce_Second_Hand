import React from "react";
import {Card, Typography, Button, Table, DatePicker, Select, Input, Empty} from "antd";

const {Title, Text} = Typography;
const {Option} = Select;
import MenuTitle from "../../../../components/MenuTitle/MenuTitle";

const Payment = () => {
   const columns = [
      {
         title: "Trading code",
         dataIndex: "tradingCode",
         key: "tradingCode",
      },
      {
         title: "Amount of money",
         dataIndex: "amount",
         key: "amount",
      },
      {
         title: "Content",
         dataIndex: "content",
         key: "content",
      },
      {
         title: "Time",
         dataIndex: "time",
         key: "time",
      },
      {
         title: "Status",
         dataIndex: "status",
         key: "status",
      },
   ];

   const data = [];
   return (
      <>
         <div className='tws-flex-col tws-gap-3 tws-w-[100%]'>
            <MenuTitle name={"PAYMENT AMAZING TECH"} />
            <div className='tws-flex tws-w-[100%] tws-justify-between tws-text-2xl tws-font-medium tws-items-center'>
               <div style={{padding: "24px"}} className='tws-w-[100%]'>
                  <div
                     className='tws-flex-nowrap tws-flex  tws-justify-between tws-items-center'
                     style={{
                        backgroundColor: "#fff7f2",
                        borderRadius: "8px",
                        marginBottom: "24px",
                        padding: "24px",
                     }}>
                     <div>
                        <Text>Wallet balance</Text>
                        <Title level={2} style={{margin: "8px 0", color: "#ff4d4f"}}>
                           0 ₫
                        </Title>
                     </div>
                     <Button
                        type='primary'
                        shape='circle'
                        icon={
                           <img
                              src='https://futabus.vn/images/header/profile/History.svg'
                              alt='No data'
                              style={{height: "80px", marginBottom: "8px"}}
                           />
                        }
                        size='large'
                        style={{
                           backgroundColor: "#b7eb8f",
                           borderColor: "#b7eb8f",
                           color: "#fff",
                        }}
                     />
                  </div>
                  <Title level={4} style={{marginBottom: "16px"}}>
                     Transaction History
                  </Title>
                  <div style={{display: "flex", gap: "12px", marginBottom: "16px"}}>
                     <DatePicker placeholder='Select date' style={{width: "200px"}} />
                     <Select placeholder='Choose Status' style={{width: "200px"}}>
                        <Option value='success'>Success</Option>
                        <Option value='pending'>Pending</Option>
                        <Option value='failed'>Failed</Option>
                     </Select>
                     <Button type='primary'>Find</Button>
                  </div>
                  <Table
                     columns={columns}
                     dataSource={data}
                     locale={{
                        emptyText: (
                           <div style={{textAlign: "center"}}>
                              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                           </div>
                        ),
                     }}
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default Payment;
