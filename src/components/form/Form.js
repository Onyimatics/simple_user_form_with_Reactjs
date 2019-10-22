import React from 'react';
import './form.css';
import MyTable from '../table/Table';
import {
    Form,
    Input,
    Button,
  } from 'antd';
  import { connect } from 'react-redux';
  import { submitAction } from '../../store/modules/users/actions';
  const RegistrationForm = (props) => {
    // const [formData, setFormData] = useState([])
    let payload;
    const handleSubmit = e => {
      e.preventDefault();
      // const formData = props.formData;
      props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          if(props.formData.length !== 0){
            values.key = parseInt(props.formData.length) + 1;
            payload = [ ...props.formData, values ]
          } else {
            values.key = 1;
            payload = [ ...props.formData, values ]
          }
          props.submitAction(payload);
          
          // setFormData(payload);
        }
      });
    };


  
  
      const { getFieldDecorator } = props.form;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 16 },
          sm: { span: 4},
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 18 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 10,
          },
        },
      };
  
      return (

        <div className="formWrapper">
          <div  className="main-form">
            <h1 className="register-title">User Registration</h1>
            <Form {...formItemLayout} onSubmit={handleSubmit}>
              <Form.Item label="First Name">
                {getFieldDecorator('first_name', {
                  rules: [
                    {
                      type: 'string',
                      message: 'The input is not valid name',
                    },
                    {
                      required: true,
                      message: 'Please input your First Name!',
                    },
                  ],
                })(<Input placeholder="First Name" 
                />)}
              </Form.Item>
              <Form.Item label="Last Name">
                {getFieldDecorator('last_name', {
                  rules: [
                    {
                      type: 'string',
                      message: 'The input is not valid name',
                    },
                    {
                      required: true,
                      message: 'Please input your Last Name!',
                    },
                  ],
                })(<Input placeholder="Last Name" 
                />)}
              </Form.Item>
              <Form.Item label="Birthday">
                {getFieldDecorator('birth_day', {
                  rules: [
                    {
                      
                      message: 'The input is not valid date',
                    },
                    {
                      required: true,
                      message: 'Please input your Birthday!',
                    },
                  ],
                })(<Input placeholder="Select Date"
                type="date"
                />)}
            </Form.Item>
              <Form.Item label="Age">
                {getFieldDecorator('age', {
                  rules: [
                    {
                      
                      message: 'The input is not valid Age',
                    },
                    {
                      required: true,
                      message: 'Please input your Age!',
                    },
                  ],
                })(<Input placeholder="eg: 25" type="Number" />)}
              </Form.Item>
              <Form.Item label="Hobby">
                {getFieldDecorator('hobby', {
                  rules: [
                    {
                      type: 'string',
                      message: 'The input is not valid text',
                    },
                    {
                      required: true,
                      message: 'Please input your Hobby!',
                    },
                  ],
                })(<Input placeholder="eg: Cooking" 
                />)}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
              <div className="submit-button">
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
          <MyTable data={props.formData} />
        </div>
      );
    }


  const FillForm = Form.create({ name: 'register' })(RegistrationForm);

  const mapStateToProps = state => ({
    formData: state.userReducer.formData
  })

  const mapDispatchToProps = {
    submitAction
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FillForm);