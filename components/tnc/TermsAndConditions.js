import { Text } from 'react-native'
import { styles } from '../../utils/styles'
import { PrimaryColor } from '../../utils/colors'

export default function TermsAndConditions({ text }) {
    return (
        <Text style={styles.termsCondition}>
            {text}
            <Text style={{ textDecorationLine: 'underline', color: PrimaryColor }}> Terms and Conditions</Text> and
            <Text style={{ textDecorationLine: 'underline', color: PrimaryColor }}> Privacy Policy</Text>
        </Text>
    )
}