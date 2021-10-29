import React from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CButtonGroup,
} from "@coreui/react";
import CIcon from '@coreui/icons-react'
import {Link} from 'react-router-dom';
import usersData from "../../../views/users/UsersData";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
const fields = ["Order No", "Order","Date","status","ship to","Total", "action"];

const Order = () => {
  return (
    <>
      <CCard>
        <CCardBody>
      
          <CRow className="align-items-center mt-2">
            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
             
                <CButton
                active
                block
                shape="square"
                color="link"
                aria-pressed="true"
              >
                All()
              </CButton>
            
            </CCol>

            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton
                active
                block
                shape="square"
                color="link"
                aria-pressed="true"
              >
                Online ()
              </CButton>
            </CCol>
            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton
                active
                block
                shape="square"
                color="link"
                aria-pressed="true"
              >
                InStock()
              </CButton>
            </CCol>
            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton
                active
                block
                shape="square"
                color="link"
                aria-pressed="true"
              >
                OutStock()
              </CButton>
            </CCol>
            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton
                active
                block
                shape="square"
                color="link"
                aria-pressed="true"
              >
                OnSale()
              </CButton>
            </CCol>

            
          </CRow>
        </CCardBody>
      </CCard>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Order</CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={20}
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                      
                    </td>
                  ),
                action: ()=>(
                <td>
                  
                  <CButtonGroup>
              <Link  to='/detailorder'><CButton color="secondary"><CIcon name="cil-lightbulb" /></CButton></Link>
      
            </CButtonGroup>

          
                </td>   
                )
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Order;