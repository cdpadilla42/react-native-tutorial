import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, Image } from 'react-native';

export default function App() {
  const handlePress = () => console.log('pressed');
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Open up App.js to start working on your app! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Est nobis repudiandae nihil dolore,
        perspiciatis quaerat quasi doloremque voluptatibus sit, laudantium eius
        dignissimos corrupti laboriosam neque corporis magni asperiores deserunt
        non! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
        obcaecati recusandae veniam dolorem, fugit molestiae quis fugiat
        quisquam similique aliquam doloremque voluptates autem. Totam dicta odit
        sed inventore alias recusandae!
      </Text>
      <Image
        source={{
          uri: 'https://picsum.photos/200/300',
          width: 200,
          height: 300,
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
