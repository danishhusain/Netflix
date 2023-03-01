// import React from 'react';
// import { View } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import styled from 'styled-components/native';

// // Define some styled components for your form elements
// const Container = styled.View`
//   flex: 1;
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

// function App() {
//     return (
//         <Container>
//             {/* Use Formik component to handle form state and submission */}
//             <Formik
//                 initialValues={{ name: '', email: '', password: '' }}
//                 validationSchema={validationSchema}
//                 onSubmit={(values) => {
//                     // Do something with the values
//                     console.log(values);
//                 }}
//             >
//                 {/* Use Formik props to access form values, errors and handlers */}
//                 {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
//                     <View>
//                         <Label>Name</Label>
//                         <Input
//                             placeholder="Name"
//                             onChangeText={handleChange('name')}
//                             onBlur={handleBlur('name')}
//                             value={values.name}
//                         />
//                         {/* Show error message if any */}
//                         {errors.name && <ErrorText>{errors.name}</ErrorText>}
//                         <Label>Email</Label>
//                         <Input
//                             placeholder="Email"
//                             onChangeText={handleChange('email')}
//                             onBlur={handleBlur('email')}
//                             value={values.email}
//                         />
//                         {errors.email && <ErrorText>{errors.email}</ErrorText>}
//                         <Label>Password</Label>
//                         <Input
//                             placeholder="Password"
//                             onChangeText={handleChange('password')}
//                             onBlur={handleBlur('password')}
//                             value={values.password}
//                             secureTextEntry // Hide password input
//                         />
//                         {errors.password && <ErrorText>{errors.password}</ErrorText>}
//                         {/* Use handleSubmit function to submit the form */}
//                         <Button onPress={handleSubmit}>
//                             <ButtonText>Submit</ButtonText>
//                         </Button>
//                     </View>
//                 )}
//             </Formik>
//         </Container>
//     );
// }

// export default App;

import { View, Text } from 'react-native'
import React from 'react'
import CustomSighnUp from './CustomLogInSignUp/CustomSighnUp'
import { IconButton } from 'react-native-paper'
import CustomLogIn from './CustomLogInSignUp/CustomLogIn'

const LogIn = () => {
    return (
        <View style={{ flex: 1, bottom: '10%', top: '10%' }}>
            {/* 1 */}
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <IconButton icon={'netflix'} size={80} iconColor={'red'} />

            </View>
            {/* 2 */}
            <View style={{ alignSelf: 'center', marginBottom: '5%' }}>
                <Text style={{}}>Start your 30 days free trail</Text>

            </View>
            {/* 3 */}
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <CustomLogIn  />

            </View>
        </View>
    )
}

export default LogIn