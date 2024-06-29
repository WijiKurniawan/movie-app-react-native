import * as React from "react";
import { View, Text, Button } from "react-native";

const MovieDetail = ({ navigation }: any) => {
  return (
    <View>
      <Text>Movie Detail Screen</Text>
      <Button title="Go Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default MovieDetail;
