import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { View, Button } from 'react-native';
import { Text, TextInput, } from 'react-native-paper';
import { FirebaseContext } from '../Auth/Firebase/FirebaseContext';
import { useNavigation } from '@react-navigation/native';
import LogIn from '../LogIn';

const CustomSighnUp = () => {
    const navigation = useNavigation()
    const { user, setUser, createUserWithEmailAndPasswordFirebase } = useContext(FirebaseContext)


    return (
        <Formik
            initialValues={{ name: '', email: '', phone: '', password: '', confirmPassword: '' }}
            onSubmit={(values) => { createUserWithEmailAndPasswordFirebase(values) }}
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
                confirmPassword: Yup.string()
                    .min(8, 'Password must be at least 8 characters')
                    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
                    .matches(/[0-9]/, 'Password must contain at least one number')

                    .oneOf([Yup.ref('password')], 'Passwords must match')
                    .required('Confirm Password is required'),

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
                    <TextInput
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        value={values.phone}
                        placeholder="Phone number"
                        mode='outlined'
                        keyboardType='numeric'
                    />
                    {errors.phone && touched.phone && <Text style={{ color: 'red' }}>{errors.phone}</Text>}
                    <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder="Password"
                        mode='outlined'
                        secureTextEntry={true}
                    />
                    {errors.password && touched.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
                    <TextInput
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        mode='outlined'
                    />
                    {errors.confirmPassword && touched.confirmPassword && <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>}
                    <View style={{ marginVertical: '2%', }}>
                        <Button onPress={handleSubmit} title="Sign UP" color={'red'} />
                    </View>
                    <View style={{ marginVertical: '2%', borderColor: 'red' }}>
                        <Button onPress={() => navigation.goBack()} title="Log IN" color={'black'} />
                    </View>
                </View>
            )}
        </Formik>
    );
};

export default CustomSighnUp;
