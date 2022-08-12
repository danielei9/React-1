import { React } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import StyledText from './StyledText.jsx';
import RepositoryStats from './RepositoryStats.jsx';

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <StyledText fontWeight='bold'>{props.fullName}</StyledText>
        <StyledText>{props.description}</StyledText>
        <StyledText>{props.forksCount}</StyledText>
        <RepositoryStats {...props} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    strong: {
        color: '#09ff',
        fontWeight: 'bold',
        marginBottom: 5,
    }
});
export default RepositoryItem;