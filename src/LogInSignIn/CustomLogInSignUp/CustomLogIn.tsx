// import React from 'react';
// import { View } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import styled from 'styled-components/native';
// import { TextInput } from 'react-native-paper';

// // Define some styled components for your form elements
// const Container = styled.View`

//   padding: 20px;
//   justify-content: center;
// `;

// const Label = styled.Text`
//   font-size: 18px;
//   margin-bottom: 5px;
// `;

// const Input = styled.TextInput`
//   border: 1px solid #ccc;
//   padding: 10px;
//   border-radius: 5px;
// `;

// const ErrorText = styled.Text`
//   color: red;
// `;

// const Button = styled.TouchableOpacity`
//   background-color: blue;
//   padding: 15px;
//   border-radius: 10px;
//   margin-top: 10px;

// `;

// const ButtonText = styled.Text`
//   color: white;
// `;

// // Define a validation schema for your form fields
// const validationSchema = Yup.object().shape({
//     // same as before
// });

// function CustomSighnUp() {
//     return (
//         <Container>
//             {/* Use Formik component to handle form state and submission */}
//             <Formik
//                 initialValues={{  email: '',number: '', password: '' }}
//                 validationSchema={validationSchema}
//                 onSubmit={(values) => {
//                     // Do something with the values
//                     console.log(values);
//                 }}
//             >
//                 {/* Use Formik props to access form values, errors and handlers */}
//                 {({ handleChange, handleBlur, handleSubmit,  values, errors }) => (
//                     <View>

//                         <Label>Email</Label>
//                         <TextInput mode='outlined'
//                             placeholder="Email"
//                             onChangeText={handleChange('email')}
//                             onBlur={handleBlur('email')}
//                             value={values.email}
//                         />
//                         {errors.email && <ErrorText>{errors.email}</ErrorText>}
//                         <Label>Number</Label>
//                         <TextInput mode='outlined'
//                             placeholder="Number"
//                             onChangeText={handleChange('number')}
//                             onBlur={handleBlur('number')}
//                             value={values.number}
//                             keyboardType={'numeric'}
//                         />
//                         {/* Show error message if any */}
//                         {errors.number && <ErrorText>{errors.number}</ErrorText>}
//                         <Label>Password</Label>
//                         <TextInput mode='outlined'
//                             placeholder="Password"
//                             onChangeText={handleChange('password')}
//                             onBlur={handleBlur('password')}
//                             value={values.password}
//                             secureTextEntry // Hide password input
//                         />
//                         {errors.password && <ErrorText>{errors.password}</ErrorText>}
//                         {/* Use handleSubmit function to submit the form */}
//                         <Button onPress={handleSubmit} >
//                             <ButtonText >Submit</ButtonText>
//                         </Button>
//                     </View>
//                 )}
//             </Formik>
//         </Container>
//     );
// }

// export default CustomSighnUp;


import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { View, Button } from 'react-native';
import { Text, TextInput, } from 'react-native-paper';

const CustomLogIn = () => {
    return (
        <Formik
            initialValues={{ name: '', email: '', phone: '', password: '', confirmPassword: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={Yup.object().shape({
                // name: Yup.string()
                //     .min(2, 'Name must be at least 2 characters')
                //     .required('Name is required'),
                email: Yup.string()
                    .email('Invalid email')
                    .matches(/[@gmail.com]/, 'enter @ ')
                    .required('Email is required'),
                phone: Yup.string()
                    .matches(/^[0-9]{10}$/, 'Phone number is invalid')
                    .required('Phone number is required'),
                password: Yup.string()
                    .min(8, 'Password must be at least 8 characters')
                    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
                    .matches(/[0-9]/, 'Password must contain at least one number')
                    .required('Password is required'),
                // confirmPassword: Yup.string()
                //     .min(8, 'Password must be at least 8 characters')
                //     .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
                //     .matches(/[0-9]/, 'Password must contain at least one number')

                //     .oneOf([Yup.ref('password')], 'Passwords must match')
                //     .required('Confirm Password is required'),

            })}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={{ marginHorizontal: '1%', flex: 1 }}>
                    {/* <TextInput
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        placeholder="Name"
                        mode='outlined'
                        
                    />
                    {errors.name && touched.name && <Text>{errors.name}</Text>} */}
                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder="Email"
                        mode='outlined'
                    />
                    {errors.email && touched.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
                    {/* <TextInput
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        value={values.phone}
                        placeholder="Phone number"
                        mode='outlined'
                        keyboardType='numeric'
                    />
                    {errors.phone && touched.phone && <Text style={{ color: 'red' }}>{errors.phone}</Text>} */}
                    <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder="Password"
                        mode='outlined'
                        secureTextEntry={true}
                    /> 
                    {errors.password && touched.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
                    {/* <TextInput
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        mode='outlined'
                    />
                    {errors.confirmPassword && touched.confirmPassword && <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>} */}
                    <View style={{ marginVertical: '2%', }}>
                        <Button onPress={handleSubmit} title="Log In" color={'red'} />
                    </View>
                    <View style={{ marginVertical: '2%', borderColor: 'red' }}>
                        {/* <Button onPress={handleSubmit} title="Sign Up" color={'black'} /> */}
                    </View>
                </View>
            )}
        </Formik>
    );
};

export default CustomLogIn;
