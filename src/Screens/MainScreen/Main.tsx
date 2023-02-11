import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { Colors } from '../../CustomComponents/CustomColor'
import { Button } from 'react-native-paper'
import { MoviesContext } from '../../ContextAPI/moviesContext'

const Main = () => {
  const { cart, setcart } = useContext(MoviesContext)
  return (
    <View style={{ flex: 1, backgroundColor: Colors.BG }}>
      <Text>MainScreen</Text>

    </View>
  )
}
export default Main

///////////////
// import { View, Text } from 'react-native'
// import React, { useState } from 'react'
// import { Colors } from '../../CustomComponents/CustomColor'
// import { Button } from 'react-native-paper'
// import { useDispatch, useSelector } from 'react-redux'
// import { increment, decrement, incrementByAmount, incrementByMultiply, } from '../../Redux/counterSlice'

// const Main = () => {
//   // const [counter,setCounter]=useState(0)
//   const counter = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()

//   const incremeantCounter = () => {
//     // setCounter((prevCounter)=>prevCounter+1)
//     dispatch(increment())
//   }
//   const decremeantCounter = () => {
//     // setCounter((prevCounter)=>prevCounter-1)
//     dispatch(decrement())

//   }
//   const incrementByMultiplyCounter = () => {
//     // setCounter((prevCounter)=>prevCounter-1)
//     // dispatch(incrementByMultiply())
//     dispatch(incrementByAmount())

//   }

//   return (
//     <View style={{ flex: 1, backgroundColor: Colors.BG }}>
//       <Button onPress={() => incremeantCounter()}>Increament</Button>
//       <Text>MainScreen</Text>
//       <Text>{counter}</Text>
//       <Button onPress={() => decremeantCounter()}>decreament</Button>
//       <Button onPress={() => incrementByMultiplyCounter()}>decreament</Button>


//     </View>
//   )
// }

// export default Main