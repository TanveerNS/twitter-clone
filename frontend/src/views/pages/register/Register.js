import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useFormik } from 'formik'
import { initialValues } from 'src/services/validate/Register'

const Register = () => {

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log("values==>",values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">

                <CCardBody className="p-4">
                  <form onSubmit={(e)=>{ formik.handleSubmit(e)}}>
                    <h1>Register</h1>
                    <p className="text-medium-emphasis">Create your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput name="firstName" placeholder="First Name" autoComplete="firstName"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                       />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput name="lastName" placeholder="Last Name" autoComplete="lastName"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                       />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput name="username" placeholder="Username" autoComplete="username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                       />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput name="email" placeholder="Email" autoComplete="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                       />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                      name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="password"
                        onChange={formik.handleChange}
        value={formik.values.password}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                      name="passwordConf"
                        type="password"
                        placeholder="Repeat password"
                        autoComplete="passwordConf"
                        onChange={formik.handleChange}
        value={formik.values.passwordConf}
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton type="submit" color="success">Create Account</CButton>
                    </div>
                  </form>
                </CCardBody>

            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
