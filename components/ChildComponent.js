import { View,Text } from "react-native"
import PassengerData from "./PassengerData"

const ChildComponent = () => {
  return (
    <View style = {{flex:1}}>
        <PassengerData heading = "Children's" passenger='Child' child={true} navContinue = "AddPassenger"/>
    </View>
  )
}

export default ChildComponent
