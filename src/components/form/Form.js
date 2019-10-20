import React from 'react';
import './form.css';
import MyTable from '../table/Table';
import {
    Form,
    Input,
    Button,
  } from 'antd';
  
  class RegistrationForm extends React.Component {
    constructor(props) {
      super(props);
    this.state = {
     formData: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
    handleSubmit = e => {
      e.preventDefault();
      let payload;
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('date>>>>', values.birth_day)
          if(this.state.formData.length !== 0){
            values.key = parseInt(this.state.formData.length) + 1;
            payload = [ ...this.state.formData, values ]
          } else {
            values.key = 1;
            payload = [ ...this.state.formData, values ]
          }
          this.setState({
            formData: payload
          })
        }
      });
    };

  
    render() {
      const { getFieldDecorator } = this.props.form;
  
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
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
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
          <MyTable data={this.state.formData} />
        </div>
      );
    }
  }

  const FillForm = Form.create({ name: 'register' })(RegistrationForm);

export default FillForm;