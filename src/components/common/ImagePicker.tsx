import React from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {screen_width} from '@/constants/common';
import tw from '@/utils/tailwind';

type componentPropType = {
  modalVisible: boolean;
  toggleImagePickerPopup: () => void;
  openCamera: () => void;
  openLibrary: () => void;
};

const ImagePickerComponent = ({
  modalVisible,
  toggleImagePickerPopup,
  openLibrary,
  openCamera,
}: componentPropType) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleImagePickerPopup}>
      <View style={styles.centeredView}>
        <Pressable
          onPress={toggleImagePickerPopup}
          style={tw`bg-[rgba(157,157,157,0.70)] h-full w-full absolute -top-1`}
        />
        <View style={[styles.modalView, tw`pb-20 pt-7`]}>
          <Text style={tw`pb-7 text-title-lg font-bold`}>Choose a option</Text>
          <View style={tw`flex-row gap-4 w-full justify-evenly`}>
            <TouchableOpacity
              onPress={openLibrary}
              style={tw`items-center justify-center gap-2`}>
              <Image
                source={require('@/assets/images/image.png')}
                style={tw`h-24 w-26`}
              />
              <Text style={tw`font-bold`}>Select Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={openCamera}
              style={tw`items-center justify-center gap-2`}>
              <Image
                source={require('@/assets/images/camera.png')}
                style={tw`h-24 w-26`}
              />
              <Text style={tw`font-bold`}>Open Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ImagePickerComponent;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'rgba(157,157,157,0.70)'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: screen_width,
    position: 'relative',
  },
});
