import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
`;

export const Logo = styled(Image)`
  width: 150px;
  height: 150px;
  margin-top: 50px;
`;

export const MainButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 15px 30px;
  border-radius: 10px;
  margin-bottom: 0px;
    width: 75%;
  justify-content: center;
 align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const LinkContainer = styled.TouchableOpacity`
  margin-bottom: 20px;
`;

export const LinkText = styled.Text`
  color: #007bff;
  font-size: 14px;
`;

export const Titulo = styled.Text`
  font-size: 24px;
`;

export const QuestionButton = styled.TouchableOpacity`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 0px;
  width: 75%;
  border-radius: 8px;
  justify-content: center;
  align-items: left;
  margin-bottom: 10px;
`;
export const ButtonQuestionText = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
